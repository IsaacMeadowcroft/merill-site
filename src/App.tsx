import React, { useState } from 'react';
import './App.css';
import { Button, Image, Offcanvas } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import LandingPage from './LandingPage.jpg'

function App() {
  return (
    <div style={{backgroundColor: 'black'}}>
        <Image src={LandingPage} fluid className="float-left"/>
        <div className="v75_413">
          <span className="v75_414">
            Visual Artist
          </span>
          <span className="v75_415">
            MERILL BOBOTIS
          </span>
          <div className="name"></div>
        </div>
        <Button>Test Button</Button>
        <SideBar/>
    </div>
  );
}

function SideBar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow} className="me-2"/>
      <Offcanvas show={show} onHide={handleClose} placement={"end"}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}


export default App;
