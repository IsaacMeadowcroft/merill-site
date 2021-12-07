import React from "react";
import "../css/ShopItem.css";
import { Modal, Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { IShopItemProps } from "./Interfaces";
import PictureFrame from "../assets/PictureFrame.jpg";
import PictureFrame2 from "../assets/PictureFrame2.jpg";

interface ItemModalType extends IShopItemProps {
  show: boolean;
  onHide: () => void;
}

function ItemModal(props: ItemModalType): JSX.Element {
  return (
    <Modal
      {...props}
      aria-labelledby="contained-modal-title-vcenter"
      centered
      contentClassName="p-0 w-auto m-0"
      dialogClassName="my-0 p-0 d-flex flex-row justify-content-center"
      animation={false}
    >
      <Carousel
        interval={null}
        style={
          props.dimensions.width > 800
            ? { maxWidth: "calc(100vh * 982/1310)", maxHeight: "100vh" }
            : {
                maxWidth: "100vw",
                maxHeight: "calc(100vw * 1310/982)",
              }
        }
      >
        <Carousel.Item>
          <img
            style={
              props.dimensions.width > 800
                ? { maxHeight: "100vh" }
                : { maxWidth: "100vw", maxHeight: "calc(100vw * 1310/982)" }
            }
            src={props.shopItem.image}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <div style={{ position: "relative", height: "100vh" }}>
            <img
              style={
                props.dimensions.width > 800
                  ? { maxHeight: "100vh" }
                  : { maxWidth: "100vw", maxHeight: "calc(100vw * 1310/982)" }
              }
              src={PictureFrame2}
              alt="Second slide"
            />
            <img
              className="d-block "
              src={props.shopItem.image}
              alt="Second slide"
              style={{
                maxWidth: "52.1%",
                position: "absolute",
                top: "16.3%",
                left: "23.7%",
              }}
            />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div style={{ position: "relative", height: "100vh" }}>
            <img
              style={
                props.dimensions.width > 800
                  ? { maxHeight: "100vh" }
                  : { maxWidth: "100vw", maxHeight: "calc(100vw * 1310/982)" }
              }
              src={PictureFrame}
              alt="Third slide"
            />
            <img
              className="d-block"
              src={props.shopItem.image}
              alt="Third slide"
              style={{
                maxWidth: "45%",
                position: "absolute",
                top: "14%",
                left: "29%",
              }}
            />
          </div>
        </Carousel.Item>
      </Carousel>
    </Modal>
  );
}

export default ItemModal;
