import React from 'react';
import '../css/Home.css';
import { Col, Container, Image, Row } from 'react-bootstrap'
import SideBar from "./SideBar";
import 'bootstrap/dist/css/bootstrap.min.css'
import LandingPage from '../assets/LandingPage.jpg'


function Home() {
  return (
    <Container fluid style={{backgroundColor: 'black', padding: '0px'}} id="Home">
      <Row xs={1} sm={1} md={3}>
        <Col md={4}>
          <Image src={LandingPage} fluid />
        </Col>
        <Col md={4}>
          <Col className="name">
            MERILL BOBOTIS
          </Col>
          <Col className="bar" />
          <Col className="profession">
            Visual Artist
          </Col>
        </Col>
        <Col md={1}>
          <SideBar/>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
