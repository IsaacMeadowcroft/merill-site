import React from "react";
import '../css/ShopItem.css';
import { Card, Button} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import LandingPage from '../assets/LandingPage.jpg'

function ShopItem(): JSX.Element {
  return (
    <Card style={{ width: "18rem", backgroundColor: "black", borderWidth: "1px", borderColor: "white", color: "white" }}>
      <Card.Img variant="top" src={LandingPage} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="dark">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default ShopItem;
