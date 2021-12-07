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
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [radioValue, setRadioValue] = useState("0");

  const sendLoginPostRequest = async (event: any) => {
    event.preventDefault();
    const res = await fetch("https://merillbackend.herokuapp.com/loginUser", {
      method: "POST",
      body: JSON.stringify({
        email: email,
        password: password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log("Result " + res.status);
    if (res.status == 100) {
      props.handleClose();
      props.setLogin(true);
    }
  };

  const sendSignupPostRequest = async (event: any) => {
    event.preventDefault();
    const res = await fetch("https://merillbackend.herokuapp.com/createUser", {
      method: "POST",
      body: JSON.stringify({
        email: email,
        password: password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log("Result " + res.status);
    if (res.status == 100) {
      props.handleClose();
      props.setLogin(true);
    }
  };

  const handleEmailChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setPassword(e.target.value);
  };

  return (
    <Modal
      show={props.show}
      onHide={props.handleClose}
      contentClassName="bg-dark"
    >
      <Modal.Header
        className="border-0"
        closeVariant="white"
        closeButton
      ></Modal.Header>
      <Modal.Body>
        <>
          <Modal.Title className="d-flex justify-content-center w-100 mb-5 text-light">
            <h2>{radioValue === "0" ? "Login" : "Signup"}</h2>
          </Modal.Title>

          <div className="d-flex justify-content-center w-100 pb-4">
            <ButtonGroup size="lg">
              <ToggleButton
                className="px-5"
                type="radio"
                variant="outline-light"
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
                variant="outline-light"
                value="1"
                id="1"
                checked={radioValue === "1"}
                onChange={() => setRadioValue("1")}
              >
                Signup
              </ToggleButton>
            </ButtonGroup>
          </div>
          <Form.Floating className="mb-4 mx-3">
            <Form.Control
              id="floatingInputCustom"
              type="email"
              placeholder="name@example.com"
              className="bg-dark text-light"
              onChange={handleEmailChange}
            />
            <label className="text-light" htmlFor="floatingInputCustom">
              Email address
            </label>
          </Form.Floating>
          <Form.Floating className="mb-4 mx-3">
            <Form.Control
              id="floatingPasswordCustom"
              type="password"
              placeholder="Password"
              className="bg-dark text-light"
              onChange={handlePasswordChange}
            />
            <label className="text-light" htmlFor="floatingPasswordCustom">
              Password
            </label>
          </Form.Floating>
        </>
      </Modal.Body>
      <Modal.Footer className="border-0 mt-2 mb-4">
        <Button
          variant="outline-light"
          onClick={
            radioValue === "0" ? sendLoginPostRequest : sendSignupPostRequest
          }
          className="w-100 py-2"
          size="lg"
        >
          {radioValue === "0" ? "Login" : "Signup"}
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Login;
