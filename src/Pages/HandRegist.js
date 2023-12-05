import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import BaseBox from "../components/BaseBox";
import DoubleBox from "../components/DoubleBox";
import MyButton from "../components/MyButton";

import { useState, useRef } from "react";
import axios from "axios";
import CountryCodeArray from "../util/CountryCodeArray";
import { useNavigate } from "react-router-dom";

const HandRegist = () => {
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const [registInfo, setRegistInfo] = useState({
    startPoint: "",
    endPoint: "",
    unitCosts: 0,
    maxWeight: 0,
    corporation: userInfo.corporation["corpName"],
    expectedDate: 0,
    bannedItemList: [],
  });

  const formData = new FormData();

  const startPointRef = useRef();
  const endPointRef = useRef();
  const unitCoststRef = useRef();
  const maxWeightRef = useRef();
  const expectedDateRef = useRef();
  const bannedItemListRef = useRef();
  const navigate = useNavigate();
  const handleUpdateInfo = () => {
    setRegistInfo({
      ...registInfo,
      startPoint: startPointRef.current.value,
      endPoint: endPointRef.current.value,
      unitCosts: parseInt(unitCoststRef.current.value),
      maxWeight: parseInt(maxWeightRef.current.value),
      expectedDate: parseInt(expectedDateRef.current.value),
      // bannedItemList: bannedItemListRef.current.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // form의 기본 제출 동작을 방지합니다.
    formData.append("file", null);
    formData.append(
      "handcarryRequestDto",
      new Blob([JSON.stringify(registInfo)], { type: "application/json" })
    );
    try {
      const response = await axios.post("/api/Handcarry", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${localStorage.getItem("loginToken")}`,
        },
      });
      alert("핸드캐리 등록 성공.");
      console.log("Server Response:", response.data);
      navigate("/");
      // 여기서 필요한 로직(예: 토큰 저장, 리다이렉트 등)을 추가할 수 있습니다.
    } catch (error) {
      console.error("Login error:", error);
      // 로그인 실패 메시지를 사용자에게 보여줄 수 있습니다.
    }
  };

  return (
    <BaseBox>
      <Box component="form" onSubmit={handleSubmit}>
        <Box mt={3} display="flex" flexDirection="column" alignItems="center">
          <Typography variant="h5" fontWeight="700" color="primary">
            기업 정보
          </Typography>
          <Box display="flex" ml={2}>
            <Box my={5} mr={10} display="flex" alignItems="center">
              {localStorage.getItem("userInfo") ? (
                <Box
                  component="img"
                  src={userInfo.corporation["profileImageUrl"]}
                  sx={{ width: "100px", height: "100px" }}
                ></Box>
              ) : (
                <Box
                  sx={{
                    width: "100px",
                    height: "100px",
                    border: "1px solid black",
                  }}
                ></Box>
              )}
            </Box>
            <Box
              ml={4}
              display="flex"
              flexDirection="column"
              justifyContent="center"
              flexGrow={1}
            >
              <Typography my={1} variant="h6" fontWeight="700">
                업체명 : {userInfo.corporation["corpName"]}
              </Typography>
              <Typography my={1} variant="h6" fontWeight="700">
                이메일 : {userInfo.corporation["email"]}
              </Typography>
              <Typography my={1} variant="h6" fontWeight="700">
                Tell : {userInfo.corporation["tell"]}
              </Typography>
            </Box>
          </Box>
        </Box>
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
                출발 국가
              </Typography>
              <FormControl>
                <Select
                  inputRef={startPointRef}
                  defaultValue="KR"
                  sx={{ width: "200px" }}
                >
                  {CountryCodeArray.map((entity, index) => (
                    <MenuItem key={index} value={entity["CountryCode"]}>
                      {entity["이름"]}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
            <Box mx={4} width="200px">
              <Typography mb={2} fontWeight="700">
                도착 국가
              </Typography>
              <FormControl>
                <Select
                  inputRef={endPointRef}
                  defaultValue="CH"
                  sx={{ width: "200px" }}
                >
                  {CountryCodeArray.map((entity, index) => (
                    <MenuItem key={index} value={entity["CountryCode"]}>
                      {entity["이름"]}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
          </Box>
          <Box my={4} display="flex" height="100px">
            <Box mx={4} width="200px">
              <Typography mb={2} fontWeight="700">
                최대 중량
              </Typography>
              <TextField
                inputRef={maxWeightRef}
                sx={{ mb: 2 }}
                fullWidth
                label="Kg"
              ></TextField>
            </Box>
            <Box mx={4} width="200px">
              <Typography mb={2} fontWeight="700">
                비용
              </Typography>
              <TextField
                inputRef={unitCoststRef}
                sx={{ mb: 2 }}
                fullWidth
                label="Kg당 ()원"
              ></TextField>
            </Box>
            <Box mx={4} width="200px">
              <Typography mb={2} fontWeight="700">
                예상 소요시간
              </Typography>
              <TextField
                inputRef={expectedDateRef}
                sx={{ mb: 2 }}
                fullWidth
                label="()일"
              ></TextField>
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
            onClick={handleUpdateInfo}
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
