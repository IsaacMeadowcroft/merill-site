import React, { useEffect, useState } from "react";
import "../css/NavBar.css";
import { BsFillBagFill } from "react-icons/bs";
import { Badge, Nav, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { IconContext } from "react-icons";

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
    setScrollPosition(window.pageYOffset);
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  });

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  const cartCount = 3;

  return (
    <Navbar fixed="top" variant="dark" style={{ padding: "0px" }}>
      <Nav
        navbar
        fill
        className={dimensions.width <= 429 ? "nav-styles-sm" : "nav-styles-md"}
        style={
          scrollPosition > 100
            ? { backgroundColor: "rgb(39, 39, 39)" }
            : { backgroundColor: "transparent" }
        }
      >
        <Nav.Link href="#Home">HOME</Nav.Link>
        <Nav.Link href="#Prints">PRINTS</Nav.Link>
        <Nav.Link href="#Portfolio">PORTFOLIO</Nav.Link>
        <Nav.Link href="#About">ABOUT</Nav.Link>
        <Nav.Item style={{ verticalAlign: "middle", position: "relative", }}>
          <IconContext.Provider
            value={{
              style: {
                verticalAlign: "middle",
                height: "100%",
                overflow: "visible"
              },
            }}
          >
            <BsFillBagFill />
            <h6>
            <Badge
              pill
              bg="warning"
              text="dark"
              style={{
                position: "absolute",
                top: "3px",
                left: "52%"
              }}
            >
              {cartCount}
            </Badge>
            </h6>
          </IconContext.Provider>
        </Nav.Item>
      </Nav>
    </Navbar>
  );
}

export default NavBar;
