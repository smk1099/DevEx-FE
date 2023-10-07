import "./App.css";

import { ThemeProvider, createTheme } from "@mui/material/styles";

import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import { Grid } from "@mui/material";

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
        main: "#556cee",
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
            <Route path="/Login" element={<Login />}></Route>
            <Route path="/Signup" element={<Signup />}></Route>
          </Routes>
          <Footer />
        </Grid>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
