
import React, { useState } from 'react';
import '../css/SideBar.css';
import { Button, Container, Offcanvas, Stack } from 'react-bootstrap'
import { BsList, BsX } from "react-icons/bs";
import 'bootstrap/dist/css/bootstrap.min.css'

function SideBar(): JSX.Element {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button onClick={handleShow} variant="outline-dark" className="sidebar-toggle">
          <BsList style={{color: "white", fontSize: "3vh"}} />
        </Button>
        <Offcanvas show={show} onHide={handleClose} placement={"end"} style={{backgroundColor: "black", borderColor: "white", borderRight: "1px"}}>
          <Offcanvas.Header >
          <Button onClick={handleClose} variant="outline-dark" className="sidebar-toggle">
            <BsX style={{color: "white", fontSize: "3vh"}} />
          </Button>
          </Offcanvas.Header>
          <Offcanvas.Body style={{padding: "0px", backgroundColor: "black"}}>
            <MenuItems />
          </Offcanvas.Body>
        </Offcanvas>
      </>
    );
  }
  
  function MenuItems(): JSX.Element {
    return (
      <Stack gap={3}>
        <Container className="sidebar-container">
          <a href="#Home" className="sidebar-button">HOME</a>
        </Container>
        <Container className="sidebar-container">
          <a href="#Prints" className="sidebar-button">PRINTS</a>
        </Container>
        <Container className="sidebar-container">
          <a href="#Portfolio" className="sidebar-button">PORTFOLIO</a>
        </Container>
        <Container className="sidebar-container">
          <a href="#About" className="sidebar-button">ABOUT</a>
        </Container>
        <Container className="sidebar-container">
          <a href="#Contact" className="sidebar-button">CONTACT</a>
        </Container>
      </Stack>
    );
  }

  export default SideBar;