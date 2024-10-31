import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { useDispatch } from "react-redux";
import ButtonIcon from "../../atoms/button/ButtonIconCustom";
import { openModal, openConfirmationModal } from "../../../redux/slices/statusSlice";

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
  const dispatch = useDispatch();

  const handleOpenModal = () => {
    dispatch(openModal());
  };

  const handleOpenConfirmationModal = () => {
    dispatch(openConfirmationModal());
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
          <ButtonIcon 
            icon={<FaEdit />}
            onClick={handleOpenModal} 
            size="sm" />
          <ButtonIcon
            icon={<FaTrash />}
            onClick={handleOpenConfirmationModal}
            size="sm"
            className="ms-2"
          />
        </div>
      </div>
    </div>
  );
};

export default Expense;
