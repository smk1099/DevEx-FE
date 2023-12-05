import { Box, Typography } from "@mui/material";

const Loading = () => {
  return (
    <Box
      display="flex"
      height="700px"
      justifyContent="center"
      alignItems="center"
    >
      <Typography fontWeight="700" color="primary" variant="h3">
        로딩 중..
      </Typography>
    </Box>
  );
};

export default Loading;
