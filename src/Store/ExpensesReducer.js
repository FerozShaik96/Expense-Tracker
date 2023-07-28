import { createSlice } from "@reduxjs/toolkit";
const initialValues = { Expenses: [], isActivePrime: false };
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
    IsPrime(state, action) {
      if (action.payload > 10000) {
        state.isActivePrime = true;
      }
    },
    cancelPrime(state) {
      state.isActivePrime = false;
    },
  },
});
export const Expenseaction = ExpenseSlice.actions;
export default ExpenseSlice.reducer;
