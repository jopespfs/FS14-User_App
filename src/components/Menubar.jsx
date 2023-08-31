import React from "react";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export const Menubar = () => {
  return (
    <div>
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="/home">UserApp</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/usuarios">Usuários</Nav.Link>
            <Nav.Link href="/contato">Contato</Nav.Link>
          </Nav>
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <a href="/login"><Button size="sm" variant="outline-danger">teste</Button></a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
