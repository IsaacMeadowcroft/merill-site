import React, { useEffect } from "react";
import "../css/NavBar.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function NavBar(): JSX.Element {
  const [dimensions, setDimensions] = React.useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  function handleResize() {
    setDimensions({
      height: window.innerHeight,
      width: window.innerWidth,
    });
    console.log(dimensions.width);
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  }, []);
  
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Nav className={ dimensions.width <= 421? "me-auto nav-styles-sm" : "me-auto nav-styles-md" }>
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
