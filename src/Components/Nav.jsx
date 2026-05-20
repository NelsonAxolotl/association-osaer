import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Nav.css";

function Navbar({ className = "" }) {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 900;

      setIsMobile(mobile);

      // ferme automatiquement le menu si on repasse desktop
      if (!mobile) {
        setIsOpen(false);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // ferme le menu au changement de page
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const links = [
    { label: "Accueil", to: "/", side: "right" },
    {
      label: "Compagnie",
      to: "/compagnie",
      side: "left",
      color: "asso",
    },
    { label: "Artistes", to: "/artistes", side: "right" },
    {
      label: "Créations",
      to: "/creations",
      side: "left",
      color: "creations",
    },
    {
      label: "Rencontres",
      to: "/rencontres",
      side: "right",
      color: "mouvements",
    },
    { label: "Contact", to: "/contact", side: "left" },
  ];

  const navClasses = [
    "navbar",
    isOpen ? "active" : "",
    className,
    isMobile ? "mobile" : "desktop",
    pathname === "/compagnie" ? "asso-active" : "",
    pathname === "/contact" ? "contact-active" : "",
    pathname === "/rencontres" ? "mouvements-active" : "",
    pathname === "/creations" ? "creations-active" : "",
  ]
    .filter(Boolean)
    .join(" ");

  const showLink = (link) => {
    // cache Accueil uniquement sur desktop
    if (!isMobile && link.label === "Accueil") {
      return false;
    }

    return true;
  };

  const handleNavigation = (to) => {
    setIsOpen(false);
    navigate(to);
  };

  return (
    <>
      {isMobile && (
        <button
          type="button"
          className={`burger ${isOpen ? "open" : ""}`}
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={isOpen}
          aria-controls="nav-menu"
        >
          <span />
          <span />
          <span />
        </button>
      )}

      <nav className={navClasses} id="nav-menu">
        {isMobile && isOpen && (
          <div className="burger-container">
            <div className="burger-arrow">↓</div>
          </div>
        )}

        <ul className="nav-links">
          {links.filter(showLink).map(({ label, to, side, color }) => (
            <li key={to}>
              <button
                type="button"
                className={`nav-link ${
                  pathname === to ? "active" : ""
                } ${side || ""} ${color ? `${color}-link` : ""}`}
                onClick={() => handleNavigation(to)}
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
