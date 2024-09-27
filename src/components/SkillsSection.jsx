import { Slide, Stack, Typography } from "@mui/material";
import React from "react";
import SkillImageList from "./SkillImagesList";
import { styled, Box } from "@mui/material";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Title = styled(Typography)(({ theme }) => ({
  letterSpacing: 3,
  textAlign: "center",
  fontWeight: 100,
  color: "#00bf63",
  fontFamily: "Roboto, san-serif",
  boxShadow: "3px 3px 10px grey",
  fontSize: 30,
  borderRadius: 10,
  width: "25%",
  padding: "0px 10px",

  margin: "30px 10px",
  [theme.breakpoints.up("sm")]: {
    letterSpacing: 7,
    width: "10%",
  },
}));

const Description = styled(Typography)(({ theme }) => ({
  textAlign: "start",
  fontWeight: 300,
  color: "darkgrey",
  fontStyle: "italic",

  fontFamily: "Montserrat",
  fontSize: 16,
  borderRadius: 10,
  paddingLeft: 5,
  margin: "30px 10px",
  [theme.breakpoints.up("sm")]: {
    fontSize: 20,
    width: "50%",
  },
}));

function SkillsSection(props) {
  const container = useRef();
  const isInView = useInView(container, { once: true });
  return (
    <Slide ref={container} in={isInView} direction="left" timeout={3000}>
      <Stack
        id="skills"
        sx={{ display: "flex", flexDirection: "column", width: "100%" }}
      >
        <Title>Skills</Title>
        <Box>
          <Slide in={isInView} timeout={3000} direction="right">
            <Description>
              My inner attraction and strong passion to the world of technology
              led me to learn so many new things: these are some just of some
              skills I gained during my studies.
            </Description>
          </Slide>
          <Slide in={isInView} timeout={3000} direction="left">
            <Description>
              My love for mobile apps development brought me to expand my
              studies to React Native, which is my current and main goal to
              accomplish: almost in deployment for a mobile app (check the
              project on GitHub).
            </Description>
          </Slide>
          <Slide in={isInView} timeout={3000} direction="right">
            <Description>
              And my really next subject of attention will be Django as Python
              framework to complete my Python skills set
            </Description>
          </Slide>
        </Box>

        <SkillImageList />
      </Stack>
    </Slide>
  );
}

export default SkillsSection;
