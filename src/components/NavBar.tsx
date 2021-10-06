import React from "react";
import "../css/About.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function NavBar(): JSX.Element {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Nav className="me-auto" >
          <Nav.Link href="#Home">Home</Nav.Link>
          <Nav.Link href="#Prints">Prints</Nav.Link>
          <Nav.Link href="#Portfolio">Portfolio</Nav.Link>
          <Nav.Link href="#About">About</Nav.Link>
          <Nav.Link href="#Contact">Contact</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavBar;
