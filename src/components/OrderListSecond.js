import { useState } from "react";

import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  TextField,
  Typography,
} from "@mui/material";

import MyButton from "./MyButton";
import BaseBox from "./BaseBox";
import DoubleBox from "./DoubleBox";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";

const OrderListSecond = ({ setPageNumber }) => {
  //입력받는 변수들 이름 설정 필요, state를 통한 입력 정보 저장 예정

  const [selectedDate, setSelectedDate] = useState(null);
  return (
    <BaseBox>
      <Box mt={5} width="900px">
        <Typography variant="h6" fontWeight="700">
          1. 화물정보 입력
        </Typography>
        {/*DoubleBox는 회색, 흰색으로 이루어진 박스를 만들기 위해 선언한 임의 컴포넌트*/}
        <DoubleBox
          props1={{
            mx: "50px",
            my: "30px",
            py: "15px",
            px: "30px",
            width: "700px",
          }}
          props2={{ p: 2, height: "500px" }}
        >
          <Typography mb={2} fontWeight="700">
            품명
          </Typography>
          <TextField sx={{ mb: 2 }} fullWidth label="상세품명 입력"></TextField>
          <Box mb={2} display="flex" justifyContent="space-between">
            <Box>
              <Typography mb={2} fontWeight="700">
                카테고리
              </Typography>
              <FormControl>
                <InputLabel>유형 선택</InputLabel>
                <Select
                  sx={{ width: "150px" }}
                  input={<OutlinedInput label="유형 선택" />}
                >
                  <MenuItem value={1}>유형1</MenuItem>
                  <MenuItem value={2}>유형2</MenuItem>
                  <MenuItem value={3}>유형3</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Box>
              <Typography mb={2} fontWeight="700">
                무게
              </Typography>
              <TextField sx={{ width: "150px" }} label="무게 입력"></TextField>
            </Box>
            <Box>
              <Typography mb={2} fontWeight="700">
                무게 단위
              </Typography>
              <FormControl>
                <InputLabel>유형 선택</InputLabel>
                <Select
                  sx={{ width: "150px" }}
                  input={<OutlinedInput label="단위 선택" />}
                >
                  <MenuItem value={1}>Kg</MenuItem>
                  <MenuItem value={2}>유형2</MenuItem>
                  <MenuItem value={3}>유형3</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Box>
          <Box mt={5} mb={2} display="flex" justifyContent="space-between">
            <Box>
              <Typography mb={2} fontWeight="700">
                길이
              </Typography>
              <TextField
                sx={{ width: "150px" }}
                label="포장 포함 길이"
              ></TextField>
            </Box>
            <Box>
              <Typography mb={2} fontWeight="700">
                너비
              </Typography>
              <TextField
                sx={{ width: "150px" }}
                label="포장 포함 너비"
              ></TextField>
            </Box>
            <Box>
              <Typography mb={2} fontWeight="700">
                높이
              </Typography>
              <TextField
                sx={{ width: "150px" }}
                label="포장 포함 높이"
              ></TextField>
            </Box>
          </Box>
          <Box>
            <Typography mb={2} fontWeight="700">
              길이 측정 단위
            </Typography>
            <FormControl>
              <InputLabel>단위 선택</InputLabel>
              <Select
                sx={{ width: "150px" }}
                input={<OutlinedInput label="단위 선택" />}
              >
                <MenuItem value={1}>cm</MenuItem>
                <MenuItem value={2}>유형2</MenuItem>
                <MenuItem value={3}>유형3</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </DoubleBox>
        {/*1번 선택 끝*/}
        {/*2번 선택*/}
        <Typography mb={4} variant="h6" fontWeight="700">
          2. 예상 발송일 입력
        </Typography>
        <Box ml={4}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker label="예상 발송일 선택" />
          </LocalizationProvider>
        </Box>
      </Box>
      {/*2번 선택 끝*/}
      {/*버튼*/}
      <Box width="300px" my={5} display="flex" justifyContent="space-between">
        <MyButton
          job="negative"
          value="뒤로 가기"
          onClick={() => {
            setPageNumber(1);
          }}
          sx={{ width: "100px", height: "50px" }}
        />
        <MyButton
          value="결과 조회"
          onClick={() => {
            setPageNumber(3);
          }}
          sx={{ width: "100px", height: "50px" }}
        />
      </Box>
    </BaseBox>
  );
};

export default OrderListSecond;
