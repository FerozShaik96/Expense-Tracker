import React, { useState, useEffect, useRef } from "react";
import { TrendingDown, TrendingUp } from "lucide-react";
import { useSelector } from "react-redux";
import { Form, Row, Col, Container, Button } from "react-bootstrap";
import VerifyEmail from "../Utilities/VerifyEmail";
function Profile() {
  const isDark = useSelector((state) => state.Theme.isDarkmode);

  const [isLoading, setIsLoading] = useState(false);
  const [submit, setSubmit] = useState(false);
  const nameRef = useRef();
  const imgRef = useRef();
  const submitHandler = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    const name = nameRef.current.value;
    const imgUrl = imgRef.current.value;

    const data = await fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyAFTjlr3_juzbFZyNGPmBTHQ9e7oJ0gh6U",
      {
        method: "POST",
        body: JSON.stringify({
          idToken: localStorage.getItem("userid"),
          displayName: name,
          photoUrl: imgUrl,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const res = await data.json();
    document.querySelector("form").reset();
    alert("Profile updated Please Refresh the page");

    localStorage.setItem(
      "userEnteredDetails",
      JSON.stringify({ name, imgUrl })
    );

    setIsLoading(false);
  };
  useEffect(() => {
    fetchData();
  }, []);
  async function fetchData() {
    const useData = await fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyAFTjlr3_juzbFZyNGPmBTHQ9e7oJ0gh6U",
      {
        method: "POST",
        body: JSON.stringify({
          idToken: localStorage.getItem("userid"),
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const response = await useData.json();
    setSubmit(response ? response : "");
  }
  const updateInfo = !!submit;
  localStorage.setItem("updateInfo", updateInfo);
  return (
    <Container className={`${isDark ? "bg-black rounded-3" : ""}`}>
      <figure className="text-center mt-5 me-3  pt-3">
        <blockquote className={`${isDark ? "text-white" : ""} blockquote`}>
          <p className="pb-1">
            Can you provide an updated summary of yourself...?
          </p>
        </blockquote>
        <figcaption
          className={`${isDark ? "text-primary" : ""} blockquote-footer`}
        >
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
      {/* <div> */}
      <Row className="d-flex  mt-5 justify-content-center">
        {!!submit ? (
          <div>
            <img
              src={submit ? submit.users[0].photoUrl : ""}
              style={{ width: "200px", height: "200px" }}
              className="  rounded-circle"
              alt="User.png"
            />
            <h1 className={`${isDark ? "text-white" : ""} mb-5`}>
              {submit.users[0].displayName}
            </h1>
          </div>
        ) : (
          ""
        )}
        <Col>
          <Form
            onSubmit={submitHandler}
            className="border form shadow-lg p-3 mb-5 bg-light rounded-5  p-5  rounded-5 "
          >
            <Form.Group className="mb-3  " controlId="formBasicEmail">
              <Form.Label className=" mb-3 ps-1  fw-bold">
                Full Name{" "}
              </Form.Label>
              <Form.Control
                type="text"
                ref={nameRef}
                placeholder="Enter Full Name"
                defaultValue={submit ? submit.users[0].displayName : ""}
              />
            </Form.Group>
            <Form.Group className="mb-3  " controlId="formBasicEmail">
              <Form.Label className=" mb-3 ps-1  fw-bold">
                Upload Your Image
              </Form.Label>
              <Form.Control
                type="url"
                ref={imgRef}
                placeholder="paste your URL"
                defaultValue={submit ? submit.users[0].photoUrl : ""}
              />
            </Form.Group>
            <div className="pt-2 d-grid">
              <Button variant="primary" className="" type="submit">
                {isLoading ? "Submitting..." : "update"}
              </Button>
            </div>
          </Form>
          {/* </div> */}
        </Col>
        <Col>
          <VerifyEmail />
        </Col>
      </Row>
    </Container>
  );
}

export default Profile;
