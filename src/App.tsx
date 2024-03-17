import React from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import { Container } from "react-bootstrap";
import Header from "./components/header/Header";

function App() {
  return (
    <Container className="App">
      <Header />
    </Container>
  );
}

export default App;
