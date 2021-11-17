import React, { useState } from "react";
import "../css/ShopItem.css";
import { Button, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import ItemModal from "./ItemModal";
import { IShopItemProps, Size } from "./Interfaces";

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
        <Card.Img
          variant="top"
          src={props.shopItem.image}
          className="rounded-0"
        />
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
