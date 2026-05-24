import "./Asso.css";
import { useState, useEffect, forwardRef } from "react";
import Nav from "../Components/Nav";
import Footer from "../Components/Footer";

const Asso = forwardRef((props, externalRef) => {
  const [contentVisible, setContentVisible] = useState(false);
  const [zoomedImage1, setZoomedImage1] = useState(null);

  useEffect(() => {
    const t = setTimeout(() => setContentVisible(true), 200);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <div
        className={`asso asso-page ${contentVisible ? "crossfade-visible" : ""}`}
        ref={externalRef}
        role="main"
      >
        <Nav />

        <div className="asso-bg" aria-hidden="true"></div>

        <h1
          className={`asso-title ${contentVisible ? "visible-after-video" : ""}`}
        >
          Compagnie
        </h1>

        <p className="seo-hidden">
          OSAER est une compagnie de danse contemporaine développant des projets
          artistiques collaboratifs mêlant chorégraphie, performance et
          médiation culturelle.
        </p>

        <div className="asso-rectangle">
          <div className="assowrap">
            <div className="asso-block">
              {/* IMAGE */}
              <div
                className="asso-image-wrapper"
                onClick={() => setZoomedImage1("/Pics/assowall.webp")}
              >
                <img
                  src="/Pics/assowall.webp"
                  alt="Présentation de l'association"
                  width={400}
                  height={400}
                  loading="lazy"
                  fetchPriority="high"
                />
              </div>

              {/* TITRE */}
              <h2
                className={`asso-titre ${contentVisible ? "visible-after-video" : ""}`}
              >
                Au cœur de la création
              </h2>

              {/* TEXTE */}
              <div className="asso-text" lang="fr">
                <p>
                  Compagnie émergente, <span>OSAER</span> se positionne comme un
                  catalyseur de créativité, à la croisée des disciplines
                  artistiques et des projets in situ.
                </p>

                <div className="text2">
                  <p>
                    Elle développe également ses propres créations, portées par
                    une écriture chorégraphique nourrie des corps, des parcours
                    et des rencontres qui les traversent.
                  </p>
                </div>

                <div className="text2">
                  <p>
                    La compagnie accompagne artistes et structures en imaginant
                    des formes plurielles — spectacles, expositions, théâtre ou
                    films — avec une attention particulière portée à l’écoute
                    des besoins et des intentions.
                  </p>
                </div>

                <div className="text2">
                  <p>
                    En mettant à disposition des interprètes aux présences
                    singulières, <span>OSAER</span> favorise l’émergence de
                    créations où les langages artistiques dialoguent et se
                    transforment.
                  </p>
                </div>

                <div className="text2">
                  <p>
                    La danse y est envisagée comme un langage incarné, où le
                    geste naît de l’expérience et de la relation à l’autre.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ================= MEDIATION ================= */}
          <div className="asso-section">
            <h2 className="asso-section-title">La médiation / Transmission</h2>

            <div className="assowrap reverse">
              <div className="asso-text2">
                <div className="text3">
                  <p>
                    <span>OSAER</span> place la médiation artistique au cœur de
                    son travail. La compagnie conçoit des projets avec les
                    écoles, collèges, lycées, crèches et structures sociales, en
                    lien étroit avec les jeunes, les équipes pédagogiques et les
                    encadrants.
                  </p>
                </div>

                <div className="text2">
                  <p>
                    Ces temps de création ouvrent des espaces d’expression
                    sensibles, où le corps devient un langage permettant
                    d’explorer, de ressentir et de réfléchir autrement. Ils
                    favorisent l’émergence de la créativité, de la parole et de
                    la confiance en soi.
                  </p>
                </div>

                <div className="text2">
                  <p>
                    En rencontrant les artistes et leurs démarches, les
                    participants développent une meilleure compréhension des
                    processus de création et un regard plus attentif sur le
                    spectacle vivant.
                  </p>
                </div>

                <div className="text2">
                  <p>
                    Chaque projet est élaboré sur mesure, en collaboration avec
                    les structures partenaires, afin de s’adapter aux publics et
                    aux contextes d’intervention : milieu scolaire, crèche,
                    milieu hospitalier ou carcéral, ainsi qu’auprès
                    d’associations culturelles.
                  </p>
                </div>

                <div className="text2">
                  <p>
                    N’hésitez pas à nous contacter pour imaginer ensemble un
                    projet adapté à vos besoins.
                  </p>
                </div>
              </div>

              <div
                className="asso-image-wrapper2"
                onClick={() => setZoomedImage1("/Pics/asso4.webp")}
              >
                <img
                  src="/Pics/asso4.webp"
                  alt="Osaer illustration"
                  width={400}
                  height={400}
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* ================= RENCONTRE ================= */}
          <h2 className="asso-section-title">L’art de la rencontre</h2>

          <div className="asso-vertical-block">
            <div
              className="asso-vertical-image"
              onClick={() => setZoomedImage1("/Pics/asso2.webp")}
            >
              <img
                src="/Pics/asso2.webp"
                alt="Création chorégraphique contemporaine OSAER"
                width={400}
                height={400}
                loading="lazy"
              />
            </div>

            <div className="text2">
              <p className="asso-vertical-text">
                Chez <span>OSAER</span>, chaque collaboration est une
                exploration, chaque création une célébration de la rencontre
                artistique et humaine. La compagnie a pour ambition de tisser
                des ponts entre les disciplines et d’accompagner les artistes
                dans la construction collective d’écritures artistiques.
              </p>
            </div>

            <div className="text2">
              <p className="asso-vertical-text2">
                De ces échanges naissent des œuvres qui résonnent, marquent et
                interrogent, ouvrant des espaces sensibles où l’art se vit comme
                une expérience partagée, à la fois intime et collective.
              </p>
            </div>
          </div>
        </div>

        {/* LOGO */}
        <div
          className={`logoasso ${contentVisible ? "visible-after-video" : ""}`}
        >
          <a href="/">
            <img
              src="/Pics/logo2.webp"
              width="200"
              height="70"
              style={{ height: "auto" }}
              alt="Logo OSAER"
              loading="eager"
            />
          </a>
        </div>

        <div
          className={`scroll-arrow-down ${contentVisible ? "visible-after-video" : ""}`}
        >
          ↓
        </div>
      </div>

      {/* Overlay image */}
      {zoomedImage1 && (
        <div
          className="overlay"
          role="dialog"
          aria-modal="true"
          onClick={() => setZoomedImage1(null)}
        >
          <div className="enlarged-media" onClick={(e) => e.stopPropagation()}>
            <img src={zoomedImage1} alt="Image agrandie OSAER" />
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

      <Footer className="asso-footer" />
    </>
  );
});

export default Asso;
