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
        <img
          style={{ maxWidth: "100%" }}
          src={props.shopItem.image}
          alt="First slide"
          onClick={() => setModalShow(!modalShow)}
        />

        <Card.Body className="d-flex flex-column justify-content-between">
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
