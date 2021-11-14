import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { IWindowProps } from "./Interfaces";
import AboutPage from "../assets/AboutPage.png";

function About(props: IWindowProps): JSX.Element {
  return (
    <Container
      fluid
      className="bg-black p-0 text-center text-white pt-5"
      style={{ fontFamily: '"Cormorant", serif' }}
    >
      <h3>A B O U T</h3>
      <Row md={2} className="m-0">
        <Col className="w-50 p-0">
          {
            'Montreal-based, 18 year old freelance Visual Artist & Cognitive Science student at McGill University. ​ "The Artistic Process forces one’s vulnerability to surface, creating an incredibly intense connection between the artist and the subject, rarely found elsewhere. That vulnerability is what I try to capture the most. There is so much left unsaid, so many words hidden behind others… but body language does not lie. I usually go into a creative session with a vague idea of what I would like to create, and base the direction on what the subject is subconsciously communicating to me. Nothing has felt as genuine to me before."'
          }
        </Col>
        <Col className="w-50 p-0">
          <img style={{ maxWidth: "30vw" }} src={AboutPage}></img>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
