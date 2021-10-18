import React from "react";
import "../css/Cart.css";
import { Col, Container, Nav, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { TCartItem, IWindowShopCartProps } from "./Interfaces";
import CartItem from "./CartItem";
import Checkout from "./Checkout";
import { VscArrowLeft } from "react-icons/vsc";

function Cart(props: IWindowShopCartProps): JSX.Element {
  return (
    <Container fluid>
      <Row style={{ backgroundColor: "whitesmoke" }}>
        <Col sm={8}>
          <Nav.Link href="/merill-site/">
            <h4>
              <VscArrowLeft /> Continue Shopping
            </h4>
          </Nav.Link>
          <Row>
            {Array.from(props.cartItems.keys()).map((item) => {
              let cartItem: TCartItem;
              const quantity = props.cartItems.get(item);
              try {
                cartItem = JSON.parse(item);
              } catch (err) {
                return <></>;
              }
              if (quantity) {
                return (
                  <CartItem
                    quantity={quantity}
                    cartItem={cartItem}
                    shopItems={props.shopItems}
                    dimensions={props.dimensions}
                    scrollPosition={props.scrollPosition}
                    addCartItem={props.addCartItem}
                    minusCartItem={props.minusCartItem}
                    removeCartItem={props.removeCartItem}
                  />
                );
              } else {
                return <></>;
              }
            })}
          </Row>
        </Col>
        <Col sm={4} style={{ height: "100vh", backgroundColor: "whitesmoke" }}>
          <Checkout
            cartItems={props.cartItems}
            shopItems={props.shopItems}
            dimensions={props.dimensions}
            scrollPosition={props.scrollPosition}
            addCartItem={props.addCartItem}
            minusCartItem={props.minusCartItem}
            removeCartItem={props.removeCartItem}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Cart;
