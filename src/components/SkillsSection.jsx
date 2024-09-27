import { Stack, Typography } from "@mui/material";
import React from "react";
import SkillImageList from "./SkillImagesList";
import { styled } from "@mui/material";
import { BorderRight, Padding } from "@mui/icons-material";

const Title = styled(Typography)(({ theme }) => ({
  letterSpacing: 1,
  textAlign: "start",
  fontWeight: 100,
  color: "#00bf63",
  backgroun: "#fff",
  fontFamily: "Roboto, san-serif",
  boxShadow: "0px 3px 3px 1px lightgrey",
  fontSize: 30,
  borderRadius: 10,
  width: "25%",
  paddingLeft: 5,
  margin: "30px 20px",
  [theme.breakpoints.up("sm")]: {
    letterSpacing: 7,
    margin: "30px 0px",
  },
}));

function SkillsSection(props) {
  return (
    <Stack sx={{ height: 1000 }} id="skills">
      <Title>Skills</Title>
      <SkillImageList />
    </Stack>
  );
}

export default SkillsSection;
