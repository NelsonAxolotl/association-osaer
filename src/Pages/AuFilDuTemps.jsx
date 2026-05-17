import "./AuFilDuTemps.css";
import { useState, useEffect, useRef, forwardRef } from "react";
import Nav from "../Components/Nav";
import Footer from "../Components/Footer";

const AuFilDuTemps = forwardRef((props, externalRef) => {
  const [contentVisible, setContentVisible] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const t = setTimeout(() => setContentVisible(true), 200);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.muted = false;
        videoRef.current.volume = 0.8;
      }
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div
        className={`temps temps-page ${contentVisible ? "crossfade-visible" : ""}`}
        ref={externalRef}
        role="main"
      >
        <Nav />
        <div className="creation-bg" aria-hidden="true"></div>
        <h1
          className={`temps-title ${
            contentVisible ? "visible-after-video" : ""
          }`}
        >
          Créations
        </h1>

        <p className="seo-hidden">
          Découvrez les créations de la compagnie OSAER : spectacles de danse
          contemporaine, performances artistiques et projets chorégraphiques en
          cours.
        </p>
        <div className="temps-rectangle">
          <div className="tr">
            <h2> "É.phe"</h2>
            <video
              ref={videoRef}
              className="creation-video"
              controls
              playsInline
              muted
              autoPlay
              controlsList="nodownload"
              preload="metadata"
              fetchPriority="high"
            >
              <source src="/Videos/ephe2.mp4" type="video/mp4" />
              Votre navigateur ne supporte pas la vidéo.
            </video>

            <p className="ephe-duration2">
              Interpètes : <br />
              <a href="/artistes#olivia-caillaud" className="highlight-link">
                Olivia Caillaud
              </a>{" "}
              /{" "}
              <a href="/artistes#stephanie-pignon" className="highlight-link">
                Stéphanie Pignon
              </a>
            </p>

            <div className="ephe-block">
              <p className="ephe-texte">
                La création <span>« É.phe »</span> naît de la rencontre entre
                deux interprètes devenues autrices de leur propre écriture.
              </p>

              <p className="ephe-texte">
                Un duo comme terrain d’exploration : ce qui rapproche, ce qui
                résiste, ce qui se transforme.
              </p>

              <p className="ephe-texte">
                Entre écoute et tension, les corps dialoguent sans mots et
                révèlent une écriture du lien, fragile et mouvante, là où la
                rencontre se vit plus qu’elle ne se raconte.
              </p>
            </div>
            <div className="ephe-status-wrapper">
              <p className="ephe-status">En cours de création</p>
            </div>
            <div className="ephe-premiere">
              <p className="ephe-premiere-title">Première</p>

              <p className="ephe-date">23 juillet 2026</p>

              <p>
                <span className="ephe-festival">
                  <a
                    href="https://www.facebook.com/estivalesdecomberge/?locale=fr_FR"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ephe-festival"
                  >
                    Festival Les Estivales de Comberge
                  </a>{" "}
                </span>{" "}
                <strong> – </strong>
                <br />
                Saint-Michel-Chef-Chef
              </p>

              <p>Esplanade du Port de Comberge</p>
              <p>Boulevard de l’Océan</p>
              <p>44730 Saint-Michel-Chef-Chef</p>
            </div>
          </div>
        </div>
        <div
          className={`logostemps ${
            contentVisible ? "visible-after-video" : ""
          }`}
        >
          <a href="/">
            <img
              src="/Pics/logo2.webp"
              alt="Logo OSAER"
              width={200}
              height={200}
              loading="lazy"
            />
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

export default AuFilDuTemps;
