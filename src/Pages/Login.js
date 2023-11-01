import { useNavigate } from "react-router-dom";

import { Box, Button, TextField, Typography, darken } from "@mui/material";

import MyButton from "../components/MyButton";
import BaseBox from "../components/BaseBox";
import { useState } from "react";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { id, value } = e.target;
    setLoginInfo((prev) => ({
      ...prev,
      [id]: value,
    }));
  };
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("YOUR_LOGIN_SERVER_URL", {
        email: loginInfo.email,
        password: loginInfo.password,
      });
      console.log("Server Response:", response.data);

      // 여기서 필요한 로직(예: 토큰 저장, 리다이렉트 등)을 추가할 수 있습니다.
    } catch (error) {
      console.error("Login error:", error);
      // 로그인 실패 메시지를 사용자에게 보여줄 수 있습니다.
    }
  };

  return (
    <BaseBox>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        width="500px"
        height="700px"
      >
        <Box display="flex" justifyContent="center">
          로고
        </Box>
        <Box display="flex" justifyContent="center" my={4}>
          <Typography color="primary" variant="h4" sx={{ fontWeight: "700" }}>
            Log In
          </Typography>
        </Box>
        <Box component="form" onSubmit={handleLogin}>
          <TextField
            margin="normal"
            required
            fullWidth
            value={loginInfo.email}
            onChange={handleChange}
            type="email"
            id="email"
            label="Email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            value={loginInfo.password}
            onChange={handleChange}
            label="Password"
            type="password"
            id="password"
          />
          <Button
            type="submit"
            fullWidth
            mt={3}
            mb={2}
            sx={{
              borderRadius: 0,
              bgcolor: "#37b3a8",
              color: "white",
              ":hover": { backgroundColor: darken("#37b3a8", 0.1) },
            }}
          >
            Log In
          </Button>
        </Box>
        <Box display="flex" justifyContent="end" pt={4}>
          <MyButton
            value="Sign Up"
            job="negative"
            onClick={() => {
              navigate("/signup");
            }}
          />
        </Box>
      </Box>
    </BaseBox>
  );
};

export default Login;
