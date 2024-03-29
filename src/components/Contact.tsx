import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { IWindowProps } from "./Interfaces";
import Wave from "../assets/WaveBlack.svg";

function Contact(props: IWindowProps): JSX.Element {
  const [emailSender, setEmailSender] = useState("Unknown");
  const [emailBody, setEmailBody] = useState("Empty");

  const sendEmailPostRequest = async (event: any) => {
    event.preventDefault();
    const res = await fetch(
      "https://merillbackend.herokuapp.com/postSendEmail",
      {
        method: "POST",
        body: JSON.stringify({
          email: emailSender,
          body: emailBody,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log(res);
  };

  const handleEmailSenderChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setEmailSender(e.target.value);
  };

  const handleEmailBodyChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setEmailBody(e.target.value);
  };

  return (
    <Container
      fluid
      className="p-0 text-center text-white m-0 position-relative "
      style={{
        fontFamily: '"Cormorant", serif',
        backgroundColor: "rgb(20, 20, 20)",
      }}
      id="Contact"
    >
      <Container fluid className="p-0 text-center text-white pt-5 pb-3">
        <h3>
          <b>C O N T A C T</b>
        </h3>
      </Container>

      <div
        className="py-2 flex-row justify-content-center"
        style={
          props.dimensions.width < 900
            ? { paddingLeft: "0%", paddingRight: "0%" }
            : { paddingLeft: "10%", paddingRight: "10%" }
        }
      >
        <Form className="pb-5 px-5">
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="name@example.com"
              onChange={handleEmailSenderChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlText">
            <Form.Label>Message</Form.Label>
            <Form.Control
              as="textarea"
              placeholder="Hi Merill, I was hoping to have you take my LinkedIn headshot!"
              style={{ height: "20vh" }}
              onChange={handleEmailBodyChange}
            />
          </Form.Group>

          <div className="w-100">
            <Button variant="dark" type="submit" onClick={sendEmailPostRequest}>
              Send Email
            </Button>
          </div>
        </Form>
      </div>
    </Container>
  );
}

export default Contact;
