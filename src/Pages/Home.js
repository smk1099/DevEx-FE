import { Box, Typography } from "@mui/material";

const Home = () => {
  return (
    <Box sx={{ width: "100%", boxSizing: "border-box" }}>
      <Box
        p={8}
        pt={15}
        minHeight={500}
        display="flex"
        justifyContent="space-between"
      >
        <Box width="45%" border={"1px solid"}>
          적절한 이미지
        </Box>
        <Box
          width="45%"
          display="flex"
          flexDirection="column"
          justifyContent="center"
        >
          <Typography variant="h5" fontWeight={700}>
            서비스 소개
          </Typography>
          <Typography mt={2}>서비스 소개글</Typography>
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
          <Typography mt={2}>비전 소개글</Typography>
        </Box>
        <Box width="45%" border={"1px solid"}>
          적절한 이미지
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
