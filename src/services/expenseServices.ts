import axios from "axios";
import { expenseType } from "../types/expenseTypes";

const API_URL = "http://localhost:8080/expenses/";

// Función para agregar un gasto
export const addExpense = async (expense: {
  amount: number;
  description: string;
  category: string;
  date: string;
}) => {
  try {
    const response = await axios.post(API_URL, expense, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error adding expense:", error);
    throw error;
  }
};

// Función para obtener todos los gastos
export const getAllExpenses = async (): Promise<expenseType[]> => {
  try {
    const response = await axios.get(API_URL, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching expenses:", error);
    throw error;
  }
};

// Función para eliminar un gasto por ID
export const deleteExpense = async (id: number): Promise<void> => {
  try {
    await axios.delete(`${API_URL}${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("Error deleting expense:", error);
    throw error;
  }
};

// Función para actualizar un gasto
export const updateExpense = async (id: number, updatedExpense: Partial<expenseType>): Promise<expenseType | null> => {
  try {
    const response = await axios.put(`${API_URL}${id}`, updatedExpense, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error updating expense:", error);
    throw error;
  }
};
