import { Box, Typography } from "@mui/material";

const OrderHeader = ({ pageNumber }) => {
  const headerContent = [
    {
      number: 1,
      content: "출발지/도착지",
    },
    {
      number: 2,
      content: "화물정보",
    },
    {
      number: 3,
      content: "견적 확인",
    },
  ];
  return (
    <>
      {headerContent.map(({ number, content }) => (
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          key={number}
          mx={8}
        >
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            sx={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
            }}
            my={2}
            bgcolor={number === pageNumber ? "#f5d62f" : "#b6b6b6ff"}
          >
            <Typography fontWeight="800">{number}</Typography>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            sx={{ width: "110px" }}
            bgcolor={number === pageNumber ? "#f5d62f" : "#b6b6b6ff"}
          >
            <Typography fontWeight="700">{content}</Typography>
          </Box>
        </Box>
      ))}
    </>
  );
};

export default OrderHeader;

OrderHeader.defaultProps = {
  pageNumber: 1,
};
