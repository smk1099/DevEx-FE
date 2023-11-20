import { Box, Icon, Typography } from "@mui/material";
import OrderListItem from "./OrderListItem";
import { useEffect, useState } from "react";

const OrderListResult = ({
  resultList,
  selectedSort,
  selectResultId,
  setSelectResultId,
}) => {
  //상위 컴포넌트로부터 결과 리스트를 전달받으면 이 정보를 렌더링해 결과를 보여주는 컴포넌트

  return (
    <Box width="100%">
      {resultList.map((data, index) => {
        if (index === 0) {
          return (
            <Box
              key={data.id}
              bgcolor="#d7191fff"
              sx={{
                p: "2px",
                borderRadius: "5px",
              }}
            >
              <Box m={1}>
                <Typography
                  fontFamily="Nanum Myeongjo"
                  fontWeight="800"
                  color="white"
                  variant="h5"
                >
                  {selectedSort}
                </Typography>
              </Box>
              <OrderListItem
                data={data}
                isHighlighted={index === 0} // 첫 번째 요소에 대한 하이라이트 여부
                setSelectResultId={setSelectResultId}
                selectResultId={selectResultId}
              />
            </Box>
          );
        } else {
          return (
            <OrderListItem
              key={data.id}
              data={data}
              isHighlighted={index === 0} // 첫 번째 요소에 대한 하이라이트 여부
              setSelectResultId={setSelectResultId}
              selectResultId={selectResultId}
            />
          );
        }

        // OrderListItem 컴포넌트를 map 함수 내부에서 사용
      })}
    </Box>
  );
};

export default OrderListResult;
