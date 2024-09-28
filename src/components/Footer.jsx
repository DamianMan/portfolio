import { Stack, Typography } from "@mui/material";
import React from "react";

function Footer(props) {
  return (
    <Stack
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#00bf63",
        padding: "10px 0",
      }}
    >
      <Typography color="aliceblue" fontFamily={"Montserrat"}>
        Copyright ©️ 2024 Damiano Manzillo
      </Typography>
    </Stack>
  );
}

export default Footer;
