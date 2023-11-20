import { Box, Divider, Grid, Typography } from "@mui/material";
import BaseBox from "../components/BaseBox";

const MyPage = () => {
  return (
    <BaseBox>
      <Box my={5}>
        <Typography fontWeight="800" variant="h5">
          마이페이지
        </Typography>
      </Box>
      <Box
        width="100%"
        display="flex"
        sx={{
          borderTop: "1px solid black",
          borderBottom: "1px solid black",
        }}
      >
        <Box display="flex" width="50%" sx={{ borderRight: "1px solid black" }}>
          <Box my={5} ml={20} mr={10} display="flex" alignItems="center">
            <Box
              sx={{
                width: "100px",
                height: "100px",
                border: "1px solid black",
              }}
            ></Box>
          </Box>
          <Box
            ml={4}
            display="flex"
            flexDirection="column"
            justifyContent="center"
            flexGrow={1}
          >
            <Typography my={1} variant="h6" fontWeight="700">
              업체명 : test
            </Typography>
            <Typography my={1} variant="h6" fontWeight="700">
              이메일 : company@naver.com
            </Typography>
            <Typography my={1} variant="h6" fontWeight="700">
              Tell : 02-xxxx-xxxx
            </Typography>
          </Box>
        </Box>
        <Box display="flex" width="50%">
          <Box ml={6} flexGrow={1}>
            <Typography mt={2} variant="h5" fontWeight="800">
              유저 정보
            </Typography>
            <Typography ml={1} my={2} variant="h6" fontWeight="700">
              이름 : test
            </Typography>
            <Typography ml={1} variant="h6" fontWeight="700">
              유저 Email : user@naver.com
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
          <Box ml={2}>
            <Box
              width="80%"
              height="100px"
              sx={{ border: "1px solid black" }}
              my={2}
            ></Box>
            <Box
              width="80%"
              height="100px"
              sx={{ border: "1px solid black" }}
              my={2}
            ></Box>
            <Box
              width="80%"
              height="100px"
              sx={{ border: "1px solid black" }}
              my={2}
            ></Box>
            <Box
              width="80%"
              height="100px"
              sx={{ border: "1px solid black" }}
              my={2}
            ></Box>
          </Box>
        </Box>
        <Box pl={10} width="50%">
          <Box my={4}>
            <Typography variant="h5" fontWeight="800">
              관심있는 견적
            </Typography>
          </Box>
          <Box ml={2}>
            <Box
              width="80%"
              height="100px"
              sx={{ border: "1px solid black" }}
              my={2}
            ></Box>
            <Box
              width="80%"
              height="100px"
              sx={{ border: "1px solid black" }}
              my={2}
            ></Box>
            <Box
              width="80%"
              height="100px"
              sx={{ border: "1px solid black" }}
              my={2}
            ></Box>
            <Box
              width="80%"
              height="100px"
              sx={{ border: "1px solid black" }}
              my={2}
            ></Box>
          </Box>
        </Box>
      </Box>
    </BaseBox>
  );
};

export default MyPage;
