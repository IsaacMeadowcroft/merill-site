import React, { useState } from "react";
import "../css/ShopItem.css";
import {
  Row,
  Button,
  Modal,
  Carousel,
  Col,
  Form,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import LandingPage from "../assets/LandingPage.jpg";
import { IShopItemProps, Size } from "./Interfaces";

interface ItemModalType extends IShopItemProps {
  show: boolean;
  onHide: () => void;
}

function ItemModal(props: ItemModalType): JSX.Element {
  const [currentItemPrice, setItemPrice] = useState(props.shopItem.price);
  let currentItemSize = Size.SMALL;

  const handleSubmitSmall = () => {
    setItemPrice(props.shopItem.price);
    currentItemSize = Size.SMALL;
  };

  const handleSubmitMedium = () => {
    setItemPrice(props.shopItem.price * 2);
    currentItemSize = Size.MEDIUM;
  };

  const handleSubmitLarge = () => {
    setItemPrice(props.shopItem.price * 3);
    currentItemSize = Size.LARGE;
  };

  return (
    <Modal
      {...props}
      dialogClassName="modal-90w"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.shopItem.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <Col sm={12} md={4}>
            <Carousel fade>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={LandingPage}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={LandingPage}
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={LandingPage}
                  alt="Third slide"
                />
              </Carousel.Item>
            </Carousel>
          </Col>
          <Col sm={12} md={8}>
            <Row>
              <p>{props.shopItem.description}</p>
            </Row>
            <Row>
              <Form>
                <div className="mb-3">
                  <Form.Check
                    defaultChecked={true}
                    inline
                    label="Small"
                    name="group1"
                    type="radio"
                    onChange={handleSubmitSmall}
                  />
                  <Form.Check
                    inline
                    label="Medium"
                    name="group1"
                    type="radio"
                    onChange={handleSubmitMedium}
                  />
                  <Form.Check
                    inline
                    label="Large"
                    name="group1"
                    type="radio"
                    onChange={handleSubmitLarge}
                  />
                </div>
              </Form>
            </Row>
            <h6>${currentItemPrice}</h6>
            <Row>
              <Col sm={6} >
                <Button variant="warning" style={{ width: "100%" }} onClick={() => props.addCartItem(props.shopItem.id, currentItemSize)}>Add to Cart</Button>
              </Col>
              <Col sm={6} >
                <Button variant="dark" style={{ width: "100%" }} >Buy Now</Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Modal.Body>
    </Modal>
  );
}

export default ItemModal;
