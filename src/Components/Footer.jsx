import { useState, useEffect, forwardRef } from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = forwardRef(({ className = "" }, ref) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <footer
      ref={ref}
      className={`footer ${className} ${visible ? "crossfade-visible" : ""}`}
    >
      <div className="footer-content">
        <p className="footer-copy">
          &copy; 2026 Cie OSAER —{" "}
          <a
            href="https://www.thecoolaxolotl.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            The Cool Axolotl
          </a>
        </p>

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
