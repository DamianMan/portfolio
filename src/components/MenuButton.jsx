import * as React from "react";
import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import BlurLinearIcon from "@mui/icons-material/BlurLinear";
import AutoAwesomeMotionIcon from "@mui/icons-material/AutoAwesomeMotion";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import CloseIcon from "@mui/icons-material/Close";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SegmentTwoToneIcon from "@mui/icons-material/SegmentTwoTone";
import { grey } from "@mui/material/colors";

const actions = [
  { icon: <BlurLinearIcon />, name: "Skills" },
  { icon: <AutoAwesomeMotionIcon />, name: "Projects" },
  { icon: <ConnectWithoutContactIcon />, name: "Connect With Me" },
  { icon: <PictureAsPdfIcon />, name: "Resume" },
];

export default function OpenIconSpeedDial() {
  return (
    <SpeedDial
      ariaLabel="SpeedDial openIcon example"
      direction="down"
      FabProps={{
        sx: {
          boxShadow: "none",
          backgroundColor: "transparent",
          color: "#00bf63", // Replace with your desired color
          "&:hover": {
            boxShadow: "none",

            backgroundColor: "transparent",

            color: "#73EC8B", // Replace with hover color
          },
          animation: "0.5s ease-in-out",
        },
      }}
      icon={
        <SpeedDialIcon
          icon={<SegmentTwoToneIcon fontSize="large" />}
          openIcon={<CloseIcon fontSize="large" />}
        />
      }
      sx={{
        position: "absolute",
        top: 0,
        left: 0,

        "& .MuiSpeedDial-root": {
          backgroundColor: "#00bf63", // Customize the background of the SpeedDial button
          "&:hover": {
            backgroundColor: "#00a653", // Customize hover background color
          },
        },
      }}
    >
      {actions.map((action) => (
        <SpeedDialAction
          key={action.name}
          icon={action.icon}
          tooltipTitle={action.name}
        />
      ))}
    </SpeedDial>
  );
}
