import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { TrendingDown, TrendingUp } from "lucide-react";
import { Container, Button, Row, Col, Form } from "react-bootstrap";
function ForgotPassWord() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [userEmail, setUserEmail] = useState();
  const changeHandler = (event) => {
    setUserEmail(event.target.value);
  };
  const submitHandler = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    console.log(userEmail);
    const data = await fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyAFTjlr3_juzbFZyNGPmBTHQ9e7oJ0gh6U",
      {
        method: "POST",
        body: JSON.stringify({
          requestType: "PASSWORD_RESET",
          email: userEmail,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const response = await data.json();
    console.log(response);
    alert("Email has been sent");
    document.querySelector("form").reset();
    setIsLoading(false);
    navigate("/login");
  };
  return (
    <Container>
      <Row className=" d-flex  my-5 align-items-center">
        <Col className=" ">
          <figure className="text-center mt-5 me-3">
            <blockquote className="blockquote">
              <p className="pb-1">
                Forgot Password. Dont worry We Will Help you Out
              </p>
            </blockquote>
            <figcaption className="blockquote-footer">
              <cite title="Source Title">
                Team @Kep
                <TrendingUp
                  size={20}
                  color="#1fd13d"
                  strokeWidth={2.5}
                  absoluteStrokeWidth
                />
                Track{" "}
                <TrendingDown
                  size={20}
                  color="#d11f1f"
                  strokeWidth={2.5}
                  absoluteStrokeWidth
                />
              </cite>
            </figcaption>
          </figure>
        </Col>
        <Col>
          <Form
            onSubmit={submitHandler}
            className="border form shadow-lg p-3 my-5 bg-light rounded-5  p-5  rounded-5 "
          >
            <Form.Group className="mb-3  " controlId="formBasicEmail">
              <Form.Label className=" mb-3 ps-1  fw-bold">
                Enter the Registered Email address.
              </Form.Label>
              <Form.Control
                type="email"
                onChange={changeHandler}
                placeholder="Enter email"
              />
            </Form.Group>
            <div className="pt-2 d-grid">
              <Button variant="primary" className="" type="submit">
                {isLoading ? "Submitting..." : "Update"}
              </Button>
            </div>
            <div className="mt-4 text-center">
              <p>
                Click here to <Link to="/login">Login</Link>
              </p>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default ForgotPassWord;
