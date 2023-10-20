import { Box } from "@mui/material";
import BaseBox from "../components/BaseBox";
import DoubleBox from "../components/DoubleBox";
import MyButton from "../components/MyButton";

const HandRegist = () => {
  return (
    <BaseBox>
      <DoubleBox
        props1={{
          mx: "50px",
          my: "30px",
          p: "15px",
          width: "900px",
          borderRadius: "2%",
        }}
        props2={{ p: 2, borderRadius: "2%" }}
      >
        <Box my={4} display="flex" height="100px" border="1px solid black">
          <Box mx={4} width="200px" border="1px solid black"></Box>
          <Box mx={4} width="200px" border="1px solid black"></Box>
          <Box mx={4} width="200px" border="1px solid black"></Box>
        </Box>
        <Box my={4} display="flex" height="100px" border="1px solid black">
          <Box mx={4} width="200px" border="1px solid black"></Box>
          <Box mx={4} width="200px" border="1px solid black"></Box>
          <Box mx={4} width="200px" border="1px solid black"></Box>
        </Box>
        <Box my={4} display="flex" height="100px" border="1px solid black">
          <Box mx={4} width="200px" border="1px solid black"></Box>
          <Box mx={4} width="200px" border="1px solid black"></Box>
          <Box mx={4} width="200px" border="1px solid black"></Box>
        </Box>
        <Box my={4} display="flex" height="100px" border="1px solid black">
          <Box mx={4} width="200px" border="1px solid black"></Box>
          <Box mx={4} width="200px" border="1px solid black"></Box>
          <Box mx={4} width="200px" border="1px solid black"></Box>
        </Box>
        <Box my={4} display="flex" height="100px" border="1px solid black">
          <Box mx={4} width="200px" border="1px solid black"></Box>
          <Box mx={4} width="200px" border="1px solid black"></Box>
          <Box mx={4} width="200px" border="1px solid black"></Box>
        </Box>
      </DoubleBox>
      <Box display="flex" justifyContent="center">
        <MyButton
          value="등록"
          sx={{
            width: "100px",
            height: "60px",
            fontSize: "18px",
            fontWeight: "700",
          }}
        />
      </Box>
    </BaseBox>
  );
};

export default HandRegist;
