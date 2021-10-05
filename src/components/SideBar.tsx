
import React, { useState } from 'react';
import '../css/SideBar.css';
import { Button, Container, Offcanvas, Stack } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

function SideBar() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button onClick={handleShow} variant="outline-dark" className="sidebar-toggle"/>
        <Offcanvas show={show} onHide={handleClose} placement={"end"} style={{backgroundColor: "black", borderColor: "white", borderRight: "1px"}}>
          <Offcanvas.Header closeButton />
          <Offcanvas.Body style={{padding: "0px", backgroundColor: "black"}}>
            <MenuItems />
          </Offcanvas.Body>
        </Offcanvas>
      </>
    );
  }
  
  function MenuItems() {
    return (
      <Stack gap={3}>
        <Container>
          <a href="#Home" className="sidebar-button">Home</a>
        </Container>
        <Container>
          <a href="#Prints" className="sidebar-button">Prints</a>
        </Container>
        <Container>
          <a href="#Portfolio" className="sidebar-button">Portfolio</a>
        </Container>
        <Container>
          <a href="#About" className="sidebar-button">About</a>
        </Container>
        <Container>
          <a href="#Contact" className="sidebar-button">Contact</a>
        </Container>
      </Stack>
    );
  }

  export default SideBar;