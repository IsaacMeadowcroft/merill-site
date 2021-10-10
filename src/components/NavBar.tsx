import React, { useEffect, useState } from "react";
import "../css/NavBar.css";
import { Nav, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function NavBar(): JSX.Element {
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });
  const [scrollPosition, setScrollPosition] = useState(0);

  function handleResize() {
    setDimensions({
      height: window.innerHeight,
      width: window.innerWidth,
    });
  }

  function handleScroll() {
    setScrollPosition(window.pageYOffset)
    console.log(scrollPosition)
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  })

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  return (
    <Navbar fixed="top" variant="dark" style={{padding: "0px"}}>
      <Nav
        navbar
        fill
        justify
        className={
          dimensions.width <= 429
            ? "nav-styles-sm"
            : "nav-styles-md"
        }
        style={scrollPosition > 100 ? {backgroundColor: "rgb(53, 53, 53)"} : {backgroundColor: "transparent"}}
      >
        <Nav.Link href="#Home">HOME</Nav.Link>
        <Nav.Link href="#Prints">PRINTS</Nav.Link>
        <Nav.Link href="#Portfolio">PORTFOLIO</Nav.Link>
        <Nav.Link href="#About">ABOUT</Nav.Link>
        <Nav.Link href="#Contact">CONTACT</Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default NavBar;
