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
import { IShopItemProps, Size } from "./Interfaces";
import { useHistory } from "react-router-dom";

interface ItemModalType extends IShopItemProps {
  show: boolean;
  onHide: () => void;
}

function ItemModal(props: ItemModalType): JSX.Element {
  const history = useHistory();
  const [currentItemSize, setItemSize] = useState<Size>(Size.SMALL);

  const handleSubmitSmall = () => {
    setItemSize(Size.SMALL);
  };

  const handleSubmitMedium = () => {
    setItemSize(Size.MEDIUM);
  };

  const handleSubmitLarge = () => {
    setItemSize(Size.LARGE);
  };

  let currentItemPrice = props.shopItem.price;
  if (currentItemSize == Size.SMALL) {
    currentItemPrice = props.shopItem.price;
  } else if (currentItemSize == Size.MEDIUM) {
    currentItemPrice = props.shopItem.price*2;
  } else {
    currentItemPrice = props.shopItem.price*3;
  }

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
                  src={props.shopItem.image}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={props.shopItem.image}
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={props.shopItem.image}
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
                    onClick={handleSubmitSmall}
                  />
                  <Form.Check
                    inline
                    label="Medium"
                    name="group1"
                    type="radio"
                    onClick={handleSubmitMedium}
                  />
                  <Form.Check
                    inline
                    label="Large"
                    name="group1"
                    type="radio"
                    onClick={handleSubmitLarge}
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
                <Button variant="dark" style={{ width: "100%" }} onClick={() => {props.addCartItem(props.shopItem.id, currentItemSize); history.push("/merill-site/Cart");}}>Buy Now</Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Modal.Body>
    </Modal>
  );
}

export default ItemModal;
