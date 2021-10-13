import React, { useState } from "react";
import "../css/ShopItem.css";
import { Card, Button, Modal, ModalProps } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { CartItemType } from "./Prints";
import LandingPage from "../assets/LandingPage.jpg";
import { Omit, BsPrefixProps } from "react-bootstrap/esm/helpers";

function MyVerticallyCenteredModal(props: JSX.IntrinsicAttributes & Omit<Pick<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof React.HTMLAttributes<HTMLDivElement>> & { ref?: ((instance: HTMLDivElement | null) => void) | React.RefObject<HTMLDivElement> | null | undefined; }, BsPrefixProps<"div"> & ModalProps> & BsPrefixProps<"div"> & ModalProps & { children?: React.ReactNode; }) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
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
            <Card.Text>{itemData.description.substring(0, 50)}</Card.Text>
            <Button variant="dark">{itemData.price}</Button>
          </Card.ImgOverlay>
        ) : (
          <></>
        )}
      </Card>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

export default ShopItem;
