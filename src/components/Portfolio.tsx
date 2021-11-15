import React from "react";
import { Carousel, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { IWindowProps } from "./Interfaces";
import Heidi from "../assets/Heidi.jpg";
import Wave from "../assets/WaveGrey.svg";
import Desperation from "../assets/Desperation.jpg";
import Imprisoned from "../assets/Imprisoned.jpg";
import Cloak from "../assets/Cloak.jpg";
import Smoke from "../assets/Smoke.jpg";

function Portfolio(props: IWindowProps): JSX.Element {
  return (
    <Container
      fluid
      className=" p-0 text-center m-0 px-3 position-relative pb-5"
      style={{
        fontFamily: '"Cormorant", serif',
        backgroundColor: "rgb(224, 224, 224)",
      }}
      id="Portfolio"
    >
      <Container fluid className="p-0 text-center text-dark pb-3">
        <h3>
          <b>P O R T F O L I O</b>
        </h3>
      </Container>

      <div className="d-flex row justify-content-around mb-5">
        <div
          className="d-flex row justify-content-center"
          style={{ width: "20%" }}
        >
          <img
            src={Smoke}
            style={{ maxWidth: "90%", padding: "0px" }}
            className="pb-1"
          />
          <img src={Desperation} style={{ maxWidth: "90%", padding: "0px" }} />
        </div>
        <div
          style={{ width: "60%" }}
          className="d-flex row justify-content-center"
        >
          <img src={Heidi} style={{ maxWidth: "100%", padding: "0px" }} />
        </div>
        <div
          className="d-flex row justify-content-center"
          style={{ width: "20%" }}
        >
          <img
            src={Imprisoned}
            style={{ maxWidth: "90%", padding: "0px" }}
            className="pb-1"
          />
          <img src={Cloak} style={{ maxWidth: "90%", padding: "0px" }} />
        </div>
      </div>
      <img
        src={Wave}
        className="w-100 position-absolute bottom-0 start-0 p-0"
      ></img>
    </Container>
  );
}

export default Portfolio;
