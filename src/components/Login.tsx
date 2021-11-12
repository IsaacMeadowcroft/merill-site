import React, { useState } from "react";
import {
  Button,
  ButtonGroup,
  Form,
  Modal,
  ToggleButton,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Login(props: any): JSX.Element {
  const [radioValue, setRadioValue] = useState("0");

  return (
    <Modal show={props.show} onHide={props.handleClose}>
      <Modal.Header className="border-0" closeButton>
        <Modal.Title className="d-flex justify-content-center w-100">
          <h2>{radioValue === "0" ? "Login" : "Signup"}</h2>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <>
          <div className="d-flex justify-content-center w-100 pb-4">
            <ButtonGroup size="lg">
              <ToggleButton
                className="px-5"
                type="radio"
                variant="outline-dark"
                value="0"
                id="0"
                checked={radioValue === "0"}
                onChange={() => setRadioValue("0")}
              >
                Login
              </ToggleButton>
              <ToggleButton
                className="px-5"
                type="radio"
                variant="outline-dark"
                value="1"
                id="1"
                checked={radioValue === "1"}
                onChange={() => setRadioValue("1")}
              >
                Signup
              </ToggleButton>
            </ButtonGroup>
          </div>

          <Form.Floating className="mb-3">
            <Form.Control
              id="floatingInputCustom"
              type="email"
              placeholder="name@example.com"
            />
            <label htmlFor="floatingInputCustom">Email address</label>
          </Form.Floating>
          <Form.Floating>
            <Form.Control
              id="floatingPasswordCustom"
              type="password"
              placeholder="Password"
            />
            <label htmlFor="floatingPasswordCustom">Password</label>
          </Form.Floating>
        </>
      </Modal.Body>
      <Modal.Footer className="border-0 pb-4">
        <Button
          variant="dark"
          onClick={props.handleClose}
          className="w-100 py-2"
        >
          {radioValue === "0" ? "Login" : "Signup"}
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Login;
