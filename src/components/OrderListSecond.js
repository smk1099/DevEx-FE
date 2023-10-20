import {
  Box,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Radio,
  RadioGroup,
  Select,
  TextField,
  Typography,
} from "@mui/material";

import MyButton from "./MyButton";
import BaseBox from "./BaseBox";
import DoubleBox from "./DoubleBox";

const OrderListSecond = ({ setPageNumber }) => {
  //입력받는 변수들 이름 설정 필요, state를 통한 입력 정보 저장 예정
  return (
    <BaseBox>
      <Box mt={5} width="900px">
        {/*1번 선택*/}
        <Typography mb={2} variant="h6" fontWeight="700">
          1. 운송타입 선택
        </Typography>
        <FormControl sx={{ mb: 2 }}>
          <RadioGroup row defaultValue="FCL" name="radio-buttons-group">
            <FormControlLabel
              sx={{ mx: 2 }}
              value="FCL"
              control={<Radio />}
              label="FCL"
            />
            <FormControlLabel
              sx={{ mx: 12 }}
              value="LCL"
              control={<Radio />}
              label="LCL"
            />
          </RadioGroup>
        </FormControl>
        {/*2번 선택*/}
        <Typography variant="h6" fontWeight="700">
          2. 화물정보 입력
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
          props2={{ p: 2, height: "400px" }}
        >
          <Typography mb={2} fontWeight="700">
            품명
          </Typography>
          <TextField sx={{ mb: 2 }} fullWidth label="상세품명 입력"></TextField>
          <Box mb={2} display="flex" justifyContent="space-between">
            <Box>
              <Typography mb={2} fontWeight="700">
                컨테이너 유형
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
                컨테이너 사이즈
              </Typography>
              <FormControl>
                <InputLabel>사이즈 선택</InputLabel>
                <Select
                  sx={{ width: "150px" }}
                  input={<OutlinedInput label="사이즈 선택" />}
                >
                  <MenuItem value={1}>1</MenuItem>
                  <MenuItem value={2}>2</MenuItem>
                  <MenuItem value={3}>3</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Box>
              <Typography mb={2} fontWeight="700">
                컨테이너 개수
              </Typography>
              <TextField sx={{ width: "150px" }} label="개수 입력"></TextField>
            </Box>
          </Box>
          <Typography mb={2} fontWeight="700">
            위험물
          </Typography>
          <TextField sx={{ mb: 2 }} fullWidth label="예/아니오"></TextField>
        </DoubleBox>
        {/*2번 선택 끝*/}
        {/*3번 선택*/}
        <Typography variant="h6" fontWeight="700">
          3. 배송옵션 입력
        </Typography>
        <DoubleBox
          props1={{
            mx: "50px",
            my: "30px",
            py: "15px",
            px: "30px",
            width: "700px",
          }}
          props2={{ p: 2 }}
        >
          <Typography mb={2} fontWeight="700">
            적하보험 가입
          </Typography>
          <TextField sx={{ mb: 2 }} fullWidth label="예/아니오"></TextField>
          <Typography mb={2} fontWeight="700">
            FTA 원산지 증명서 대행발급
          </Typography>
          <TextField sx={{ mb: 2 }} fullWidth label="예/아니오"></TextField>
          <Typography mb={2} fontWeight="700">
            추가사항
          </Typography>
          <Box display="flex" alignItems="center">
            <Box display="flex" width="150px" justifyContent="center">
              <Typography fontWeight="700">LSS</Typography>
            </Box>
            <FormControl>
              <RadioGroup row defaultValue="y" name="radio-buttons-group">
                <FormControlLabel
                  sx={{ mx: 4 }}
                  value="y"
                  control={<Radio />}
                  label="포함"
                />
                <FormControlLabel
                  value="n"
                  control={<Radio />}
                  label="미포함"
                />
              </RadioGroup>
            </FormControl>
          </Box>
          <Box display="flex" alignItems="center">
            <Box display="flex" width="150px" justifyContent="center">
              <Typography fontWeight="700">국내부대비용</Typography>
            </Box>
            <FormControl>
              <RadioGroup row defaultValue="y" name="radio-buttons-group">
                <FormControlLabel
                  sx={{ mx: 4 }}
                  value="y"
                  control={<Radio />}
                  label="포함"
                />
                <FormControlLabel
                  value="n"
                  control={<Radio />}
                  label="미포함"
                />
              </RadioGroup>
            </FormControl>
          </Box>
          <Box display="flex" alignItems="center">
            <Box display="flex" width="150px" justifyContent="center">
              <Typography fontWeight="700">창고보관료</Typography>
            </Box>
            <FormControl>
              <RadioGroup row defaultValue="y" name="radio-buttons-group">
                <FormControlLabel
                  sx={{ mx: 4 }}
                  value="y"
                  control={<Radio />}
                  label="포함"
                />
                <FormControlLabel
                  value="n"
                  control={<Radio />}
                  label="미포함"
                />
              </RadioGroup>
            </FormControl>
          </Box>
          <Box display="flex" alignItems="center">
            <Box display="flex" width="150px" justifyContent="center">
              <Typography fontWeight="700">운송 방식</Typography>
            </Box>
            <FormControl>
              <RadioGroup row defaultValue="y" name="radio-buttons-group">
                <FormControlLabel
                  sx={{ mx: 4 }}
                  value="y"
                  control={<Radio />}
                  label="독차"
                />
                <FormControlLabel
                  value="n"
                  control={<Radio />}
                  label="화물택배"
                />
              </RadioGroup>
            </FormControl>
          </Box>
        </DoubleBox>
      </Box>
      {/*3번 선택 끝*/}
      {/*버튼*/}
      <Box width="300px" my={5} display="flex" justifyContent="space-between">
        <MyButton
          type="negative"
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
