import React from "react";
import Sidebar from "../../organisms/sidebar/Sidebar";
import BannerCustom from "../../molecules/banner/BannerCustom";
import ExpensesList from "../../molecules/list/ExpensesList";
import AddExpenseForm from "../../organisms/addExpenseForm/AddExpenseForm";
import Status from "../../atoms/status/Status";
import { expenses } from "../../../data.test";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import Header from "../../organisms/header/Header";
import "./LayoutHome.css";
import Footer from "../../organisms/footer/Footer";
import TitleHeadCustom from "../../molecules/titleHeadCustom/TitleHeadCustom";

const Layout: React.FC = () => {
  const showAddExpenseForm = useSelector(
    (state: RootState) => state.status.showAddExpenseForm
  );

  return (
    <div className="grid-container">
      <div className="header"><Header /></div>
      <div className="banner"><BannerCustom /></div>
      <div className="sidebar"><Sidebar /></div>
      <div className="status"><Status montoTotal="54,000.000"/></div>
      <div className="filter">FILTERS</div>
      <div className="expenseList d-flex flex-column justify-content-between">
        <TitleHeadCustom title="Agregar un nuevo gasto" />
        <ExpensesList expenses={expenses}/>
      </div>
      <div className="graph">GRAPH</div>
      <div className="footer"><Footer /></div>
    </div>
  );
};

export default Layout;
