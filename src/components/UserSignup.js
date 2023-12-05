import { useNavigate } from "react-router-dom";

import { Box, Button, TextField, Typography, darken } from "@mui/material";

import MyButton from "../components/MyButton";
import BaseBox from "../components/BaseBox";
import { useState } from "react";
import axios from "axios";
const UserSignup = ({ corporation }) => {
  //corporation props는 회사 인증시 서버로부터 전송받을 예정
  const [signupInfo, setSignupInfo] = useState({
    name: "",
    corporation: corporation,
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { id, value } = e.target;
    setSignupInfo((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault(); // form의 기본 제출 동작을 방지합니다.

    try {
      const response = await axios.post("/auth/signup", {
        name: signupInfo.name,
        corporation: signupInfo.corporation,
        email: signupInfo.email,
        password: signupInfo.password,
      });
      console.log("Server Response:", response.data);
      alert("회원가입 성공했습니다.");
      navigate("/login");
      // 여기서 필요한 로직(예: 토큰 저장, 리다이렉트 등)을 추가할 수 있습니다.
    } catch (error) {
      console.error("Login error:", error);
      // 로그인 실패 메시지를 사용자에게 보여줄 수 있습니다.
    }
  };
  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        width="500px"
        height="700px"
      >
        <Box display="flex" alignItems="center" flexDirection="column" mb={8}>
          <Typography fontWeight="700" variant="h5" color="primary">
            User Signup
          </Typography>
        </Box>
        <Box component="form" onSubmit={handleSubmit}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="corporation"
            label="Company Name"
            disabled
            value={signupInfo.corporation}
            onChange={handleChange}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="name"
            label="Name"
            value={signupInfo.name}
            onChange={handleChange}
          />

          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            type="email"
            label="Email"
            value={signupInfo.email}
            onChange={handleChange}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="password"
            type="password"
            label="Password"
            value={signupInfo.password}
            onChange={handleChange}
          />
          <Button
            type="submit"
            fullWidth
            sx={{
              borderRadius: 0,
              bgcolor: "#37b3a8",
              color: "white",
              ":hover": { backgroundColor: darken("#37b3a8", 0.1) },
            }}
          >
            Sign Up
          </Button>
        </Box>
        <Box display="flex" pt={4}>
          <MyButton
            value="Cancel"
            job="negative"
            onClick={() => {
              navigate(-1);
            }}
          />
        </Box>
      </Box>
    </>
  );
};

export default UserSignup;
