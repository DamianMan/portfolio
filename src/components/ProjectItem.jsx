import {
  styled,
  Stack,
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  CardHeader,
  Avatar,
  Chip,
  Grow,
} from "@mui/material";
import React, { useRef } from "react";

import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import { green, grey, red } from "@mui/material/colors";
import { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { useInView } from "framer-motion";

function ProjectItem({ item }) {
  const container = useRef();
  const inView = useInView(container, { once: true });
  const [favorite, setFavorite] = useState(false);
  const [lines, setLines] = useState(3);

  const onChangeFavorite = () => {
    setFavorite(!favorite);
  };
  console.log(item.image);

  const handleLines = () => {
    lines === 3 ? setLines(null) : setLines(3);
  };
  return (
    <Grow in={inView} timeout={3000}>
      <Card
        ref={container}
        sx={{
          maxWidth: "95%",
          borderRadius: 5,
          background: "transparent",
          boxShadow: "0px 5px 10px #00bf63",
        }}
      >
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: grey[800] }} aria-label="recipe">
              {item.name[0]}
            </Avatar>
          }
          sx={{
            color: "grey",
            fontFamily: "Montserrat",
            letterSpacing: 1,
            fontWeight: 300,
          }}
          titleTypographyProps={{ fontFamily: "Montserrat" }}
          title={item.name}
        />
        <CardMedia
          component="img"
          sx={{ objectFit: "contain", width: "100%", height: "auto" }}
          image={`./src/assets/${item.image}`}
          alt={item.name}
        />
        <CardContent>
          <Typography
            variant="body2"
            sx={{
              color: "darkgrey",
              fontFamily: "Montserrat",
              display: "-webkit-box",
              overflow: "hidden",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: lines /* Number of lines */,
              textOverflow: "ellipsis",
            }}
          >
            {item.description}
          </Typography>
          <Box sx={{ marginTop: 1 }}>
            {item.tech.map((technology, i) => (
              <Chip
                key={technology + i}
                variant="outlined"
                label={technology}
                sx={{ color: "#00bf63", border: "1px solid #00bf63" }}
              />
            ))}
          </Box>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon
              onClick={onChangeFavorite}
              sx={{ color: favorite ? `${red[400]}` : "darkgrey" }}
            />
          </IconButton>

          <IconButton onClick={handleLines}>
            {lines === 3 ? (
              <ExpandMoreIcon sx={{ color: "darkgrey" }} />
            ) : (
              <ExpandLessIcon sx={{ color: "darkgrey" }} />
            )}
          </IconButton>
        </CardActions>
      </Card>
    </Grow>
  );
}

export default ProjectItem;
