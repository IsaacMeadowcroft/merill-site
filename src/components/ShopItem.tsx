import React, { useState } from "react";
import "../css/ShopItem.css";
import { Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { CartItemType } from "./Prints";
import LandingPage from "../assets/LandingPage.jpg";

function ShopItem(itemData: CartItemType): JSX.Element {
  const [isHovering, setIsHovering] = useState(false);

  return (
      <Card className="card-styles" onMouseOver={() => {
      setIsHovering(true);
    }} onMouseLeave={() => {
      setIsHovering(false);
    }}>
          <Card.Img variant="top"  src={LandingPage} style={isHovering? {filter: "brightness(20%)"} : {filter: "brightness(100%)"}}/>
        {isHovering ? (
          <Card.ImgOverlay>
            <Card.Title>{itemData.title}</Card.Title>
            <Card.Text>{itemData.description.substring(0, 50)}</Card.Text>
            <Button variant="dark">{itemData.price}</Button>
          </Card.ImgOverlay>
        ) : (
          <></>
        )}
      </Card>
  );
}

export default ShopItem;
