import React from "react";
import '../css/Portfolio.css';
import { Container } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import { IWindowProps } from "./Interfaces";

function Portfolio(props: IWindowProps): JSX.Element {
  return (
    <Container fluid style={{backgroundColor: 'black', padding: '0px'}} id="Portfolio">
    </Container>
  );
}

export default Portfolio;