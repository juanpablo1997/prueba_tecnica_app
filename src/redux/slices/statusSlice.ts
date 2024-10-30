import { createSlice } from "@reduxjs/toolkit";

// Estados
interface StatusState {
  showAddExpenseForm: boolean;
  isModalOpen: boolean;
}

// Estado inicial
const initialState: StatusState = {
  showAddExpenseForm: false,
  isModalOpen: false,
};

// Acciones
const statusSlice = createSlice({
  name: "status",
  initialState,
  reducers: {
    showAddExpenseForm(state) {
      state.showAddExpenseForm = true;
    },
    hideAddExpenseForm(state) {
      state.showAddExpenseForm = false;
    },
    openModal(state) {
      state.isModalOpen = true;
    },
    closeModal(state) {
      state.isModalOpen = false;
    },
  },
});

export const { showAddExpenseForm, hideAddExpenseForm, openModal, closeModal } =
  statusSlice.actions;
export default statusSlice.reducer;
