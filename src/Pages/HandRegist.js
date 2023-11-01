import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  TextField,
  Typography,
} from "@mui/material";
import BaseBox from "../components/BaseBox";
import DoubleBox from "../components/DoubleBox";
import MyButton from "../components/MyButton";

import { useState } from "react";
import axios from "axios";

const HandRegist = () => {
  const [signupInfo, setSignupInfo] = useState({
    name: "",
    corporation: "",
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { id, value } = e.target;
    setSignupInfo((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // form의 기본 제출 동작을 방지합니다.
    try {
      const response = await axios.post("YOUR_LOGIN_SERVER_URL", {
        name: signupInfo.name,
        corporation: signupInfo.corporation,
        email: signupInfo.email,
        password: signupInfo.password,
      });
      console.log("Server Response:", response.data);

      // 여기서 필요한 로직(예: 토큰 저장, 리다이렉트 등)을 추가할 수 있습니다.
    } catch (error) {
      console.error("Login error:", error);
      // 로그인 실패 메시지를 사용자에게 보여줄 수 있습니다.
    }
  };

  return (
    <BaseBox component="form" onSubmit={handleSubmit}>
      <Box>
        <DoubleBox
          props1={{
            mx: "50px",
            my: "30px",
            p: "15px",
            width: "900px",
            borderRadius: "2%",
          }}
          props2={{ p: 2, borderRadius: "2%" }}
        >
          <Box my={4} display="flex" height="100px">
            <Box mx={4} width="200px">
              <Typography mb={2} fontWeight="700">
                이름
              </Typography>
              <TextField sx={{ mb: 2 }} fullWidth label="이름 입력"></TextField>
            </Box>
            <Box mx={4} width="200px">
              <Typography mb={2} fontWeight="700">
                출발 국가
              </Typography>
              <TextField
                sx={{ mb: 2 }}
                fullWidth
                label="출발국가명 입력"
              ></TextField>
            </Box>
            <Box mx={4} width="200px">
              <Typography mb={2} fontWeight="700">
                도착 국가
              </Typography>
              <TextField
                sx={{ mb: 2 }}
                fullWidth
                label="도착국가명 입력"
              ></TextField>
            </Box>
          </Box>
          <Box my={4} display="flex" height="100px">
            <Box mx={4} width="200px">
              <Typography mb={2} fontWeight="700">
                최대 중량
              </Typography>
              <TextField sx={{ mb: 2 }} fullWidth label="Kg"></TextField>
            </Box>
            <Box mx={4} width="200px">
              <Typography mb={2} fontWeight="700">
                최소 비용
              </Typography>
              <TextField sx={{ mb: 2 }} fullWidth label="Kg당 ()원"></TextField>
            </Box>
            <Box mx={4} width="200px">
              <Typography mb={2} fontWeight="700">
                최대 비용
              </Typography>
              <TextField sx={{ mb: 2 }} fullWidth label="Kg당 ()원"></TextField>
            </Box>
          </Box>
          <Box my={4} display="flex" height="100px">
            <Box mx={4}>
              <Typography mb={2} fontWeight="700">
                금지 품목
              </Typography>
              <FormGroup row>
                <FormControlLabel
                  control={<Checkbox name="option1" />}
                  label="책"
                />
                <FormControlLabel
                  control={<Checkbox name="option2" />}
                  label="식료품"
                />
                <FormControlLabel
                  control={<Checkbox name="option3" />}
                  label="장신구"
                />
                <FormControlLabel
                  control={<Checkbox name="option3" />}
                  label="스마트폰"
                />
              </FormGroup>
            </Box>
          </Box>
          <Box my={4} display="flex" height="100px">
            <Box mx={4} width="200px">
              <Typography mb={2} fontWeight="700">
                예상 소요시간
              </Typography>
              <TextField sx={{ mb: 2 }} fullWidth label="()일"></TextField>
            </Box>
            <Box mx={4} width="500px">
              <Typography mb={2} fontWeight="700">
                특이사항
              </Typography>
              <TextField sx={{ mb: 2 }} fullWidth></TextField>
            </Box>
          </Box>
        </DoubleBox>
        <Box display="flex" justifyContent="center">
          <MyButton
            type="submit"
            value="등록"
            sx={{
              width: "100px",
              height: "60px",
              fontSize: "18px",
              fontWeight: "700",
            }}
          />
        </Box>
      </Box>
    </BaseBox>
  );
};

export default HandRegist;
