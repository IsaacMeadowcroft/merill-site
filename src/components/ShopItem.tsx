import React, { useState } from "react";
import "../css/ShopItem.css";
import { Button, Card, Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import ItemModal from "./ItemModal";
import { IShopItemProps, Size } from "./Interfaces";
import PictureFrame from "../assets/PictureFrame.jpg";
import PictureFrame2 from "../assets/PictureFrame2.jpg";

function ShopItem(props: IShopItemProps): JSX.Element {
  const [modalShow, setModalShow] = useState(false);
  const shopItemTitleSubString = props.shopItem.title.substring(0, 35);
  const shopItemDescriptionSubString = props.shopItem.description.substring(
    0,
    85
  );

  return (
    <>
      <Card
        className="card-styles border-0 rounded-0"
        onClick={() => setModalShow(true)}
      >
        <Carousel fade>
          <Carousel.Item interval={7000}>
            <img
              style={{ maxWidth: "100%" }}
              src={props.shopItem.image}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={1500}>
            <div style={{ position: "relative", height: "80%" }}>
              <img
                style={{ maxWidth: "100%" }}
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
            <div style={{ position: "relative", height: "80%" }}>
              <img
                style={{ maxWidth: "100%" }}
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
          <div>
            <Card.Title>
              {shopItemTitleSubString}
              {shopItemTitleSubString != props.shopItem.title ? "..." : ""}
            </Card.Title>
            <Card.Text>
              {shopItemDescriptionSubString}
              {shopItemDescriptionSubString != props.shopItem.description
                ? "..."
                : ""}
            </Card.Text>
            <h6>${props.shopItem.price}</h6>
          </div>
          <div className="w-100 align-self-end mt-3">
            <div className="d-flex column justify-content-between">
              <Button
                variant="outline-light"
                className=" py-1 px-3 text-italic w-50"
                style={{ marginRight: "1%" }}
                onClick={() => props.addCartItem(props.shopItem.id, Size.SMALL)}
              >
                Add to Cart
              </Button>
              <Button
                variant="outline-light"
                className=" py-1 px-3 text-italic w-50"
                style={{ marginLeft: "1%" }}
                onClick={() => props.addCartItem(props.shopItem.id, Size.SMALL)}
              >
                Buy
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
