import { Box, Divider, Grid, Typography } from "@mui/material";
import BaseBox from "../components/BaseBox";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import HandList from "../components/HandList";
import Loading from "../components/Loading";
import BookMarkList from "../components/BookMarkList";

const MyPage = () => {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const requestInfo = async () => {
      try {
        const userResponse = await axios.get("/api/user/detail", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("loginToken")}`,
          },
        });
        console.log("userResponse : ", userResponse.data);
        setUserInfo(userResponse.data);
      } catch (error) {
        const errorCode = error.response["status"];
        alert("서버와의 통신 오류 발생 error code : ", errorCode);
        navigate("/");
      }
    };
    requestInfo();
  }, [navigate]);
  if (!userInfo) {
    return <Loading />;
  }

  return (
    <BaseBox>
      <Box my={5}>
        <Typography fontWeight="800" variant="h5" color="primary">
          마이페이지
        </Typography>
      </Box>
      <Box
        width="100%"
        display="flex"
        sx={{
          borderTop: "1px solid #a0a0a0",
          borderBottom: "1px solid #a0a0a0",
        }}
      >
        <Box
          display="flex"
          width="50%"
          sx={{ borderRight: "1px solid #a0a0a0" }}
        >
          <Box my={5} ml={20} mr={10} display="flex" alignItems="center">
            {userInfo.corporation["profileImageUrl"] ? (
              <Box
                component="img"
                src={userInfo.corporation["profileImageUrl"]}
                sx={{ width: "100px", height: "100px" }}
              ></Box>
            ) : (
              <Box
                sx={{
                  width: "100px",
                  height: "100px",
                  border: "1px solid black",
                }}
              ></Box>
            )}
          </Box>
          <Box
            ml={4}
            display="flex"
            flexDirection="column"
            justifyContent="center"
            flexGrow={1}
          >
            <Typography my={1} variant="h6" fontWeight="700">
              업체명 : {userInfo.corporation["corpName"]}
            </Typography>
            <Typography my={1} variant="h6" fontWeight="700">
              이메일 : {userInfo.corporation["email"]}
            </Typography>
            <Typography my={1} variant="h6" fontWeight="700">
              Tell : {userInfo.corporation["tell"]}
            </Typography>
          </Box>
        </Box>
        <Box display="flex" width="50%">
          <Box ml={6} flexGrow={1}>
            <Typography mt={2} variant="h5" fontWeight="800 ">
              유저 정보
            </Typography>
            <Typography ml={1} my={2} variant="h6" fontWeight="700">
              이름 : {userInfo["username"]}
            </Typography>
            <Typography ml={1} variant="h6" fontWeight="700">
              유저 Email : {userInfo["email"]}
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box display="flex" width="90%">
        <Box pl={10} width="50%">
          <Box my={4}>
            <Typography variant="h5" fontWeight="800">
              핸드캐리 등록 정보
            </Typography>
          </Box>
          <HandList handList={userInfo.corporation["handcarryList"]} />
        </Box>
        <Box pl={10}>
          <Box my={4}>
            <Typography variant="h5" fontWeight="800">
              관심있는 견적
            </Typography>
          </Box>
          <BookMarkList bookMarkList={userInfo.bookMarkList} />
        </Box>
      </Box>
    </BaseBox>
  );
};

export default MyPage;
