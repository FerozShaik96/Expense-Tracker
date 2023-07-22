import React, { useState } from "react";
import Expense_tracker from "../Utilities/Expense_tracker.jpeg";
import { Form, Button, Row, Container, Col, Table } from "react-bootstrap";
import AddExpenceFrom from "../Utilities/AddExpenceFrom";
function Home() {
  const [getForm, setGetForm] = useState(false);
  const [expense, setExpense] = useState([]);
  const toggleForm = () => {
    setGetForm(!getForm);
  };
  const SubmitHandler = (event) => {
    event.preventDefault();
    toggleForm();
  };
  const ExpenseData = (item) => {
    setExpense((prev) => {
      return [...prev, item.data];
    });
    setGetForm(false);
  };
  const EditHandler = (event) => {
    event.preventDefault();
    toggleForm();
  };
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
                          <Form onSubmit={EditHandler}>
                            <Button type="submit" className="px-4">
                              Edit
                            </Button>
                          </Form>
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
