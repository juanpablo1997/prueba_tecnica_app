import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Expense {
  id: number;
  amount: number;
  category: string;
  date: string;
  description?: string;
}

interface ExpenseState {
  expenses: Expense[];
}

const initialState: ExpenseState = {
  expenses: [],
};

const expenseSlice = createSlice({
  name: 'expenses',
  initialState,
  reducers: {
    setExpenses(state, action: PayloadAction<Expense[]>) {
      state.expenses = action.payload;
    },
    addExpense(state, action: PayloadAction<Expense>) {
      state.expenses.push(action.payload);
    },
  },
});

export const { setExpenses, addExpense } = expenseSlice.actions;

export default expenseSlice.reducer;
