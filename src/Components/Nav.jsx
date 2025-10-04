import { useState } from "react";
import { useLocation } from "react-router-dom";
import "./Nav.css";

function Navbar({ className }) {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { label: "Accueil", to: "/" },
    { label: "Asso", to: "/asso" },
    { label: "Scolaire", to: "/scolaire" },
    { label: "Bio", to: "/bio" },
    { label: "Contact", to: "/contact" },
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
        <div className="burger-arrow">↓</div>
        <ul className="nav-links">
          {links.map((link) => (
            <li key={link.to}>
              <button
                className={`nav-link ${
                  location.pathname === link.to ? "active" : ""
                } ${
                  link.to === "/asso" || link.to === "/bio" ? "left" : "right"
                }`}
                onClick={() => {
                  setIsOpen(false);
                  window.location.href = link.to; // force le vrai reload
                }}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
