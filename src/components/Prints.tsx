import React from "react";
import "../css/Prints.css";
import ShopItem from "./ShopItem";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { IWindowShopProps } from "./Interfaces";

function Prints(props: IWindowShopProps): JSX.Element {
  return (
    <Container
      fluid
      style={{ backgroundColor: "black", padding: "0px" }}
      id="Prints"
    >
      <Row style={{ width: "100%", margin: "0px" }}>
        {props.shopItems?.map((item) => (
          <Col md={4} style={{ padding: "0px" }}>
            <ShopItem
              shopItem={item}
              dimensions={props.dimensions}
              scrollPosition={props.scrollPosition}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Prints;
