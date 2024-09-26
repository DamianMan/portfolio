import { Fade, styled } from "@mui/material";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import ResponsiveAppBar from "./components/ResponsiveAppBar";
import { grey } from "@mui/material/colors";
import { useState } from "react";
const theme = createTheme({
  typography: {
    fontFamily: "Roboto, san-serif",
    fontWeight: 200,
  },
});

const Main = styled("div")(({ theme }) => ({
  height: "100vh",
  width: "100%",
  padding: 0,
  margin: 0,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

const BoxTitle = styled(Box)(({ theme }) => ({
  backgroundColor: "#fff",
  boxShadow: "1px 2px 15px lime",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: 30,
  height: 1000,
}));

const Title = styled("h1")(({ theme }) => ({
  fontFamily: "Montserrat, san-serif",
  fontWeight: 100,
}));

function App() {
  const [isLightMode, setIsLightMode] = useState(false);

  const toogleTheme = () => {
    setIsLightMode(!isLightMode);
  };
  return (
    <ThemeProvider theme={theme}>
      <Main
        style={{
          background: `${isLightMode ? "aliceblue" : `${grey[900]}`}`,
          transition: "0.5s ease-out",
        }}
      >
        <ResponsiveAppBar toogleTheme={toogleTheme} isLightMode={isLightMode} />
        <Fade in={isLightMode}>
          <BoxTitle>
            <Title>This is Damiano Manzillo Portfolio 💼</Title>
          </BoxTitle>
        </Fade>
      </Main>
    </ThemeProvider>
  );
}

export default App;
