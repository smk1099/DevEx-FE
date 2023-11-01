import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Box } from "@mui/material";

import OrderHeader from "../components/OrderHeader";
import OrderListFirst from "../components/OrderListFirst";
import OrderListSecond from "../components/OrderListSecond";
import BaseBox from "../components/BaseBox";

const Order = () => {
  //pageNumber라는 state를 통해 렌더링되는 컴포넌트를 다르게 한다.
  //pageNumber가 3이 되면 서버로 전송할 데이터를 결과 페이지로 이동시킨다.
  //그 다음, 결과 페이지에서 서버로부터 데이터를 요청한다.
  //전송받은 데이터를 정리해 결과페이지에서 사용자에게 보여준다.
  const obj = { name: "n", age: 33, time: 70 };

  const [pageNumber, setPageNumber] = useState(1);

  const navigate = useNavigate();
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
        <OrderHeader pageNumber={pageNumber} />
      </Box>
      {pageNumber === 1 && <OrderListFirst setPageNumber={setPageNumber} />}
      {pageNumber === 2 && <OrderListSecond setPageNumber={setPageNumber} />}
      {pageNumber === 3 &&
        navigate("/orderresult", {
          replace: true,
          state: {
            //정리된 모든 입력 값(state들)이 포함될 예정
            obj,
          },
        })}
    </BaseBox>
  );
};

export default Order;
