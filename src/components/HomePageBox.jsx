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
  boxShadow: "5px 5px 10px rgb(102, 204, 153)",
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
  fontFamily: "Montserrat",
  fontWeight: 300,
  color: "darkgrey",
}));

const Containers = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "flex-start",
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
          <IntroText
            align="left"
            sx={{
              color: "gray",
              fontWeight: 400,
              fontSize: 18,
            }}
          >
            Check out my projects here and on{" "}
            <Link
              sx={{ textDecoration: "none", color: "rgb(102, 204, 153)" }}
              href="https://github.com/DamianMan"
            >
              GitHub.
            </Link>
            <br />
            Connect with me on{" "}
            <Link
              sx={{ textDecoration: "none", color: "rgb(102, 204, 153)" }}
              href="https://www.linkedin.com/in/damiano-manzillo-787344259/"
            >
              LinkedIn.
            </Link>
          </IntroText>
          <br></br>
          <IntroText align="left" sx={{ fontSize: 14 }}>
            Welcome to my portfolio—a reflection of a journey that began in my
            family's sportswear business, where I learned the values of hard
            work, precision, and customer focus. Today, I apply those same
            principles in the tech world, crafting seamless, user-centered
            solutions.
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
