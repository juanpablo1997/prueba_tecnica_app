import "./Modal.css";
import React from "react";
import { RootState } from "../../../redux/store";
import Title from "../../atoms/titles/TitlesCustom";
import FormAddExpense from "../forms/FormAddExpense";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../../redux/slices/statusSlice";
import ButtonCustom from "../../atoms/button/ButtonCustom";

const Modal: React.FC = () => {
  const dispatch = useDispatch();

  const isModalOpen = useSelector(
    (state: RootState) => state.status.isModalOpen
  );

  if (!isModalOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="bg-white rounded-1 p-3" style={{ width: "500px" }}>
        <Title
          level={2}
          color="custom-text-primary"
          weight="bold"
          className="mb-3"
        >
          Editar gasto
        </Title>
        <FormAddExpense />
        <ButtonCustom
          label="Cancelar"
          onClick={() => dispatch(closeModal())}
          variant="outlined"
          size="sm"
          fullWidth
          className="mt-2"
        />
      </div>
    </div>
  );
};

export default Modal;
