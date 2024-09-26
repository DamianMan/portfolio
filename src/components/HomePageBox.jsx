import React from "react";
import { styled, Typography, Box } from "@mui/material";
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
  fontWeight: 100,
  [theme.breakpoints.up("sm")]: {
    fontSize: 50,
  },
}));

const IntroText = styled(Typography)(({ theme }) => ({
  fontSize: 16,
  fontFamily: "Roboto, san-serif",
  fontWeight: 100,
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
      <Containers>
        <FullStackText color="#00bf63" align="left">
          Junior
        </FullStackText>
        <FullStackText color="#00bf63" align="left">
          Full Stack Developer
        </FullStackText>
      </Containers>
      <Containers
        sx={{
          background: "#86D293",
          boxShadow: "5px 5px 10px grey",
          borderRadius: 5,
          padding: 3,
          margin: "5% 10%",
        }}
      >
        <IntroText
          color={isLightMode ? `${grey[900]}` : "aliceblue"}
          align="left"
        >
          Welcome to my personal portfolio, a place where I can share with you
          all my projects, work experiences and skills.
        </IntroText>
        <br></br>
        <IntroText
          color={isLightMode ? `${grey[900]}` : "aliceblue"}
          align="left"
        >
          Mine is a really particular transition: I come from the world of
          professional football and I always had a strong passion and inner
          attraction to the world of technology.
        </IntroText>
      </Containers>
      <Containers
        sx={{
          margin: "0px 1%",
        }}
      >
        <Image src={meAi} />
      </Containers>
    </Main>
  );
}

export default HomePageBox;
