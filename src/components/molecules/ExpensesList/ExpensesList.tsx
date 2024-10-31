import React, { useEffect, useState } from "react";
import Expense from "../expense/Expense"; // Ajusta la ruta según tu estructura de carpetas
import { getAllExpenses } from "../../../services/expenseServices"; // Ajusta la ruta según tu estructura de carpetas
import { expenseType } from "../../../types/expenseTypes";

const ExpensesList: React.FC = () => {
  const [expenses, setExpenses] = useState<expenseType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchExpenses = async () => {
      try {
        const data = await getAllExpenses();
        setExpenses(data);
      } catch (err) {
        setError("Failed to fetch expenses");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchExpenses();
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Puedes personalizar el mensaje de carga
  }

  if (error) {
    return <div>{error}</div>; // Muestra un mensaje de error
  }

  return (
    <div className="container-fluid bg-white" style={{ height: "510px", overflowY: "auto" }}>
      <ul className="expenses-list">
        {expenses.map((expense) => (
          <li key={expense.id} className="list-item">
            <Expense
              date={expense.date}
              category={expense.category}
              description={expense.description}
              amount={expense.amount}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpensesList;
