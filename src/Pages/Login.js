import { Box, Button, TextField, Typography, darken } from "@mui/material";
import MyButton from "../components/MyButton";

const Login = () => {
  //submit 시 GET 방식이 아닌 다른 방법을 고려해야 할것으로 생각됨.
  return (
    <Box
      display="flex"
      justifyContent="center"
      width="100%"
      sx={{ boxSizing: "border-box" }}
    >
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        width="500px"
        height="700px"
      >
        <Box display="flex" justifyContent="center">
          로고 넣기
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
            label="email"
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
          <MyButton value="Sign Up" type="negative" onClick={() => {}} />
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
