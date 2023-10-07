import { Button, darken } from "@mui/material";

const MyButton = ({ value, type, onClick }) => {
  //이후에 견적 설정할 때 뒤로가기와 계속 진행 버튼을 쉽게 만들기 위해 만듦.
  const buttonType = type === "positive" ? true : false;
  const bgc = buttonType ? "#37b3a8" : "#b6b6b6ff";
  return (
    <Button
      sx={{
        bgcolor: bgc,
        color: "white",
        ":hover": { backgroundColor: darken(bgc, 0.1) },
      }}
      onClick={onClick}
    >
      {value}
    </Button>
  );
};

export default MyButton;

MyButton.defaultProps = {
  value: "",
  type: "positive",
  onClick: () => {},
};
