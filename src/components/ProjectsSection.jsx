import React, { useRef } from "react";
import { styled, Stack, Typography, Box, Grow, Slide } from "@mui/material";
import Grid from "@mui/material/Grid2";
import projectsData from "../assets/data/projectsData";
import ProjectItem from "./ProjectItem";
import { useInView } from "framer-motion";

const Title = styled(Typography)(({ theme }) => ({
  letterSpacing: 3,
  fontWeight: 100,
  textAlign: "center",
  color: "#00bf63",
  fontFamily: "Roboto, san-serif",
  boxShadow: "3px 3px 10px grey",
  fontSize: 30,
  borderRadius: 10,
  padding: "0px 20px",
  width: "30%",

  margin: "30px 10px",
  [theme.breakpoints.up("sm")]: {
    letterSpacing: 7,
    width: "10%",
  },
}));

function ProjectsSection(props) {
  const container = useRef();
  const inView = useInView(container, { once: true });
  return (
    <>
      <Slide ref={container} in={inView} direction="bottom" timeout={3000}>
        <Title>Projects</Title>
      </Slide>

      <Stack
        id="projects"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          width: "100%",
        }}
        ref={container}
      >
        <Grid container spacing={2}>
          {projectsData.map((item) => (
            <Grid
              size={{ xs: 12, md: 6 }}
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
    </>
  );
}

export default ProjectsSection;
