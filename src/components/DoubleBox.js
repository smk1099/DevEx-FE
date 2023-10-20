import { Box } from "@mui/material";

const DoubleBox = ({ children, props1, props2 }) => {
  return (
    <Box bgcolor="#b6b6b6ff" {...props1}>
      <Box bgcolor="white" {...props2}>
        {children}
      </Box>
    </Box>
  );
};

export default DoubleBox;
