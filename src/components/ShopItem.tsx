import React, { useState } from "react";
import "../css/ShopItem.css";
import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import ItemModal from "./ItemModal";
import LandingPage from "../assets/LandingPage.jpg";
import { IShopItemProps } from "./Interfaces";


function ShopItem(props: IShopItemProps): JSX.Element {
  const [isHovering, setIsHovering] = useState(false);
  const [modalShow, setModalShow] = useState(false);

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
            <Card.Title>{props.item.title.substring(0, 35)}...</Card.Title>
            <Card.Text>{props.item.description.substring(0, 100)}...</Card.Text>
            <h6>${props.item.price}</h6>
          </Card.ImgOverlay>
        ) : (
          <></>
        )}
      </Card>

      <ItemModal
        item={props.item}
        show={modalShow}
        onHide={() => setModalShow(false)}
        dimensions={props.dimensions}
        scrollPosition={props.scrollPosition}
      />
    </>
  );
}

export default ShopItem;
