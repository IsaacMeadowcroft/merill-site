import React, { useEffect } from "react";
import "../css/Home.css";
import { Col, Container, Image, Row } from "react-bootstrap";
import SideBar from "./SideBar";
import "bootstrap/dist/css/bootstrap.min.css";
import LandingPage from "../assets/LandingPage.jpg";

function Home(): JSX.Element {
  const [dimensions, setDimensions] = React.useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  function handleResize() {
    setDimensions({
      height: window.innerHeight,
      width: window.innerWidth,
    });
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  }, []);

  if (dimensions.width >= 768) {
    return (
      <Container
        fluid
        style={{ backgroundColor: "black", padding: "0px" }}
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
          >
            <SideBar />
          </Col>
        </Row>
      </Container>
    );
  } else {
    return (
      <Container
        fluid
        style={{ backgroundColor: "black", padding: "0px" }}
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
