import React from "react";
import "../css/Home.css";
import { Col, Container, Image, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import LandingPage from "../assets/LandingPage.jpg";
import {IWindowProps} from "./Interfaces";

function Home(props: IWindowProps): JSX.Element {
  if (props.dimensions.width >= 768) {
    return (
      <Container
        fluid
        style={{
          backgroundColor: "black",
          padding: "0px",
          paddingTop: "4vh",
        }}
        id="Home"
      >
        <Row md={3} style={{ margin: "0px" }}>
          <Col md={5} style={{ padding: "0px" }}>
            <Image src={LandingPage} fluid />
          </Col>
          <Col md={4} style={{ paddingTop: "4vw" }}>
            <Row className="name">MERILL</Row>
            <Row className="name">BOBOTIS</Row>
            <Row className="bar" />
            <Row className="profession">Visual Artist</Row>
          </Col>
          <Col
            md={3}
            style={{
              paddingLeft: "17vw",
              paddingTop: "2vw",
              paddingRight: "1vw",
            }}
            id="Home"
          ></Col>
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
          paddingTop: "4vh",
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