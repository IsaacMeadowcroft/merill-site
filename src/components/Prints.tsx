import React from "react";
import ShopItem from "./ShopItem";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { IWindowShopCartProps } from "./Interfaces";
import Wave from "../assets/WaveBlack.svg";

function Prints(props: IWindowShopCartProps): JSX.Element {
  return (
    <Container
      fluid
      className="p-0 m-0 position-relative"
      id="Prints"
      style={{
        fontFamily: '"Cormorant", serif',
        backgroundColor: "rgb(182, 182, 182)",
      }}
    >
      <Container fluid className="p-0 text-center text-dark pb-3">
        <h3>
          <b>P R I N T S H O P</b>
        </h3>
      </Container>
      <Row className="m-0 w-100" lg="4" md={3} sm={2} xs={1}>
        {props.shopItems
          ?.sort((a, b) => a.id - b.id)
          .map((item) => (
            <Col className="p-2">
              <ShopItem
                shopItem={item}
                dimensions={props.dimensions}
                scrollPosition={props.scrollPosition}
                addCartItem={props.addCartItem}
                minusCartItem={props.minusCartItem}
                removeCartItem={props.removeCartItem}
              />
            </Col>
          ))}
      </Row>
      <div
        style={{
          width: "100%",
          height: "calc(100vw * 128 / 1440)",
        }}
      ></div>
      <img
        src={Wave}
        className="w-100 position-absolute bottom-0 start-0 p-0"
      ></img>
    </Container>
  );
}

export default Prints;
