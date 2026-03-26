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
        role="main"
      >
        <Nav />
        {/* Fond décoratif */}
        <div className="asso-bg" aria-hidden="true"></div>

        {/* Titre */}
        <h1
          className={`asso-title ${
            contentVisible ? "visible-after-video" : ""
          }`}
        >
          Asso
        </h1>
        <p className="seo-hidden">
          OSAER est une compagnie de danse contemporaine développant des projets
          artistiques collaboratifs mêlant chorégraphie, performance et
          médiation culturelle.
        </p>
        <div className="asso-rectangle">
          <div className="assowrap">
            <div
              className="asso-image-wrapper"
              onClick={() => setZoomedImage1("/Pics/assowall.webp")}
            >
              <img
                src="/Pics/assowall.webp"
                alt="Présentation de l'association"
                loading="lazy"
              />
            </div>
            <div className="asso-text" lang="fr">
              <p>
                <span>Osaer </span>est une Compagnie de danse émergeante, dédiée
                à la création artistique au croisement des disciplines. Notre
                mission est de favoriser les rencontres entre artistes,
                permettant ainsi l’émergence de projets collaboratifs uniques,
                où chaque expression artistique s'entrelace pour donner vie à
                une vision commune.
              </p>
              <div className="text2">
                <p>
                  {" "}
                  <span>Osaer</span> se positionne comme un catalyseur de
                  créativité, intervenant lors d'événements variés et de projets
                  in situ. Que ce soit pour des spectacles, des expositions, des
                  clips, du théâtre ou des films, nous répondons à des commandes
                  spécifiques d'artistes désireux d'explorer de nouvelles
                  dimensions. Chaque projet est l’occasion d’une rencontre, d'un
                  dialogue entre différentes formes d’art, créant des œuvres
                  éphémères qui captivent et émerveillent.
                </p>
              </div>
            </div>
          </div>
          <div className="assowrap reverse">
            <div className="asso-text2">
              <div className="text3">
                <p>
                  Notre association, tout comme nos interprètes danseuses, est à
                  l'écoute des besoins des artistes. Nous mettons à disposition
                  des talents variés, permettant de réaliser des créations
                  ponctuelles qui transcendent les frontières du langage
                  corporel. La danse devient alors un moyen d’expression
                  puissant, capable de raconter des histoires, de provoquer des
                  émotions et de fédérer des publics autour de la beauté de
                  l’art collectif.
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
                loading="lazy"
              />
            </div>
          </div>
          <div className="assowrap3">
            <div
              className="asso-image-wrapper"
              onClick={() => setZoomedImage1("/Pics/asso2.webp")}
            >
              <img
                src="/Pics/asso2.webp"
                alt="Projet artistique par la compagnie OSAER"
                loading="lazy"
              />
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
              onClick={() => setZoomedImage1("/Pics/asso3.webp")}
            >
              <img
                src="/Pics/asso3.webp"
                alt="Création chorégraphique contemporaine OSAER"
                loading="lazy"
              />
            </div>

            <p className="asso-vertical-text">
              Chez <span>Osaer</span>, chaque collaboration est une aventure,
              chaque création une célébration de la rencontre artistique et
              humaine. Nous avons à cœur de construire des ponts entre les
              disciplines et d’inviter les artistes à repenser les limites de
              leur pratique, dans le but de donner naissance à des œuvres qui
              résonnent, marquent et interrogent.
            </p>
          </div>
        </div>

        <div
          className={`logoasso ${contentVisible ? "visible-after-video" : ""}`}
        >
          <a href="/">
            <img
              src="/Pics/logo2.webp"
              alt="Logo de l'association OSAER"
              fetchpriority="high"
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

      <Footer className="asso-footer" />
    </>
  );
});

export default Asso;
