import React from "react";
import "../css/Cart.css";
import { Image, Card, Col, Row, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { ICartItemProps, Size } from "./Interfaces";

function CartItem(props: ICartItemProps): JSX.Element {
  return (
    <Card style={{ marginTop: "5vh" }}>
      <Card.Header>
        {props.shopItems?.find((x) => x.id === props.cartItem.id)?.title}
      </Card.Header>
      <Card.Body>
        <Row style={{ padding: "0px", margin: "0px" }}>
          <Col sm={3} style={{ padding: "0px", margin: "0px" }}>
            <Image
              style={{ maxWidth: "90%" }}
              src={
                props.shopItems?.find((x) => x.id === props.cartItem.id)?.image
              }
            />
          </Col>
          <Col sm={9} style={{ padding: "0px", margin: "0px" }}>
            <h5>ID: {props.cartItem.id}</h5>
            <h5>Size: {Size[props.cartItem.size]}</h5>
            <h5>
              Description:{" "}
              {
                props.shopItems?.find((x) => x.id === props.cartItem.id)
                  ?.description
              }
            </h5>
            <h5>
              Price:{" "}
              {props.shopItems?.find((x) => x.id === props.cartItem.id)?.price}
            </h5>
            <h5>Quantity: {props.quantity}</h5>
            <Row style={{ width: "100%" }}>
              <Button
                onClick={() =>
                  props.removeCartItem(props.cartItem.id, props.cartItem.size)
                }
              >
                Remove from Cart
              </Button>
            </Row>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

export default CartItem;
