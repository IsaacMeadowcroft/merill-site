import React from "react";
import "../css/Cart.css";
import { Button, Card, Col, Container, Form, Nav, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { TCartItem, IWindowShopCartProps } from "./Interfaces";
import CartItem from "./CartItem";
import { VscArrowLeft } from "react-icons/vsc";

function Cart(props: IWindowShopCartProps): JSX.Element {
  return (
    <Container fluid style={{ height: "100%" }}>
      <Row style={{ backgroundColor: "whitesmoke" }}>
        <Col sm={8}>
          <Nav.Link href="/merill-site/">
            <VscArrowLeft />
            <h3>Continue Shopping</h3>
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
        <Col sm={4} style={{ height: "100%", backgroundColor: "whitesmoke" }}>
          <Card style={{ height: "100%" }}>
            <Card.Body>
              <Card.Title>Checkout</Card.Title>
              <Card.Text>
                <Form>
                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                      <Form.Label>Email</Form.Label>
                      <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                  </Row>

                  <Form.Group className="mb-3" controlId="formGridAddress1">
                    <Form.Label>Address</Form.Label>
                    <Form.Control placeholder="1234 Main St" />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formGridAddress2">
                    <Form.Label>Address 2</Form.Label>
                    <Form.Control placeholder="Apartment, studio, or floor" />
                  </Form.Group>

                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridCity">
                      <Form.Label>City</Form.Label>
                      <Form.Control />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridState">
                      <Form.Label>State</Form.Label>
                      <Form.Select defaultValue="Choose...">
                        <option>Choose...</option>
                        <option>...</option>
                      </Form.Select>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridZip">
                      <Form.Label>Zip</Form.Label>
                      <Form.Control />
                    </Form.Group>
                  </Row>

                  <Form.Group className="mb-3" id="formGridCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                  </Form.Group>

                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                </Form>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Cart;
