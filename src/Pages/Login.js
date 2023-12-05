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
      const response = await axios.post("/auth/login", {
        email: loginInfo.email,
        password: loginInfo.password,
      });
      console.log("Server Response:", response.data);
      localStorage.setItem("loginToken", response.data["accessToken"]);
      localStorage.setItem("refreshToken", response.data["refreshToken"]);
      const userResponse = await axios.get("/api/user/detail", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("loginToken")}`,
        },
      });
      console.log("login info : ", userResponse.data);
      localStorage.setItem("myName", userResponse.data["username"]);
      localStorage.setItem("isLogin", true);
      localStorage.setItem("userInfo", JSON.stringify(userResponse.data));
      navigate("/");
    } catch (error) {
      console.error("Login error:", error);
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
          <svg
            width="30"
            height="30"
            viewBox="0 0 369 336"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M343.75 223.747V195.779L210.938 125.858V48.9447C210.938 37.3378 200.469 27.9684 187.5 27.9684C174.531 27.9684 164.062 37.3378 164.062 48.9447V125.858L31.25 195.779V223.747L164.062 188.787V265.7L125 286.676V307.652L187.5 293.668L250 307.652V286.676L210.938 265.7V188.787L343.75 223.747Z"
              fill="black"
            />
          </svg>
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
