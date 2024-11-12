import { Button, Fade, styled } from "@mui/material";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CircularProgress from "@mui/material/CircularProgress";
import meOpacity from "./assets/meOpacity.jpg";
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import { grey } from "@mui/material/colors";
import { useState, useEffect } from "react";
import HomePageBox from "./components/HomePageBox";
import HomePageBtn from "./components/HomePageBtn";
import SkillsSection from "./components/SkillsSection";
import "./App.css";
import ProjectsSection from "./components/ProjectsSection";
import ContactMeSection from "./components/ContactMeSection";
import Footer from "./components/Footer";
const theme = createTheme({
  typography: {
    fontFamily: "Roboto, san-serif",
    fontWeight: 200,
  },
  palette: {
    primary: {
      main: "rgb(102, 204, 153)", // Default blue
    },
  },
});

const Main = styled("div")(({ theme }) => ({
  minHeight: "100vh", // Updated
  width: "100%",
  padding: 0,
  margin: 0,
  display: "flex",

  flexDirection: "column",
}));

const BoxTitle = styled(Box)(({ theme }) => ({
  backgroundColor: "#fff",
  boxShadow: "5px 5px 10px 0px rgb(102, 204, 153)",
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
  fontFamily: "Montserrat",
  fontWeight: 100,
}));

const Blank = styled(Box)(({ theme }) => ({
  background: "transparent",
  margin: 20,
  height: "10%",
  [theme.breakpoints.up("sm")]: {
    background: "transparent",
    margin: 80,
    height: "10%",
  },
}));

const ContainerIntro = styled(Box)(({ theme }) => ({
  marginTop: "40%",
  justifyContent: "center",
  alignItems: "center",
  backgroundImage: `url(${meOpacity})`,
  padding: "10% 5%",
  height: "100%",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "100%",
  ...theme.mixins.toolbar,

  [theme.breakpoints.up("sm")]: {
    display: "flex",

    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    padding: "5% 5%",
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
          <CircularProgress
            size={80}
            sx={{
              color: "rgb(102, 204, 153)",
              alignSelf: "center",
              marginTop: { xs: "80%", md: "35%", lg: "35%" },
            }}
          />
        ) : (
          <>
            <Fade in={true} timeout={2000}>
              <ContainerIntro>
                <BoxTitle
                  sx={{
                    background: `${isLightMode ? "aliceblue" : `${grey[900]}`}`,
                  }}
                >
                  <HomePageBox isLightMode={isLightMode} />
                </BoxTitle>

                <HomePageBtn text={"Explore"} isLightMode={isLightMode} />
              </ContainerIntro>
            </Fade>

            <Blank />
            <SkillsSection />
            <Blank />
            <ProjectsSection isLightMode={isLightMode} />
            <Blank />
            <ContactMeSection isLightMode={isLightMode} />
            <Blank />
            <Footer />
          </>
        )}
      </Main>
    </ThemeProvider>
  );
}

export default App;
