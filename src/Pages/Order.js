import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { Box } from "@mui/material";

import OrderHeader from "../components/OrderHeader";
import OrderListFirst from "../components/OrderListFirst";
import OrderListSecond from "../components/OrderListSecond";
import BaseBox from "../components/BaseBox";
import dayjs from "dayjs";

const Order = () => {
  //pageNumber라는 state를 통해 렌더링되는 컴포넌트를 다르게 한다.
  //pageNumber가 3이 되면 서버로 전송할 데이터를 결과 페이지로 이동시킨다.
  //그 다음, 결과 페이지에서 서버로부터 데이터를 요청한다.
  //전송받은 데이터를 정리해 결과페이지에서 사용자에게 보여준다.
  const location = useLocation();

  const [sendInfo, setSendInfo] = useState(
    location.state
      ? { ...location.state.requestInfo, startDate: dayjs(new Date()) }
      : {
          shipperCountryCode: "KR",
          shipperPostalCode: "",
          recipientCountryCode: "CH",
          recipientPostalCode: "",
          weight: "",
          weightUnit: "KG",
          name: "",
          category: "식료품",
          startDate: dayjs(new Date()),
          lengthValue: "",
          widthValue: "",
          heightValue: "",
          lengthUnit: "CM",
          boxCount: "",
          danger: false,
        }
  );

  // useEffect(() => {
  //   if (location.state) {
  //     const requestInfo = location.state.requestInfo;
  //     setSendInfo((prevInfo) => ({
  //       ...prevInfo, // 현재 상태의 나머지 속성들을 복사합니다.
  //       ...requestInfo, // location.state로부터 받은 requestInfo를 사용하여 상태를 업데이트합니다.
  //     }));
  //   }
  // }, []);

  console.log(sendInfo);

  const [pageNumber, setPageNumber] = useState(1);

  const navigate = useNavigate();

  const moveResultPage = () => {
    navigate("/orderresult", {
      replace: true,
      state: {
        sendInfo, // 정리된 모든 입력 값(state들)이 포함될 예정
      },
    });
  };

  useEffect(() => {
    if (pageNumber === 3) {
      moveResultPage();
    }
    // 의존성 배열에 pageNumber를 넣어 pageNumber가 변경될 때만 이펙트가 실행되도록 한다.
  }, [pageNumber]);
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
      {pageNumber === 1 && (
        <OrderListFirst
          sendInfo={sendInfo}
          setSendInfo={setSendInfo}
          setPageNumber={setPageNumber}
        />
      )}
      {pageNumber === 2 && (
        <OrderListSecond
          sendInfo={sendInfo}
          setSendInfo={setSendInfo}
          setPageNumber={setPageNumber}
        />
      )}
    </BaseBox>
  );
};

export default Order;
