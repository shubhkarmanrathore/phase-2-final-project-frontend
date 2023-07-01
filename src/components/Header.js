import React from "react";
import "./Header.css";
import Logo from "./images/Logo.jpg";

function Header() {
  return (
    <div className="header">
      <img src={Logo} alt="logo" />
    </div>
  );
}

export default Header;
