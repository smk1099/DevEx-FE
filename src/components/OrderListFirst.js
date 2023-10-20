import { Box, TextField, Typography } from "@mui/material";
import MyButton from "./MyButton";
import { useNavigate } from "react-router-dom";
import BaseBox from "./BaseBox";

const OrderListFirst = ({ setPageNumber }) => {
  const navigate = useNavigate();
  return (
    <BaseBox>
      <Box mt={5} display="flex" alignItems="center">
        <Typography mx={2} fontWeight="700">
          출발지
        </Typography>
        <TextField
          fullWidth
          margin="normal"
          id="origin"
          name="origin"
          autoFocus
        />
      </Box>
      <Box display="flex" alignItems="center">
        <Typography mx={2} fontWeight="700">
          도착지
        </Typography>
        <TextField
          fullWidth
          margin="normal"
          id="destination"
          name="destination"
          autoFocus
        />
      </Box>
      <Box width="300px" my={5} display="flex" justifyContent="space-between">
        <MyButton
          type="negative"
          value="뒤로 가기"
          onClick={() => {
            navigate(-1);
          }}
          sx={{ width: "100px", height: "50px" }}
        />
        <MyButton
          value="다음"
          onClick={() => {
            setPageNumber(2);
          }}
          sx={{ width: "100px", height: "50px" }}
        />
      </Box>
    </BaseBox>
  );
};

export default OrderListFirst;
