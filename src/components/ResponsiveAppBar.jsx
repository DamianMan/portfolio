import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

import Tooltip from "@mui/material/Tooltip";

import { grey } from "@mui/material/colors";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import MenuButton from "./MenuButton";
import { styled } from "@mui/material";

function ResponsiveAppBar({ toogleTheme, isLightMode }) {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleToogleClick = () => {
    toogleTheme();
  };

  const TitleName = styled(Typography)(({ theme }) => ({
    fontFamily: "Roboto, san-serif",
    fontWeight: 400,
    fontSize: 20,
    letterSpacing: 3,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    color: `${isLightMode ? `${grey[800]}` : "aliceblue"}`,
    textDecoration: "none",
    [theme.breakpoints.up("sm")]: {
      letterSpacing: 10,
      fontSize: 30,
    },
  }));

  const CustomBox = styled(Box)(({ theme }) => ({
    margin: "10px 10px",
  }));
  const Image = styled("img")(({ theme }) => ({
    width: 50,
    height: 50,
    objectFit: "cover",
    marginRight: 8,
  }));
  return (
    <AppBar
      position="fixed"
      style={{
        background: "transparent",
        boxShadow: `${!trigger ? "none" : "1px 1px 3px grey"}`,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",

        transition: "0.5s ease-out",
      }}
    >
      <CustomBox>
        <MenuButton />
      </CustomBox>
      <CustomBox>
        <TitleName
          variant="h6"
          noWrap
          component="a"
          href="#app-bar-with-responsive-menu"
        >
          Damiano
          {/* <DeveloperModeIcon
            sx={{
              display: { md: "flex" },
              color: "#00bf63",
              fontSize: 40,
              margin: "5px 0px",
              mr: 1,
            }}
          /> */}
          <Image src={"./src/assets/logo.png"} />
          Manzillo
        </TitleName>
      </CustomBox>

      <CustomBox>
        <Tooltip title={`Toogle ${isLightMode ? "dark" : "light"} mode`}>
          <IconButton
            onClick={handleToogleClick}
            style={{ position: "absolute", top: 15, right: 10 }}
          >
            <LightbulbIcon
              style={{
                color: `${isLightMode ? `${grey[900]}` : "aliceblue"}`,
              }}
            />
          </IconButton>
        </Tooltip>
      </CustomBox>
    </AppBar>
  );
}
export default ResponsiveAppBar;
