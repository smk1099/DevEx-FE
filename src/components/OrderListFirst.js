import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import MyButton from "./MyButton";
import { useNavigate } from "react-router-dom";
import BaseBox from "./BaseBox";
import CountryCodeArray from "../util/CountryCodeArray";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { useEffect, useRef, useState } from "react";

const OrderListFirst = ({ sendInfo, setSendInfo, setPageNumber }) => {
  const countryCodeArray = CountryCodeArray;
  const navigate = useNavigate();

  const startCountryCodeRef = useRef(null);
  const startPostalCodeRef = useRef(null);

  const endCountryCodeRef = useRef(null);
  const endPostalCodeRef = useRef(null);

  const [nextOk, setNextOk] = useState(false);

  const handleUpdateInfo = () => {
    setSendInfo({
      ...sendInfo,
      shipperCountryCode: startCountryCodeRef.current.value,
      shipperPostalCode: startPostalCodeRef.current.value,
      recipientCountryCode: endCountryCodeRef.current.value,
      recipientPostalCode: endPostalCodeRef.current.value,
    });
    setPageNumber(2);
  };

  const checkInput = () => {
    if (startPostalCodeRef.current.value && endPostalCodeRef.current.value) {
      setNextOk(true);
    } else {
      setNextOk(false);
    }
  };

  useEffect(checkInput, []);
  return (
    <BaseBox>
      <Box mt={5} display="flex">
        <Box>
          <Box display="flex" alignItems="center">
            <Typography width="150px" mx={2} fontWeight="700">
              출발국가
            </Typography>
            <FormControl>
              <Select
                inputRef={startCountryCodeRef}
                defaultValue={sendInfo.shipperCountryCode}
                sx={{ width: "200px" }}
              >
                {countryCodeArray.map((entity, index) => (
                  <MenuItem key={index} value={entity["CountryCode"]}>
                    {entity["이름"]}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
          <Box display="flex" mt={5} alignItems="center">
            <Typography width="150px" mx={2} fontWeight="700">
              출발지 우편번호
            </Typography>
            <TextField
              onChange={checkInput}
              inputRef={startPostalCodeRef}
              width="200px"
              label="우편번호 입력"
              defaultValue={sendInfo.shipperPostalCode}
            ></TextField>
          </Box>
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
          <Box display="flex" alignItems="center">
            <Typography width="150px" mx={2} fontWeight="700">
              도착국가
            </Typography>
            <FormControl>
              <Select
                defaultValue={sendInfo.recipientCountryCode}
                inputRef={endCountryCodeRef}
                sx={{ width: "200px" }}
              >
                {countryCodeArray.map((entity, index) => (
                  <MenuItem key={index} value={entity["CountryCode"]}>
                    {entity["이름"]}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
          <Box display="flex" mt={5} alignItems="center">
            <Typography width="150px" mx={2} fontWeight="700">
              도착지 우편번호
            </Typography>
            <TextField
              onChange={checkInput}
              inputRef={endPostalCodeRef}
              width="200px"
              label="우편번호 입력"
              defaultValue={sendInfo.recipientPostalCode}
            ></TextField>
          </Box>
        </Box>
      </Box>

      <Box width="300px" my={5} display="flex" justifyContent="space-between">
        <MyButton
          job="negative"
          value="뒤로 가기"
          onClick={() => {
            navigate(-1);
          }}
          sx={{ width: "100px", height: "50px" }}
        />
        <MyButton
          disabled={nextOk ? "false" : "true"}
          value="다음"
          onClick={handleUpdateInfo}
          sx={{ width: "100px", height: "50px" }}
        />
      </Box>
    </BaseBox>
  );
};

export default OrderListFirst;
