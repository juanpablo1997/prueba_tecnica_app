import React from 'react';
import { useDispatch } from 'react-redux';
import ButtonCustom from '../button/ButtonCustom';
import { showAddExpenseForm } from '../../../redux/slices/statusSlice';

interface StatusProps {
  montoTotal: string;
}

const Status: React.FC<StatusProps> = ({ montoTotal }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(showAddExpenseForm());
  };

  return (
    <div className="container-fluid rounded-1 custom-bg-primary text-white px-4 py-2 d-flex justify-content-between align-items-center shadow-sm">
      <div>
        <p>Gasto total</p>
        <p className="fs-1 fw-bold ">{`$ ${montoTotal}`}</p>
      </div>
      <div>
        <ButtonCustom
          label="Agregar un gasto"
          onClick={handleClick}
          variant="solid"
          size="sm"
        />
      </div>
    </div>
  );
};

export default Status;
