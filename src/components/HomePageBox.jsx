import React from "react";
import { styled, Typography, Box, Fade, Link } from "@mui/material";
import meAi from "../assets/meAi.jpg";
import { grey } from "@mui/material/colors";

const Main = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",

  [theme.breakpoints.up("sm")]: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
}));

const Image = styled("img")(({ theme }) => ({
  width: 300,
  height: 200,
  objectFit: "cover",
  borderRadius: 10,
  boxShadow: "5px 5px 10px grey",
}));

const FullStackText = styled(Typography)(({ theme }) => ({
  fontSize: 33,
  fontFamily: "Montserrat",
  fontWeight: 500,
  color: "grey",
  textAlign: "left",
  [theme.breakpoints.up("sm")]: {
    fontSize: 50,
  },
}));

const IntroText = styled(Typography)(({ theme }) => ({
  fontSize: 16,
  fontFamily: "Montserrat",
  fontWeight: 300,
  color: "darkgrey",
  [theme.breakpoints.up("sm")]: {
    fontSize: 18,
  },
}));

const Containers = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  margin: "0% 10%",

  [theme.breakpoints.up("sm")]: {
    margin: "0px 1%",
  },
}));
function HomePageBox({ isLightMode }) {
  console.log(meAi);
  return (
    <Main>
      <Fade in={true} timeout={4000}>
        <Containers>
          <FullStackText>Junior Full </FullStackText>
          <FullStackText>Stack Developer</FullStackText>
        </Containers>
      </Fade>
      <Fade in={true} timeout={6000}>
        <Containers
          sx={{
            borderRadius: 2,
            padding: 3,
            margin: "5% 10%",
          }}
        >
          <IntroText align="left">
            Welcome There! Check out my portfolio here, my projects on{" "}
            <Link
              sx={{ textDecoration: "none", color: "#00bf63" }}
              href="https://github.com/DamianMan"
            >
              GitHub
            </Link>
            , and connect with me on{" "}
            <Link
              sx={{ textDecoration: "none", color: "#00bf63" }}
              href="https://www.linkedin.com/in/damiano-manzillo-787344259/"
            >
              LinkedIn
            </Link>
            .
          </IntroText>
          <br></br>
          <IntroText align="left">
            This is my showcase where you can see what means transitioning from
            the world of professional football to the dynamic landscape of
            technology.
          </IntroText>
        </Containers>
      </Fade>
      <Fade in={true} timeout={7000}>
        <Containers
          sx={{
            margin: "0px 1%",
          }}
        >
          <Image src={meAi} />
        </Containers>
      </Fade>
    </Main>
  );
}

export default HomePageBox;
