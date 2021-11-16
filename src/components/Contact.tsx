import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { IWindowProps } from "./Interfaces";
import Wave from "../assets/WaveBlack.svg";

function Contact(props: IWindowProps): JSX.Element {
  const [frommail, setfrommail] = useState("");
  const [password, setpassword] = useState(0);
  const [tomail, settomail] = useState("");

  useEffect(() => {
    Axios.get("http://localhost:3001/read").then((response) => {
      console.log(response.data);
    });
  }, []);

  const sendmail = () => {
    Axios.post("http://localhost:3001/mail", {
      frommail: frommail,
      password: password,
      tomail: tomail,
    }).then((response) => {
      if (response.data.msg === "success") {
        alert("Email sent, awesome!");
      } else if (response.data.msg === "fail") {
        alert("Oops, something went wrong. Try again");
      }
    });
  };

  return (
    <Container
      fluid
      className="p-0 text-center text-white m-0 position-relative"
      style={{
        fontFamily: '"Cormorant", serif',
        backgroundColor: "rgb(20, 20, 20)",
      }}
      id="Contact"
    >
      <Container fluid className="p-0 text-center text-white">
        <h3>
          <b>C O N T A C T</b>
        </h3>
      </Container>

      <Row md={2} className="m-0"></Row>
      <div
        style={{
          width: "100%",
          height: "calc(100vw * 128 / 1440)",
        }}
      ></div>
      <img
        src={Wave}
        className="w-100 position-absolute bottom-0 start-0 p-0"
      ></img>
    </Container>
  );
}

export default Contact;
