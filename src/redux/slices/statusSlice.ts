import { createSlice } from '@reduxjs/toolkit';

interface StatusState {
  showAddExpenseForm: boolean;
}

const initialState: StatusState = {
  showAddExpenseForm: false,
};

const statusSlice = createSlice({
  name: 'status',
  initialState,
  reducers: {
    showAddExpenseForm(state) {
      state.showAddExpenseForm = true;
    },
    hideAddExpenseForm(state) {
      state.showAddExpenseForm = false;
    },
  },
});

export const { showAddExpenseForm, hideAddExpenseForm } = statusSlice.actions;
export default statusSlice.reducer;
