import React, { useState } from "react";
import { Form, Container, Button, Row, Col } from "react-bootstrap";
function VerifyEmail() {
  const [userData, setUserData] = useState("");
  const handleChange = (event) => {
    setUserData(event.target.value);
  };
  const submitHandler = async (event) => {
    event.preventDefault();
    const verifyData = await fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyAFTjlr3_juzbFZyNGPmBTHQ9e7oJ0gh6U",
      {
        method: "POST",
        body: JSON.stringify({
          requestType: "VERIFY_EMAIL",
          idToken: localStorage.getItem("userid"),
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    alert("Verification email has been send to your Mail");
    const verifyEmail = await verifyData.json();
    setUserData(verifyEmail.email);
  };
  return (
    <div>
      <Form onSubmit={submitHandler}>
        <Form.Group className="mb-3  " controlId="formBasicEmail">
          <Form.Label className=" mb-3 ps-1  fw-bold">
            Verify Your Email{" "}
          </Form.Label>
          <Form.Control
            type="text"
            // ref={nameRef}
            placeholder="Enter Full Name"
            onChange={handleChange}
            defaultValue={userData ? userData.email : ""}
          />
        </Form.Group>
        <div className="pt-2  text-center">
          <Button variant="primary" className="" type="submit">
            {/* {isLoading ? "Submitting..." : "update"} */}
            Verify
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default VerifyEmail;
