import { createSlice } from "@reduxjs/toolkit";

// Estados
interface StatusState {
  showAddExpenseForm: boolean;
  isModalOpen: boolean;
  isConfirmationModalOpen: boolean;
  expenseIdToDelete?: number;
}

// Estado inicial
const initialState: StatusState = {
  showAddExpenseForm: false,
  isModalOpen: false,
  isConfirmationModalOpen: false,
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
    openConfirmationModal(state) {
      state.isConfirmationModalOpen = true;
    },
    closeConfirmationModal(state) {
      state.isConfirmationModalOpen = false;
    },
  },
});

export const {
  showAddExpenseForm,
  hideAddExpenseForm,
  openModal,
  closeModal,
  openConfirmationModal,
  closeConfirmationModal,
} = statusSlice.actions;
export default statusSlice.reducer;
