import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./AuthReducer";
import ExpenseReducer from "./ExpensesReducer";
const Store = configureStore({
  reducer: { Auth: AuthReducer, Expense: ExpenseReducer },
});

export default Store;
