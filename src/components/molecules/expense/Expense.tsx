import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import ButtonIcon from "../../atoms/button/ButtonIconCustom";

interface ExpenseProps {
  date?: string;
  category?: string;
  description?: string;
  amount?: string;
  className?: string;
}

const Expense: React.FC<ExpenseProps> = ({
  date,
  category,
  description,
  amount,
  className,
}) => {
  const handleClick = () => {
    console.log("Botón de ícono clickeado");
  };

  return (
    <div
      className={`d-flex flex-column fw-bold container-fluid p-1 ${className}`}
    >
      {date && (
        <label className="mb-2 custom-text-primary fw-normal">{date}</label>
      )}
      <div className="custom-bg-primary text-white rounded-top d-flex justify-content-between p-2">
        <p>{category}</p>
        <p className="fw-normal">
          <span className="fw-bold custom-text-secondary">$ </span>
          {`${amount}`}
        </p>
      </div>
      <div className="border border-1 rounded-bottom border-dark-subtle shadow-sm d-flex justify-content-between p-2">
        <p className="fw-normal custom-text-primary">{description}</p>
        <div className="d-flex">
          <ButtonIcon icon={<FaEdit />} onClick={handleClick} size="sm" />
          <ButtonIcon
            icon={<FaTrash />}
            onClick={handleClick}
            size="sm"
            className="ms-2"
          />
        </div>
      </div>
    </div>
  );
};

export default Expense;
