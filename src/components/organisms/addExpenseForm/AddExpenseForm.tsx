import React from "react";
import { useDispatch } from "react-redux";
import ButtonCustom from "../../atoms/button/ButtonCustom";
import FormAddExpense from "../../molecules/forms/FormAddExpense";
import { hideAddExpenseForm } from "../../../redux/slices/statusSlice";

const AddExpenseForm: React.FC = () => {
  const dispatch = useDispatch();

  const handleHideAddExpenseForm = () => {
    dispatch(hideAddExpenseForm());
  };

  return (
    <div className="container-fluid bg-white rounded-1 p-3">
      <FormAddExpense />
      <ButtonCustom
        label="Cancelar"
        onClick={handleHideAddExpenseForm}
        variant="outlined"
        size="sm"
        fullWidth
        className="mt-2"
      />
    </div>
  );
};

export default AddExpenseForm;
