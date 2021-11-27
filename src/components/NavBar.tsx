import React, { useState } from "react";
import "../css/NavBar.css";
import { BsFillBagFill } from "react-icons/bs";
import {
  Badge,
  Container,
  Nav,
  Navbar,
  NavDropdown,
  Offcanvas,
} from "react-bootstrap";
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
        <Navbar bg="dark" className="text-light" expand={false}>
          <Container fluid>
            <Navbar.Brand href="#">M E R I L L B O B O T I S</Navbar.Brand>
            <Navbar.Toggle aria-controls="offcanvasNavbar" />
            <Navbar.Offcanvas
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id="offcanvasNavbarLabel">
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#action1">Home</Nav.Link>
                  <Nav.Link href="#action2">Link</Nav.Link>
                  <NavDropdown title="Dropdown" id="offcanvasNavbarDropdown">
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      )}
      <Login show={show} handleClose={handleClose} />
    </>
  );
}

export default NavBar;
