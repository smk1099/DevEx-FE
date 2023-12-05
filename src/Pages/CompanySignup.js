import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";
import { Box, Button, TextField, Typography, darken } from "@mui/material";
import BaseBox from "../components/BaseBox";
import MyButton from "../components/MyButton";

const CompanySignup = () => {
  const [logo, setLogo] = useState(null);
  const [logoSrc, setLogoSrc] = useState(null);
  const fileRef = useRef();

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setLogo(event.target.files[0]);
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => setLogoSrc(e.target.result);
      reader.readAsDataURL(file);
    }
  };

  const [signupInfo, setSignupInfo] = useState({
    corpName: "",
    corpAuthNumber: "",
    tell: "",
    email: "",
  });

  const [isAuth, setIsAuth] = useState(false);

  const checkLength = (input) => {
    return input.length === 10;
  };

  const checkNumber = (input) => {
    const regex = /^[0-9]+$/;
    return regex.test(input);
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setSignupInfo((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleAuth = () => {
    //사업자 번호 인증하는 부분, if문에 사업자 인증할 수 있는 코드 입력 필요.
    if (checkNumber(signupInfo.corpAuthNumber)) {
      setIsAuth(true);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // form의 기본 제출 동작을 방지합니다.
    const formData = new FormData();
    formData.append("file", logo);
    formData.append(
      "corporationRequestDto",
      new Blob(
        [
          JSON.stringify({
            corpName: signupInfo.corpName,
            businessNumber: signupInfo.corpAuthNumber,
            email: signupInfo.email,
            tell: signupInfo.tell,
          }),
        ],
        { type: "application/json" }
      )
    );

    if (isAuth) {
      try {
        const response = await axios.post("/api/corporation", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        alert(
          "기업 가입에 성공하셨습니다. 사업자번호로 인증 후 사용자 가입을 진행해주세요."
        );
        navigate("/signup");

        // 여기서 필요한 로직(예: 토큰 저장, 리다이렉트 등)을 추가할 수 있습니다.
      } catch (error) {
        console.error("error:", error);
        // 로그인 실패 메시지를 사용자에게 보여줄 수 있습니다.
      }
    } else {
      alert("사업자 번호 인증을 해주세요.");
    }
  };
  const navigate = useNavigate();
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
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        width="500px"
        height="700px"
      >
        <Box display="flex" alignItems="center" flexDirection="column" mb={8}>
          <Typography fontWeight="700" variant="h5" color="primary">
            Company Infomation
          </Typography>
        </Box>
        <Box component="form" onSubmit={handleSubmit}>
          <Box display="flex" gap={2}>
            {logo ? (
              <img
                src={logoSrc}
                alt="Logo"
                style={{ width: "100px", height: "100px", borderRadius: "5px" }}
              />
            ) : (
              <Box
                sx={{
                  width: "100px",
                  height: "100px",
                  border: "1px solid #b6b6b6ff",
                  borderRadius: "5px",
                }}
              ></Box>
            )}
            <Box display="flex" flexDirection="column">
              <Box flexGrow={1}></Box>
              <input
                accept="image/*"
                id="logo-upload"
                type="file"
                style={{ display: "none" }}
                onChange={handleFileChange}
                ref={fileRef}
              />
              <MyButton
                value="기업 로고 등록"
                onClick={() => fileRef.current.click()}
              />
            </Box>
          </Box>
          <TextField
            margin="normal"
            required
            fullWidth
            id="corpName"
            name="corp_name"
            label="Company Name"
            value={signupInfo.corpName}
            onChange={handleChange}
          />
          <Box display="flex" alignItems="center">
            <TextField
              margin="normal"
              required
              fullWidth
              id="corpAuthNumber"
              label="사업자 번호"
              value={signupInfo.corpAuthNumber}
              onChange={handleChange}
              disabled={isAuth}
            />
            <MyButton
              sx={{ ml: 4, mt: "5px" }}
              value={isAuth ? "인증됨" : "인증"}
              job={
                checkLength(signupInfo.corpAuthNumber) ? "positive" : "negative"
              }
              disabled={
                !isAuth && checkLength(signupInfo.corpAuthNumber)
                  ? "false"
                  : "true"
              }
              onClick={handleAuth}
            />
          </Box>

          <TextField
            margin="normal"
            required
            fullWidth
            id="tell"
            label="Tell"
            value={signupInfo.tell}
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
    </BaseBox>
  );
};

export default CompanySignup;
