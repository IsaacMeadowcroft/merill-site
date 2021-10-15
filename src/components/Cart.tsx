import React from "react";
import "../css/Cart.css";
import { Image, Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { IWindowShopCartProps } from "./Interfaces";

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
              <h2>ID: {item.id}</h2>
              <h2>Size: {item.size}</h2>
              <h2>
                Description:{" "}
                {props.shopItems?.find((x) => x.id === item.id)?.description}
              </h2>
              <h2>
                Price: {props.shopItems?.find((x) => x.id === item.id)?.price}
              </h2>
              <h2>
                Quantity:
              </h2>
            </Col>
          </Row>
        ))}
      </Container>
    </>
  );
}

export default Cart;
