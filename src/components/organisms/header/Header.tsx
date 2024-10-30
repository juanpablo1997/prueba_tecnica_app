import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import Logo from "../../../img/LogoDark.png";
import ButtonCustom from "../../atoms/button/ButtonCustom";

const Header: React.FC = () => {
  const handleClick = () => {
    console.log("Action");
  };

  return (
    <header className="container-fluid h-100 bg-white shadow-sm d-flex align-items-center">
      <div className="container-fluid d-flex justify-content-between align-items-center py-3 px-4">
        <Link to="/">
          <img src={Logo} alt="Logo" className="logo" />
        </Link>
        <nav>
          <ul className="nav">
            <li className="nav-item">
              <Link to="/acerca-de">
                <ButtonCustom
                  label="Acerca de"
                  onClick={handleClick}
                  variant="outlined"
                  size="sm"
                />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
