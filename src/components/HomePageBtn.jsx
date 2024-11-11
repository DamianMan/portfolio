import * as React from "react";
import Button from "@mui/material/Button";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";
import Stack from "@mui/material/Stack";
import { green } from "@mui/material/colors";
import { keyframes } from "@emotion/react";
const pulse = keyframes`  
 
0% {
 box-shadow: 0 0 0 0 rgb(102, 204, 153));
}

70% {
 box-shadow: 0 0 0 20px rgb(218 103 68 / 0%);
}

100% {
 box-shadow: 0 0 0 0 rgb(218 103 68 / 0%);
}

`;

export default function HomePageBtn({ text, isLightMode }) {
  return (
    <Stack sx={{ margin: "30px 0px" }}>
      <Button
        sx={{
          background: "rgb(102, 204, 153)",
          padding: "10px 30px",
          fontFamily: "Montserrat",
          fontWeight: 300,
          fontSize: 20,
          borderRadius: 20,
          animation: `${pulse} 2s infinite`,
          color: `${isLightMode ? "#000" : "aliceblue"}`,
        }}
        variant="contained"
        component="a"
        href="#skills"
      >
        {text}
        <ArrowCircleDownIcon
          fontSize="large"
          sx={{ ml: 1, color: `${isLightMode ? "#000" : "aliceblue"}` }}
        />
      </Button>
    </Stack>
  );
}
