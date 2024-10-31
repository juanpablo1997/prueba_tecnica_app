import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Estados
interface StatusState {
  showAddExpenseForm: boolean;
  isModalOpen: boolean;
  isConfirmationModalOpen: boolean;
  expenseIdToDelete?: number; // Añadido para almacenar el ID del gasto a eliminar
}

// Estado inicial
const initialState: StatusState = {
  showAddExpenseForm: false,
  isModalOpen: false,
  isConfirmationModalOpen: false,
  expenseIdToDelete: undefined, // Inicialmente indefinido
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
      state.expenseIdToDelete = undefined; // Reiniciar el ID al cerrar el modal
    },
    setExpenseIdToDelete(state, action: PayloadAction<number>) {
      state.expenseIdToDelete = action.payload; // Establecer el ID del gasto a eliminar
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
  setExpenseIdToDelete, // Exportar la nueva acción
} = statusSlice.actions;

export default statusSlice.reducer;
