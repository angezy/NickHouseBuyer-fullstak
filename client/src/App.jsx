import React from "react";
import { Container } from "@mui/material";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Navbar />
      <Container sx={{ my: 4 }}>
        <Home />
      </Container>
      <Footer />
    </>
  );
}

export default App;
