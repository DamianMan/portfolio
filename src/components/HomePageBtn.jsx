import * as React from "react";
import Button from "@mui/material/Button";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";
import Stack from "@mui/material/Stack";
import { green } from "@mui/material/colors";
import { keyframes } from "@emotion/react";
const pulse = keyframes`  
 
0% {
 box-shadow: 0 0 0 0 ${green[400]};
}

70% {
 box-shadow: 0 0 0 20px rgb(218 103 68 / 0%);
}

100% {
 box-shadow: 0 0 0 0 rgb(218 103 68 / 0%);
}

`;

export default function HomePageBtn() {
  return (
    <Stack sx={{ margin: "30px 0px" }}>
      <Button
        sx={{
          background: "#00bf63",
          padding: "10px 30px",
          fontFamily: "Montserrat",
          fontWeight: 300,
          fontSize: 20,
          borderRadius: 20,
          animation: `${pulse} 2s infinite`,
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
