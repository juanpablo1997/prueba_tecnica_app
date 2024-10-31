import "./LayoutHome.css";
import React from "react";
import clsx from "clsx";
import { useSelector } from "react-redux";
import { expenses } from "../../../data.test";
import Status from "../../atoms/status/Status";
import Modal from "../../molecules/modal/Modal";
import { RootState } from "../../../redux/store";
import Header from "../../organisms/header/Header";
import Footer from "../../organisms/footer/Footer";
import Sidebar from "../../organisms/sidebar/Sidebar";
import BannerCustom from "../../molecules/banner/BannerCustom";
import ExpensesList from "../../molecules/expensesList/ExpensesList";
import AddExpenseForm from "../../organisms/addExpenseForm/AddExpenseForm";
import TitleHeadCustom from "../../molecules/titleHeadCustom/TitleHeadCustom";
import ConfirmDeleteModal from "../../molecules/modal/ConfirmDeleteExpenseModal";
import ExpenseChart from "../../molecules/expenseChart/ExpenseChart";

const Layout: React.FC = () => {
  const showAddExpenseForm = useSelector(
    (state: RootState) => state.status.showAddExpenseForm
  );

  const openModal = useSelector(
    (state: RootState) => state.status.isModalOpen
  )

  const isConfirmationModalOpen = useSelector(
    (state: RootState) => state.status.isConfirmationModalOpen
  );

  return (
    <div
      className={clsx("grid-container", {
        "add-expense-form": showAddExpenseForm,
      })}
    >
      <div className="header">
        <Header />
      </div>
      <div className="banner">
        <BannerCustom />
      </div>
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="status">
        <Status montoTotal="54,000.000" />
      </div>
      <div className="filter">FILTERS</div>
      {showAddExpenseForm ? (
        <div className="addExpenseForm d-flex flex-column">
          <TitleHeadCustom title="Agregar un nuevo gasto" />
          <AddExpenseForm />
        </div>
      ) : (
        <div className="expenseList d-flex flex-column justify-content-between">
          <TitleHeadCustom title="Lista de Gastos" />
          <ExpensesList expenses={expenses} />
        </div>
      )}
      
      {openModal && (<Modal />)} 
      {isConfirmationModalOpen && <ConfirmDeleteModal idExpense={1} />}

      <div className="graph d-flex flex-column justify-content-start">
        <TitleHeadCustom title="Así van tus gastos"  />
        <ExpenseChart />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
