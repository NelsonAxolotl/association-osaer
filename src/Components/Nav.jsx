import { useState } from "react";
import { useLocation } from "react-router-dom";
import "./Nav.css";

function Navbar({ className }) {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { label: "Accueil", to: "/", side: "right" },
    { label: "Asso", to: "/asso", side: "left" },
    { label: "Scolaire", to: "/scolaire", side: "right" },
    { label: "Bio", to: "/bio", side: "left" },
    { label: "Contact", to: "/contact", side: "right" },
  ];

  return (
    <>
      <button
        className={`burger ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav className={`navbar ${isOpen ? "active" : ""} ${className || ""}`}>
        <div className="burger-container">
          <div className="burger-arrow">↓</div>
        </div>
        <ul className="nav-links">
          {links.map(({ label, to, side }) => (
            <li key={to}>
              <button
                className={`nav-link ${
                  location.pathname === to ? "active" : ""
                } ${side}`}
                onClick={() => {
                  setIsOpen(false);
                  window.location.href = to; // force reload
                }}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
