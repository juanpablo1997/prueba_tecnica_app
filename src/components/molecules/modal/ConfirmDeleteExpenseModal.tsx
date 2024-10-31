import React from "react";
import Title from "../../atoms/titles/TitlesCustom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { closeConfirmationModal } from "../../../redux/slices/statusSlice";
import ButtonIcon from "../../atoms/button/ButtonIconCustom";
import { FaCheck, FaTimes } from "react-icons/fa";

interface ConfirmDeleteModalProps {
  idExpense: number;
}

const ConfirmDeleteModal: React.FC<ConfirmDeleteModalProps> = ({
  idExpense,
}) => {
  const dispatch = useDispatch();

  const isConfirmationModalOpen = useSelector(
    (state: RootState) => state.status.isConfirmationModalOpen
  );

  if (!isConfirmationModalOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="bg-white rounded-1 p-3" style={{ width: "500px" }}>
        <Title
          level={2}
          color="custom-text-primary"
          weight="bold"
          className="mb-3"
        >
          Eliminar gasto
        </Title>
        <p>¿Seguro quieres eliminar este gasto de tu lista?</p>
        <div className="d-flex justify-content-end mt-4">
          <ButtonIcon
            icon={<FaCheck />}
            onClick={() => console.log("Confirmation delete")}
            size="sm"
          />
          <ButtonIcon
            icon={<FaTimes />}
            onClick={() => dispatch(closeConfirmationModal())}
            size="sm"
            className="ms-2"
          />
        </div>
      </div>
    </div>
  );
};

export default ConfirmDeleteModal;
