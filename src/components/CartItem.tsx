import React, { useState } from "react";
import "../css/Cart.css";
import { Image, Badge } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { ICartItemProps, Size } from "./Interfaces";
import { BsTrash } from "react-icons/bs";
import { FiPlus, FiMinus } from "react-icons/fi";

function CartItem(props: ICartItemProps): JSX.Element {
  const [quantity, setQuantity] = useState(props.quantity);
  const [visible, setVisible] = useState(true);

  if (visible) {
    return (
      <div
        className="p-0 my-2 d-flex flex-row w-100 rounded"
        style={{
          backgroundColor: "white",
          fontSize: "14px",
        }}
      >
        <div style={{ width: "12%" }}>
          <Image
            style={{
              maxWidth: "100%",
              borderTopLeftRadius: "4px",
              borderBottomLeftRadius: "4px",
            }}
            src={
              props.shopItems?.find((x) => x.id === props.cartItem.id)?.image
            }
          />
        </div>

        <div className="d-flex flex-row justify-content-around w-100">
          <div className="d-flex flex-column justify-content-center">
            <div>
              {props.shopItems?.find((x) => x.id === props.cartItem.id)?.title}
            </div>
            <div>{Size[props.cartItem.size]}</div>
          </div>

          <div className="d-flex flex-row justify-content-center">
            <div
              className="d-flex flex-column justify-content-center cart-item-button"
              onClick={() => {
                props.addCartItem(props.cartItem.id, props.cartItem.size);
                setQuantity(quantity + 1);
              }}
            >
              <FiPlus />
            </div>

            <div className="d-flex flex-column justify-content-center cart-item-button">
              <Badge bg="light" text="dark" style={{ fontSize: "14px" }}>
                {quantity}
              </Badge>
            </div>

            <div
              className="d-flex flex-column justify-content-center cart-item-button"
              onClick={() => {
                props.minusCartItem(props.cartItem.id, props.cartItem.size);
                if (quantity - 1 <= 0) {
                  setVisible(false);
                } else {
                  setQuantity(quantity - 1);
                }
              }}
            >
              <FiMinus />
            </div>
          </div>

          <div className="d-flex flex-column justify-content-center">
            $
            {(props.shopItems?.find((x) => x.id === props.cartItem.id)?.price ||
              1) * quantity}
          </div>

          <div
            className="d-flex flex-column justify-content-center cart-item-button"
            onClick={() => {
              props.removeCartItem(props.cartItem.id, props.cartItem.size);
              setVisible(false);
            }}
          >
            <BsTrash />
          </div>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
}

export default CartItem;
