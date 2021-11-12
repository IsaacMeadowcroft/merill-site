import React from "react";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { IWindowProps } from "./Interfaces";

function About(props: IWindowProps): JSX.Element {
  return (
    <Container
      fluid
      className="bg-black p-0 text-center text-white pt-5"
      style={{ fontFamily: '"Cormorant", serif' }}
    >
      <h3>A B O U T</h3>
    </Container>
  );
}

export default About;
