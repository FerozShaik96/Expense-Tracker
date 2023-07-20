import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Footprints, Heart, TrendingUp, TrendingDown } from "lucide-react";
import { Button, Form, Col, Container, Row } from "react-bootstrap";

function SignUpPage() {
  const [isLoading, setIsLoading] = useState(false);
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();
  const submitHandler = async (event) => {
    event.preventDefault();
    const emailEntered = emailRef.current.value;
    const passwordEntered = passwordRef.current.value;
    setIsLoading(true);
    const data = await fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAFTjlr3_juzbFZyNGPmBTHQ9e7oJ0gh6U",
      {
        method: "POST",
        body: JSON.stringify({
          email: emailEntered,
          password: passwordEntered,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const response = await data.json();
    console.log(response);
    if (response && response.error && response.error.message) {
      let errorMessage = "Auhtentication Failed";
      errorMessage = response.error.message;
      alert(errorMessage);
    }
    setIsLoading(false);
    navigate("/login");
    return response;
  };
  return (
    <React.Fragment>
      <Container className="">
        <Row className="d-flex  align-items-center mt-5 justify-content-center">
          <Col>
            <div className="w-100">
              <h1 className="fs-1 fw-bolder">
                Kep
                <TrendingUp
                  size={40}
                  color="#1fd13d"
                  strokeWidth={2.5}
                  absoluteStrokeWidth
                />
                Track{" "}
                <TrendingDown
                  size={40}
                  color="#d11f1f"
                  strokeWidth={2.5}
                  absoluteStrokeWidth
                />
              </h1>
              <div className="d-flex  align-items-center">
                <p className="me-2 mt-1 fs-5">Keep all your Expenses tracked</p>
                <div className="mb-4 me-2">
                  <Footprints />
                </div>
                <div className="me-2">
                  <Footprints />
                </div>
                <div className="mb-4">
                  <Footprints />
                </div>
              </div>
            </div>
            <div>
              <h1 className="fs-4 mt-3 text-muted">
                Welcome to @Kep-Track family{" "}
                <Heart
                  size={28}
                  color="#c52020"
                  strokeWidth={3}
                  absoluteStrokeWidth
                />
              </h1>
            </div>
          </Col>
          <Col className="  pt-5 d-flex  justify-content-center align-items-center">
            <Form
              onSubmit={submitHandler}
              className="border  p-5 border shadow-lg p-3 mb-5 bg-light rounded-5 rounded-5 "
            >
              <Form.Group className="mb-3  " controlId="formBasicEmail">
                <Form.Label className=" mb-3 ps-1  fw-bold">
                  Email address
                </Form.Label>
                <Form.Control
                  ref={emailRef}
                  type="email"
                  placeholder="Enter email"
                />
              </Form.Group>

              <Form.Group className="mb-3   " controlId="formBasicPassword">
                <Form.Label className="mb-3 ps-1  fw-bold">Password</Form.Label>
                <Form.Control
                  ref={passwordRef}
                  type="password"
                  placeholder="Enter Password"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword1">
                <Form.Label className="mb-3 ps-1  fw-bold">
                  Conform Password
                </Form.Label>
                <Form.Control
                  type="password"
                  placeholder=" Enter Conform Password"
                />
              </Form.Group>
              <Form.Group
                className=" d-flex align-itmes-cen ter  gap-3"
                controlId="formBasicCheckbox"
              >
                <Form.Check type="checkbox" className="ms-2" />
                <Form.Label className=" mb-3   fw-light ">
                  Check me out
                </Form.Label>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Text className="  fw-lighter ">
                  By Checking on box you will agree to our{" "}
                  <a href="1">Terms & Conditions </a>
                  And <a href="1">polices of the Company</a>
                </Form.Text>
              </Form.Group>
              <div className="pt-2 d-grid">
                <Button variant="primary" className="" type="submit">
                  {isLoading ? "Sending Request..." : "Create Account"}
                </Button>
              </div>
              <p className=" ps-3  fw-lighter mt-3">
                Already User ..?
                <Link className="px-3 text-decoration-none" to="/login">
                  Click here To Login
                </Link>
              </p>
            </Form>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}

export default SignUpPage;
