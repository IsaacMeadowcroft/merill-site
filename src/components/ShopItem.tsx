import React from "react";
import '../css/ShopItem.css';
import { Card, Button} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import { CartItemType } from "./Prints";

function ShopItem(itemData: CartItemType): JSX.Element {
  return (
    <Card style={{ width: "18rem", backgroundColor: "black", borderWidth: "1px", borderColor: "white", color: "white" }}>
      <Card.Img variant="top" src={itemData.image} />
      <Card.Body>
        <Card.Title>{itemData.title}</Card.Title>
        <Card.Text>{itemData.description.substring(0,50)}</Card.Text>
        <Button variant="dark">{itemData.price}</Button>
      </Card.Body>
    </Card>
  );
}

export default ShopItem;
