import React from "react";
import "../css/Cart.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { TCartItem, IWindowShopCartProps } from "./Interfaces";
import CartItem from "./CartItem";
import { VscArrowLeft, VscArrowRight } from "react-icons/vsc";

function Cart(props: IWindowShopCartProps): JSX.Element {
  return (
    <div style={{ fontFamily: '"Cormorant", serif', fontSize: "2.1vh" }}>
      <Navbar expand="lg" variant="dark" bg="dark" sticky="top">
        <Container fluid className="d-flex flex-row justify-content-between">
          <Nav.Link href="/merill-site/" className="text-light">
            <VscArrowLeft /> B A C K
          </Nav.Link>
          <Nav.Link href="/merill-site/" className="text-light">
            C H E C K O U T
            <VscArrowRight />
          </Nav.Link>
        </Container>
      </Navbar>
      <Container fluid className="bg-light">
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
