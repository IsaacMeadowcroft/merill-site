import React from "react";
import "../css/Cart.css";
import {
  Image,
  Card,
  Col,
  Container,
  Nav,
  Navbar,
  Row,
  Button,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { IWindowShopCartProps, Size, CartItem } from "./Interfaces";

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
        {Array.from(props.cartItems.keys()).map((item) =>
          item.id ? (
            <Card style={{ marginTop: "5vh" }}>
              <Card.Header>
                {props.shopItems?.find((x) => x.id === item.id)?.title}
              </Card.Header>
              <Card.Body>
                <Row style={{ padding: "0px", margin: "0px" }}>
                  <Col sm={3} style={{ padding: "0px", margin: "0px" }}>
                    <Image
                      style={{ maxWidth: "90%" }}
                      src={
                        props.shopItems?.find((x) => x.id === item.id)?.image
                      }
                    />
                  </Col>
                  <Col sm={9} style={{ padding: "0px", margin: "0px" }}>
                    <h5>ID: {item.id}</h5>
                    <h5>Size: {Size[item.size]}</h5>
                    <h5>
                      Description:{" "}
                      {
                        props.shopItems?.find((x) => x.id === item.id)
                          ?.description
                      }
                    </h5>
                    <h5>
                      Price:{" "}
                      {props.shopItems?.find((x) => x.id === item.id)?.price}
                    </h5>
                    <h5>
                      Quantity:{" "}
                      {props.cartItems.get({ id: item.id, size: item.size })}
                    </h5>
                    <Row style={{ width: "100%" }}>
                      <Button
                        onClick={() => props.removeCartItem(item.id, item.size)}
                      >
                        Remove from Cart
                      </Button>
                    </Row>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          ) : (
            <></>
          )
        )}
      </Container>
    </>
  );
}

export default Cart;
