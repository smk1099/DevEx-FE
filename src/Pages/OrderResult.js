import { Box, Grid, Typography } from "@mui/material";

import OrderHeader from "../components/OrderHeader";
import BaseBox from "../components/BaseBox";
import { useLocation } from "react-router-dom";
import DoubleBox from "../components/DoubleBox";
import OrderListResult from "../components/OrderListResult";
import { useEffect, useState } from "react";
import OrderResultInfo from "../components/OrderResultInfo";
import axios from "axios";
import Loading from "../components/Loading";
import OrderRequestInfo from "../components/OrderRequestInfo";

const OrderResult = () => {
  //전달받은 데이터를 서버로부터 전송해 결과를 얻는다.
  //그 결과를 바탕으로 페이지를 구성한다.

  let dummyData = [
    {
      name: "fedex",
      id: 1,
      price: 50000,
      arrivalDate: "2023-11-10",
      corporationEmail: "fedex@email.com",
      corporationTell: "02-xxxx-xxxx",
    },
    {
      name: "handcarry1",
      id: 2,
      price: 60000,
      arrivalDate: "2023-11-08",
      corporationEmail: "hand1@email.com",
      corporationTell: "02-xxxx-xxxx",
    },
    {
      name: "handcarry2",
      id: 3,
      price: 80000,
      arrivalDate: "2023-11-07",
      corporationEmail: "hand2@email.com",
      corporationTell: "02-xxxx-xxxx",
    },
    {
      name: "handcarry3",
      id: 4,
      price: 90000,
      arrivalDate: "2023-11-12",
      corporationEmail: "hand3@email.com",
      corporationTell: "02-xxxx-xxxx",
    },
    {
      name: "handcarry4",
      id: 5,
      price: 100000,
      arrivalDate: "2023-11-15",
      corporationEmail: "hand4@email.com",
      corporationTell: "02-xxxx-xxxx",
    },
  ];

  const BestList = [
    {
      name: "handcarry1",
      id: 2,
      price: 60000,
      arrivalDate: "2023-11-08",
    },
    {
      name: "fedex",
      id: 1,
      price: 50000,
      arrivalDate: "2023-11-10",
    },
    {
      name: "handcarry2",
      id: 3,
      price: 80000,
      arrivalDate: "2023-11-07",
    },
    {
      name: "handcarry3",
      id: 4,
      price: 90000,
      arrivalDate: "2023-11-12",
    },
    {
      name: "handcarry4",
      id: 5,
      price: 100000,
      arrivalDate: "2023-11-15",
    },
  ];

  const CheapestList = [
    {
      name: "fedex",
      id: 1,
      price: 50000,
      arrivalDate: "2023-11-10",
    },
    {
      name: "handcarry1",
      id: 2,
      price: 60000,
      arrivalDate: "2023-11-08",
    },
    {
      name: "handcarry2",
      id: 3,
      price: 80000,
      arrivalDate: "2023-11-07",
    },
    {
      name: "handcarry3",
      id: 4,
      price: 90000,
      arrivalDate: "2023-11-12",
    },
    {
      name: "handcarry4",
      id: 5,
      price: 100000,
      arrivalDate: "2023-11-15",
    },
  ];

  const FastestList = [
    {
      name: "handcarry2",
      id: 3,
      price: 80000,
      arrivalDate: "2023-11-07",
    },
    {
      name: "handcarry1",
      id: 2,
      price: 60000,
      arrivalDate: "2023-11-08",
    },
    {
      name: "fedex",
      id: 1,
      price: 50000,
      arrivalDate: "2023-11-10",
    },

    {
      name: "handcarry3",
      id: 4,
      price: 90000,
      arrivalDate: "2023-11-12",
    },
    {
      name: "handcarry4",
      id: 5,
      price: 100000,
      arrivalDate: "2023-11-15",
    },
  ];

  const firstOrderData = [
    //각 정렬 조건에 맞는 첫번째 배송 견적 내용
    {
      type: "Best",
      data: BestList[0],
    },
    {
      type: "Cheapest",
      data: CheapestList[0],
    },
    {
      type: "Fastest",
      data: FastestList[0],
    },
  ];

  const [selectSorted, setSelectSorted] = useState("Best");
  //선택된 정렬 기준(Best,Cheapest, Fastest)

  const [selectResultId, setSelectResultId] = useState(-1);
  //선택된 배송 견적의 회사, 상세 가격 정보 및 컨설팅 안내를 위한 state
  //OrderListResult에서 견적의 id로 접근할 예정
  const [resultList, setResultList] = useState(dummyData);

  const [isLoding, setIsLoding] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    setSelectResultId(-1);
    if (selectSorted === "Best") {
      setResultList(BestList);
    } else if (selectSorted === "Cheapest") {
      setResultList(CheapestList);
    } else {
      setResultList(FastestList);
    }
  }, [selectSorted, setSelectResultId]);

  const location = useLocation();
  const requestInfo = location.state.sendInfo;
  const { startDate, ...newData } = requestInfo;

  newData.weight = parseInt(newData.weight);
  newData.lengthValue = parseInt(newData.lengthValue);
  newData.widthValue = parseInt(newData.widthValue);
  newData.heightValue = parseInt(newData.heightValue);
  newData.boxCount = parseInt(newData.boxCount);

  useEffect(() => {
    async function getInfo() {
      try {
        const response = await axios.post("/api/search", newData, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("loginToken")}`,
          },
        });
        console.log(response.data);
        setData(response.data);
        setIsLoding(false);

        // 여기서 필요한 로직(예: 토큰 저장, 리다이렉트 등)을 추가할 수 있습니다.
      } catch (error) {
        console.error("error:", error);
        // 로그인 실패 메시지를 사용자에게 보여줄 수 있습니다.
      }
    }
    getInfo();
  }, [requestInfo]);

  if (isLoding) {
    return <Loading />;
  }

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
      <OrderRequestInfo requestInfo={requestInfo} newData={newData} />
      <Box display="flex" width="100%">
        <Box
          //section1
          width="300px"
        ></Box>
        <Box
          //section2
          display="flex"
          flexDirection="column"
          alignItems="center"
          width="600px"
        >
          <Grid
            container
            //정렬 기준 section
            hegiht="150px"
            ml={3}
          >
            {firstOrderData.map((entry) => (
              <Box
                key={entry.data.id}
                mt={3}
                mb={5}
                sx={{
                  width: "175px",
                  borderRight: "1px solid grey",
                }}
              >
                <Box
                  pl={2}
                  bgcolor={selectSorted === entry.type ? "primary.main" : ""}
                  sx={{
                    borderRadius: "4px",
                    cursor: "pointer", // 마우스 오버 시 포인터 모양으로 변경
                    transition: "0.2s", // 부드러운 배경색 변경을 위한 트랜지션

                    "&:hover": {
                      backgroundColor: "#05203c",
                      ".hover-item": {
                        // 여기서 'hover-item' 클래스를 가진 하위 요소들의 스타일을 정의합니다.
                        color: "white",
                      },
                    },
                  }}
                  onClick={() => {
                    setSelectSorted(entry.type);
                  }}
                >
                  <Typography
                    className="hover-item"
                    color={selectSorted === entry.type ? "white" : "#b6b6b6"}
                  >
                    {entry.type}
                  </Typography>
                  <Typography
                    className="hover-item"
                    color={selectSorted === entry.type ? "white" : "primary"}
                    variant="h6"
                  >
                    $ {entry.data.price}
                  </Typography>
                  <Typography
                    className="hover-item"
                    color={selectSorted === entry.type ? "white" : "black"}
                  >
                    {entry.data.arrivalDate}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Grid>
          <OrderListResult
            resultList={resultList}
            selectedSort={selectSorted}
            setSelectResultId={setSelectResultId}
            selectResultId={selectResultId}
          />
        </Box>
        <Box flexGrow={1}>
          <OrderResultInfo
            selectData={dummyData.find((item) => item.id === selectResultId)}
          />
        </Box>
      </Box>
    </BaseBox>
  );
};

export default OrderResult;
