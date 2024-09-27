import { Stack, Typography } from "@mui/material";
import React from "react";
import SkillImageList from "./SkillImagesList";
import { styled, Box } from "@mui/material";

const Title = styled(Typography)(({ theme }) => ({
  letterSpacing: 1,
  textAlign: "start",
  fontWeight: 100,
  color: "#00bf63",
  fontFamily: "Roboto, san-serif",
  boxShadow: "0px 3px 3px 1px lightgrey",
  fontSize: 30,
  borderRadius: 10,
  width: "25%",
  paddingLeft: 5,
  margin: "30px 10px",
  [theme.breakpoints.up("sm")]: {
    letterSpacing: 7,
    width: "15%",
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
  return (
    <Stack id="skills" sx={{ display: "flex", flexDirection: "column" }}>
      <Title>Skills</Title>
      <Box>
        <Description>
          My inner attraction and strong passion to the world of technology led
          me to learn so many new things: these are some just of some skills I
          gained during my studies.
        </Description>
        <Description>
          My love for mobile apps development brought me to expand my studies to
          React Native, which is my current and main goal to accomplish: almost
          in deployment for a mobile app (check the project on GitHub).
        </Description>
        <Description>
          And my really next subject of attention will be Django as Python
          framework to complete my Python skills set
        </Description>
      </Box>

      <SkillImageList />
    </Stack>
  );
}

export default SkillsSection;
