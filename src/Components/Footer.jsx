import { useState, useEffect, forwardRef } from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = forwardRef((props, externalRef) => {
  const [contentVisible, setContentVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setContentVisible(true), 1000);
    return () => clearTimeout(t);
  }, []);

  return (
    <footer
      className={`footer ${props.className || ""} ${
        contentVisible ? "crossfade-visible" : ""
      }`}
      ref={externalRef}
    >
      <div className="footer-content">
        <p className="footer-copy">&copy; 2026 OSAER — The Cool Axolotl</p>
        <p className="footer-legal">
          <Link to="/mentions-politique">
            Mentions légales & Politique de confidentialité
          </Link>
        </p>
      </div>
    </footer>
  );
});
export default Footer;
