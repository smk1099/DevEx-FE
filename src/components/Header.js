import { useNavigate } from "react-router-dom";

import { Box, Button, IconButton, Toolbar, Typography } from "@mui/material";
const Header = () => {
  //페이지 상단에 고정되는 네비게이션 바
  const navigate = useNavigate();
  return (
    <Toolbar
      variant="dense"
      sx={{
        boxSizing: "border-box",
        minWidth: "1500px",
        width: "100%",
        minHeight: "auto",
        py: "8px",
        backgroundColor: "#c6cffb",
      }}
    >
      <Box mx={4}>
        <IconButton
          onClick={() => {
            navigate("/");
          }}
        >
          로고
        </IconButton>
      </Box>
      <Box
        component={Button}
        mx={3}
        onClick={() => {
          navigate("/order");
        }}
      >
        <Typography sx={{ color: "white", fontWeight: "bold" }}>
          견적비교
        </Typography>
      </Box>
      <Box
        component={Button}
        mx={3}
        onClick={() => {
          navigate("/handlist");
        }}
      >
        <Typography sx={{ color: "white", fontWeight: "bold" }}>
          핸드캐리
        </Typography>
      </Box>
      <Box component={Button} mx={3}>
        <Typography sx={{ color: "white", fontWeight: "bold" }}>
          마이페이지
        </Typography>
      </Box>
      <Box sx={{ flexGrow: 1 }}></Box>
      {/* 버튼을 오른쪽으로 배치하기 위한 코드 */}
      <Box>
        <Button
          onClick={() => {
            navigate("/login");
          }}
          sx={{
            backgroundColor: "#11ac0a",
            color: "white",
            borderRadius: 5,
            ":hover": { backgroundColor: "#11ac0a" },
            textTransform: "none",
            whiteSpace: "nowrap",
          }}
        >
          Log In / Sign Up
        </Button>
      </Box>
    </Toolbar>
  );
};

export default Header;
