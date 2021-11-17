import React, { useState } from "react";
import "../css/ShopItem.css";
import { Button, Card, Carousel, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
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
        <Card.Header>
          <Card.Title>
            {shopItemTitleSubString}
            {shopItemTitleSubString != props.shopItem.title ? "..." : ""}
          </Card.Title>
        </Card.Header>
        <Carousel
          onClick={() => setModalShow(true)}
          variant="dark"
          interval={null}
        >
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
          <div>
            <Form className="mb-3 d-flex flew-row justify-content-around w-100">
              <Form.Check
                defaultChecked={true}
                inline
                label={"S"}
                name="group1"
                type="radio"
                onClick={handleSubmitSmall}
              />
              <Form.Check
                inline
                label="M"
                name="group1"
                type="radio"
                onClick={handleSubmitMedium}
              />
              <Form.Check
                inline
                label="L"
                name="group1"
                type="radio"
                onClick={handleSubmitLarge}
              />
            </Form>
          </div>
          <div className="w-100 align-self-end mt-3">
            <div className="d-flex column justify-content-between">
              <Button
                variant="outline-light"
                className=" py-1 px-3 text-italic w-50"
                style={{ marginRight: "1%" }}
                onClick={() => {
                  props.addCartItem(props.shopItem.id, currentItemSize);
                }}
              >
                Add to Cart
              </Button>
              <Button
                variant="outline-light"
                className=" py-1 px-3 text-italic w-50"
                style={{ marginLeft: "1%" }}
                onClick={() => {
                  props.addCartItem(props.shopItem.id, currentItemSize);
                  history.push("/merill-site/Cart");
                }}
              >
                Buy: ${currentItemPrice}
              </Button>
            </div>
          </div>
        </Card.Body>
      </Card>

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
