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
import GitHubIcon from "@mui/icons-material/GitHub";
import pdf from "../assets/resume.pdf";
import { Backdrop } from "@mui/material";

const actions = [
  { icon: <BlurLinearIcon />, name: "Skills", href: "#skills" },
  { icon: <AutoAwesomeMotionIcon />, name: "Projects", href: "#projects" },
  {
    icon: <ConnectWithoutContactIcon />,
    name: "Connect",
    href: "#connect",
  },
  {
    icon: <PictureAsPdfIcon />,
    name: "Resume",
    href: pdf,
  },
  {
    icon: <GitHubIcon />,
    name: "Github",
    href: "https://github.com/DamianMan",
  },
];

export default function OpenIconSpeedDial() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = (href) => {
    setOpen(false);
    window.location.href = href;
  };
  return (
    <Box
      sx={{
        flexGrow: 1,

        position: "absolute",
        top: 0,
        right: 5,
      }}
    >
      <Backdrop open={open} />
      <SpeedDial
        direction="down"
        ariaLabel="SpeedDial tooltip example"
        sx={{
          "& .MuiSpeedDial-root": {
            backgroundColor: "#00bf63", // Customize the background of the SpeedDial button
            "&:hover": {
              backgroundColor: "#00a653", // Customize hover background color
            },
          },
        }}
        FabProps={{
          sx: {
            boxShadow: "none",
            backgroundColor: "transparent",
            color: "#00bf63", // Replace with your desired color
            "&:hover": {
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
        onOpen={handleOpen}
        open={open}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            tooltipOpen
            onClick={() => handleClose(action.href)}
          />
        ))}
      </SpeedDial>
      {/* <Backdrop open={open} />
      <SpeedDial
        ariaLabel="SpeedDial tooltip example"
        direction="down"
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
        FabProps={{
          sx: {
            boxShadow: "none",
            backgroundColor: "transparent",
            color: "#00bf63", // Replace with your desired color
            "&:hover": {
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
            tooltipOpen
            href={action.href}
          />
        ))}
      </SpeedDial> */}
    </Box>
  );
}
