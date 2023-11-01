import { Box } from "@mui/material";

const BaseBox = ({ children, ...rest }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      width="100%"
      sx={{ boxSizing: "border-box" }}
      {...rest}
    >
      {children}
    </Box>
  );
};

export default BaseBox;
