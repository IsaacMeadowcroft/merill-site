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
        <Nav fill justify className={ dimensions.width <= 429? "me-auto nav-styles-sm" : "me-auto nav-styles-md" }>
          <Nav.Link  href="#Home">HOME</Nav.Link>
          <Nav.Link  href="#Prints">PRINTS</Nav.Link>
          <Nav.Link  href="#Portfolio">PORTFOLIO</Nav.Link>
          <Nav.Link  href="#About">ABOUT</Nav.Link>
          <Nav.Link  href="#Contact">CONTACT</Nav.Link>
        </Nav>
  );
}

export default NavBar;
