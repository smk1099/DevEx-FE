import { Box, Typography } from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const HandItem = ({ obj }) => {
  console.log(obj);
  return (
    <Box
      width="80%"
      height="100px"
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
        <Box display="flex" justifyContent="center" alignItems="center">
          <Typography variant="h5" fontWeight="700">
            {obj.startPoint}
          </Typography>
          <ArrowRightAltIcon sx={{ fontSize: 50 }} />
          <Typography variant="h5" fontWeight="700">
            {obj.endPoint}
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
        </Box>
      </Box>
    </Box>
  );
};
export default HandItem;
