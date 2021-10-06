import React from "react";
import "../css/NavBar.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function NavBar(): JSX.Element {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Nav className="me-auto nav-styles" >
          <Nav.Link href="#Home">HOME</Nav.Link>
          <Nav.Link href="#Prints">PRINTS</Nav.Link>
          <Nav.Link href="#Portfolio">PORTFOLIO</Nav.Link>
          <Nav.Link href="#About">ABOUT</Nav.Link>
          <Nav.Link href="#Contact">CONTACT</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavBar;
