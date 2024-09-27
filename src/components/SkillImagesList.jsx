import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import skills from "../assets/data/skillsdata";
import { Slide, Tooltip, styled } from "@mui/material";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { useMediaQuery } from "@mui/material"; // Import useMediaQuery
// Define breakpoints for screen sizes

export default function SkillImageList() {
  const container = useRef();
  const isInView = useInView(container, { once: true });

  const isXs = useMediaQuery((theme) => theme.breakpoints.down("xs"));
  const isSm = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const isMd = useMediaQuery((theme) => theme.breakpoints.down("md"));

  const cols = isMd ? 2 : isSm ? 3 : isXs ? 2 : 6; // 6 for large screens, 4 for medium, 3 for small, 2 for extra-small

  const Image = styled("img")(({ theme }) => ({
    objectFit: "contain",
    borderRadius: 10,
    width: 170,
    height: 90,
    [theme.breakpoints.up("sm")]: {
      width: 200,
      height: 100,
      objectFit: "contain",
    },
  }));
  return (
    <ImageList
      ref={container}
      cols={cols}
      rowHeight={100}
      sx={{
        padding: "10px 10px",
        boxShadow: "0 4px 30px grey",
        borderRadius: "16px",
        background: "transparent",
      }}
    >
      {skills.map((item) => (
        <Slide
          in={isInView}
          direction="right"
          easing={"cubic-bezier(0.0, 0, 0.2, 1)"}
          timeout={4000}
        >
          <Tooltip title={item.name}>
            <ImageListItem
              key={item.name}
              sx={{
                background: "rgba(255, 255, 255, 0.2)",

                borderRadius: "16px",
                boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                backdropFilter: "blur(5px)",
                WebkitBackdropFilter: "blur(5px)", // For Safari support
                border: "1px solid rgba(255, 255, 255, 0.3)",
                borderRadius: 3,
                margin: "0px 0px",
                padding: "20px 0px",
              }}
            >
              <Image
                srcSet={`${item.url}`}
                src={`${item.url}`}
                alt={item.name}
                loading="lazy"
              />
            </ImageListItem>
          </Tooltip>
        </Slide>
      ))}
    </ImageList>
  );
}
