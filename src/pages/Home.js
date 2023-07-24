import React, { useState, useEffect } from "react";
import Expense_tracker from "../Utilities/Expense_tracker.jpeg";
import { Form, Button, Row, Container, Col, Table } from "react-bootstrap";
import AddExpenceFrom from "../Utilities/AddExpenceFrom";
import EditExpense from "./EditExpense";
function Home() {
  const localId = localStorage.getItem("LocalId");
  const [getForm, setGetForm] = useState(false);
  const [expense, setExpense] = useState([]);
  const [editExpense, setEditExpense] = useState([]);
  const [editButton, setEditButton] = useState(false);
  const toggleForm = () => {
    setGetForm(!getForm);
  };
  const SubmitHandler = (event) => {
    event.preventDefault();
    toggleForm();
  };
  async function fetchData() {
    const datafetch = await fetch(
      `https://expensetracker-5d404-default-rtdb.firebaseio.com/${localId}/expenses.json`
    );
    if (datafetch.ok) {
      const responsefetch = await datafetch.json();
      const loadedUserdata = [];
      for (const key in responsefetch) {
        loadedUserdata.push({
          id: key,
          Amount: responsefetch[key].Amount,
          Description: responsefetch[key].Description,
          Category: responsefetch[key].Category,
        });
      }
      setExpense(loadedUserdata);
    } else {
      throw new Error("Something Went Wrong Please Try again later");
    }
  }
  useEffect(() => {
    fetchData();
  }, []);
  const ExpenseData = (item) => {
    console.log(item);
    setExpense((prev) => {
      return [...prev, item.enteredData];
    });
    setGetForm(false);
  };
  console.log(expense);
  return (
    <Container
      className="logo  w-100 vh-100  mt-5"
      style={{
        backgroundImage: ` url(${Expense_tracker})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        borderRadius: "50px",
      }}
    >
      {editButton ? (
        <EditExpense
          editExpence={editExpense}
          editButtonClick={editButton}
          onClose={() => setEditButton(false)}
        />
      ) : (
        ""
      )}
      <Row className="d-flex justify-content-center">
        <Form onSubmit={SubmitHandler} className="text-center mt-5">
          <Button type="submit">Add Expenses</Button>
        </Form>
        <AddExpenceFrom
          Expense={ExpenseData}
          show={getForm}
          onClose={() => setGetForm(false)}
        />
        <Col className="d-flex px-4 mt-5 justify-content-center">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th className="text-center">Amount</th>
                <th className="text-center">Description</th>
                <th className="text-center">Category</th>
                <th className="text-center  text-muted ">UpDate Expence </th>
                <th className="text-center  text-muted ">Delete Expence</th>
              </tr>
            </thead>
            <tbody>
              {expense
                ? expense.map((item, index) => (
                    <tr key={index}>
                      <td className="text-center">{item.Amount}</td>
                      <td className="text-center">{item.Description}</td>
                      <td className="text-center">{item.Category}</td>
                      <td>
                        <div className="text-center">
                          <Button
                            onClick={(event) => {
                              event.preventDefault();
                              setEditExpense({ ...expense[index] });
                              setEditButton(!editButton);
                            }}
                            className="px-4"
                          >
                            Edit
                          </Button>
                        </div>
                      </td>
                      <td>
                        <div className="text-center">
                          <Button className="px-4">Delete</Button>
                        </div>
                      </td>
                    </tr>
                  ))
                : ""}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
}
export default Home;
