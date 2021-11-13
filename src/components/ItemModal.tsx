import React, { useState } from "react";
import "../css/ShopItem.css";
import { Button, Modal, Carousel, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { IShopItemProps, Size } from "./Interfaces";
import { useHistory } from "react-router-dom";
import PictureFrame from "../assets/PictureFrame.jpg";
import PictureFrame2 from "../assets/PictureFrame2.jpg";

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
    currentItemPrice = props.shopItem.price * 2;
  } else {
    currentItemPrice = props.shopItem.price * 3;
  }

  return (
    <Modal
      {...props}
      aria-labelledby="contained-modal-title-vcenter"
      centered
      dialogClassName="modal-height"
    >
      <Modal.Header closeButton className="border-0">
        <Modal.Title id="contained-modal-title-vcenter">
          {props.shopItem.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Carousel fade>
          <Carousel.Item interval={1500}>
            <img
              className="d-block mh-80"
              src={props.shopItem.image}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={1500}>
            <div style={{ position: "relative", height: "80%" }}>
              <img
                className="d-block mh-8"
                src={PictureFrame2}
                alt="Second slide"
              />
              <img
                className="d-block "
                src={props.shopItem.image}
                alt="Second slide"
                style={{
                  maxWidth: "52.1%",
                  position: "absolute",
                  top: "16.3%",
                  left: "23.7%",
                }}
              />
            </div>
          </Carousel.Item>
          <Carousel.Item interval={1500}>
            <div style={{ position: "relative", width: "100%" }}>
              <img
                className="d-block mh-80"
                src={PictureFrame}
                alt="Third slide"
              />
              <img
                className="d-block"
                src={props.shopItem.image}
                alt="Third slide"
                style={{
                  maxWidth: "45%",
                  position: "absolute",
                  top: "14%",
                  left: "29%",
                }}
              />
            </div>
          </Carousel.Item>
        </Carousel>
        <div className="w-100">
          <div className="w-100">
            <p>{props.shopItem.description}</p>
          </div>
          <div className="w-100">
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
          </div>
          <h6>${currentItemPrice}</h6>
          <div className="w-100">
            <Button
              variant="warning"
              className="w-50"
              onClick={() =>
                props.addCartItem(props.shopItem.id, currentItemSize)
              }
            >
              Add to Cart
            </Button>
            <Button
              variant="dark"
              className="w-50"
              onClick={() => {
                props.addCartItem(props.shopItem.id, currentItemSize);
                history.push("/merill-site/Cart");
              }}
            >
              Buy Now
            </Button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default ItemModal;
