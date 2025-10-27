// Bio.jsx
import { useState, useEffect, forwardRef } from "react";
import Nav from "../Components/Nav";
import Footer from "../Components/Footer";
import "./Bio.css";

const Bio = forwardRef((props, externalRef) => {
  const [contentVisible, setContentVisible] = useState(false);
  const [zoomedImage1, setZoomedImage1] = useState(null);
  const [zoomedImage2, setZoomedImage2] = useState(null);

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
            <span className="role">Interprète & Chorégraphe</span>
          </h2>

          <div className="bio-content">
            <div
              className="bio-photo"
              onClick={() => setZoomedImage1("/Pics/steph.jpg")}
            >
              <img src="/Pics/steph.jpg" alt="Stéphanie en danse" />
            </div>
            <div className={`bio-text ${visibleClass}`}>
              <p>
                Installée en Normandie, Stéphanie Pignon est née le 2 mai 1982 à
                Rennes. Dès son enfance, elle se forme à la danse contemporaine
                à Rennes, avant d’intégrer{" "}
                <a
                  href="https://www.cndc.fr"
                  target="_blank"
                  className="highlight-link"
                >
                  CNDC d’Angers
                </a>
                , qu’elle fréquente entre 2000 et 2002.
              </p>
            </div>
            <div className={`bio-text3 ${visibleClass}`}>
              <p>
                Sa carrière d’interprète chorégraphique débute aux côtés de
                Régis Obadia, Suzy Block (Amsterdam) ainsi que Françoise et
                Dominique Dupuy. Elle explore ensuite divers univers
                chorégraphiques sensibles en collaborant avec des artistes tels
                que Gianni Joseph, Christine Bastin, Valérie Rivière, Philippe
                Jamet, Paco Décina, Marc Vincent, Aicha M’Barek, Hafiz Dahou,
                Françoise Tartinville, Chloé Camus Hernandez, Orin Camus, Carole
                Vergne et Hugo Dayot.
              </p>
            </div>
            <div className="bio-content2">
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
            <div className={`bio-text4 ${visibleClass}`}>
              <p>
                Ouverte à différentes pratiques corporelles, expressives et
                esthétiques, Stéphanie danse en solo aux côtés de Patricia Kass
                lors de la tournée mondiale “Kabaret” et chorégraphie le
                spectacle “Kaas chante Piaf”.
              </p>
            </div>
            <div className={`bio-text5 ${visibleClass}`}>
              <p>
                Curieuse et avide de découvertes et de rencontres, elle
                collabore avec de nombreux artistes pluridisciplinaires tels que
                Michel Abdoul, Alexandre Roccoli, Diana Lui, Julie Plus, Yann
                Bertrand, Jeff Mills, Maria Ponti, Chloé Belloc et Nefeli
                Papadimouli, Blandine Soulage à travers divers projets
                performatifs, photographiques et cinématographiques (“Swing”
                2008, “Nuit Blanche” 2010, “Introscope” TedX 2013, “2001 -
                Midnight Zone” 2015, “Une relation affine” 2019, “Sails” 2025).
              </p>
            </div>
            <div className={`bio-text6 ${visibleClass}`}>
              <p>
                Parallèlement à son parcourt d’interprète, Stépahnie mêne
                plusieurs projets chorégraphiques en milieu scolaire et a créé
                un espace en tant qu’art-thérapeute, intervenant dans des
                projets de soin dans le secteur social et éducatif.
              </p>
            </div>
          </div>
          <div className="olivia">
            <h2>
              ✨ <span className="name">Olivia Caillaud</span>
              <span className="dash"> – </span>
              <span className="role">Danseuse & Chorégraphe</span>
            </h2>
          </div>
          <div className="bio-content20">
            <div
              className="bio-photo20"
              onClick={() => setZoomedImage2("/Pics/Olivia.jpeg")}
            >
              <img src="/Pics/Olivia.jpeg" alt="Olivia en danse" />
            </div>

            <div className={`bio-text50 ${visibleClass}`}>
              <p>
                Olivia Caillaud est danseuse, chorégraphe et pédagogue. Elle
                fait ses études en danses contemporaine à Angers et à Lyon au
                <a
                  href="https://www.cnsmd-lyon.fr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="highlight-link"
                >
                  {" "}
                  CNSMD.
                </a>{" "}
                Sa carrière s’articule auprès de créations avec des chorégraphes
                comme Sylvie Giron, Mitia Fedotenko, Philippe Jamet et Joelle
                Bouvier.
              </p>
            </div>

            <div className={`bio-text51 ${visibleClass}`}>
              <p>
                Elle affectionne particulièrement les projets qui tissent les
                liens avec les autres arts : musique live, théâtre et art
                plastique. Elle se forme à la technique Etienne Decroux. Son
                parcours la mène naturellement vers les arts de la rue avec le
                collectif AR, la compagnie Sauf le Dimanche, Didier Théron, la
                compagnie Atmen et elle decouvre l’archéographie avec la
                compagnie Tangible.
              </p>
            </div>
            <div className={`bio-text52 ${visibleClass}`}>
              <p>
                Son parcours de pédagogue s’enrichit en 2024 en obtenant son
                Diplôme d’Etat de professeur de danse. Elle s’engage avec les
                écoles, avec Culture pour l’Enfance à Paris auprès d’enfants
                handicapés, auprès de personnes en situation de fragilité
                psychologique en hôpital de jour. Elle l’aborde comme des
                projets de mini créations chorégraphiques auprès de différents
                publics.
              </p>
            </div>
            <div className={`bio-text53 ${visibleClass}`}>
              <p>
                En 2021, elle crée la compagnie Pilote qui lui permet de libérer
                des temps dédiés à ses recherches chorégraphiques et d’héberger
                des projets plus personnels.
              </p>
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
      {/* Lightbox image 1 */}
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

      {/* Lightbox image 2 */}
      {zoomedImage2 && (
        <div className="overlay" onClick={() => setZoomedImage2(null)}>
          <div className="enlarged-media2" onClick={(e) => e.stopPropagation()}>
            <img src={zoomedImage2} alt="Zoom 2" />
          </div>
          <button
            className="close-button2"
            onClick={() => setZoomedImage2(null)}
          >
            ×
          </button>
        </div>
      )}

      <Footer />
    </>
  );
});

export default Bio;
