import React from "react";

interface itemProps {
  categoria: string;
  monto: string;
}

const ItemList: React.FC<itemProps> = ({ categoria, monto }) => {
  return (
    <div className="">
      <p className="m-0 fw-bold">{categoria}</p>
      <p className="custom-text-secondary m-0">{`$ ${monto}`}</p>
    </div>
  );
};

export default ItemList;
