import { Box, Button, Icon, IconButton, Typography } from "@mui/material";

import MyButton from "./MyButton";
import { useEffect, useState } from "react";

const OrderResultInfo = ({ selectData }) => {
  const [consult, setConsult] = useState(false);
  useEffect(() => {
    setConsult(false);
  }, []);
  if (!selectData) {
    return;
  } else {
    return (
      <Box
        mx={2}
        mt={2}
        display="flex"
        flexDirection="column"
        alignItems="center"
        sx={{
          height: "600px",
          backgroundColor: "#e9e7e7ff",
          borderRadius: "10px",
        }}
      >
        <Box
          width="75%"
          mb={15}
          mt={10}
          py={3}
          sx={{
            backgroundColor: "white",
            borderRadius: "10px",
            boxShadow: "0px 5px 10px 1px rgba(0, 0, 0, 0.5)",
          }}
        >
          <Box m={2} display="flex" justifyContent="space-between">
            <Typography> Company</Typography>
            <Typography> {selectData.name}</Typography>
          </Box>
          <Box m={2} display="flex" justifyContent="space-between">
            <Typography> 도착 예정일</Typography>
            <Typography> {selectData.arrivalDate}</Typography>
          </Box>
          <Box m={2} display="flex" justifyContent="space-between">
            <Typography> 예상 요금</Typography>
            <Typography> $ {selectData.price}</Typography>
          </Box>
          <Box m={2} display="flex" justifyContent="space-between">
            <Typography> 회사 Email</Typography>
            <Typography>{selectData.corporationEmail}</Typography>
          </Box>
          <Box m={2} display="flex" justifyContent="space-between">
            <Typography> 회사 Tell</Typography>
            <Typography>{selectData.corporationTell}</Typography>
          </Box>
        </Box>
        {/*fedex or 핸드캐리 즉, 선택된 견적을 제공하는 회사에 대한 정보,
        컨설팅 연계를 위한 버튼
         */}
        <MyButton
          value="Consult"
          sx={{
            fontSize: "20px",
            fontWeight: "700",
            width: "120px",
            height: "60px",
          }}
          onClick={() => {
            setConsult(!consult);
          }}
        />
        <Box mt={2} display={consult ? "flex" : "none"}>
          <Box
            color="black"
            component={Button}
            onClick={() => {
              window.open("https://www.kotra.or.kr/subList/20000006024");
            }}
          >
            kotra
          </Box>

          <Box
            color="black"
            component={Button}
            onClick={() => {
              window.open("https://www.smes.go.kr/exportcenter/");
            }}
          >
            중소벤처24
          </Box>
        </Box>
      </Box>
    );
  }
};

export default OrderResultInfo;
