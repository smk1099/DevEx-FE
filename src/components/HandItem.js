import { Box, Typography } from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import CountryCodeArray from "../util/CountryCodeArray";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";
const HandItem = ({ obj }) => {
  const handDeleteRequest = async (e) => {
    e.stopPropagation();
    const isConfirmed = window.confirm("핸드캐리를 삭제하시겠습니까?");

    if (isConfirmed) {
      try {
        const response = await axios.delete(`/api/Handcarry/${obj.id}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("loginToken")}`,
          },
        });
        window.location.reload();
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <Box
      width="80%"
      sx={{
        mx: 0,
        my: 2,
        borderRadius: "5px",
        boxShadow: "0px 0px 5px 3px rgba(0, 0, 0, 0.1)",
        transition: "0.2s", // 부드러운 배경색 변경을 위한 트랜지션
        "&:hover": {
          backgroundColor: "#f5f5f5ff",
        },
      }}
    >
      <Box>
        <DeleteIcon
          m={0}
          sx={{
            color: "#b6b6b6ff",
            m: 1,
            position: "absolute",
            transition: "0.2s", // 부드러운 배경색 변경을 위한 트랜지션
            cursor: "pointer", // 마우스 오버 시 포인터 모양으로 변경
            "&:hover": {
              backgroundColor: "#f5f5f5ff",
            },
          }}
          onClick={handDeleteRequest}
        ></DeleteIcon>
        <Box display="flex" justifyContent="center" alignItems="center">
          <Typography variant="h6" fontWeight="700">
            {
              CountryCodeArray.find((c) => c.CountryCode === obj.startPoint)
                .이름
            }
          </Typography>
          <ArrowRightAltIcon sx={{ fontSize: 50 }} />
          <Typography variant="h6" fontWeight="700">
            {CountryCodeArray.find((c) => c.CountryCode === obj.endPoint).이름}
          </Typography>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Typography fontWeight={"700"}>
            cost / kg : {obj.unitCosts}원
          </Typography>
          <Typography fontWeight={"700"}>
            Max weight : {obj.maxWeight}Kg
          </Typography>
          <Typography fontWeight={"700"}>
            예상 소요일 : {obj.expectedDate}일
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
export default HandItem;
