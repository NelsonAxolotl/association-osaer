import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./Nav.css";

function Navbar({ className }) {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 900);

  const links = [
    { label: "Accueil", to: "/", side: "right" },
    { label: "Asso", to: "/asso", side: "left" },
    { label: "Scolaire", to: "/scolaire", side: "right" },
    { label: "Bio", to: "/bio", side: "left" },
    { label: "Contact", to: "/contact", side: "right" },
  ];

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 900;
      setIsMobile(mobile);
      if (!mobile) setIsOpen(false); // ferme le menu sur desktop
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {isMobile && (
        <button
          className={`burger ${isOpen ? "open" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      )}

      <nav
        className={`navbar ${isOpen ? "active" : ""} ${className || ""} ${
          isMobile ? "mobile" : "desktop"
        }`}
      >
        {isMobile && (
          <div className="burger-container">
            <div className="burger-arrow">↓</div>
          </div>
        )}
        <ul className="nav-links">
          {links.map(({ label, to, side }) => (
            <li key={to}>
              <button
                className={`nav-link ${
                  location.pathname === to ? "active" : ""
                } ${side}`}
                onClick={() => {
                  setIsOpen(false);
                  window.location.href = to;
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
