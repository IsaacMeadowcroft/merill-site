import React from "react";
import ShopItem from "./ShopItem";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { IWindowShopCartProps } from "./Interfaces";

function Prints(props: IWindowShopCartProps): JSX.Element {
  return (
    <Container
      fluid
      className="bg-black p-0 pt-3"
      id="Prints"
      style={{ fontFamily: '"Cormorant", serif' }}
    >
      <Container fluid className="bg-black p-0 text-center text-white pt-5">
        <h3>P R I N T S</h3>
      </Container>
      <Row className="m-0 w-100" lg="4" md={3} sm={2} xs={1}>
        {props.shopItems
          ?.sort((a, b) => a.id - b.id)
          .map((item) => (
            <Col className="p-4">
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
    </Container>
  );
}

export default Prints;
