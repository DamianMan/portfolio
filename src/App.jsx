import { styled } from "@mui/material";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

const Title = styled(Box)(({ theme }) => ({
  backgroundColor: "aliceblue",
  boxShadow: "5px 5px 5px lightcyan",
}));

function App() {
  return (
    <>
      <Title>
        <p className="read-the-docs">This is Damiano Manzillo Portfolio 💼</p>
      </Title>
    </>
  );
}

export default App;
