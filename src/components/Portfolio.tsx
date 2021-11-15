import React from "react";
import { Carousel, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { IWindowProps } from "./Interfaces";
import Heidi from "../assets/Heidi.jpg";

function Portfolio(props: IWindowProps): JSX.Element {
  return (
    <Container
      fluid
      className=" p-0 text-center m-0 px-3 bg-light"
      style={{
        fontFamily: '"Cormorant", serif',
      }}
      id="Portfolio"
    >
      <Container fluid className="bg-light p-0 text-center text-dark pb-5">
        <h3>P O R T F O L I O</h3>
      </Container>

      <div className="d-flex row justify-content-around">
        <div className="w-25">
          <img
            src={Heidi}
            style={{ maxWidth: "80%", marginLeft: "10%", marginRight: "10%" }}
          />
        </div>
        <div className="w-50">
          <img src={Heidi} style={{ maxWidth: "100%" }} />
        </div>
        <div className="w-25">
          <img
            src={Heidi}
            style={{ maxWidth: "80%", marginLeft: "10%", marginRight: "10%" }}
          />
        </div>
      </div>
    </Container>
  );
}

export default Portfolio;
