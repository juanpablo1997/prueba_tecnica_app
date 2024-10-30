import React from "react";
import FormAddExpense from "../../molecules/forms/FormAddExpense";
import Illustration from "../../../img/Illustracion.png";
import TitleHeadCustom from "../../molecules/titleHeadCustom/TitleHeadCustom";

const AddExpenseForm: React.FC = () => {
  return (
    <div className="container-fluid bg-white rounded-1 p-3">
      <FormAddExpense />
    </div>
  );
};

export default AddExpenseForm;
