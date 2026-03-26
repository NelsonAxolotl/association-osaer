import { useState, useEffect, forwardRef } from "react";
import Nav from "../Components/Nav";
import Footer from "../Components/Footer";
import "./Bio.css";
import "../Components/BioReferences";
import BioReferences from "../Components/BioReferences";

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
      <div
        className={`bio bio-page ${contentVisible ? "crossfade-visible" : ""}`}
        ref={externalRef}
        role="main"
      >
        <Nav />

        <div className="bio-bg" aria-hidden="true"></div>

        <h1 className={`bio-title ${visibleClass}`}>Bio</h1>
        <p className="seo-hidden">
          Découvrez les artistes de la compagnie OSAER : danseuses, chorégraphes
          et créateurs engagés dans la danse contemporaine et les projets
          artistiques pluridisciplinaires.
        </p>
        <div className="bio-rectangle">
          <h2>
            ✨ <span className="name">Stéphanie Pignon</span>
            <span className="dash"> – </span>
            <span className="role">Interprète & Chorégraphe</span>
          </h2>

          <div className="bio-content">
            <div
              className="bio-photo"
              onClick={() => setZoomedImage1("/Pics/steph.webp")}
            >
              <img
                src="/Pics/steph.webp"
                alt="Stéphanie Pignon en danse contemporaine"
                loading="lazy"
              />
            </div>
            <div className={`bio-text ${visibleClass}`}>
              <p>
                Installée en Normandie, Stéphanie Pignon est danseuse,
                chorégraphe et art-thérapeute.
              </p>
            </div>
            <div className={`bio-text3 ${visibleClass}`}>
              <p>
                Sa carrière d’interprète chorégraphique débute à la suite de sa
                formation au{" "}
                <a
                  href="https://www.cndc.fr"
                  target="_blank"
                  className="highlight-link"
                >
                  CNDC d’Angers
                </a>
                , qu’elle fréquente entre 2000 et 2002 aux côtés de Régis
                Obadia, Suzy Block (Amsterdam) ainsi que Françoise et Dominique
                Dupuy. Elle explore ensuite divers univers chorégraphiques
                sensibles en collaborant avec des artistes tels que Gianni
                Joseph, Christine Bastin, Valérie Rivière, Philippe Jamet, Paco
                Décina, Marc Vincent, Aicha M’Barek, Hafiz Dahou, Françoise
                Tartinville, Chloé Camus Hernandez, Orin Camus, Carole Vergne et
                Hugo Dayot.
              </p>
            </div>
            <div className={`bio-text5 ${visibleClass}`}>
              <p>
                Curieuse et avide de découvertes et de rencontres, elle
                collabore avec de nombreux artistes pluridisciplinaires tels que
                Michel Abdoul, Alexandre Roccoli, Diana Lui, Patricia Kass,
                Julie Plus, Yann Bertrand, Jeff Mills, Maria Ponti, Chloé Belloc
                et Nefeli Papadimouli, Blandine Soulage à travers divers projets
                performatifs, photographiques et cinématographiques (
                <a
                  href="https://www.paris-art.com/swing-4/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="highlight-link"
                >
                  "SWING"{" "}
                </a>
                2008, "Nuit Blanche" 2010,
                <a
                  href="https://www.youtube.com/watch?v=kpQiWBh5vF0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="highlight-link"
                >
                  {" "}
                  "Introscope"{" "}
                </a>
                TedX 2013,
                <a
                  href="http://akaplastica.com/trabajo/2001-the-midnight-zone-show-produced-by-jeff-mills"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="highlight-link"
                >
                  {" "}
                  "2001 - The Midnight Zone"{" "}
                </a>{" "}
                2015, "Une relation affine" 2019, "Sails" 2025).
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
              onClick={() => setZoomedImage2("/Pics/Olivia.webp")}
            >
              <img
                src="/Pics/Olivia.webp"
                alt="Olivia Caillaud danseuse"
                loading="lazy"
              />
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
                  CNSMD
                </a>
                . Sa carrière s’articule auprès de créations avec des
                chorégraphes comme Sylvie Giron, Mitia Fedotenko, Philippe Jamet
                et Joelle Bouvier.
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
          <BioReferences />
          <div className="nelson">
            <h2>
              ✨ <span className="name">Nelson Paraïso</span>
              <span className="dash"> – </span>
              <span className="role">Régisseur Lumière & Développeur</span>
            </h2>
          </div>
          <div className="bio-content-nelson">
            <div
              className="bio-photo-nelson"
              onClick={() => setZoomedImage1("/Pics/nelson.webp")}
            >
              <img
                src="/Pics/nelson.webp"
                alt="Nelson Paraïso régisseur lumière"
                loading="lazy"
              />
            </div>
            <div className={`bio-text-nelson ${visibleClass}`}>
              <p>
                Musicien de formation, avec des études de musicologie à{" "}
                <a
                  href="https://www.gold.ac.uk/"
                  target="_blank"
                  className="highlight-link"
                >
                  Goldsmiths University
                </a>{" "}
                (Londres), Nelson a d'abord travaillé dans différents projets
                artistiques. Il a ensuite suivi une formation de technicien
                lumière à{" "}
                <a
                  href="https://formation-tsv.fr/"
                  target="_blank"
                  className="highlight-link"
                >
                  TSV
                </a>
                , il est régisseur lumière depuis 15 ans. Plus récemment il a
                élargi ses compétences avec un bootcamp de développement web
                front-end chez{" "}
                <a
                  href="https://www.lereacteur.io/"
                  target="_blank"
                  className="highlight-link"
                >
                  Le Réacteur
                </a>{" "}
                et propose aujourd'hui ses services sous le nom de{" "}
                <a
                  href="https://www.thecoolaxolotl.com/"
                  target="_blank"
                  className="highlight-link"
                >
                  The Cool Axolotl
                </a>
                , en choisissant des projest qui l'inspire vraiment. Il a aussi
                suivi une formation de danse contemporaine au centre
                chorégraphique{" "}
                <a
                  href="https://www.centrechoregraphiquelecycle.com/"
                  target="_blank"
                  className="highlight-link"
                >
                  Le Cycle
                </a>{" "}
                à Lyon, et continue à alimenter sa sensibilité artistique.
              </p>
            </div>
          </div>
        </div>

        <div className={`logobio ${visibleClass}`}>
          <a href="/">
            <img
              src="/Pics/logo2.webp"
              alt="Logo de la compagnie OSAER"
              width={200}
              height={200}
              fetchpriority="high"
            />
          </a>
        </div>

        <div className={`scroll-arrow-down ${visibleClass}`}>↓</div>
      </div>
      {/* Lightbox image 1 */}
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

      {/* Lightbox image 2 */}
      {zoomedImage2 && (
        <div className="overlay" onClick={() => setZoomedImage2(null)}>
          <div className="enlarged-media2" onClick={(e) => e.stopPropagation()}>
            <img src={zoomedImage2} alt="Image agrandie OSAER" />
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
