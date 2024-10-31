import React, { useState } from "react";
import InputCustom from "../../atoms/inputs/InputCustom";
import SelectCustom from "../../atoms/inputs/SelectCustom";
import DateInputCustom from "../../atoms/inputs/DateInputCustom";
import { categoriasGastos } from "../../../data.test";
import ButtonCustom from "../../atoms/button/ButtonCustom";

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

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (
      !formData.amount ||
      !formData.selectedOption ||
      !formData.selectedDate
    ) {
      alert("Please fill in all required fields.");
      return;
    }
  };

  const handleClick = () => {
    console.log("Agregar gasto");
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
            onClick={handleClick}
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
