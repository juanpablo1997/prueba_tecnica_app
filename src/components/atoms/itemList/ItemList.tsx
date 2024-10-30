import React from "react";

interface itemProps {
  categoria: string;
  monto: string;
}

const ItemList: React.FC<itemProps> = ({ categoria, monto }) => {
  return (
    <div className="d-flex justify-content-between">
      <p className="m-0">{categoria}</p>
      <p className="custom-text-secondary m-0">{`$ ${monto}`}</p>
    </div>
  );
};

export default ItemList;
