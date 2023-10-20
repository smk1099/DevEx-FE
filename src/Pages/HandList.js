import { useNavigate } from "react-router-dom";
import BaseBox from "../components/BaseBox";
import MyButton from "../components/MyButton";

const HandList = () => {
  const navigate = useNavigate();
  return (
    <BaseBox>
      핸드캐리 리스트 페이지.
      <MyButton
        value="업체 등록"
        onClick={() => {
          navigate("/handregist");
        }}
      />
    </BaseBox>
  );
};

export default HandList;
