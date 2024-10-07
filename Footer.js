import React from 'react';
import './App.css';
import logo from "./infosyslogo.png"

const Footer = () => {
  return (
    <footer className="footer">
      <img src={logo} alt="Infosys Logo" />
      <p>© 2024 Infosys Limited. All rights reserved.</p>
      <p>Infosys is a global leader in next-generation digital services and consulting. We enable clients in more than 50 countries to navigate their digital transformation.</p>
    </footer>
  );
};

export default Footer;
