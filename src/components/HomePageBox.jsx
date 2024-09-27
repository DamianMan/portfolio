import React from "react";
import { styled, Typography, Box, Fade } from "@mui/material";
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
  fontFamily: "Roboto, san-serif",
  fontWeight: 500,
  color: "grey",
  [theme.breakpoints.up("sm")]: {
    fontSize: 50,
  },
}));

const IntroText = styled(Typography)(({ theme }) => ({
  fontSize: 16,
  fontFamily: "Roboto, san-serif",
  fontWeight: 100,
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
  return (
    <Main>
      <Fade in={true} timeout={4000}>
        <Containers>
          <FullStackText align="left">Junior</FullStackText>
          <FullStackText align="left">Full Stack Developer</FullStackText>
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
            Welcome to my personal portfolio, a place where I can share with you
            all my projects, work experiences and skills.
          </IntroText>
          <br></br>
          <IntroText align="left">
            Mine is a really particular transition: I come from the world of
            professional football and I always had a strong passion and inner
            attraction to the world of technology.
          </IntroText>
        </Containers>
      </Fade>
      <Fade in={true} timeout={8000}>
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
