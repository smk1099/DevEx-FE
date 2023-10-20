import { Box } from "@mui/material";

const BaseBox = ({ children, props }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      width="100%"
      sx={{ boxSizing: "border-box" }}
      {...props}
    >
      {children}
    </Box>
  );
};

export default BaseBox;
