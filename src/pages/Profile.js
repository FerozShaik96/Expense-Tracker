import React, { useState } from "react";
import { Container, Button, Row, Col, Form } from "react-bootstrap";
import { TrendingDown, TrendingUp } from "lucide-react";
function Profile() {
  const [isLoading, setIsLoading] = useState(false);
  const [enteredName, setEnteredName] = useState("");
  const [enteredNumber, setEnteredNumber] = useState("");
  const [enteredGender, setEnteredGender] = useState("");
  const [enteredImgUrl, setEnteredImgUrl] = useState("");
  const [Submit, setSubmit] = useState(false);
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      setEnteredImgUrl(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };
  const submitHandler = (event) => {
    event.preventDefault();
    setIsLoading(true);
    setSubmit(true);
  };
  const userData = {
    enteredName,
    enteredNumber,
    enteredGender,
    enteredImgUrl,
  };
  localStorage.setItem("Data", JSON.stringify(userData));
  const UseLoginData = JSON.parse(localStorage.getItem("Data"));
  console.log(UseLoginData);
  return (
    <Container>
      {Submit ? (
        <Row>
          <Col className="my-5 ms-5">
            <div className="d-flex gap-5 my-5 align-items-center">
              <div>
                <h1 className="fs-4 text-decoration-underline  fw-bold">
                  Personal Details
                </h1>
                <p className="mb-1 fs-6 fw-bold">
                  Name :-{UseLoginData.enteredName}
                </p>
                <div className="mb-1 fs-6 fw-bold">
                  Mobile Number :- {UseLoginData.enteredNumber}
                </div>
                <div className="mb-1 fs-6 fw-bold">
                  Gender :- {UseLoginData.enteredGender}
                </div>
              </div>
              <div>
                <img
                  src={UseLoginData.enteredImgUrl}
                  alt="Feroz_Image"
                  style={{ width: "200px", height: "200px" }}
                  className="  rounded-circle"
                />
              </div>
            </div>
          </Col>
          <span className="d-flex ms-5">
            <span className="fs-5 fw-bolder">
              Welcome to{" "}
              <span className="fs-5 fw-bolder">
                Kep
                <TrendingUp
                  size={28}
                  color="#1fd13d"
                  strokeWidth={2.5}
                  absoluteStrokeWidth
                />
                Track{" "}
                <TrendingDown
                  size={28}
                  color="#d11f1f"
                  strokeWidth={2.5}
                  absoluteStrokeWidth
                />
              </span>{" "}
            </span>
            <div className="fs-5 ms-2 fw-bolder">
              {UseLoginData.enteredName}
            </div>
          </span>
        </Row>
      ) : (
        <Row className="d-flex align-items-center mt-5 justify-content-center">
          <Col>
            <figure class="text-end me-3">
              <blockquote class="blockquote">
                <p className="pb-1">
                  Can you provide an updated summary of yourself...?
                </p>
              </blockquote>
              <figcaption class="blockquote-footer">
                <cite title="Source Title">
                  Kep
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
              className="border shadow-lg p-3 mb-5 bg-light rounded-5  p-5  rounded-5 "
            >
              <Form.Group className="mb-3  " controlId="formBasicEmail">
                <Form.Label className=" mb-3 ps-1  fw-bold">
                  Full Name{" "}
                </Form.Label>
                <Form.Control
                  type="text"
                  value={enteredName}
                  onChange={(event) => setEnteredName(event.target.value)}
                  placeholder="Enter Full Name"
                />
              </Form.Group>

              <Form.Group className="mb-3   " controlId="formBasicPassword">
                <Form.Label className="mb-3 ps-1  fw-bold">
                  Phone Number
                </Form.Label>
                <Form.Control
                  value={enteredNumber}
                  onChange={(event) => setEnteredNumber(event.target.value)}
                  type="number"
                  placeholder="Enter Your Number"
                />
              </Form.Group>
              <Form.Group className="mb-3   " controlId="formBasicPassword">
                <Form.Label className="mb-3 ps-1  fw-bold">Gender</Form.Label>
                <Form.Select
                  value={enteredGender}
                  onChange={(event) => setEnteredGender(event.target.value)}
                  aria-label="Default select example"
                >
                  <option>Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3  " controlId="formBasicEmail">
                <Form.Label className=" mb-3 ps-1  fw-bold">
                  Upload Your Image
                </Form.Label>
                <Form.Control
                  type="file"
                  onChange={handleImageUpload}
                  placeholder="Enter Full Name"
                />
              </Form.Group>
              <div className="pt-2 d-grid">
                <Button variant="primary" className="" type="submit">
                  {isLoading ? "Submitting..." : "update"}
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      )}
    </Container>
  );
}

export default Profile;
