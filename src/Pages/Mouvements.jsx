import "./Mouvements.css";
import { useState, useEffect, forwardRef } from "react";
import { Link } from "react-router-dom";
import Nav from "../Components/Nav";
import Footer from "../Components/Footer";

const Mouv = forwardRef(function Mouv(props, ref) {
  const [contentVisible, setContentVisible] = useState(false);
  const [zoomedImage1, setZoomedImage1] = useState(null);

  useEffect(() => {
    const t = setTimeout(() => setContentVisible(true), 200);
    return () => clearTimeout(t);
  }, []);

  const visibleClass = contentVisible ? "visible-after-video" : "";

  return (
    <>
      <main
        className={`mouv mouv-page ${
          contentVisible ? "crossfade-visible" : ""
        }`}
        ref={ref}
        role="main"
      >
        <Nav />

        <div className="mouv-bg" aria-hidden="true" />

        {/* SEO / texte caché hors structure H1 */}
        <p className="seo-hidden">
          OSAER est une compagnie de danse contemporaine développant des projets
          artistiques collaboratifs mêlant chorégraphie, performance et
          médiation culturelle.
        </p>

        <h1 className={`mouv-title ${visibleClass}`}>Rencontres</h1>

        <div className="mouv-rectangle">
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

              <div className="traits" />

              <div className="texte droite">
                <p>
                  À partir du papier comme matière en mouvement, les corps
                  explorent, tracent et déploient une danse sensible et colorée.
                </p>
              </div>
            </div>

            <div className="traits-bis" />

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
                Direction artistique : <br />
                Stéphanie Pignon <br />
                en collaboration avec Karine Dury.
              </p>

              <button
                type="button"
                className="papier-image"
                onClick={() => {
                  if (window.innerWidth <= 768) return;
                  setZoomedImage1("/Pics/papier.webp");
                }}
                aria-label="Agrandir l'image Couleur Papier"
              >
                <img
                  src="/Pics/papier.webp"
                  width="500"
                  height="300"
                  alt="Projet papier"
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                />
              </button>
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
                    Rouennais
                  </a>
                  .
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
                  De cette rencontre émergent des fragments de vie, des mots et
                  des gestes.
                </p>
              </div>

              <div className="text-parol">
                <p>Un espace où la parole se cherche et se transforme.</p>
              </div>
              <div className="text-parol">
                Restitution du projet le 10 avril à 18h auprès de la structure
                et des partenaires à Rouen.
              </div>
              <button
                type="button"
                className="parole-image pano"
                onClick={() => {
                  if (window.innerWidth <= 768) return;
                  setZoomedImage1("/Pics/parole.webp");
                }}
                aria-label="Agrandir l'image Parole Portée"
              >
                <img
                  src="/Pics/parole.webp"
                  loading="lazy"
                  width={500}
                  height={300}
                  alt="Parole Portée - projet chorégraphique"
                />
              </button>

              <div className="ephe-status2-wrapper">
                <div className="ephe-status2">
                  <span className="trait" />
                  <span>En cours de création</span>
                  <span className="trait" />
                </div>
              </div>
            </div>
          </div>
          <div className="extended-divider">───────── ○ ─────────</div>
          <div className="extended">
            <h2 className="exented-title">"Extended"</h2>
            <button
              type="button"
              className="papier-image"
              onClick={() => {
                if (window.innerWidth <= 768) return;
                setZoomedImage1("/Pics/phare.webp");
              }}
              aria-label="Agrandir l'image plein phare"
            >
              <img
                src="/Pics/phare.webp"
                loading="lazy"
                width={500}
                height={300}
                alt="Plein phare - projet chorégraphique"
              />
            </button>
            <div className="text-extended">
              <p>
                "Extended" est une création chorégraphique inspirée du duo{" "}
                <Link to="/creations" className="text-link">
                  <span>« É.phe »</span>
                </Link>
                , développée en partenariat avec les options danse du lycée
                François 1er et le
                <a
                  href="https://lephare-ccn.fr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="highlight"
                >
                  {" "}
                  CCN du Havre Normandie
                </a>
                .
              </p>
            </div>
            <div className="text-extended">
              <p>
                Cette pièce questionne les multiples formes de la rencontre,
                dans toute la subjectivité et la singularité qu'implique la
                relation à l'autre.
              </p>
            </div>
            <div className="text-extended">
              <p>
                Sous la direction{" "}
                <Link to="/artistes#olivia-caillaud" className="bio-link">
                  Olivia Caillaud
                </Link>
                , avec la collaboration de{" "}
                <Link to="/artistes#stephanie-pignon" className="bio-link">
                  Stéphanie Pignon{" "}
                </Link>
                pour la réflexion artistique.
              </p>
            </div>
          </div>
          <div className="extended-divider">───────── ○ ─────────</div>
        </div>

        <div className={`logomouv ${visibleClass}`}>
          <a href="/" aria-label="Retour à l'accueil">
            <img
              src="/Pics/Osaersolo.png"
              width="200"
              height="70"
              style={{ height: "auto" }}
              alt="Logo OSAER"
              loading="eager"
            />
          </a>
        </div>

        <div className={`scroll-arrow-down ${visibleClass}`} aria-hidden="true">
          ↓
        </div>
      </main>

      {/* Overlay image */}
      {zoomedImage1 && (
        <div
          className="overlay"
          role="dialog"
          aria-modal="true"
          onClick={() => setZoomedImage1(null)}
        >
          <div className="enlarged-media" onClick={(e) => e.stopPropagation()}>
            <img
              src={zoomedImage1}
              alt="Image agrandie OSAER"
              loading="eager"
              decoding="async"
            />
          </div>

          <button
            className="close-button"
            onClick={() => setZoomedImage1(null)}
            aria-label="Fermer l'image"
          >
            ×
          </button>
        </div>
      )}

      <Footer className="mouv-footer" />
    </>
  );
});

export default Mouv;
