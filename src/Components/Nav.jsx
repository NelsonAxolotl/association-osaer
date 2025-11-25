import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./Nav.css";

function Navbar({ className }) {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 900);

  const links = [
    { label: "Accueil", to: "/" },
    { label: "Asso", to: "/asso", side: "left" },
    { label: "Bio", to: "/bio", side: "right" },
    { label: "Médiation", to: "/mediation", side: "left" },
    { label: "Créations", to: "/creations", side: "right" },
    { label: "Contact", to: "/contact", side: "left" },
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
        className={`navbar 
          ${isOpen ? "active" : ""} 
          ${className || ""} 
          ${isMobile ? "mobile" : "desktop"}
            ${location.pathname === "/asso" ? "asso-active" : ""}
          ${location.pathname === "/mediation" ? "mediation-active" : ""}
             ${location.pathname === "/contact" ? "contact-active" : ""}
          `}
      >
        {isMobile && (
          <div className="burger-container">
            <div className="burger-arrow">↓</div>
          </div>
        )}
        <ul className="nav-links">
          {links
            .filter((link) => isMobile || link.label !== "Accueil") // 🔥 Affiche Accueil UNIQUEMENT en mobile
            .map(({ label, to, side }) => (
              <li key={to}>
                <button
                  className={`nav-link 
            ${location.pathname === to ? "active" : ""} 
            ${side}
            ${label === "Asso" ? "asso-link" : ""}
                ${label === "Médiation" ? "mediation-link" : ""}

            `}
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
