import React from "react";
import { Carousel, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { IWindowProps } from "./Interfaces";
import LandingPage from "../assets/LandingPage.png";

function Portfolio(props: IWindowProps): JSX.Element {
  return (
    <Container
      fluid
      className="bg-black p-0 text-center text-white m-0"
      style={{ fontFamily: '"Cormorant", serif' }}
      id="Portfolio"
    >
      <h3>P O R T F O L I O</h3>
      <div className="d-flex row justify-content-center">
        <Carousel fade style={{ width: "35%" }}>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={LandingPage}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={LandingPage}
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={LandingPage}
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </Container>
  );
}

export default Portfolio;
