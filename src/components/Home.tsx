import React from "react";
import "../css/Home.css";
import { Col, Container, Image, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import LandingPage from "../assets/LandingPage.jpg";
import { IWindowProps } from "./Interfaces";

function Home(props: IWindowProps): JSX.Element {
  if (props.dimensions.width >= 768) {
    return (
      <Container
        fluid
        style={{
          backgroundColor: "black",
          padding: "0px",
        }}
        id="Home"
      >
        <Row md={3} className="m-0">
          <Col md={5} className="p-0">
            <Image src={LandingPage} fluid />
          </Col>
          <Col md={7} className="pt-5">
            <Row className="name pt-4">
              <p>M E R I L L</p>
            </Row>
            <Row className="name">
              <p className="text-center">B O B O T I S</p>
            </Row>
            <Row className="profession">
              <p className="text-center">Visual Artist | Photographer</p>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  } else {
    return (
      <Container
        fluid
        style={{
          backgroundColor: "black",
          padding: "0px",
        }}
        id="Home"
      >
        <Image src={LandingPage} fluid />
        <Row className="name name-mobile" style={{ margin: "0px" }}>
          <p className="text-center">MERILL BOBOTIS</p>
        </Row>
        <Row className="bar-wrapper" style={{ margin: "0px" }}>
          <div className="bar-mobile"></div>
        </Row>
        <Row className="name" style={{ margin: "0px" }}>
          <p className="profession-mobile text-center">Visual Artist</p>
        </Row>
      </Container>
    );
  }
}

export default Home;
