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
  const [login, setLogin] = useState(false);

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
            <Nav.Link onClick={handleShow}>
              {login ? "Logout" : "Login"}
            </Nav.Link>
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
                        fontFamily: '"Roboto", sans-serif',
                        position: "absolute",
                        top: "1px",
                        left: "53%",
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
        <Navbar
          collapseOnSelect
          expand="lg"
          variant="dark"
          className="nav-styles-md"
          style={{ backgroundColor: "rgb(20,20,20)" }}
        >
          <Container
            fluid
            className="px-4 d-flex flex-row justify-content-between"
          >
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
                        fontFamily: '"Roboto", sans-serif',
                        position: "absolute",
                        top: "-6px",
                        left: "65%",
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
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          </Container>
          <Container>
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav
                className="me-auto"
                style={{ fontFamily: '"Cormorant", serif' }}
              >
                <Nav.Link href="#Home">
                  <b>H O M E</b>
                </Nav.Link>
                <Nav.Link href="#Portfolio">
                  <b>P O R T F O L I O</b>
                </Nav.Link>
                <Nav.Link href="#Prints">
                  <b>P R I N T S</b>
                </Nav.Link>
                <Nav.Link href="#Contact">
                  <b>C O N T A C T</b>
                </Nav.Link>
                <Nav.Link href="#About">
                  <b>A B O U T</b>
                </Nav.Link>
                <Nav.Link onClick={handleShow}>
                  <b>{login ? "Logout" : "Login"}</b>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      )}
      <Login show={show} handleClose={handleClose} setLogin={setLogin} />
    </>
  );
}

export default NavBar;
