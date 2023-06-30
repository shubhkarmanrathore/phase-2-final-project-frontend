import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-text">© 2023 HYPE. All rights reserved.</p>
        <ul className="footer-links">
          <li className="footer-link-item">
            <a href="#about">About</a>
          </li>
          <li className="footer-link-item">
            <a href="#services">Terms of Use</a>
          </li>
          <li className="footer-link-item">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
