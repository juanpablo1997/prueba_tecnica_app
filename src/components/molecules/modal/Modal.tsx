import "./Modal.css";
import React from "react";
import { RootState } from "../../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../../redux/slices/statusSlice";

const Modal: React.FC = () => {
  const dispatch = useDispatch();

  const isModalOpen = useSelector(
    (state: RootState) => state.status.isModalOpen
  );

  if (!isModalOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Este es un Modal</h2>
        <p>Contenido del modal aquí...</p>
        <button onClick={() => dispatch(closeModal())}>Cerrar Modal</button>
      </div>
    </div>
  );
};

export default Modal;
