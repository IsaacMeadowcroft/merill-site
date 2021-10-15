import React from "react";
import "../css/Cart.css";
import {
  Image,
  Col,
  Container,
  Nav,
  Navbar,
  Row,
  Button,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { IWindowShopCartProps, Size} from "./Interfaces";

function Cart(props: IWindowShopCartProps): JSX.Element {
  return (
    <>
      <Navbar bg="light">
        <Container>
          <Nav className="me-auto">
            <Nav.Link href="/merill-site/">Back</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Container fluid id="Cart">
        {Array.from(props.cartItems.keys()).map((item) => (
          <Row style={{ padding: "0px", margin: "0px" }}>
            <Col sm={6} style={{ padding: "0px", margin: "0px" }}>
              <Image
                src={props.shopItems?.find((x) => x.id === item.id)?.image}
              />
            </Col>
            <Col sm={6} style={{ padding: "0px", margin: "0px" }}>
              <h5>ID: {item.id}</h5>
              <h5>Size: {Size[item.size]}</h5>
              <h5>
                Description:{" "}
                {props.shopItems?.find((x) => x.id === item.id)?.description}
              </h5>
              <h5>
                Price: {props.shopItems?.find((x) => x.id === item.id)?.price}
              </h5>
              <h5>Quantity: {props.cartItems.get(item)}</h5>
              <Row style={{ width: "100%" }}>
                <Button
                  onClick={() => props.removeCartItem(item.id, item.size)}
                >
                  Remove from Cart
                </Button>
              </Row>
            </Col>
          </Row>
        ))}
      </Container>
    </>
  );
}

export default Cart;
