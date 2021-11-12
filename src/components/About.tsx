import React from "react";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { IWindowProps } from "./Interfaces";

function About(props: IWindowProps): JSX.Element {
  return (
    <Container
      fluid
      style={{ backgroundColor: "black", padding: "0px" }}
      id="About"
    ></Container>
  );
}

export default About;
