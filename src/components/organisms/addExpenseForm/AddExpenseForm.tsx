import React from "react";
import FormAddExpense from "../../molecules/forms/FormAddExpense";
import Illustration from "../../../img/Illustracion.png";
import TitleHeadCustom from "../../molecules/titleHeadCustom/TitleHeadCustom";

const AddExpenseForm: React.FC = () => {
  return (
    <div className="bg-white rounded-1 p-3 mt-2">
      <TitleHeadCustom title="Agregar un nuevo gasto" />
      <div className="row justify-content-around align-items-center">
        <div className="col-8 col-md-8 bg-white rounded-1 mb-3 mb-md-0">
          <FormAddExpense />
        </div>
        <div className="col-4 col-md-4">
          <img src={Illustration} alt="Illustracion" className="img-fluid" />
        </div>
      </div>
    </div>
  );
};

export default AddExpenseForm;
