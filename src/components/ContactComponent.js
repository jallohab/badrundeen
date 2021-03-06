import React from "react";
import { Label, Input } from "reactstrap";
import { Form, Button, FormGroup, FormText } from "react-bootstrap";
import { Row, Col, Container } from "reactstrap";
import emailjs from "emailjs-com";
import "../App.css";

function ContactUs() {
  return (
    <>
      <RenderContactForm />
    </>
  );
}

function RenderContactForm() {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "gmail",
        "emailjs-com",
        Form.current,
        "user_VMUabja09TKLl4H9H04En"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <>
      <Container className="mt-5">
        <Row>
          <Col>
            <h2 className="card-text">What We Can Do For You.</h2>
          </Col>
        </Row>
        <hr className="my-4" />
        <Row>
          <Col
            className="mycontent-left"
            xs={6}
            style={{ backgroundColor: "lightseagreen" }}
          >
            <div
              style={{
                justifyContent: "center",
                padding: 100,
                fontSize: 25,
              }}
            >
              <div class="address">
                <address>
                  1350 Crystal Lake Rd
                  <br />
                  Atlanta, GA 30349
                </address>
              </div>
              <div class="address">
                <address>(123) 456-0000</address>
              </div>
              <div class="address">
                <address>masjidbadrundeed@gmail.com</address>
              </div>
            </div>
          </Col>
          <Col xs={6}>
            <Form className="ml-3" onSubmit={sendEmail}>
              <FormGroup role="form">
                <Row>
                  <Col xs={6}>
                    <Label for="firstName">First Name</Label>
                    <Input
                      id="firstName"
                      type="text"
                      placeholder="First Name"
                      className="mb-2"
                      name="first_name"
                    ></Input>
                  </Col>
                  <Col xs={6}>
                    <Label for="lastName">Last Name</Label>
                    <Input
                      id="lastName"
                      type="text"
                      placeholder="Last Name"
                      name="last_name"
                    ></Input>
                  </Col>
                </Row>
                <Row className="mt-2">
                  <Col>
                    <Label for="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Email Address"
                      name="email"
                    ></Input>
                    <FormText>
                      We'll never share your email with anyone else.
                    </FormText>
                  </Col>
                </Row>
              </FormGroup>

              <FormGroup className="mt-3">
                <Row>
                  <Col>
                    <Label for="contactMessage">Your Message:</Label>
                    <Input
                      id="contactMessage"
                      type="textarea"
                      placeholder="What we can do for you"
                      name="message"
                    ></Input>
                  </Col>
                </Row>
                <Row>
                  <Col className="mt-4">
                    <Button as="input" type="submit" value="Submit" />
                  </Col>
                </Row>
              </FormGroup>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default ContactUs;
