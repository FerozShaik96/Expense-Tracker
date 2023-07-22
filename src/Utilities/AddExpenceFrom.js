import React, { useState } from "react";
import { Container, Col, Row, Modal, Form, Button } from "react-bootstrap";
function AddExpenceFrom(props) {
  const [data, setData] = useState({
    Amount: 0,
    Description: "",
    Category: "Food",
  });
  const [isLoading, setIsLoading] = useState(false);
  const changeHandler = (event) => {
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
  };
  const submitHandler = (event) => {
    event.preventDefault();
    setIsLoading(true);
    document.querySelector("form").reset();
    setIsLoading(false);
    props.Expense({ data, isLoading });
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
                    onChange={changeHandler}
                    name="Amount"
                    placeholder="Enter Amount"
                  />
                </Form.Group>
                <Form.Group className="mb-3  " controlId="formBasicEmail">
                  <Form.Label className=" mb-3 ps-1  fw-bold">
                    Enter the Description
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="Description"
                    onChange={changeHandler}
                    placeholder="Add a description"
                  />
                </Form.Group>
                <Form.Group className="mb-3  " controlId="formBasicEmail">
                  <Form.Label className=" mb-3 ps-1  fw-bold">
                    Enter the Category
                  </Form.Label>
                  <Form.Select
                    aria-label="Default select example"
                    onChange={changeHandler}
                    name="Category"
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
                    Add Expense
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
