import React from "react";
import "../css/Prints.css";
import ShopItem from "./ShopItem";
import { Spinner, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useQuery } from "react-query";

export type CartItemType = {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
  amount: number;
};

const getProducts = async (): Promise<CartItemType[]> =>
  await (await fetch("https://fakestoreapi.com/products")).json();

function Prints(): JSX.Element {
  const { data, isLoading, error } = useQuery<CartItemType[]>(
    "products",
    getProducts
  );
  if (isLoading) {
    return (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  } else if (error) {
    return <div>Something went wrong... </div>;
  } else {
    return (
      <Container
        fluid
        style={{ backgroundColor: "black", padding: "0px" }}
        id="Prints"
      >
        <Row style={{ width: "100%", margin: "0px" }}>
          {data?.map((item) => (
            <Col md={4} style={{padding: "0px"}}>
              <ShopItem {...item} />
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default Prints;
