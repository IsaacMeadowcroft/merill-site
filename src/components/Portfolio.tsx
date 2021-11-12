import React from "react";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { IWindowProps } from "./Interfaces";

function Portfolio(props: IWindowProps): JSX.Element {
  return (
    <Container
      fluid
      className="bg-black p-0 text-center text-white pt-5"
      style={{ fontFamily: '"Cormorant", serif' }}
    >
      <h3>P O R T F O L I O</h3>
    </Container>
  );
}

export default Portfolio;
