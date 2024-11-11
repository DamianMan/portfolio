import React, { useRef } from "react";
import { styled, Stack, Typography, Box, Grow, Slide } from "@mui/material";
import Grid from "@mui/material/Grid2";
import projectsData from "../assets/data/projectsData";
import ProjectItem from "./ProjectItem";
import { useInView } from "framer-motion";
import GithubBox from "./GithubBox";

const Title = styled(Typography)(({ theme }) => ({
  letterSpacing: 3,
  fontWeight: 100,
  textAlign: "center",
  color: "rgb(104, 195, 163)",
  fontFamily: "Roboto, san-serif",
  boxShadow: "3px 3px 10px grey",
  fontSize: 30,
  borderRadius: 10,
  padding: "0px 20px",
  width: "30%",

  margin: "30px 10px",
  [theme.breakpoints.up("sm")]: {
    letterSpacing: 7,
    width: "15%",
  },
}));

function ProjectsSection(props) {
  const container = useRef();
  const inView = useInView(container, { once: true });
  return (
    <>
      <Slide
        id="projects"
        ref={container}
        in={inView}
        direction="down"
        timeout={3000}
      >
        <Title>Projects</Title>
      </Slide>

      <Stack
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          width: "100%",
        }}
        ref={container}
      >
        <Grid container spacing={2} rowGap={3}>
          {projectsData.map((item) => (
            <Grid
              key={item.name}
              size={{ xs: 12, md: 4 }}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                margin: "5px 0",
              }}
            >
              <ProjectItem item={item} />
            </Grid>
          ))}
        </Grid>
      </Stack>
      <GithubBox />
    </>
  );
}

export default ProjectsSection;
