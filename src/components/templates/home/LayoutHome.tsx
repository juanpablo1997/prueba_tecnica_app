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

const Layout: React.FC = () => {
  const showAddExpenseForm = useSelector(
    (state: RootState) => state.status.showAddExpenseForm
  );

  return (
    <div className="grid-container">
      <div className="header"><Header /></div>
      <div className="banner"><BannerCustom /></div>
      <div className="sidebar"><Sidebar /></div>
      <div className="main">Main</div>
      <div className="footer">Footer</div>
    </div>
  );
};

export default Layout;
