import { useNavigate } from "react-router-dom";

import { Box, Button, TextField, Typography, darken } from "@mui/material";

import MyButton from "../components/MyButton";
import BaseBox from "../components/BaseBox";

const Login = () => {
  const navigate = useNavigate();
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
        <Box component="form">
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email"
            name="email"
            autoComplete="id"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
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
            type="negative"
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
