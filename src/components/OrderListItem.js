import { Box, Typography } from "@mui/material";

// 데이터를 받아서 렌더링하는 별도의 컴포넌트
const OrderListItem = ({
  data,
  isHighlighted,
  setSelectResultId,
  selectResultId,
}) => {
  return (
    <Box
      display="flex"
      sx={{
        backgroundColor: selectResultId === data.id ? "#f5f5f5ff" : "white",
        mx: 0,
        my: isHighlighted ? 0 : 2,
        height: "100px",
        borderRadius: "5px",
        boxShadow: isHighlighted ? "0px" : "0px 0px 5px 3px rgba(0, 0, 0, 0.1)",
        transition: "0.2s", // 부드러운 배경색 변경을 위한 트랜지션
        cursor: "pointer", // 마우스 오버 시 포인터 모양으로 변경
        "&:hover": {
          backgroundColor: "#f5f5f5ff",
        },
      }}
      onClick={() => {
        setSelectResultId(data.id);
      }}
    >
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        width="100px"
      >
        {/* 아이콘 넣을 시 사용할 코드
        <Icon>
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
  );
};

export default OrderListItem;
