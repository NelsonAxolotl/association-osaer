import "./Scolaire.css";
import { useState, useEffect, forwardRef } from "react";
import Nav from "../Components/Nav";
import Footer from "../Components/Footer";

const Scolaire = forwardRef((props, externalRef) => {
  const [contentVisible, setContentVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setContentVisible(true), 200);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <Nav />
      <div
        className={`scolaire ${contentVisible ? "crossfade-visible" : ""}`}
        ref={externalRef}
      >
        <div className="bio-bg" aria-hidden="true"></div>
        <h1
          className={`scolaire-title ${
            contentVisible ? "visible-after-video" : ""
          }`}
        >
          Scolaire
        </h1>
        <div className="scolaire-rectangle"></div>
        <div
          className={`logoscolaire ${
            contentVisible ? "visible-after-video" : ""
          }`}
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
export default Scolaire;
