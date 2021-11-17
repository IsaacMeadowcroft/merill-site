import React from "react";
import "../css/Cart.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { TCartItem, IWindowShopCartProps } from "./Interfaces";
import CartItem from "./CartItem";
import { VscArrowLeft, VscArrowRight } from "react-icons/vsc";

function Cart(props: IWindowShopCartProps): JSX.Element {
  return (
    <div
      className="bg-light h-100"
      style={{ fontFamily: '"Cormorant", serif', fontSize: "2.1vh" }}
    >
      <Navbar expand="lg" variant="dark" bg="dark" sticky="top">
        <Container fluid className="d-flex flex-row justify-content-between">
          <Nav.Link href="/merill-site/" className="text-light">
            <div className="d-flex flex-row justify-content-center">
              <div className="d-flex flex-column justify-content-center">
                <VscArrowLeft />
              </div>
              <div className="px-1">
                <b>B A C K</b>
              </div>
            </div>
          </Nav.Link>
          <Navbar.Text className="text-light d-flex flex-column justify-content-center">
            <b>C A R T</b>
          </Navbar.Text>
          <Nav.Link href="/merill-site/" className="text-light">
            <div className="d-flex flex-row justify-content-center">
              <div className="px-1">
                <b>C H E C K O U T</b>
              </div>
              <div className="d-flex flex-column justify-content-center">
                <VscArrowRight />
              </div>
            </div>
          </Nav.Link>
        </Container>
      </Navbar>
      <Container fluid>
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
            return <div style={{ backgroundColor: "whitesmoke" }}></div>;
          }
        })}
      </Container>
    </div>
  );
}

export default Cart;
