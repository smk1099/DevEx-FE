import { Button, darken } from "@mui/material";
import { deepmerge } from "@mui/utils";

const MyButton = ({ value, job, onClick, sx, disabled, ...rest }) => {
  //이후에 견적 설정할 때 뒤로가기와 계속 진행 버튼을 쉽게 만들기 위해 만듦.
  const buttonType = job === "positive" ? true : false;
  const bgc = buttonType ? "#37b3a8" : "#b6b6b6ff";
  const defaultSx = {
    bgcolor: bgc,
    color: "white",
    ":hover": { backgroundColor: darken(bgc, 0.1) },
  };

  const mergeSx = deepmerge(defaultSx, sx);
  return (
    <Button
      {...rest}
      sx={mergeSx}
      onClick={onClick}
      disabled={disabled === "true" ? true : false}
    >
      {value}
    </Button>
  );
};

export default MyButton;

MyButton.defaultProps = {
  value: "",
  job: "positive",
  onClick: () => {},
  sx: {},
  disabled: "false",
};
