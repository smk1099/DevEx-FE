import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
} from "@mui/material";

import OrderHeader from "../components/OrderHeader";
import BaseBox from "../components/BaseBox";
import { useLocation } from "react-router-dom";
import DoubleBox from "../components/DoubleBox";

const OrderResult = () => {
  //전달받은 데이터를 서버로부터 전송해 결과를 얻는다.
  //그 결과를 바탕으로 페이지를 구성한다.
  const location = useLocation();
  console.log(location);
  return (
    <BaseBox>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        width="100%"
        bgcolor="primary.main"
        pb={3}
        sx={{
          boxSizing: "border-box",
        }}
      >
        <OrderHeader pageNumber={3} />
      </Box>
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
        오더결과
        <FormControl>
          <Select
            sx={{
              width: "150px",
            }}
            input={<OutlinedInput />}
          >
            <MenuItem value={1}>한국</MenuItem>
            <MenuItem value={2}>유형2</MenuItem>
            <MenuItem value={3}>유형3</MenuItem>
          </Select>
        </FormControl>
      </DoubleBox>
    </BaseBox>
  );
};

export default OrderResult;
