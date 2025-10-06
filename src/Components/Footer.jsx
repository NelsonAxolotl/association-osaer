import { useState, useEffect, forwardRef } from "react";
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
      <p className="footer-subtitle"></p>
      <p className="footer-copy">
        &copy; {new Date().getFullYear()} OSAER — The Cool Axolotl
      </p>
    </footer>
  );
});
export default Footer;
