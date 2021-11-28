import React, { useState } from "react";
import { Col, Container, Row, Tabs, Tab } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/Tabs.css";
import { IWindowProps } from "./Interfaces";
import Heidi from "../assets/Heidi.jpg";
import HeidiFlipped from "../assets/HeidiFlipped.jpg";
import Wave from "../assets/WaveGrey.svg";
import Desperation from "../assets/Desperation.jpg";
import Imprisoned from "../assets/Imprisoned.jpg";
import Cloak from "../assets/Cloak.jpg";
import Smoke from "../assets/Smoke.jpg";
import Wet from "../assets/Wet.jpg";
import Model from "../assets/Model.jpg";
import Lake from "../assets/Lake.jpg";
import BlindFolded from "../assets/BlindFolded.jpg";

function Portfolio(props: IWindowProps): JSX.Element {
  const [modalShow, setShowModal] = useState(true);
  return (
    <>
      <Container
        fluid
        className="text-center m-0 px-3 pb-5"
        style={{
          fontFamily: '"Cormorant", serif',
          backgroundColor: "rgb(20, 20, 20)",
        }}
        id="Portfolio"
      >
        <Container fluid className="text-center text-light pt-5 pb-3">
          <h3>
            <b>P O R T F O L I O</b>
          </h3>
        </Container>

        <Tabs
          transition={false}
          className="mb-3 border-secondary"
          defaultActiveKey={1}
        >
          <Tab eventKey={1} title="Photos" tabClassName="tab">
            <Row md={4} xs={2}>
              <Col style={{ paddingRight: "0" }}>
                <img src={Wet} className="mw-100 p-0" />
              </Col>
              <Col
                style={
                  props.dimensions.width >= 768
                    ? { padding: "0" }
                    : { paddingLeft: "0" }
                }
              >
                <img src={Smoke} className="mw-100 p-0" />
              </Col>
              <Col
                style={
                  props.dimensions.width >= 768
                    ? { padding: "0" }
                    : { paddingRight: "0" }
                }
              >
                <img src={Desperation} className="mw-100 p-0" />
              </Col>
              <Col style={{ paddingLeft: "0" }}>
                <img src={Imprisoned} className="mw-100 p-0" />
              </Col>
            </Row>
            <Row md={4} xs={2}>
              <Col style={{ paddingRight: "0" }}>
                <div>
                  <img src={Cloak} className="mw-100 p-0" />
                </div>
              </Col>
              <Col
                style={
                  props.dimensions.width >= 768
                    ? { padding: "0" }
                    : { paddingLeft: "0" }
                }
              >
                <img src={BlindFolded} className="mw-100 p-0" />
              </Col>
              <Col
                style={
                  props.dimensions.width >= 768
                    ? { padding: "0" }
                    : { paddingRight: "0" }
                }
              >
                <img src={Lake} className="mw-100 p-0" />
              </Col>
              <Col style={{ paddingLeft: "0" }}>
                <img src={Model} className="mw-100 p-0" />
              </Col>
            </Row>
            <div className="d-flex flex-row justify-content-around">
              <div
                className={
                  "d-flex flex-row justify-content-center px-0 " +
                  (props.dimensions.width >= 768 ? "w-50" : "w-100")
                }
              >
                <div>
                  <img src={Heidi} className="mw-100 p-0" />
                </div>
              </div>
              {props.dimensions.width >= 768 ? (
                <div className="d-flex flex-row justify-content-center px-0 w-50">
                  <div>
                    <img src={HeidiFlipped} className="mw-100 p-0" />
                  </div>
                </div>
              ) : (
                <></>
              )}
            </div>
          </Tab>

          <Tab eventKey={2} title="Videos" tabClassName="tab"></Tab>

          <Tab eventKey={3} title="Instagram" tabClassName="tab">
            <div>goodbye</div>
          </Tab>
        </Tabs>
      </Container>
    </>
  );
}

export default Portfolio;
