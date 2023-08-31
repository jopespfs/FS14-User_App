import { useState } from "react";
//import "./App.css";
import { Menubar } from "./components/Menubar";
import { Footer } from "./components/Footer";
import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Container>
        <Menubar />
        <Outlet/>
        <Footer />
      </Container>
    </>
  );
}

export default App;
