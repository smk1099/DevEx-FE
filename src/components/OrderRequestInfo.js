import { Box, Typography } from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CountryCodeArray from "../util/CountryCodeArray";
const OrderRequestInfo = ({ requestInfo, newData, myKey }) => {
  const [bookmarkKey, setBookmarkKey] = useState(myKey);
  useEffect(() => {
    setBookmarkKey(myKey);
  }, [myKey]);

  const navigate = useNavigate();

  const moveOrderPage = () => {
    navigate("/order", {
      replace: true,
      state: {
        requestInfo, // 정리된 모든 입력 값(state들)이 포함될 예정
      },
    });
  };

  const bookmarkRequest = async (e) => {
    e.stopPropagation();
    try {
      const response = await axios.post("/api/bookmark", newData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("loginToken")}`,
        },
      });
      setBookmarkKey(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const bookmarkDeleteRequest = async (e) => {
    e.stopPropagation();
    const isConfirmed = window.confirm("즐겨찾기를 해제하시겠습니까?");

    if (isConfirmed) {
      try {
        const response = await axios.delete(`/api/bookmark/${bookmarkKey}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("loginToken")}`,
          },
        });
        setBookmarkKey(null);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      my={5}
      p={2}
      sx={
        myKey
          ? {
              boxShadow: "0px 0px 5px 3px rgba(0, 0, 0, 0.1)",
              borderRadius: "5px",
              transition: "0.2s", // 부드러운 배경색 변경을 위한 트랜지션
              cursor: "pointer", // 마우스 오버 시 포인터 모양으로 변경
              "&:hover": {
                backgroundColor: "#f5f5f5ff",
              },
            }
          : { border: "1px solid black", borderRadius: "5px" }
      }
      onClick={myKey ? moveOrderPage : () => {}}
    >
      <Box display="flex" width="100%">
        <Box mt={1} ml={2}>
          {bookmarkKey ? (
            <FavoriteIcon
              onClick={bookmarkDeleteRequest}
              sx={{
                color: "#f244ae9e",
                transition: "0.2s", // 부드러운 배경색 변경을 위한 트랜지션
                cursor: "pointer", // 마우스 오버 시 포인터 모양으로 변경
                "&:hover": {
                  backgroundColor: "#f5f5f5ff",
                },
              }}
            />
          ) : (
            <FavoriteBorderIcon
              onClick={bookmarkRequest}
              sx={{
                color: "#f244ae9e",
                transition: "0.2s", // 부드러운 배경색 변경을 위한 트랜지션
                cursor: "pointer", // 마우스 오버 시 포인터 모양으로 변경
                "&:hover": {
                  backgroundColor: "#f5f5f5ff",
                },
              }}
            />
          )}
        </Box>
        <Box width="37%"></Box>
        <Typography mb={2} variant="h5" fontWeight="700" color="primary">
          화물 정보
        </Typography>
      </Box>
      {requestInfo.startDate ? (
        <Typography fontWeight="700">
          예상 발송일 : {requestInfo.startDate}
        </Typography>
      ) : (
        <></>
      )}

      <Box display="flex" alignItems="center">
        <Box>
          <Typography fontWeight="700">
            출발 국가 :{" "}
            {
              CountryCodeArray.find(
                (c) => c.CountryCode === requestInfo.shipperCountryCode
              ).이름
            }
          </Typography>
          <Typography fontWeight="700">
            출발지 우편번호 : {requestInfo.shipperPostalCode}
          </Typography>
        </Box>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          width="200px"
        >
          <ArrowRightAltIcon sx={{ fontSize: 50 }} />
        </Box>
        <Box>
          <Typography fontWeight="700">
            도착 국가 :{" "}
            {
              CountryCodeArray.find(
                (c) => c.CountryCode === requestInfo.recipientCountryCode
              ).이름
            }
          </Typography>
          <Typography fontWeight="700">
            도착지 우편번호 : {requestInfo.recipientPostalCode}
          </Typography>
        </Box>
      </Box>

      <Box mt={3} display="flex" justifyContent="space-between">
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <Typography m={1} fontWeight="700">
            품명
          </Typography>
          <Typography>{requestInfo.name}</Typography>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <Typography m={1} fontWeight="700">
            카테고리
          </Typography>
          <Typography>{requestInfo.category}</Typography>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <Typography m={1} fontWeight="700">
            무게
          </Typography>
          <Typography>{requestInfo.weight}</Typography>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <Typography m={1} fontWeight="700">
            무게 단위
          </Typography>
          <Typography>{requestInfo.weightUnit}</Typography>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <Typography m={1} fontWeight="700">
            가로
          </Typography>
          <Typography>{requestInfo.lengthValue}</Typography>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <Typography m={1} fontWeight="700">
            세로
          </Typography>
          <Typography>{requestInfo.widthValue}</Typography>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <Typography m={1} fontWeight="700">
            높이
          </Typography>
          <Typography>{requestInfo.heightValue}</Typography>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <Typography m={1} fontWeight="700">
            길이 단위
          </Typography>
          <Typography>{requestInfo.lengthUnit}</Typography>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <Typography m={1} fontWeight="700">
            위험물 여부
          </Typography>
          <Typography>{requestInfo.danger ? "O" : "X"}</Typography>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <Typography m={1} fontWeight="700">
            박스 수량
          </Typography>
          <Typography>{requestInfo.boxCount}</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default OrderRequestInfo;
