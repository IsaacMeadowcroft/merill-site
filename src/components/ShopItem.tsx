import React, { useState } from "react";
import "../css/ShopItem.css";
import {
  Row,
  Image,
  Card,
  Button,
  Modal,
  ModalProps,
  Col,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { CartItemType } from "./Prints";
import LandingPage from "../assets/LandingPage.jpg";
import { Omit, BsPrefixProps } from "react-bootstrap/esm/helpers";

function MyVerticallyCenteredModal(
  props: JSX.IntrinsicAttributes &
    Omit<
      Pick<
        React.DetailedHTMLProps<
          React.HTMLAttributes<HTMLDivElement>,
          HTMLDivElement
        >,
        "key" | keyof React.HTMLAttributes<HTMLDivElement>
      > & {
        ref?:
          | ((instance: HTMLDivElement | null) => void)
          | React.RefObject<HTMLDivElement>
          | null
          | undefined;
      },
      BsPrefixProps<"div"> & ModalProps
    > &
    BsPrefixProps<"div"> &
    ModalProps & { children?: React.ReactNode }
) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.itemData.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <Col sm={12} md={5}>
            <Image src={LandingPage} fluid/>
          </Col>
          <Col sm={12} md={7}>
            <Row><p>{props.itemData.description}</p></Row>
            <Row><Button variant="warning">Add to Cart: ${props.itemData.price}</Button></Row>
          </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide} >Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function ShopItem(itemData: CartItemType): JSX.Element {
  const [isHovering, setIsHovering] = useState(false);
  const [modalShow, setModalShow] = React.useState(false);

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
            <Card.Title>{itemData.title}</Card.Title>
            <Card.Text>{itemData.description}</Card.Text>
            <Button variant="dark">{itemData.price}</Button>
          </Card.ImgOverlay>
        ) : (
          <></>
        )}
      </Card>

      <MyVerticallyCenteredModal
        itemData={itemData}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

export default ShopItem;
