// Asso.jsx
import "./Asso.css";
import { useState, useEffect, forwardRef } from "react";
import Nav from "../Components/Nav";
import Footer from "../Components/Footer";

const Asso = forwardRef((props, externalRef) => {
  const [contentVisible, setContentVisible] = useState(false);

  // Apparition progressive
  useEffect(() => {
    const t = setTimeout(() => setContentVisible(true), 200);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <Nav />
      <div
        className={`asso ${contentVisible ? "crossfade-visible" : ""}`}
        ref={externalRef}
      >
        {/* Fond décoratif */}
        <div className="bio-bg" aria-hidden="true"></div>

        {/* Titre */}
        <h1
          className={`asso-title ${
            contentVisible ? "visible-after-video" : ""
          }`}
        >
          Asso
        </h1>
        <div className="asso-rectangle"></div>
        <div
          className={`logoasso ${contentVisible ? "visible-after-video" : ""}`}
        >
          <a href="/">
            <img src="/Pics/logo2.jpg" alt="Logo OSAER" />
          </a>
        </div>
        <div
          className={`scroll-arrow-down ${
            contentVisible ? "visible-after-video" : ""
          }`}
        >
          ↓
        </div>
      </div>
      <Footer />
    </>
  );
});

export default Asso;
