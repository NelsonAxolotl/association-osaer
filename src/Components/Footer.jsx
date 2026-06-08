import { forwardRef } from "react";
import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";
import "./Footer.css";

const Footer = forwardRef(({ className = "", showLegal = true }, ref) => {
  return (
    <footer ref={ref} className={`footer ${className}`}>
      <div className="footer-content">
        <p className="footer-copy">
          &copy; {new Date().getFullYear()} Cie OSAER |{" "}
          <a
            href="https://www.instagram.com/cieosaer/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="footer-instagram"
          >
            <FaInstagram />
          </a>
        </p>

        {showLegal && (
          <p className="footer-legal">
            <Link to="/mentions-politique">
              Mentions légales & Politique de confidentialité
            </Link>
          </p>
        )}
      </div>
    </footer>
  );
});

Footer.displayName = "Footer";

export default Footer;
