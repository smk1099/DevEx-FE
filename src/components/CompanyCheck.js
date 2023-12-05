import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import MyButton from "./MyButton";
import { useNavigate } from "react-router-dom";
import { useState, useRef } from "react";
import axios from "axios";
const CompanyCheck = ({ setCorporation, setIsCheck }) => {
  const navigate = useNavigate();
  const [corpAuthNumber, setCorAuthNumber] = useState("");
  const inputRef = useRef(null);
  const handleChange = (e) => {
    setCorAuthNumber(e.target.value);
  };

  const checkLength = () => {
    return corpAuthNumber.length === 10;
  };

  const checkNumber = (input) => {
    const regex = /^[0-9]+$/;
    return regex.test(input);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (checkNumber(corpAuthNumber)) {
      try {
        const response = await axios.get(
          `/api/corporation/${parseInt(corpAuthNumber)}`
        );
        console.log("Server Response:", response.data);
        setCorporation(response.data["corpName"]);
        setIsCheck(1);
        //회사 이름 얻어오기
        //setIsCheck()와 setCorporation() 호출
        // 여기서 필요한 로직(예: 토큰 저장, 리다이렉트 등)을 추가할 수 있습니다.
      } catch (error) {
        console.log(error);
        // 로그인 실패 메시지를 사용자에게 보여줄 수 있습니다.
      }
    } else {
      alert("숫자만 입력하세요");
      inputRef.current.focus();
      setCorAuthNumber("");
    }
  };
  return (
    <Box
      component="form"
      display="flex"
      flexDirection="column"
      alignItems="center"
      mt={5}
      onSubmit={handleSubmit}
    >
      <Typography variant="h5" fontWeight="700" color="primary">
        소속 회사 등록 인증
      </Typography>
      <Grid container justifyContent="center" alignItems="center" mt={5}>
        <Grid item mx={3}>
          <Typography fontWeight="700">회사 사업자 번호</Typography>
        </Grid>
        <Grid item>
          <TextField
            fullWidth
            label="10자리 입력"
            margin="normal"
            id="corpAuthNumber"
            value={corpAuthNumber}
            onChange={handleChange}
            inputRef={inputRef}
            autoFocus
          />
        </Grid>
      </Grid>
      <Grid container width="300px" my={5} justifyContent="space-between">
        <MyButton
          job="negative"
          value="뒤로 가기"
          onClick={() => {
            navigate(-1);
          }}
          sx={{ width: "100px", height: "50px" }}
        />
        <MyButton
          job={checkLength() ? "positive" : "negative"}
          disabled={checkLength() ? "false" : "true"}
          type="submit"
          value="인증하기"
          sx={{ width: "100px", height: "50px" }}
        />
      </Grid>
      <Box display="flex" width="400px" my={2} justifyContent="space-between">
        <Box flexGrow={1}></Box>
        <Box
          component={Button}
          onClick={() => {
            navigate("/companysignup");
          }}
        >
          <Typography color="gray" fontSize="15px">
            만약 회사가 등록되어 있지 않다면?
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default CompanyCheck;
