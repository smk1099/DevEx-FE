import { useNavigate } from "react-router-dom";

import { Box, Button, IconButton, Toolbar, Typography } from "@mui/material";
const Header = () => {
  //페이지 상단에 고정되는 네비게이션 바
  const navigate = useNavigate();
  const isLogin = localStorage.getItem("isLogin");
  const handleClick = () => {
    if (isLogin) {
      localStorage.removeItem("myName");
      localStorage.removeItem("loginToken");
      localStorage.removeItem("refreshToken");
      localStorage.removeItem("isLogin");
      localStorage.removeItem("userInfo");
      navigate("/");
    } else {
      navigate("/login");
    }
  };
  const buttonText = isLogin ? "Log Out" : "Log In / Sign Up";
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
          <svg
            width="40"
            height="40"
            viewBox="0 0 369 336"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M343.75 223.747V195.779L210.938 125.858V48.9447C210.938 37.3378 200.469 27.9684 187.5 27.9684C174.531 27.9684 164.062 37.3378 164.062 48.9447V125.858L31.25 195.779V223.747L164.062 188.787V265.7L125 286.676V307.652L187.5 293.668L250 307.652V286.676L210.938 265.7V188.787L343.75 223.747Z"
              fill="black"
            />
          </svg>
        </IconButton>
      </Box>
      <Box
        display={isLogin ? "" : "none"}
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
        display={isLogin ? "" : "none"}
        component={Button}
        mx={3}
        onClick={() => {
          navigate("/handregist");
        }}
      >
        <Typography sx={{ color: "white", fontWeight: "bold" }}>
          핸드캐리 등록
        </Typography>
      </Box>
      <Box
        display={isLogin ? "" : "none"}
        component={Button}
        mx={3}
        onClick={() => {
          navigate("/mypage");
        }}
      >
        <Typography sx={{ color: "white", fontWeight: "bold" }}>
          마이페이지
        </Typography>
      </Box>
      <Box sx={{ flexGrow: 1 }}></Box>
      {/* 버튼을 오른쪽으로 배치하기 위한 코드 */}
      {isLogin ? (
        <Box mx={5}>
          <Typography sx={{ color: "white", fontWeight: "bold" }}>
            Welcome {localStorage.getItem("myName")}
          </Typography>
        </Box>
      ) : (
        <Box></Box>
      )}
      <Box>
        <Button
          onClick={handleClick}
          sx={{
            width: "130px",
            backgroundColor: "#11ac0a",
            color: "white",
            borderRadius: 5,
            ":hover": { backgroundColor: "#11ac0a" },
            textTransform: "none",
            whiteSpace: "nowrap",
          }}
        >
          {buttonText}
        </Button>
      </Box>
    </Toolbar>
  );
};

export default Header;
