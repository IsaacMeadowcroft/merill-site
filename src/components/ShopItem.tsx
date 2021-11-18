import React, { useState } from "react";
import "../css/ShopItem.css";
import { Button, Card, Carousel, Form, Toast } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { BsFillBagFill } from "react-icons/bs";
import ItemModal from "./ItemModal";
import { IShopItemProps, Size } from "./Interfaces";
import { useHistory } from "react-router-dom";
import PictureFrame from "../assets/PictureFrame.jpg";
import PictureFrame2 from "../assets/PictureFrame2.jpg";

function ShopItem(props: IShopItemProps): JSX.Element {
  const history = useHistory();
  const [currentItemSize, setItemSize] = useState<Size>(Size.SMALL);
  const [modalShow, setModalShow] = useState(false);
  const shopItemTitleSubString = props.shopItem.title.substring(0, 35);
  const shopItemDescriptionSubString = props.shopItem.description.substring(
    0,
    85
  );
  const [showA, setShowA] = useState(false);
  const toggleShowA = () => setShowA(!showA);

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
    <>
      <Card className="card-styles border-0 rounded-0">
        {/*<Card.Header>
          <Card.Title>
            {shopItemTitleSubString}
            {shopItemTitleSubString != props.shopItem.title ? "..." : ""}
          </Card.Title>
        </Card.Header>*/}
        <Carousel onClick={() => setModalShow(true)} interval={null}>
          <Carousel.Item>
            <img
              style={{ maxWidth: "100%" }}
              src={props.shopItem.image}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <div style={{ position: "relative", height: "80%" }}>
              <img
                style={{
                  maxWidth: "100%",
                  WebkitFilter: "grayscale(60%)",
                  filter: "grayscale(60%)",
                }}
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
          <Carousel.Item>
            <div style={{ position: "relative", height: "80%" }}>
              <img
                style={{
                  maxWidth: "100%",
                  WebkitFilter: "grayscale(60%)",
                  filter: "grayscale(60%)",
                }}
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
        <Card.Body className="d-flex flex-column justify-content-between">
          {/*<Card.Text>
              {shopItemDescriptionSubString}
              {shopItemDescriptionSubString != props.shopItem.description
                ? "..."
                : ""}
              </Card.Text>*/}
          <Card.Title style={{ textTransform: "uppercase" }}>
            {shopItemTitleSubString}
            {shopItemTitleSubString != props.shopItem.title ? "..." : ""}
          </Card.Title>
          <Card.Subtitle>
            <div className="w-100 d-flex flex-row justify-content-between">
              <div className="d-flex w-25 flex-row justify-content-between">
                <b
                  className={
                    "size " +
                    (currentItemSize == Size.SMALL
                      ? "size-active"
                      : "size-inactive")
                  }
                  onClick={() => setItemSize(Size.SMALL)}
                >
                  S
                </b>
                <b
                  className={
                    "size " +
                    (currentItemSize == Size.MEDIUM
                      ? "size-active"
                      : "size-inactive")
                  }
                  onClick={() => setItemSize(Size.MEDIUM)}
                >
                  M
                </b>
                <b
                  className={
                    "size " +
                    (currentItemSize == Size.LARGE
                      ? "size-active"
                      : "size-inactive")
                  }
                  onClick={() => setItemSize(Size.LARGE)}
                >
                  L
                </b>
              </div>
              <b>${currentItemPrice}</b>
            </div>
          </Card.Subtitle>

          {/*<div className="w-100 d-flex flex-row justify-content-between">
            <div>Checkout</div>
            <div>Add to cart</div>
            </div>*/}

          <div className="w-100 align-self-end mt-3">
            <div className="d-flex column justify-content-between">
              <Button
                variant="dark"
                className=" py-1 px-3 text-italic w-50"
                style={{ marginRight: "2%" }}
                onClick={() => {
                  props.addCartItem(props.shopItem.id, currentItemSize);
                }}
              >
                Add to cart
              </Button>
              <Button
                variant="dark"
                className=" py-1 px-3 text-italic w-50"
                style={{ marginLeft: "2%" }}
                onClick={() => {
                  props.addCartItem(props.shopItem.id, currentItemSize);
                  history.push("/merill-site/Cart");
                }}
              >
                Buy now
              </Button>
            </div>
          </div>
        </Card.Body>
      </Card>

      <Toast show={showA} onClose={toggleShowA} className="mt-3">
        <Toast.Header>
          <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
          <strong className="me-auto">Bootstrap</strong>
          <small>11 mins ago</small>
        </Toast.Header>
        <Toast.Body className={"Dark text-white"}>
          Woohoo, you're reading this text in a Toast!
        </Toast.Body>
      </Toast>

      <ItemModal
        shopItem={props.shopItem}
        show={modalShow}
        onHide={() => setModalShow(false)}
        dimensions={props.dimensions}
        scrollPosition={props.scrollPosition}
        addCartItem={props.addCartItem}
        minusCartItem={props.minusCartItem}
        removeCartItem={props.removeCartItem}
      />
    </>
  );
}

export default ShopItem;
