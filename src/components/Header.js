import React from "react";
import "./Header.css";
import Logo2 from "../components/Logo2.jpg";

function Header() {
  return (
    <div className="header">
      <img
        src={Logo2}
        alt="logo"
      />
    </div>
  );
}

export default Header;
