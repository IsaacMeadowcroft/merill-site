import React from "react";
import "../css/Home.css";
import { Col, Container, Image, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import LandingPage from "../assets/LandingPage.png";
import Wave from "../assets/WaveDarkGrey.svg";
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
        <Row md={3} className="m-0 pb-4 position-relative">
          <Col md={5} className="p-0">
            <Image src={LandingPage} fluid />
          </Col>
          <Col md={7} className="pt-5">
            <Row className="name pt-4">M E R I L L</Row>
            <Row className="name">
              <p className="text-center">B O B O T I S</p>
            </Row>
            <Row className="profession">
              <p className="text-center">Visual Artist | Photographer</p>
            </Row>
          </Col>
          <img
            src={Wave}
            className="w-100 position-absolute bottom-0 p-0"
          ></img>
        </Row>
      </Container>
    );
  } else {
    return (
      <Container
        fluid
        className="position-relative pb-4"
        style={{
          backgroundColor: "black",
          padding: "0px",
        }}
        id="Home"
      >
        <Image src={LandingPage} fluid />
        <Row className="name name-mobile m-0">
          <p className="text-center">
            <b>M E R I L L&nbsp;&nbsp;B O B O T I S</b>
          </p>
        </Row>
        <Row className="name m-0">
          <p className="profession-mobile text-center">
            Visual Artist | Photographer
          </p>
        </Row>
        <img src={Wave} className="w-100 position-absolute bottom-0 p-0"></img>;
      </Container>
    );
  }
}

export default Home;
