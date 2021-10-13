import React, { useState } from "react";
import "../css/ShopItem.css";
import {
  Row,
  Card,
  Button,
  Modal,
  ModalProps,
  Carousel,
  Col,
  Form,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { CartItemType } from "./Prints";
import LandingPage from "../assets/LandingPage.jpg";
import { Omit, BsPrefixProps } from "react-bootstrap/esm/helpers";

function MyVerticallyCenteredModal(
  props: JSX.IntrinsicAttributes &
    Omit<
      Pick<
        React.DetailedHTMLProps<
          React.HTMLAttributes<HTMLDivElement>,
          HTMLDivElement
        >,
        "key" | keyof React.HTMLAttributes<HTMLDivElement>
      > & {
        ref?:
          | ((instance: HTMLDivElement | null) => void)
          | React.RefObject<HTMLDivElement>
          | null
          | undefined;
      },
      BsPrefixProps<"div"> & ModalProps
    > &
    BsPrefixProps<"div"> &
    ModalProps & { children?: React.ReactNode }
) {
  const [currentItemPrice, setItemPrice] = useState(props.itemData.price);

  const handleSubmitSmall = () => {
    setItemPrice(props.itemData.price);
  };

  const handleSubmitMedium = () => {
    setItemPrice(props.itemData.price * 2);
  };

  const handleSubmitLarge = () => {
    setItemPrice(props.itemData.price * 3);
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.itemData.title}
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
              <p>{props.itemData.description}</p>
            </Row>
            <Row>
              <Form>
                <div className="mb-3">
                  <Form.Check
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
              <Col sm={12} md={6}>
                <Button variant="warning" style={{ width: "100%" }}>
                  Add to Cart:
                </Button>
              </Col>
              <Col sm={12} md={6}>
                <Button variant="dark" style={{ width: "100%" }}>
                  Checkout
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Modal.Body>
    </Modal>
  );
}

function ShopItem(itemData: CartItemType): JSX.Element {
  const [isHovering, setIsHovering] = useState(false);
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Card
        className="card-styles"
        onMouseOver={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        onClick={() => setModalShow(true)}
      >
        <Card.Img
          variant="top"
          src={LandingPage}
          style={
            isHovering
              ? { filter: "brightness(20%)" }
              : { filter: "brightness(100%)" }
          }
        />
        {isHovering ? (
          <Card.ImgOverlay>
            <Card.Title>{itemData.title.substring(0, 35)}...</Card.Title>
            <Card.Text>{itemData.description.substring(0, 100)}...</Card.Text>
            <Button variant="dark">${itemData.price}</Button>
          </Card.ImgOverlay>
        ) : (
          <></>
        )}
      </Card>

      <MyVerticallyCenteredModal
        itemData={itemData}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

export default ShopItem;
