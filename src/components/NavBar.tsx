import React, { useState } from "react";
import "../css/NavBar.css";
import { BsFillBagFill } from "react-icons/bs";
import { Badge, Container, Nav, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { IconContext } from "react-icons";
import Login from "./Login";
import { IWindowCartProps } from "./Interfaces";
import { useHistory } from "react-router-dom";

function NavBar(props: IWindowCartProps): JSX.Element {
  const history = useHistory();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {props.dimensions.width >= 850 ? (
        <Navbar fixed="top" variant="dark" style={{ padding: "0px" }}>
          <Nav
            navbar
            fill
            className="nav-styles-md"
            style={
              props.scrollPosition > 100
                ? { backgroundColor: "rgb(27, 27, 27)" }
                : { backgroundColor: "transparent" }
            }
          >
            <Nav.Link href="#Home">HOME</Nav.Link>
            <Nav.Link href="#Portfolio">PORTFOLIO</Nav.Link>
            <Nav.Link href="#Prints">PRINTS</Nav.Link>
            <Nav.Link href="#Contact">CONTACT</Nav.Link>
            <Nav.Link href="#About">ABOUT</Nav.Link>
            <Nav.Link onClick={handleShow}>Login</Nav.Link>
            <Nav.Link
              onClick={() => history.push("/merill-site/Cart")}
              className="nav-bag"
              style={{
                verticalAlign: "middle",
                position: "relative",
                padding: "0px",
                margin: "0px",
              }}
            >
              <IconContext.Provider
                value={{
                  style: {
                    verticalAlign: "middle",
                    height: "100%",
                    overflow: "visible",
                  },
                }}
              >
                <BsFillBagFill />
                {props.cartItems.size > 0 ? (
                  <h6>
                    <Badge
                      pill
                      bg="warning"
                      text="dark"
                      style={{
                        fontFamily: "Helvetica Neue",
                        position: "absolute",
                        top: "3px",
                        left: "52%",
                      }}
                    >
                      {props.cartItems.size}
                    </Badge>
                  </h6>
                ) : (
                  <></>
                )}
              </IconContext.Provider>
            </Nav.Link>
          </Nav>
        </Navbar>
      ) : (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container fluid className="px-3 d-flex flex-row justify-content-end">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          </Container>
          <Container>
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#Home">H O M E</Nav.Link>
                <Nav.Link href="#Portfolio">P O R T F O L I O</Nav.Link>
                <Nav.Link href="#Prints">P R I N T S</Nav.Link>
                <Nav.Link href="#Contact">C O N T A C T</Nav.Link>
                <Nav.Link href="#About">A B O U T</Nav.Link>
                <Nav.Link onClick={handleShow}>Login</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      )}
      <Login show={show} handleClose={handleClose} />
    </>
  );
}

export default NavBar;
