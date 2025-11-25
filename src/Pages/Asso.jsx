// Asso.jsx
import "./Asso.css";
import { useState, useEffect, forwardRef } from "react";
import Nav from "../Components/Nav";
import Footer from "../Components/Footer";

const Asso = forwardRef((props, externalRef) => {
  const [contentVisible, setContentVisible] = useState(false);
  const [zoomedImage1, setZoomedImage1] = useState(null);

  // Apparition progressive
  useEffect(() => {
    const t = setTimeout(() => setContentVisible(true), 200);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <div
        className={`asso asso-page ${
          contentVisible ? "crossfade-visible" : ""
        }`}
        ref={externalRef}
      >
        <Nav />
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
        <div className="asso-rectangle">
          <div className="assowrap">
            <div
              className="asso-image-wrapper"
              onClick={() => setZoomedImage1("/Pics/assowall.png")}
            >
              <img
                src="/Pics/assowall.png"
                alt="Présentation de l'association"
              />
            </div>
            <div className="asso-text">
              <p>
                <span>Osaer </span>est une Compagnie de danse innovante, engagée
                dans la création artistique multidisciplinaire. Sa mission est
                de favoriser les échanges entre artistes, stimulant ainsi
                l’émergence de projets collaboratifs uniques où différentes
                formes d’expression se rencontrent pour donner naissance à une
                vision commune.
              </p>
              <div className="text2">
                <p>
                  {" "}
                  <span>Osaer</span> agit comme un véritable catalyseur de
                  créativité, intervenant lors d’événements variés et de projets
                  in situ. Qu’il s’agisse de spectacles, d’expositions, de
                  tournages, de théâtre ou de films, elle répond aux demandes
                  d’artistes désireux d’explorer de nouvelles dimensions
                  artistiques.
                </p>
              </div>
            </div>
          </div>
          <div className="assowrap reverse">
            <div className="asso-text2">
              <p>
                Chaque projet devient une opportunité de dialogue entre
                disciplines, aboutissant à des œuvres éphémères qui captivent,
                intriguent et résonne.
              </p>
              <div className="text3">
                <p>
                  À l’image de ses interprètes, la compagnie demeure attentive
                  aux besoins spécifiques des artistes. Elle met à disposition
                  des artistes chorégraphiques pour réaliser des créations
                  ponctuelles, transcendant les limites du langage corporel. La
                  danse y devient un médium puissant d’expression, capable de
                  raconter des histoires, de susciter des émotions et de
                  rassembler les publics autour de l’esthétique collective.
                </p>
              </div>
            </div>

            <div
              className="asso-image-wrapper2"
              onClick={() => setZoomedImage1("/Pics/asso4.jpg")}
            >
              <img src="/Pics/asso4.jpg" alt="Osaer illustration" />
            </div>
          </div>
          <div className="assowrap3">
            <div
              className="asso-image-wrapper"
              onClick={() => setZoomedImage1("/Pics/asso2.jpg")}
            >
              <img src="/Pics/asso2.jpg" alt="Présentation de l'association" />
            </div>
            <div className="asso-text3">
              <p>
                Par ailleurs, la compagnie <span>Osaer</span> porte une
                attention particulière à la médiation artistique. Elle a à cœur
                de collaborer avec des jeunes, des enseignant et accompagnants
                issus des écoles, collèges, lycées et centres sociaux, en leur
                offrant un espace d’expression différent, au-delà des mots. À
                travers ces projets, elle souhaite leur permettre de développer
                leur parole, leur créativité et leur confiance, en utilisant le
                corps comme vecteur d’émotion et de réflexion.
              </p>
            </div>
          </div>
          <div className="asso-vertical-block">
            <div
              className="asso-vertical-image"
              onClick={() => setZoomedImage1("/Pics/asso3.jpg")}
            >
              <img src="/Pics/asso3.jpg" alt="Présentation longue" />
            </div>

            <p className="asso-vertical-text">
              Chez <span>Osaer</span>, chaque collaboration est une aventure,
              chaque création une célébration de la rencontre artistique et
              humaine. Elle aspire à bâtir des ponts entre disciplines et à
              encourager les artistes, ainsi que le grand public, à repousser
              leurs limites afin de concevoir des œuvres qui résonnent,
              questionnent et laissent une empreinte durable. <br />
              Rejoignez-la dans cette exploration sans frontières de la
              créativité, où chaque mouvement devient une histoire subjective,
              intime et universelle.
            </p>
          </div>
        </div>

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
      {zoomedImage1 && (
        <div className="overlay" onClick={() => setZoomedImage1(null)}>
          <div className="enlarged-media" onClick={(e) => e.stopPropagation()}>
            <img src={zoomedImage1} alt="Zoom 1" />
          </div>
          <button
            className="close-button"
            onClick={() => setZoomedImage1(null)}
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
