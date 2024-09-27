import * as React from "react";
import Button from "@mui/material/Button";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";
import Stack from "@mui/material/Stack";

export default function HomePageBtn() {
  return (
    <Stack sx={{ margin: "30px 0px" }}>
      <Button
        sx={{
          background: "#00bf63",
          padding: "10px 30px",
          fontFamily: "Roboto, san-serif",
          fontSize: 20,
        }}
        variant="contained"
        component="a"
        href="#skills"
      >
        Explore
        <ArrowCircleDownIcon fontSize="large" sx={{ ml: 1 }} />
      </Button>
    </Stack>
  );
}
