import { Box, Button, Stack, Typography, Zoom } from "@mui/material";
import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import { green } from "@mui/material/colors";
import { keyframes } from "@emotion/react";
import { useInView } from "framer-motion";
import { useRef } from "react";
const pulse = keyframes`  
 
0% {
 box-shadow: 0 0 0 0 rgb(102, 204, 153);
}

70% {
 box-shadow: 0 0 0 20px rgb(218 103 68 / 0%);
}

100% {
 box-shadow: 0 0 0 0 rgb(218 103 68 / 0%);
}

`;

function GithubBox({ isLightMode }) {
  const container = useRef();
  const inView = useInView(container, { once: true });
  return (
    <Zoom ref={container} in={inView} timeout={2000}>
      <Stack
        sx={{
          padding: 3,
          marginTop: { xs: 8, md: 25 },
          background: "transparent",
          borderRadius: "16px",
          boxShadow: "0 4px 20px darkgray",
          backdropFilter: "blur(5px)",
          WebkitBackdropFilter: "blur(5px)", // For Safari support
          border: "1px solid rgba(255, 255, 255, 0.3)",
          margin: "0px 20px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <Typography fontFamily={"Montserrat"} color="darkgrey">
            For more projects please visit my
            <Typography fontFamily={"Montserrat"} variant="span">
              GitHub
            </Typography>{" "}
            profile to check all my projects. You will find somenthing like:
            Python Games, Python Tkinter Apps, Webapp Palette Finder, Prototype
            Flask Cars E-Commerce and much more..
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: { xs: "flex-start", md: "center" },
            alignItems: "center",
          }}
        >
          <Button
            sx={{
              background: "rgb(102, 204, 153)",
              padding: "10px 30px",
              fontFamily: "Montserrat",
              fontWeight: 300,
              fontSize: { xs: 14, md: 20 },
              borderRadius: 20,
              animation: `${pulse} 2s infinite`,
              marginTop: "20px",
              color: `${isLightMode ? "#000" : "aliceblue"}`,
            }}
            variant="contained"
            href="https://github.com/DamianMan"
          >
            Go To
            <GitHubIcon fontSize="large" sx={{ ml: 1 }} />
          </Button>
        </Box>
      </Stack>
    </Zoom>
  );
}

export default GithubBox;
