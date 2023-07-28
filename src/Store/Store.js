import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./AuthReducer";
import ExpenseReducer from "./ExpensesReducer";
import ThemeReducer from "./ThemReducer";
const Store = configureStore({
  reducer: { Auth: AuthReducer, Expense: ExpenseReducer, Theme: ThemeReducer },
});
export default Store;
