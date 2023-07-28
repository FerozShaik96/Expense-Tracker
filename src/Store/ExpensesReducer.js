import { createSlice } from "@reduxjs/toolkit";
const initialValues = { Expenses: [] };
const ExpenseSlice = createSlice({
  name: "Expenses",
  initialState: initialValues,
  reducers: {
    AddExpenses(state, action) {
      state.Expenses = [...state.Expenses, action.payload];
    },
    Editexpenses(state, action) {
      state.Expenses = [...state.Expenses, action.payload];
    },
    deleteExpenses(state, action) {
      state.Expenses = [...state.Expenses, action.payload];
    },
  },
});
export const Expenseaction = ExpenseSlice.actions;
export default ExpenseSlice.reducer;
