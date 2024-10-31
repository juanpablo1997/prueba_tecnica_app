import React, { useEffect, useState } from "react";
import Title from "../../atoms/titles/TitlesCustom";
import ItemList from "../../atoms/itemList/ItemList";
import { getAllExpenses } from "../../../services/expenseServices";

interface CategoriaGasto {
  id: number;
  nombre: string;
  total: number;
}

const Sidebar: React.FC = () => {
  const [categoriasGastos, setCategoriasGastos] = useState<CategoriaGasto[]>([]);
  const [loading, setLoading] = useState<boolean>(true); // Estado de carga

  const fetchExpenses = async () => {
    setLoading(true); // Inicia el loading
    try {
      const expenses = await getAllExpenses();
      const categorias: { [key: string]: number } = {};

      expenses.forEach((expense) => {
        if (!categorias[expense.category]) {
          categorias[expense.category] = 0;
        }
        categorias[expense.category] += expense.amount;
      });

      const categoriasArray = Object.keys(categorias).map((key, index) => ({
        id: index + 1,
        nombre: key,
        total: categorias[key],
      }));

      setCategoriasGastos(categoriasArray);
    } catch (error) {
      console.error("Error fetching expenses:", error);
    } finally {
      setLoading(false); // Termina el loading
    }
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  return (
    <aside
      className="container-fluid bg-white rounded-bottom border-custom-br-primary"
      style={{ height: "800px", overflowY: "auto" }}
    >
      <div className="custom-bg-gray p-2 shadow-sm">
        <Title level={4} color="custom-text-primary" weight="bold" align="left">
          Categorías
        </Title>
      </div>
      <ul className="p-2">
        {loading ? ( // Verifica el estado de carga
          <li>Cargando categorías...</li>
        ) : (
          categoriasGastos.map((item) => (
            <li key={item.id} className="list-items">
              <ItemList categoria={item.nombre} monto={item.total} />
            </li>
          ))
        )}
      </ul>
    </aside>
  );
};

export default Sidebar;
