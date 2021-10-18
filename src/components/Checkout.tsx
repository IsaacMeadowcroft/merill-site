import React, { useState } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { CA_PROVINCES, IWindowShopCartProps, US_STATES } from "./Interfaces";
import { Formik } from "formik";
import * as yup from "yup";

function Checkout(props: IWindowShopCartProps): JSX.Element {
  const [country, setCountry] = useState("US");
  const schema = yup.object().shape({
    address: yup.string().required(),
    email: yup.string().required(),
    city: yup.string().required(),
    postalCode: yup.string().required(),
  });

  return (
    <Formik
      validationSchema={schema}
      onSubmit={console.log}
      initialValues={{
        address: "",
        email: "",
        city: "",
        postalCode: "",
      }}
    >
      {({ handleSubmit, handleChange, values, touched, errors }) => (
        <Card style={{ height: "94vh", margin: "3vh" }}>
          <Card.Body>
            <Card.Title>Checkout</Card.Title>
            <Card.Text>
              <Form noValidate onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="Enter email"
                    value={values.email}
                    onChange={handleChange}
                    isValid={!errors.email}
                  />
                </Form.Group>

                <Row className="mb-3">
                  <Form.Group as={Col}>
                    <Form.Label>Country</Form.Label>
                    <Form.Select
                      defaultValue="US"
                      onChange={() =>
                        country == "US" ? setCountry("CA") : setCountry("US")
                      }
                    >
                      <option>US</option>
                      <option>CA</option>
                    </Form.Select>
                  </Form.Group>

                  <Form.Group as={Col}>
                    <Form.Label>
                      {country == "US" ? "State" : "Province"}
                    </Form.Label>
                    <Form.Select defaultValue="Choose...">
                      <option>Choose...</option>
                      {country == "US"
                        ? US_STATES.map((item) => {
                            return <option>{item}</option>;
                          })
                        : CA_PROVINCES.map((item) => {
                            return <option>{item}</option>;
                          })}
                    </Form.Select>
                  </Form.Group>

                  <Form.Group as={Col}>
                    <Form.Label>City</Form.Label>
                    <Form.Control
                      placeholder="Enter city"
                      type="text"
                      name="city"
                      value={values.city}
                      onChange={handleChange}
                      isValid={touched.city && !errors.city}
                    />
                  </Form.Group>
                </Row>

                <Row className="mb-3">
                  <Form.Group as={Col}>
                    <Form.Label>Address</Form.Label>
                    <Form.Control
                      placeholder="Enter address"
                      type="text"
                      name="address"
                      value={values.address}
                      onChange={handleChange}
                      isValid={touched.address && !errors.address}
                    />
                  </Form.Group>

                  <Form.Group as={Col}>
                    <Form.Label>Postal Code</Form.Label>
                    <Form.Control
                      placeholder="Enter code"
                      type="text"
                      name="postalCode"
                      value={values.postalCode}
                      onChange={handleChange}
                      isValid={touched.postalCode && !errors.postalCode}
                    />
                  </Form.Group>
                </Row>

                <Button variant="primary" type="submit">
                  Checkout
                </Button>
              </Form>
            </Card.Text>
          </Card.Body>
        </Card>
      )}
    </Formik>
  );
}

export default Checkout;
