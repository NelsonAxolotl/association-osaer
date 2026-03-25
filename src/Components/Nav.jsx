import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Nav.css";

function Navbar({ className }) {
  const location = useLocation();
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Détecte le mobile
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 900;
      setIsMobile(mobile);
      if (!mobile) setIsOpen(false); // ferme le menu si desktop
    };

    handleResize(); // initialise au chargement
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Ferme le menu automatiquement lors du changement de page
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const links = [
    { label: "Accueil", to: "/", side: "right" },
    { label: "Asso", to: "/asso", side: "left", color: "asso" },
    { label: "Bio", to: "/bio", side: "right" },
    { label: "Créations", to: "/creations", side: "left", color: "asso" },
    { label: "Contact", to: "/contact", side: "right" },
  ];

  const navClasses = `
    navbar
    ${isOpen ? "active" : ""}
    ${className || ""}
    ${isMobile ? "mobile" : "desktop"}
    ${location.pathname === "/asso" ? "asso-active" : ""}
    ${location.pathname === "/contact" ? "contact-active" : ""}
  `;

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

      <nav className={navClasses}>
        {isMobile && isOpen && (
          <div className="burger-container">
            <div className="burger-arrow">↓</div>
          </div>
        )}
        <ul className="nav-links">
          {links
            .filter((link) => isMobile || link.label !== "Accueil") // Accueil seulement visible en mobile
            .map(({ label, to, side, color }) => (
              <li key={to}>
                <button
                  className={`nav-link ${location.pathname === to ? "active" : ""} ${side || ""} ${color ? `${color}-link` : ""}`}
                  onClick={() => navigate(to)}
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
