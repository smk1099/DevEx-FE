import { Box, Icon, IconButton, Typography } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

import MyButton from "./MyButton";

const OrderResultInfo = ({ selectData }) => {
  if (!selectData) {
    return;
  } else {
    return (
      <Box
        mx={2}
        mt={2}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        sx={{
          height: "700px",
          backgroundColor: "#e9e7e7ff",
          borderRadius: "10px",
        }}
      >
        <Box
          width="75%"
          height="50%"
          mb={15}
          sx={{
            backgroundColor: "white",
            borderRadius: "10px",
            boxShadow: "0px 5px 10px 1px rgba(0, 0, 0, 0.5)",
          }}
        >
          <Box mt={3} ml={2}>
            <FavoriteBorderIcon
              sx={{
                color: "#b6b6b6ff",
                transition: "0.2s", // 부드러운 배경색 변경을 위한 트랜지션
                cursor: "pointer", // 마우스 오버 시 포인터 모양으로 변경
                "&:hover": {
                  backgroundColor: "#f5f5f5ff",
                },
              }}
            />
          </Box>
          <Box m={2} display="flex" justifyContent="space-between">
            <Typography> Company</Typography>
            <Typography> {selectData.name}</Typography>
          </Box>
          <Box m={2} display="flex" justifyContent="space-between">
            <Typography> 도착 예정일</Typography>
            <Typography> {selectData.arrivalDate}</Typography>
          </Box>
          <Box m={2} display="flex" justifyContent="space-between">
            <Typography> 예상 요금</Typography>
            <Typography> $ {selectData.price}</Typography>
          </Box>
          <Box m={2} display="flex" justifyContent="space-between">
            <Typography> 회사 Email</Typography>
            <Typography>{selectData.corporationEmail}</Typography>
          </Box>
          <Box m={2} display="flex" justifyContent="space-between">
            <Typography> 회사 Tell</Typography>
            <Typography>{selectData.corporationTell}</Typography>
          </Box>
        </Box>
        {/*fedex or 핸드캐리 즉, 선택된 견적을 제공하는 회사에 대한 정보,
        컨설팅 연계를 위한 버튼
         */}
        <MyButton
          value="Consult ->"
          sx={{
            fontSize: "20px",
            fontWeight: "700",
            width: "120px",
            height: "60px",
          }}
        />
      </Box>
    );
  }
};

export default OrderResultInfo;
