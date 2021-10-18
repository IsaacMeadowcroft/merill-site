import React from "react";
import "../css/Cart.css";
import { Image, Col, Row, Badge, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { ICartItemProps, Size } from "./Interfaces";
import { BsTrash } from "react-icons/bs";
import { FiPlus, FiMinus } from "react-icons/fi";

function CartItem(props: ICartItemProps): JSX.Element {
  return (
    <Row style={{ padding: "0px", backgroundColor: "white", margin: "1vh" }}>
      <Col sm={2} style={{ padding: "0px", margin: "0px" }}>
        <Image
          style={{ maxWidth: "90%" }}
          src={props.shopItems?.find((x) => x.id === props.cartItem.id)?.image}
        />
      </Col>
      <Col sm={4} className="position-relative">
        <Container
          className="position-absolute top-50 start-0 translate-middle-y"
          style={{ textAlign: "center", width: "100%" }}
        >
          <div style={{ textAlign: "center", width: "100%" }}>
            {props.shopItems?.find((x) => x.id === props.cartItem.id)?.title}
          </div>
          <div style={{ textAlign: "center", width: "100%" }}>
            {Size[props.cartItem.size]}
          </div>
        </Container>
      </Col>
      <Col sm={3} className="position-relative">
        <div
          className="position-absolute top-50 start-0 translate-middle-y"
          style={{ width: "100%", textAlign: "center" }}
        >
          <Row>
            <Col>
              <div
                className="cart-item-button"
                onClick={() =>
                  props.addCartItem(props.cartItem.id, props.cartItem.size)
                }
              >
                <FiPlus />
              </div>
            </Col>
            <Col>
              <Badge bg="light" text="dark">
                {props.quantity}
              </Badge>
            </Col>
            <Col>
              <div
                className="cart-item-button"
                onClick={() =>
                  props.minusCartItem(props.cartItem.id, props.cartItem.size)
                }
              >
                <FiMinus />
              </div>
            </Col>
          </Row>
        </div>
      </Col>
      <Col
        sm={2}
        className="position-relative"
        style={{ padding: "0px", margin: "0px" }}
      >
        <div
          className="position-absolute top-50 start-0 translate-middle-y"
          style={{ width: "100%", textAlign: "center" }}
        >
          $
          {(props.shopItems?.find((x) => x.id === props.cartItem.id)?.price ||
            1) * props.quantity}
        </div>
      </Col>
      <Col sm={1} className="position-relative">
        <div
          className="position-absolute top-50 start-0 translate-middle-y cart-item-button"
          style={{ width: "100%", textAlign: "center" }}
          onClick={() =>
            props.removeCartItem(props.cartItem.id, props.cartItem.size)
          }
        >
          <BsTrash />
        </div>
      </Col>
    </Row>
  );
}

export default CartItem;
