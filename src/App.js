import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Grid } from "@mui/material";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Order from "./Pages/Order";
import OrderResult from "./Pages/OrderResult";
import HandList from "./Pages/HandList";
import HandRegist from "./Pages/HandRegist";
import HandInfo from "./Pages/HandInfo";

function App() {
  const theme = createTheme({
    //컴포넌트와 페이지 색상등 기본 테마 설정
    components: {
      MuiTypography: {
        styleOverrides: {
          root: {
            whiteSpace: "nowrap",
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: "none",
            whiteSpace: "nowrap",
          },
        },
      },
    },
    typography: {
      fontFamily: "Nanum Gothic",
    },
    palette: {
      primary: {
        main: "#578fe4",
      },
      secondary: {
        main: "#c6cffb",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Grid width="1500px">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/signup" element={<Signup />}></Route>
            <Route path="/order" element={<Order />}></Route>
            <Route path="/orderresult" element={<OrderResult />}></Route>
            <Route path="/handlist" element={<HandList />}></Route>
            <Route path="/handregist" element={<HandRegist />}></Route>
            <Route path="/handinfo" element={<HandInfo />}></Route>
          </Routes>
          <Footer />
        </Grid>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
