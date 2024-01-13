import { Box } from "@mui/material";
import OrderRequestInfo from "./OrderRequestInfo";

const BookMarkList = ({ bookMarkList }) => {
  return (
    <Box ml={2}>
      {console.log(bookMarkList)}
      {bookMarkList.map((item, index) => (
        <OrderRequestInfo
          requestInfo={item}
          key={index}
          myKey={item.id}
          myPage={true}
        />
      ))}
      {/* <OrderRequestInfo requestInfo={...}/> */}
    </Box>
  );
};

export default BookMarkList;
