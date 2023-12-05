import { useRef, useState } from "react";

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
import dayjs from "dayjs";

const OrderListSecond = ({ sendInfo, setSendInfo, setPageNumber }) => {
  const weightRef = useRef();
  const weightUnitRef = useRef();
  const nameRef = useRef();
  const categoryRef = useRef();
  const startDateRef = useRef();
  const lengthValueRef = useRef();
  const widthValueRef = useRef();
  const heightValueRef = useRef();
  const lengthUnitRef = useRef();
  const dangerRef = useRef();
  const boxCountRef = useRef();

  const [nextOk, setNextOk] = useState(false);

  const checkInput = () => {
    if (nameRef.current.value && weightRef.current.value) {
      setNextOk(true);
    } else {
      setNextOk(false);
    }
  };

  const calcWeight = (unit, weight) => {
    if (unit === "G") {
      return (weight * 0.001).toFixed(4);
    } else {
      return (weight * 0.45359).toFixed(4);
    }
  };

  const handleSendInfo = () => {
    if (weightUnitRef.current.value !== "KG") {
      weightRef.current.value = calcWeight(
        weightUnitRef.current.value,
        weightRef.current.value
      );
      weightUnitRef.current.value = "KG";
    }
    setSendInfo({
      ...sendInfo,
      weight: weightRef.current.value,
      weightUnit: weightUnitRef.current.value,
      name: nameRef.current.value,
      category: categoryRef.current.value,
      startDate: startDateRef.current.value,
      lengthValue: lengthValueRef.current.value,
      widthValue: widthValueRef.current.value,
      heightValue: heightValueRef.current.value,
      lengthUnit: lengthUnitRef.current.value,
      boxCount: boxCountRef.current.value,
      danger: dangerRef.current.value,
    });
    setPageNumber(3);
  };
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
            borderRadius: "5px",
          }}
          props2={{ p: 2, borderRadius: "5px" }}
        >
          <Box display="flex" justifyContent="space-between">
            <Box width="100%">
              <Typography mb={2} fontWeight="700">
                품명
              </Typography>
              <TextField
                onChange={checkInput}
                inputRef={nameRef}
                sx={{ mb: 2 }}
                fullWidth
                label="상세품명 입력"
              ></TextField>
            </Box>
          </Box>

          <Box mb={2} display="flex" justifyContent="space-between">
            <Box>
              <Typography mb={2} fontWeight="700">
                카테고리
              </Typography>
              <FormControl>
                <InputLabel>유형 선택</InputLabel>
                <Select
                  defaultValue="식료품"
                  inputRef={categoryRef}
                  sx={{ width: "150px" }}
                  input={<OutlinedInput label="유형 선택" />}
                >
                  <MenuItem value={"식료품"}>식료품</MenuItem>
                  <MenuItem value={"착"}>책</MenuItem>
                  <MenuItem value={"전자기기"}>전자기기</MenuItem>
                  <MenuItem value={"기타"}>기타</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Box>
              <Typography mb={2} fontWeight="700">
                무게
              </Typography>
              <TextField
                onChange={checkInput}
                inputRef={weightRef}
                sx={{ width: "150px" }}
                label="무게 입력"
              ></TextField>
            </Box>
            <Box>
              <Typography mb={2} fontWeight="700">
                무게 단위
              </Typography>
              <FormControl>
                <InputLabel>유형 선택</InputLabel>
                <Select
                  defaultValue="KG"
                  inputRef={weightUnitRef}
                  sx={{ width: "150px" }}
                  input={<OutlinedInput label="단위 선택" />}
                >
                  <MenuItem value={"KG"}>Kg</MenuItem>
                  <MenuItem value={"G"}>g</MenuItem>
                  <MenuItem value={"LB"}>lb</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Box>
          <Typography color="primary" fontSize="10px">
            부피
          </Typography>
          <Box mb={2} display="flex" justifyContent="space-between">
            <Box>
              <Typography mb={2} fontWeight="700">
                가로
              </Typography>
              <TextField
                inputRef={lengthValueRef}
                onChange={checkInput}
                sx={{ width: "150px" }}
                label="길이 입력"
              ></TextField>
            </Box>
            <Box>
              <Typography mb={2} fontWeight="700">
                세로
              </Typography>
              <TextField
                inputRef={widthValueRef}
                onChange={checkInput}
                sx={{ width: "150px" }}
                label="길이 입력"
              ></TextField>
            </Box>
            <Box>
              <Typography mb={2} fontWeight="700">
                높이
              </Typography>
              <TextField
                inputRef={heightValueRef}
                onChange={checkInput}
                sx={{ width: "150px" }}
                label="길이 입력"
              ></TextField>
            </Box>
            <Box>
              <Typography mb={2} fontWeight="700">
                길이 단위
              </Typography>
              <FormControl>
                <InputLabel>유형 선택</InputLabel>
                <Select
                  inputRef={lengthUnitRef}
                  defaultValue="CM"
                  sx={{ width: "150px" }}
                  input={<OutlinedInput label="단위 선택" />}
                >
                  <MenuItem value={"CM"}>CM</MenuItem>
                  <MenuItem value={"M"}>M</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Box>
          <Box mb={2} display="flex" width="100%">
            <Box>
              <Typography mb={2} fontWeight="700">
                위험물 여부
              </Typography>
              <FormControl>
                <InputLabel>여부 선택</InputLabel>
                <Select
                  inputRef={dangerRef}
                  defaultValue={false}
                  sx={{ width: "150px" }}
                  input={<OutlinedInput label="여부 선택" />}
                >
                  <MenuItem value={false}>X</MenuItem>
                  <MenuItem value={true}>O</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Box flexGrow={1} ml={3}>
              <Typography mb={2} fontWeight="700">
                박스 수량
              </Typography>
              <TextField
                inputRef={boxCountRef}
                onChange={checkInput}
                fullWidth
                label="수량 입력"
              ></TextField>
            </Box>
          </Box>
        </DoubleBox>
        {/*1번 선택 끝*/}
        {/*2번 선택*/}
        <Typography mb={4} variant="h6" fontWeight="700">
          2. 예상 발송일 입력
        </Typography>
        <Box ml={4}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              defaultValue={dayjs(new Date())}
              inputRef={startDateRef}
              label="예상 발송일 선택"
            />
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
          disabled={nextOk ? "false" : "true"}
          value="결과 조회"
          onClick={handleSendInfo}
          sx={{ width: "100px", height: "50px" }}
        />
      </Box>
    </BaseBox>
  );
};

export default OrderListSecond;
