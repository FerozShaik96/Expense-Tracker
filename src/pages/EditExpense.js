import React, { useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";
function EditExpense({ editExpence, editButtonClick, onClose }) {
  const localId = localStorage.getItem("LocalId");
  const [data, setData] = useState({
    Amount: editExpence.Amount,
    Description: editExpence.Description,
    Category: editExpence.Category,
  });
  const [editButton, setEditButton] = useState(editButtonClick);
  const changeHandler = (event) => {
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
  };
  console.log(data);
  const submitHandler = async (event) => {
    event.preventDefault();

    const editData = await fetch(
      `https://expensetracker-5d404-default-rtdb.firebaseio.com/${localId}/expenses/${editExpence.id}.json`,
      {
        method: "PUT",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (editData.ok) {
      const responseData = await editData.json();
      console.log(responseData);
    }
    console.log(editData);
    setEditButton(!editButton);
    onClose();
  };
  console.log(data.Amount);
  console.log(editButton);
  return (
    <div>
      <Modal
        show={editButton}
        onHide={onClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
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
                defaultValue={editExpence.Amount}
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
                defaultValue={editExpence.Description}
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
                defaultValue={editExpence.Category}
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
          <Button variant="secondary" onClick={onClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default EditExpense;
