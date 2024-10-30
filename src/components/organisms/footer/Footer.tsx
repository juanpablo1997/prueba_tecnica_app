import React from "react";
import Logo from '../../../img/Logo.png'

const Footer: React.FC = () => {
  return (
    <footer className="container-fluid h-100 custom-bg-primary text-white text-center py-3">
      <img src={Logo} alt="Logo" className="logo logoAnimation" />
      <p className="m-0">&copy; 2024 Esify de Expensify. Todos los derechos reservados.</p>
    </footer>
  );
};

export default Footer;
