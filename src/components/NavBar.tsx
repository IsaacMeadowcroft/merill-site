import React, { useState } from "react";
import "../css/NavBar.css";
import { BsFillBagFill } from "react-icons/bs";
import { Badge, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
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
          <Container fluid>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          </Container>
          <Container>
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
                <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Nav>
                <Nav.Link href="#deets">More deets</Nav.Link>
                <Nav.Link eventKey={2} href="#memes">
                  Dank memes
                </Nav.Link>
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
