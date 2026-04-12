import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Nav.css";

function Navbar({ className }) {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 900;
      setIsMobile(mobile);
      if (!mobile) setIsOpen(false);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const links = [
    { label: "Accueil", to: "/", side: "right" },
    { label: "Asso", to: "/asso", side: "left", color: "asso" },
    { label: "Bio", to: "/bio", side: "right" },
    { label: "Créations", to: "/creations", side: "left", color: "asso" },
    { label: "Contact", to: "/contact", side: "right" },
  ];

  const navClasses = [
    "navbar",
    isOpen && "active",
    className,
    isMobile ? "mobile" : "desktop",
    pathname === "/asso" && "asso-active",
    pathname === "/contact" && "contact-active",
  ]
    .filter(Boolean)
    .join(" ");

  const showLink = (link) => {
    if (!isMobile && link.label === "Accueil") return false;
    return true;
  };

  return (
    <>
      {isMobile && (
        <button
          className={`burger ${isOpen ? "open" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menu"
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
                className={`nav-link ${
                  pathname === to ? "active" : ""
                } ${side || ""} ${color ? `${color}-link` : ""}`}
                onClick={() => {
                  setIsOpen(false);
                  navigate(to);
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
