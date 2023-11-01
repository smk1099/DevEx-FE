import { Box, Button, Typography } from "@mui/material";
import BaseBox from "../components/BaseBox";
import UserSignup from "../components/UserSignup";

import { useState } from "react";
import CompanyCheck from "../components/CompanyCheck";

const Signup = () => {
  const [isCheck, setIsCheck] = useState(0);
  const [corporation, setCorporation] = useState("test");
  return (
    <BaseBox>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        width="100%"
        bgcolor="primary.main"
        py={4}
        sx={{
          boxSizing: "border-box",
        }}
      >
        <Typography color="white" variant="h4" sx={{ fontWeight: "700" }}>
          Get started
        </Typography>
      </Box>
      <Box
        //삼각형
        color="primary.main"
        sx={{
          width: 0,
          height: 0,
          borderLeft: "25px solid transparent",
          borderRight: "25px solid transparent",
          borderTop: "50px solid",
        }}
      />
      <Button
        onClick={() => {
          setIsCheck(isCheck === 0 ? 1 : 0);
        }}
      >
        {isCheck === 0
          ? "test 버튼(유저 등록 페이지로 이동)"
          : "test 버튼(뒤로가기)"}
      </Button>
      {isCheck === 0 && (
        <CompanyCheck setCorporation={setCorporation} setIsCheck={setIsCheck} />
      )}
      {isCheck === 1 && <UserSignup corporation={corporation} />}
    </BaseBox>
  );
};

export default Signup;
