import React from "react";
import Expense from "../expense/Expense";

interface Expense {
  id: number;
  description: string;
  amount: string;
  date: string;
  category: string;
}

interface ExpensesListProps {
  expenses: Expense[];
}

const ExpensesList: React.FC<ExpensesListProps> = ({ expenses }) => {
  return (
    <ul className="expenses-list">
      {expenses.map((expense) => (
        <li
          key={expense.id}
          className="list-item"
        >
          <Expense
            date={expense.date}
            category={expense.category}
            description={expense.description}
            amount={expense.amount}
          />
        </li>
      ))}
    </ul>
  );
};

export default ExpensesList;
