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
  color: "rgb(104, 195, 163)",
  fontFamily: "Roboto, san-serif",
  boxShadow: "3px 3px 10px grey",
  fontSize: 30,
  borderRadius: 10,
  width: "45%",
  padding: "0px 10px",

  margin: "30px 10px",
  [theme.breakpoints.up("sm")]: {
    letterSpacing: 7,
    width: "20%",
  },
}));

const Description = styled(Typography)(({ theme }) => ({
  textAlign: "start",
  fontWeight: 400,
  color: "darkgrey",
  fontStyle: "italic",

  fontFamily: "Montserrat",
  fontSize: 16,
  borderRadius: 10,
  paddingLeft: 5,
  margin: "30px 10px",
  [theme.breakpoints.up("sm")]: {
    fontSize: 18,
    width: "50%",
  },
}));

function SkillsSection(props) {
  const container = useRef();
  const isInView = useInView(container, { once: true });
  return (
    <Stack
      id="about"
      sx={{ display: "flex", flexDirection: "column", width: "100%" }}
    >
      <Slide ref={container} in={isInView} direction="left" timeout={3000}>
        <Title>About Me</Title>
      </Slide>

      <Box>
        <Slide in={isInView} timeout={3000} direction="right">
          <Description>
            I always had an inner attraction and strong passion to the world of
            technology which led me to discover and be more and more amazed by
            this fanstatic environment: below are just some the skills I gained
            during my career.
          </Description>
        </Slide>
        <Slide in={isInView} timeout={3000} direction="left">
          <Description>
            My love for mobile apps development brought me to expand my studies
            to React Native, which is my current and main goal to accomplish:
            actually I'm almost in a release phase for a mobile app (check the
            project on GitHub).
          </Description>
        </Slide>
        <Slide in={isInView} timeout={3000} direction="right">
          <Description>
            Every successful mobile or web app relies on a strong, efficient
            backend. To master this, I expanded my expertise to building robust
            systems with RESTful APIs. My journey took me through Django, Flask,
            Node, and Express, where I developed projects that showcase my
            ability to manage both SQL and NoSQL databases, while designing
            scalable and dynamic web services.
          </Description>
        </Slide>
      </Box>
      <Slide
        id="skills"
        ref={container}
        in={isInView}
        direction="left"
        timeout={3000}
      >
        <Title>Skills</Title>
      </Slide>
      <SkillImageList />
    </Stack>
  );
}

export default SkillsSection;
