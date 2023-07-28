import React, { useRef, useState } from "react";
import { Container, Col, Row, Modal, Form, Button } from "react-bootstrap";
function AddExpenceFrom(props) {
  const localId = localStorage.getItem("LocalId");
  const enterAmount = useRef();
  const enterDescription = useRef();
  const enterCategory = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const submitHandler = async (event) => {
    event.preventDefault();
    const enteredData = {
      Amount: enterAmount.current.value,
      Description: enterDescription.current.value,
      Category: enterCategory.current.value,
    };
    props.Expense({ enteredData, isLoading });
    const Data = await fetch(
      `https://expensetracker-5d404-default-rtdb.firebaseio.com/${localId}/expenses.json`,
      {
        method: "POST",
        body: JSON.stringify(enteredData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (Data.ok) {
      const res = await Data.json();
      console.log(res);
      props.onClose();
    }
  };

  return (
    <Container>
      <Row>
        <Col className="d-flex justify-content-center">
          <Modal
            show={props.show}
            onHide={props.onClose}
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title
                id="contained-modal-title-vcenter"
                className="text-center"
              >
                Add Expenses
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form
                onSubmit={submitHandler}
                className="border form shadow-lg  p-3  bg-light  p-5  rounded-5 "
              >
                <Form.Group className="mb-3  " controlId="formBasicEmail">
                  <Form.Label className=" mb-3 ps-1  fw-bold">
                    Enter the Amount
                  </Form.Label>
                  <Form.Control
                    type="number"
                    name="Amount"
                    placeholder="Enter Amount"
                    ref={enterAmount}
                  />
                </Form.Group>
                <Form.Group className="mb-3  " controlId="formBasicEmail">
                  <Form.Label className=" mb-3 ps-1  fw-bold">
                    Enter the Description
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="Description"
                    placeholder="Add a description"
                    ref={enterDescription}
                  />
                </Form.Group>
                <Form.Group className="mb-3  " controlId="formBasicEmail">
                  <Form.Label className=" mb-3 ps-1  fw-bold">
                    Enter the Category
                  </Form.Label>
                  <Form.Select
                    aria-label="Default select example"
                    name="Category"
                    ref={enterCategory}
                  >
                    <option>Open this select menu</option>
                    <option value="Petrol">Petrol</option>
                    <option value="Food">Food</option>
                    <option value="Maintaince">Maintaince</option>
                    <option value="Maintaince">Health</option>
                    <option value="Movies">Movies</option>
                  </Form.Select>
                </Form.Group>
                <div className="text-end mt-4">
                  <Button variant="primary" type="submit">
                    {isLoading ? "Submiting" : "Add Expense"}
                  </Button>
                </div>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={props.onClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </Col>
      </Row>
    </Container>
  );
}

export default AddExpenceFrom;
