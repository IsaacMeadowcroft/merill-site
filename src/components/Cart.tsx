import React from "react";
import '../css/Cart.css';
import { Container} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import { IWindowShopCartProps } from "./Interfaces";

function Cart(props: IWindowShopCartProps): JSX.Element {
  return (
    <Container fluid style={{backgroundColor: 'red'}} id="Cart">
    </Container>
  );
}

export default Cart;