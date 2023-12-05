import { Grid, Toolbar, Typography } from "@mui/material";

const Footer = () => {
  //페이지 하단에 고정적으로 위치하는 콘텐츠
  return (
    <>
      <Toolbar
        position="static"
        sx={{ width: "90%", m: "0 auto", borderBottom: "1px solid #b6b6b6" }}
      >
        <Grid container minHeight={100}>
          <Grid
            display="flex"
            flexGrow={1}
            justifyContent="center"
            sx={{ mt: 8 }}
          ></Grid>
        </Grid>
      </Toolbar>
      <Toolbar sx={{ width: "90%", m: "0 auto" }}>
        <Grid
          //아이콘 넣을 수 있으면 넣으려고 만듦.
          container
          display="flex"
          minHeight={100}
          justifyContent="center"
          alignItems="center"
        >
          {/* <Grid
            mx={2}
            minHeight={10}
            minWidth={10}
            sx={{ border: "1px solid" }}
          ></Grid>
          <Grid
            mx={2}
            minHeight={10}
            minWidth={10}
            sx={{ border: "1px solid" }}
          ></Grid>
          <Grid
            mx={2}
            minHeight={10}
            minWidth={10}
            sx={{ border: "1px solid" }}
          ></Grid>
          <Grid
            mx={2}
            minHeight={10}
            minWidth={10}
            sx={{ border: "1px solid" }}
          ></Grid> */}
        </Grid>
      </Toolbar>
      <Toolbar sx={{ width: "90%", m: "0 auto" }}>
        <Grid
          container
          display="flex"
          minHeight={10}
          justifyContent="center"
          alignItems="center"
        >
          <Typography sx={{ color: "#b6b6b6", fontSize: "15px" }}>
            Make your exporting easy!
          </Typography>
        </Grid>
      </Toolbar>
    </>
  );
};

export default Footer;
