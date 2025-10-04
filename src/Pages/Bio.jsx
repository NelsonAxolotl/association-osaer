// Bio.jsx
import { useState, useEffect, forwardRef } from "react";
import Nav from "../Components/Nav";
import Footer from "../Components/Footer";
import "./Bio.css";

const Bio = forwardRef((props, externalRef) => {
  const [contentVisible, setContentVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setContentVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  const visibleClass = contentVisible ? "visible-after-video" : "";

  return (
    <>
      <Nav />

      <div
        className={`bio ${contentVisible ? "crossfade-visible" : ""}`}
        ref={externalRef}
      >
        <div className="bio-bg" aria-hidden="true"></div>

        <h1 className={`bio-title ${visibleClass}`}>Bio</h1>

        <div className="bio-rectangle">
          <h2>
            ✨ <span className="name">Stéphanie Pignon</span>
            <span className="dash"> – </span>
            <span className="role">Danseuse et Interprète</span>
          </h2>

          <div className="bio-content">
            <div className="bio-photo">
              <img src="/Pics/steph.jpg" alt="Stéphanie en danse" />
            </div>
            <div className={`bio-text ${visibleClass}`}>
              <p>
                Je suis danseuse et interprète, née à Rennes en 1982, et
                j’évolue depuis plus de vingt ans sur les scènes françaises et
                internationales.
              </p>
              <p>
                Passionnée par mon métier, j’ai collaboré avec de nombreuses
                compagnies (Cie Chatha, Collectif aaO, Cie Atmen, Cie Paul les
                Oiseaux, entre autres), en explorant danse contemporaine et
                projets transdisciplinaires (théâtre, musique, performance).
              </p>
            </div>
          </div>

          <div className="bio-content2">
            <div className={`bio-text2 ${visibleClass}`}>
              <p>
                Parallèlement, je transmets ma passion à travers des projets
                pédagogiques en milieu scolaire et j’accompagne enseignants et
                danseurs en tant que conseillère chorégraphique.
              </p>
              <p>
                Formée au CNDC d’Angers, je suis également certifiée
                art-thérapeute RNCP, ce qui élargit mon approche du mouvement et
                du corps.
              </p>
              <p>
                Mon parcours se caractérise par curiosité, aisance en
                improvisation et grande sensibilité au travail collectif.
              </p>
            </div>
            <div className="bio-photo2">
              <div className="bio-video-diamond">
                <video
                  src="/Videos/dancingbis.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                />
              </div>
            </div>
          </div>
        </div>

        <div className={`logobio ${visibleClass}`}>
          <a href="/">
            <img src="/Pics/logo2.jpg" alt="Logo OSAER" />
          </a>
        </div>

        <div className={`scroll-arrow-down ${visibleClass}`}>↓</div>
      </div>

      <Footer />
    </>
  );
});

export default Bio;
