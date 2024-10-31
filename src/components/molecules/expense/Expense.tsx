import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { useDispatch } from "react-redux";
import ButtonIcon from "../../atoms/button/ButtonIconCustom";
import { openModal, openConfirmationModal, setExpenseIdToDelete } from "../../../redux/slices/statusSlice"; // Asegúrate de importar setExpenseIdToDelete

interface ExpenseProps {
  amount: number; // Este es un number
  description: string;
  category: string;
  date: string; // Asegúrate de que esto coincida con lo que devuelve tu servicio
  className?: string
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
    console.log("edit")
  }

  // Verificar si date está definido y formatear la fecha
  const formattedDate = date
    ? new Date(date).toLocaleDateString("es-ES", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : "Fecha no disponible"; // Valor por defecto si date es undefined

  return (
    <div className={`d-flex flex-column fw-bold container-fluid p-1 ${className}`}>
      {date && (
        <label className="mb-2 custom-text-primary fw-normal">{formattedDate}</label>
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
            size="sm" 
          />
          <ButtonIcon
            icon={<FaTrash />}
            onClick={() => console.log("Eliminar")}
            size="sm"
            className="ms-2"
          />
        </div>
      </div>
    </div>
  );
};

export default Expense;
