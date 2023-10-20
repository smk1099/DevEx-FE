import { Box } from "@mui/material";

import OrderHeader from "../components/OrderHeader";
import BaseBox from "../components/BaseBox";
import { useLocation } from "react-router-dom";

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
      오더결과
    </BaseBox>
  );
};

export default OrderResult;
