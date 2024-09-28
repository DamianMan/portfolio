import {
  Stack,
  Typography,
  styled,
  Box,
  TextField,
  IconButton,
  Button,
  Collapse,
} from "@mui/material";
import React, { useRef, useState } from "react";
import Grid from "@mui/material/Grid2";
import HomeIcon from "@mui/icons-material/Home";
import PlaceIcon from "@mui/icons-material/Place";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import PhoneIcon from "@mui/icons-material/Phone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import SendIcon from "@mui/icons-material/Send";
import { useInView } from "framer-motion";

const info = [
  {
    icon: (
      <IconButton>
        {" "}
        <HomeIcon sx={{ color: "#00bf63", mr: 1, my: 0.5 }} />
      </IconButton>
    ),
    text: "Via G. Cobellis, n° 16, 84078",
  },
  {
    icon: (
      <IconButton>
        {" "}
        <PlaceIcon sx={{ color: "#00bf63", mr: 1, my: 0.5 }} />
      </IconButton>
    ),
    text: "Vallo della Lucania, Salerno, Italy",
  },
  {
    icon: (
      <IconButton href="mailto:damianomanzillo@yahoo.com">
        <AlternateEmailIcon sx={{ color: "#00bf63", mr: 1, my: 0.5 }} />
      </IconButton>
    ),
    text: "damianomanzillo@yahoo.com",
  },
  {
    icon: (
      <IconButton href="tel:+393928309592">
        <PhoneIcon sx={{ color: "#00bf63", mr: 1, my: 0.5 }} />
      </IconButton>
    ),
    text: "+39 392 8309592",
  },
  {
    icon: (
      <IconButton href="https://www.linkedin.com/in/damiano-manzillo-787344259/">
        <LinkedInIcon sx={{ color: "#00bf63", mr: 1, my: 0.5 }} />
      </IconButton>
    ),
    text: "LinkedIn",
  },
];

const Title = styled(Typography)(({ theme }) => ({
  letterSpacing: 3,
  fontWeight: 100,
  textAlign: "center",
  color: "#00bf63",
  fontFamily: "Roboto, san-serif",
  boxShadow: "3px 3px 10px grey",
  fontSize: 30,
  borderRadius: 10,
  padding: "0px 20px",
  width: "30%",

  margin: "30px 10px",
  [theme.breakpoints.up("sm")]: {
    letterSpacing: 7,
    width: "10%",
  },
}));

function ContactMeSection(props) {
  const container = useRef();
  const inView = useInView(container, { once: true });
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleFullName = (text) => {
    setFullName(text.target.value);
  };
  const handleEmail = (text) => {
    setEmail(text.target.value);
  };
  const handleMessage = (text) => {
    setMessage(text.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Create mailto link
    const mailtoLink = `mailto:damianomanzillo@yahoo.com?subject=${encodeURIComponent(
      `Email from Portfolio`
    )}&body=${encodeURIComponent(
      `Name: ${fullName}\nEmail: ${email}\n\nMessage:\n${message}`
    )}`;

    // Open the default mail client
    window.location.href = mailtoLink;
  };
  return (
    <>
      <Collapse ref={container} in={inView} timeout={6000} collapsedSize={30}>
        <Title id="connect">Connect</Title>
        <Typography align="center" fontFamily={"Montserrat"} color="grey">
          Please leave me a message and I will get in touch with you 💬
        </Typography>
        <form onSubmit={handleSubmit}>
          <Stack col={2} sx={{ marginTop: "30px" }}>
            <Grid container spacing={3}>
              <Grid
                size={{ xs: 12, md: 6, lg: 6 }}
                sx={{
                  display: "flex",
                  justifyContent: {
                    xs: "center",
                    md: "flex-end",
                    lg: "flex-end",
                  },
                  alignItems: { xs: "center", md: "flex-end", lg: "flex-end" },
                  flexDirection: "column",
                }}
              >
                <TextField
                  sx={{
                    width: { xs: "90%", md: "50%", lg: "50%" },
                    input: { fontFamily: "Montserrat", color: "darkgrey" },
                    label: { fontFamily: "Montserrat" },
                  }}
                  variant="filled"
                  label="Full Name"
                  type="text"
                  value={fullName}
                  onChange={handleFullName}
                  color="success"
                  focused
                  required
                />
                <TextField
                  sx={{
                    width: { xs: "90%", md: "50%", lg: "50%" },
                    margin: "5px 0",
                    input: { fontFamily: "Montserrat", color: "darkgrey" },
                    label: { fontFamily: "Montserrat" },
                  }}
                  variant="filled"
                  label="Email"
                  type="email"
                  value={email}
                  onChange={handleEmail}
                  color="success"
                  focused
                  required
                />
                <TextField
                  sx={{
                    width: { xs: "90%", md: "50%", lg: "50%" },
                    input: { fontFamily: "Montserrat" },
                    label: { fontFamily: "Montserrat" },

                    "& .MuiInputBase-input": {
                      color: "darkgrey", // Change the input text color
                      fontFamily: "Montserrat",
                    },
                  }}
                  label="Message"
                  multiline
                  rows={4}
                  value={message}
                  variant="filled"
                  onChange={handleMessage}
                  color="success"
                  focused
                  required
                />
              </Grid>
              <Grid
                size={{ xs: 12, md: 6, lg: 6 }}
                sx={{
                  display: "flex",
                  justifyContent: {
                    xs: "center",
                    md: "flex-start",
                    lg: "flex-start",
                  },
                  alignItems: {
                    xs: "center",
                    md: "flex-start",
                    lg: "flex-start",
                  },
                  flexDirection: "column",
                }}
              >
                {info.map((item, i) => (
                  <Box
                    key={i}
                    sx={{
                      display: "flex",
                      justifyContent: {
                        xs: "center",
                        md: "flex-start",
                        lg: "flex-start",
                      },
                      alignItems: {
                        xs: "center",
                        md: "flex-start",
                        lg: "flex-start",
                      },
                      width: "90%",
                    }}
                  >
                    {item.icon}
                    <TextField
                      id="input-with-sx"
                      label={item.text}
                      variant="standard"
                      disabled
                      sx={{
                        "& .MuiInputLabel-root": {
                          fontFamily: "Montserrat", // Apply font family to the label
                          color: "darkgrey",
                        },

                        width: { xs: "100%", md: "50%", lg: "50%" },
                      }}
                    />
                  </Box>
                ))}
              </Grid>
            </Grid>
          </Stack>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin: "30px 0",
            }}
          >
            <Button
              variant="contained"
              sx={{
                width: { xs: "50%", md: "10%" },
                background: "#00bf63",
                color: "aliceblue",
                borderRadius: "16px",
              }}
              type="submit"
            >
              Send
              <SendIcon sx={{ ml: 1 }} />
            </Button>
          </Box>
        </form>
      </Collapse>
    </>
  );
}

export default ContactMeSection;
