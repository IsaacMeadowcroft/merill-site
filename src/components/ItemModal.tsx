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
import { IShopItemProps } from "./Interfaces";

interface ItemModalType extends IShopItemProps {
  show: boolean;
  onHide: () => void;
}

function ItemModal(
  props: ItemModalType
): JSX.Element {
  const [currentItemPrice, setItemPrice] = useState(props.item.price);

  const handleSubmitSmall = () => {
    setItemPrice(props.item.price);
  };

  const handleSubmitMedium = () => {
    setItemPrice(props.item.price * 2);
  };

  const handleSubmitLarge = () => {
    setItemPrice(props.item.price * 3);
  };

  return (
    <Modal
      dialogClassName="modal-90w"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.item.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <Col sm={12} md={5}>
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
          <Col sm={12} md={7}>
            <Row>
              <p>{props.item.description}</p>
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
            <h3>${currentItemPrice}</h3>
            <Row>
              <Form.Group>
                <Form.Label>Quantity</Form.Label>
              <Form.Select defaultValue="1" style={props.dimensions.width >= 768? { width: "7vw" } : { width: "20vw" } }>
                <option>1</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">4</option>
              </Form.Select>
              </Form.Group>
            </Row>
            <Row style={{paddingTop: "3vh"}}>
              <Col sm={6}>
                <Button variant="warning" style={{ width: "100%" }}>
                  Add to Cart
                </Button>
              </Col>
              <Col sm={6}>
                <Button variant="dark" style={{ width: "100%" }}>
                  Buy Now
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Modal.Body>
    </Modal>
  );
}

export default ItemModal;