import React, { useState } from "react";
import "../css/ShopItem.css";
import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import ItemModal from "./ItemModal";
import { IShopItemProps } from "./Interfaces";

function ShopItem(props: IShopItemProps): JSX.Element {
  const [isHovering, setIsHovering] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const shopItemTitleSubString = props.shopItem.title.substring(0, 35);
  const shopItemDescriptionSubString = props.shopItem.description.substring(0, 100);

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
          src={props.shopItem.image}
          style={
            isHovering
              ? { filter: "brightness(20%)" }
              : { filter: "brightness(100%)" }
          }
        />
        {isHovering ? (
          <Card.ImgOverlay>
            <Card.Title>
              {shopItemTitleSubString}
              {shopItemTitleSubString != props.shopItem.title
                ? "..."
                : ""}
            </Card.Title>
            <Card.Text>
              {shopItemDescriptionSubString}
              {shopItemDescriptionSubString !=
              props.shopItem.description
                ? "..."
                : ""}
            </Card.Text>
            <h6>${props.shopItem.price}</h6>
          </Card.ImgOverlay>
        ) : (
          <></>
        )}
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
