import { Box, Icon, Typography } from "@mui/material";

const OrderListResult = ({ resultList }) => {
  console.log(resultList);
  //상위 컴포넌트로부터 결과 리스트를 전달받으면 이 정보를 렌더링해 결과를 보여주는 컴포넌트
  return (
    <Box width="100%">
      {resultList.map((data) => (
        <Box
          display="flex"
          m={2}
          key={data.id}
          sx={{
            height: "100px",
            borderRadius: "5px",
            boxShadow: "0px 0px 5px 3px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            width="100px"
          >
            {/* <Icon>
              <img
                src="fedex_icon.png"
                alt="FedEx"
                style={{ width: "100%", height: "100%" }}
              />
            </Icon> */}
            {data.name}
          </Box>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexGrow={1}
            borderRight="1px solid gray"
          >
            <Typography fontWeight="700"> ETA : {data.arrivalDate}</Typography>
          </Box>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            width="100px"
          >
            <Typography fontWeight="700"> $ {data.price}</Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default OrderListResult;
