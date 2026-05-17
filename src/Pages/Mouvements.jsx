import "./Mouvements.css";
import { useState, useEffect, forwardRef, useRef } from "react";

import Nav from "../Components/Nav";
import Footer from "../Components/Footer";

const Contact = forwardRef((props, externalRef) => {
  const [contentVisible, setContentVisible] = useState(false);
  const [zoomedImage1, setZoomedImage1] = useState(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const t = setTimeout(() => setContentVisible(true), 200);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <div
        className={`mouv mouv-page ${
          contentVisible ? "crossfade-visible" : ""
        }`}
        ref={externalRef}
        role="main"
      >
        <Nav />
        <div className="mouv-bg" aria-hidden="true"></div>
        <h1
          className={`mouv-title ${
            contentVisible ? "visible-after-video" : ""
          }`}
        >
          <p className="seo-hidden">
            OSAER est une compagnie de danse contemporaine développant des
            projets artistiques collaboratifs mêlant chorégraphie, performance
            et médiation culturelle.
          </p>
          Rencontres
        </h1>
        <div className="mouv-rectangle" aria-labelledby="contact-heading">
          <div className="papier">
            <h2 className="papier-title">"Couleur Papier"</h2>
            <div className="papier-row">
              <div className="texte gauche">
                <p>
                  Dans le cadre de l’exposition Couleur Papier,{" "}
                  <span>OSAER</span> répond à l’invitation de Vanessa Simon en
                  créant une pièce chorégraphique avec les élèves de l’atelier
                  danse du Collège Alphonse Allais.
                </p>
              </div>
              <div className="traits"></div>
              <div className="texte droite">
                <p>
                  À partir du papier comme matière en mouvement, les corps
                  explorent, tracent, déploient une danse sensible et colorée.
                  Une première expérience de scène pour ces jeunes interprètes,
                  où s’inventer, s’exprimer et se révéler sous le regard des
                  autres.
                </p>
              </div>
            </div>
            <div className="traits-bis"></div>
            <div className="texte-centre">
              <p className="creation-lieu">
                Création présentée au <br />
                <a
                  href="https://www.musees-honfleur.fr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="highlight"
                >
                  musée Eugène Boudin
                </a>
                .
              </p>

              <p className="direction-artistique">
                Direction artistique : <br /> Stéphanie Pignon, <br />
                en collaboration avec Karine Dury.
              </p>

              <div
                className="papier-image"
                onClick={() => setZoomedImage1("/Pics/papier.jpg")}
              >
                <img
                  src="/Pics/papier.jpg"
                  alt="Couleur Papier - création chorégraphique"
                  width={500}
                  height={300}
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          <div className="status-diagonal-wrapper">
            <div className="status-diagonal">
              <h2>"Parole Portée"</h2>
              <div className="text-parol">
                <p>
                  Paroles portées est un projet mené auprès de mineurs non
                  accompagnés, en partenariat avec{" "}
                  <a
                    href="https://www.perinat-normandie.fr/sites/service-adolescence-et-daccueil-familial-dintervention-rouennais-saafir-idefhi-38-route-de-sahurs-canteleu/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="highlight"
                  >
                    le Service Adolescence et Accueil Familial d’Intervention
                    Rouennais.
                  </a>
                </p>
              </div>
              <div className="text-parol">
                <p>
                  À la croisée de l’écriture et du corps, le projet s’articule
                  autour d’un temps d’écriture avec{" "}
                  <a
                    href="https://marceline-putnai.fr/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="highlight"
                  >
                    Marceline Putnaï
                  </a>{" "}
                  et d’un temps d’expression corporelle avec Stéphanie Pignon.
                </p>
              </div>
              <div className="text-parol">
                <p>
                  De cette rencontre émergent des fragments de vie, des mots,
                  des gestes, autant de formes sensibles qui se partagent et se
                  dévoilent. Ensemble, ils composent une écriture hybride,
                  mêlant lecture, danse, image et présence.
                </p>
              </div>
              <div className="text-parol">
                <p>
                  Un espace où la parole se cherche, se déploie et se
                  transforme, portée par le collectif.
                </p>
              </div>
              <div
                className="parole-image pano"
                onClick={() => setZoomedImage1("/Pics/parole.jpg")}
              >
                <img
                  src="/Pics/parole.jpg"
                  alt="Parole Portée - projet chorégraphique"
                  loading="lazy"
                />
              </div>

              <div className="ephe-status2-wrapper">
                <div className="ephe-status2">
                  <span className="trait"></span>
                  <span>En cours de création</span>
                  <span className="trait"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`logomouv ${contentVisible ? "visible-after-video" : ""}`}
        >
          <a href="/">
            <img
              src="/Pics/logo2.webp"
              alt="Logo de l'association OSAER"
              width={200}
              height={200}
              fetchpriority="high"
            />
          </a>
        </div>
        <div
          className={`scroll-arrow-down ${
            contentVisible ? "visible-after-video" : ""
          }`}
          aria-hidden="true"
        >
          ↓
        </div>
      </div>
      {zoomedImage1 && (
        <div className="overlay" onClick={() => setZoomedImage1(null)}>
          <div className="enlarged-media" onClick={(e) => e.stopPropagation()}>
            <img src={zoomedImage1} alt="Image agrandie OSAER" />
          </div>
          <button
            className="close-button"
            onClick={() => setZoomedImage1(null)}
          >
            ×
          </button>
        </div>
      )}
      <Footer className="mouv-footer" />
    </>
  );
});
export default Contact;
