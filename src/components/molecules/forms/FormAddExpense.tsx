import React, { useState } from "react";
import InputCustom from "../../atoms/inputs/InputCustom";
import SelectCustom from "../../atoms/inputs/SelectCustom";
import DateInputCustom from "../../atoms/inputs/DateInputCustom";
import { categoriasGastos } from "../../../data.test";
import ButtonCustom from "../../atoms/button/ButtonCustom";
import { addExpense } from "../../../services/expenseServices";
import { toast } from 'react-hot-toast';

const FormAddExpense: React.FC = () => {
  const [formData, setFormData] = useState({
    amount: "",
    description: "",
    selectedOption: "",
    selectedDate: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (
      !formData.amount ||
      !formData.selectedOption ||
      !formData.selectedDate
    ) {
      alert("Please fill in all required fields.");
      return;
    }

    const expense = {
      amount: parseFloat(formData.amount), // Asegúrate de que sea un número decimal
      description: formData.description,
      category: formData.selectedOption, // Cambiado a category
      date: new Date(formData.selectedDate).toISOString(), // Convertido a ISO
    };

    try {
      await addExpense(expense);
      console.log("Expense added successfully:");
      toast.success("Gasto agregado con éxito!");
      setFormData({
        amount: "",
        description: "",
        selectedOption: "",
        selectedDate: "",
      });
    } catch (error) {
      console.error("Error adding expense:", error);
      toast.error("Error al agregar el gasto. Intenta de nuevo.");
    }
  };

  // Función intermedia para manejar el evento onClick
  const handleButtonClick = () => {
    const form = document.querySelector("form");
    if (form) {
      form.dispatchEvent(
        new Event("submit", { cancelable: true, bubbles: true })
      );
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <InputCustom
          type="number"
          name="amount"
          placeholder="Monto"
          value={formData.amount}
          onChange={handleChange}
          label="Cantidad"
          required
        />
        <SelectCustom
          name="selectedOption"
          value={formData.selectedOption}
          onChange={handleChange}
          options={categoriasGastos}
          label="Selecciona una Opción"
          required
        />
        <DateInputCustom
          name="selectedDate"
          value={formData.selectedDate}
          onChange={handleChange}
          label="Selecciona una Fecha"
          required
        />
        <InputCustom
          type="text"
          name="description"
          placeholder="Escribe algo corto que puedas recordar"
          value={formData.description}
          onChange={handleChange}
          label="Descripción del gasto"
        />
        <div className="mt-3">
          <ButtonCustom
            label="Agregar gasto"
            onClick={handleButtonClick} // Usa la función intermedia
            variant="solid"
            size="sm"
            fullWidth
          />
        </div>
      </form>
    </>
  );
};

export default FormAddExpense;
