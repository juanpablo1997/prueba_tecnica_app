import React from "react";
import Title from "../../atoms/titles/TitlesCustom";
import { categoriasGastos } from "../../../data.test";
import ItemList from "../../atoms/itemList/ItemList";

const Sidebar: React.FC = () => {
  return (
    <aside
      className="container-fluid bg-white rounded-bottom border-custom-br-primary"
      style={{ height: "500px", overflowY: "auto" }}
    >
      <div className="container-fluid custom-bg-gray p-2 shadow-sm">
        <Title level={4} color="custom-text-primary" weight="bold" align="left">
          Categorías
        </Title>
      </div>
      <ul className="list-group p-2">
        {categoriasGastos.map((item) => (
          <li key={item.id} className="list-items">
            <ItemList categoria={item.nombre} monto={item.total} />
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
