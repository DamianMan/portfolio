import { styled } from "@mui/material";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

const BoxTitle = styled(Box)(({ theme }) => ({
  backgroundColor: "aliceblue",
  boxShadow: "5px 5px 5px lime",
  width: "100%",
}));

const Title = styled("h1")(({ theme }) => ({
  color: "darkgrey",
  fontFamily: "Montserrat san-serif",
  fontWeight: "light",
}));

function App() {
  return (
    <>
      <BoxTitle>
        <Title>This is Damiano Manzillo Portfolio 💼</Title>
      </BoxTitle>
    </>
  );
}

export default App;
