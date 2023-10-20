import { useNavigate } from "react-router-dom";

import { Box, Button, TextField, Typography, darken } from "@mui/material";

import MyButton from "../components/MyButton";
import BaseBox from "../components/BaseBox";

const Signup = () => {
  const navigate = useNavigate();
  return (
    <>
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
          <Box component="form">
            <TextField
              margin="normal"
              required
              fullWidth
              id="firstName"
              label="First Name"
              name="firstName"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="lastName"
              label="Last Name"
              name="lastName"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="companyName"
              label="Company Name"
              name="companyName"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
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
              type="negative"
              onClick={() => {
                navigate(-1);
              }}
            />
          </Box>
        </Box>
      </BaseBox>
    </>
  );
};

export default Signup;
