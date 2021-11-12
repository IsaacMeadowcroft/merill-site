import React, { useState } from "react";
import "../css/NavBar.css";
import { BsFillBagFill } from "react-icons/bs";
import { Badge, Nav, Navbar } from "react-bootstrap";
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
      <Navbar fixed="top" variant="dark" style={{ padding: "0px" }}>
        <Nav
          navbar
          fill
          className={
            props.dimensions.width <= 429 ? "nav-styles-sm" : "nav-styles-md"
          }
          style={
            props.scrollPosition > 100
              ? { backgroundColor: "rgb(39, 39, 39)" }
              : { backgroundColor: "transparent" }
          }
        >
          <Nav.Link href="#Home">HOME</Nav.Link>
          <Nav.Link href="#Prints">PRINTS</Nav.Link>
          <Nav.Link href="#Portfolio">PORTFOLIO</Nav.Link>
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
      <Login show={show} handleClose={handleClose} />
    </>
  );
}

export default NavBar;
