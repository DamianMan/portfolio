import { Fade, styled } from "@mui/material";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CircularProgress from "@mui/material/CircularProgress";
import meOpacity from "./assets/meOpacity.jpg";
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import { grey } from "@mui/material/colors";
import { useState, useEffect } from "react";
import HomePageBox from "./components/HomePageBox";
const theme = createTheme({
  typography: {
    fontFamily: "Roboto, san-serif",
    fontWeight: 200,
  },
});

const Main = styled("div")(({ theme }) => ({
  height: "100%",
  width: "100%",
  padding: 0,
  margin: 0,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
}));

const BoxTitle = styled(Box)(({ theme }) => ({
  backgroundColor: "#fff",
  boxShadow: "5px 5px 10px 0px limegreen",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: 20,
  padding: "10% 0",
  [theme.breakpoints.up("sm")]: {
    padding: 30,
  },
}));

const Title = styled("h1")(({ theme }) => ({
  fontFamily: "Montserrat, san-serif",
  fontWeight: 100,
}));

const Blank = styled(Box)(({ theme }) => ({
  background: "transparent",
  margin: 100,
  height: "10%",
}));

const ContainerIntro = styled(Box)(({ theme }) => ({
  marginTop: "40%",
  justifyContent: "center",
  alignItems: "center",
  backgroundImage: `url(${meOpacity})`,
  padding: "10% 5%",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "100%",
  ...theme.mixins.toolbar,

  [theme.breakpoints.up("sm")]: {
    display: "flex",

    justifyContent: "center",
    alignItems: "center",
    padding: "10% 5%",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "100%",
    marginTop: "15%",
  },
}));

function App() {
  const [isLightMode, setIsLightMode] = useState(true);

  const toogleTheme = () => {
    setIsLightMode(!isLightMode);
  };
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Main
        style={{
          background: `${isLightMode ? "aliceblue" : `${grey[900]}`}`,
          transition: "1s ease-out",
        }}
      >
        <ResponsiveAppBar toogleTheme={toogleTheme} isLightMode={isLightMode} />
        {loading ? (
          <CircularProgress size={80} sx={{ color: "limegreen" }} />
        ) : (
          <>
            <ContainerIntro>
              <BoxTitle
                sx={{
                  background: `${isLightMode ? "aliceblue" : `${grey[900]}`}`,
                }}
              >
                <HomePageBox isLightMode={isLightMode} />
              </BoxTitle>
            </ContainerIntro>
          </>
        )}
        <Blank />
      </Main>
    </ThemeProvider>
  );
}

export default App;
