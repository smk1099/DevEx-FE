import { Box, Typography } from "@mui/material";

const Home = () => {
  //홈페이지
  return (
    <Box sx={{ width: "100%", boxSizing: "border-box" }}>
      <Box
        p={8}
        pt={15}
        minHeight={500}
        display="flex"
        justifyContent="space-between"
      >
        <Box width="45%" border={"1px solid"}></Box>
        <Box
          width="45%"
          display="flex"
          flexDirection="column"
          justifyContent="center"
        >
          <Typography variant="h5" fontWeight={700}>
            서비스 소개
          </Typography>
          <Typography mt={2}>
            수출 견적, 배송비, 일정 안내 소규모 수출 서비스
          </Typography>
        </Box>
      </Box>
      <Box
        p={8}
        minHeight={500}
        bgcolor="#f5f5f5"
        display="flex"
        justifyContent="space-between"
      >
        <Box
          width="45%"
          display="flex"
          flexDirection="column"
          justifyContent="center"
        >
          <Typography variant="h5" fontWeight={700}>
            비전
          </Typography>
          <Typography mt={2}>
            Fedex, UPS 등 해외 물류 api 통합과 핸드캐리 업체와의 제휴를 통한
            다양한 경로 안내
          </Typography>
        </Box>
        <Box width="45%" border={"1px solid"}></Box>
      </Box>
    </Box>
  );
};

export default Home;
