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

  useEffect(() => {
    if (!window.location.hash) return;

    const id = window.location.hash.replace("#", "");

    const scrollToElement = () => {
      const el = document.getElementById(id);

      if (el) {
        let yOffset;

        // 🎯 offsets spécifiques par personne
        if (id === "stephanie-pignon") {
          yOffset =
            window.innerWidth <= 500
              ? -220
              : window.innerWidth <= 900
                ? -240
                : -120;
        } else if (id === "olivia-caillaud") {
          yOffset =
            window.innerWidth <= 500
              ? -220
              : window.innerWidth <= 900
                ? -240
                : -90;
        } else {
          // fallback général
          yOffset =
            window.innerWidth <= 500
              ? -80
              : window.innerWidth <= 900
                ? -100
                : -120;
        }

        const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;

        window.scrollTo({
          top: y,
          behavior: "smooth",
        });
      } else {
        setTimeout(scrollToElement, 100);
      }
    };

    scrollToElement();
  }, []);

  return (
    <>
      <div
        className={`bio bio-page ${contentVisible ? "crossfade-visible" : ""}`}
        ref={externalRef}
        role="main"
      >
        <Nav />

        <div className="bio-bg" aria-hidden="true" />

        <h1 className={`bio-title ${visibleClass}`}>Artistes</h1>

        <p className="seo-hidden">
          Découvrez les artistes de la compagnie OSAER : danseuses, chorégraphes
          et créateurs engagés dans la danse contemporaine et les projets
          artistiques pluridisciplinaires.
        </p>

        <div className="bio-rectangle">
          {/* ================= STEPHANIE ================= */}

          <h2 id="stephanie-pignon">
            <span className="star">✨</span>
            <span className="name">Stéphanie Pignon</span>
            <span className="dash"> – </span>
            <span className="role">Directrice artistique</span>
          </h2>

          <p className="bio-role-detail">
            Chorégraphe & Artiste chorégraphique
          </p>

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
                interprète, chorégraphe et art-thérapeute.
              </p>
            </div>

            <div className={`bio-text3 ${visibleClass}`}>
              <p>
                Sa carrière d’interprète chorégraphique débute à la suite de sa
                formation au{" "}
                <a
                  href="https://www.cndc.fr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="highlight-link-bio"
                >
                  CNDC d’Angers
                </a>
                , qu’elle fréquente entre 2000 et 2002 aux côtés de{" "}
                <a
                  href="https://www.regisobadia.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="highlight-artist"
                >
                  Régis Obadia
                </a>
                ,{" "}
                <a
                  href="https://www.youtube.com/@0101shr/videos/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="highlight-artist"
                >
                  Suzy Block{" "}
                </a>
                (Amsterdam) ainsi que{" "}
                <a
                  href="https://numeridanse.com/profil/dupuy-francoise/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="highlight-artist"
                >
                  Françoise{" "}
                </a>
                et{" "}
                <a
                  href="https://numeridanse.com/profil/dupuy-dominique/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="highlight-artist"
                >
                  Dominique Dupuy
                </a>
                . Elle explore ensuite divers univers chorégraphiques sensibles
                en collaborant avec des artistes tels que{" "}
                <a
                  href="https://www.ciegiannijoseph.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="highlight-artist"
                >
                  Gianni Joseph
                </a>
                ,{" "}
                <a
                  href="https://cbastin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="highlight-artist"
                >
                  Christine Bastin
                </a>
                ,{" "}
                <a
                  href="https://www.opera-bordeaux.com/valerie-riviere-1451"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="highlight-artist"
                >
                  Valérie Rivière
                </a>
                ,{" "}
                <a
                  href="https://www.theatredunord.fr/lecole/les-promos/promo-6/les-intervenants-6/philippe-jamet"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="highlight-artist"
                >
                  Philippe Jamet
                </a>
                ,{" "}
                <a
                  href="https://pacodecina.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="highlight-artist"
                >
                  Paco Décina
                </a>
                ,{" "}
                <a
                  href="https://gmem.org/marc-vincent-floy-krouchi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="highlight-artist"
                >
                  Marc Vincent
                </a>
                ,{" "}
                <a
                  href="https://chatha.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="highlight-artist"
                >
                  Aicha M’Barek, Hafiz Dahou
                </a>
                ,{" "}
                <a
                  href="https://www.atmen.org/fran%C3%A7oise-tartinville-1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="highlight-artist"
                >
                  Françoise Tartinville
                </a>
                ,{" "}
                <a
                  href="https://compagnie-yma.com/a-propos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="highlight-artist"
                >
                  Chloé Camus Hernandez
                </a>
                ,{" "}
                <a
                  href="https://compagnie-yma.com/a-propos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="highlight-artist"
                >
                  Orin Camus
                </a>
                ,{" "}
                <a
                  href="https://www.collectifaao.fr/compagnie"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="highlight-artist"
                >
                  Carole Vergne et Hugo Dayot{" "}
                </a>
                .
              </p>
            </div>

            <div className={`bio-text5 ${visibleClass}`}>
              <p>
                Curieuse et avide de découvertes et de rencontres, elle
                collabore avec de nombreux artistes pluridisciplinaires tels que
                <a
                  href="https://cbastin.com/christine-et-cie/la-compagnie/interpretes/michel-abdoul/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="highlight-artist"
                >
                  {" "}
                  Abdoul Michel{" "}
                </a>
                ,{" "}
                <a
                  href="https://www.alexandreroccoli.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="highlight-artist"
                >
                  Alexandre Roccoli
                </a>
                ,{" "}
                <a
                  href="https://dianalui.fr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="highlight-artist"
                >
                  Diana Lui
                </a>
                ,{" "}
                <a
                  href="https://www.universalmusic.fr/artistes/20000128004"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="highlight-artist"
                >
                  Patricia Kass
                </a>
                ,{" "}
                <a
                  href="https://www.doitinparis.com/fr/interview-julie-plus-wipplay-21593"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="highlight-artist"
                >
                  Julie Plus
                </a>
                ,{" "}
                <a
                  href=""
                  target="_blank"
                  rel="noopener noreferrer"
                  className="highlight-artist"
                >
                  Yann Bertrand
                </a>
                ,{" "}
                <a
                  href=""
                  target="_blank"
                  rel="noopener noreferrer"
                  className="highlight-artist"
                >
                  Jeff Mills
                </a>
                ,{" "}
                <a
                  href="http://www.mariaponti.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="highlight-artist"
                >
                  Maria Ponti
                </a>
                ,{" "}
                <a
                  href="http://chloebelloc.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="highlight-artist"
                >
                  Chloé Belloc{" "}
                </a>
                ,{" "}
                <a
                  href="https://www.nefelipapadimouli.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="highlight-artist"
                >
                  Nefeli Papadimouli
                </a>{" "}
                et{" "}
                <a
                  href="https://blandinesoulage.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="highlight-artist"
                >
                  Blandine Soulage
                </a>{" "}
                à travers divers projets performatifs, photographiques et
                cinématographiques (
                <a
                  href="https://www.paris-art.com/swing-4/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="highlight-link-bio"
                >
                  "SWING"
                </a>{" "}
                2008, "Nuit Blanche" 2010,{" "}
                <a
                  href="https://www.youtube.com/watch?v=kpQiWBh5vF0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="highlight-link-bio"
                >
                  "Introscope"
                </a>{" "}
                TedX 2013,{" "}
                <a
                  href="http://akaplastica.com/trabajo/2001-the-midnight-zone-show-produced-by-jeff-mills"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="highlight-link-bio"
                >
                  "2001 - The Midnight Zone"
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

          {/* ================= OLIVIA ================= */}

          <div className="olivia">
            <h2 id="olivia-caillaud">
              <span className="star">✨</span>
              <span className="name">Olivia Caillaud</span>
              <span className="dash"> – </span>
              <span className="role">Collaboratrice artistique</span>
            </h2>

            <p className="bio-role-detail">Danseuse & Chorégraphe</p>
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
                fait ses études en danses contemporaine à Angers et à Lyon au{" "}
                <a
                  href="https://www.cnsmd-lyon.fr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="highlight-link-bio"
                >
                  CNSMD
                </a>
                . Sa carrière s’articule auprès de créations avec des
                chorégraphes comme{" "}
                <a
                  href="https://www.kelemenis.fr/fr/artistes-compagnies/646/sylvie-giron"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="highlight-artist"
                >
                  Sylvie Giron
                </a>
                ,{" "}
                <a
                  href="https://www.autremina.net/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="highlight-artist"
                >
                  Mitia Fedotenko
                </a>
                ,{" "}
                <a
                  href="https://www.theatredunord.fr/lecole/les-promos/promo-6/les-intervenants-6/philippe-jamet"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="highlight-artist"
                >
                  Philippe Jamet
                </a>{" "}
                et{" "}
                <a
                  href="https://numeridanse.com/profil/bouvier-joelle/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="highlight-artist"
                >
                  Joelle Bouvier
                </a>
                .
              </p>
            </div>

            <div className={`bio-text51 ${visibleClass}`}>
              <p>
                Elle affectionne particulièrement les projets qui tissent les
                liens avec les autres arts : musique live, théâtre et art
                plastique. Elle se forme à la technique{" "}
                <a
                  href="https://mimecorporel.com/etienne-decroux/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="highlight-artist"
                >
                  Etienne Decroux
                </a>
                . Son parcours la mène naturellement vers les arts de la rue
                avec{" "}
                <a
                  href="https://www.collectifar.com/collectif-ar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="highlight-artist"
                >
                  le collectif AR
                </a>
                ,{" "}
                <a
                  href="https://saufledimanche.com/la-compagnie/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="highlight-artist"
                >
                  la compagnie Sauf le Dimanche
                </a>
                ,{" "}
                <a
                  href="https://www.didiertheron.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="highlight-artist"
                >
                  Didier Théron
                </a>
                ,{" "}
                <a
                  href="https://www.atmen.org/fran%C3%A7oise-tartinville-1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="highlight-artist"
                >
                  la compagnie Atmen
                </a>{" "}
                et elle decouvre{" "}
                <a
                  href="https://fr.wikipedia.org/wiki/Arch%C3%A9ographie"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="highlight-link-bio"
                >
                  l’archéographie
                </a>{" "}
                avec{" "}
                <a
                  href="https://tangible-et-cie.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="highlight-artist"
                >
                  la compagnie Tangible
                </a>
                .
              </p>
            </div>

            <div className={`bio-text52 ${visibleClass}`}>
              <p>
                Son parcours de pédagogue s’enrichit en 2024 en obtenant son
                Diplôme d’Etat de professeur de danse. Elle s’engage avec les
                écoles, avec{" "}
                <a
                  href="https://www.culture-enfance.org/fr/culture-pour-lenfance/mission-et-impact-social"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="highlight-link-bio"
                >
                  Culture pour l’Enfance
                </a>{" "}
                à Paris auprès d’enfants handicapés, auprès de personnes en
                situation de fragilité psychologique en hôpital de jour. Elle
                l’aborde comme des projets de mini créations chorégraphiques
                auprès de différents publics.
              </p>
            </div>

            <div className={`bio-text53 ${visibleClass}`}>
              <p>
                En 2021, elle crée{" "}
                <a
                  href=""
                  target="_blank"
                  rel="noopener noreferrer"
                  className="highlight-artist"
                >
                  la compagnie Pilote
                </a>{" "}
                qui lui permet de libérer des temps dédiés à ses recherches
                chorégraphiques et d’héberger des projets plus personnels.
              </p>
            </div>
          </div>

          {/* ================= NELSON ================= */}

          {/* <div className="nelson">
            <h2>
              ✨ <span className="name">Nelson Paraïso</span>
              <span className="dash"> – </span>
              <span className="role">Régisseur Lumière & Développeur</span>
            </h2>
          </div> */}

          {/* <div className="bio-content-nelson">
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
                  rel="noopener noreferrer"
                  className="highlight-link-bio"
                >
                  Goldsmiths University
                </a>{" "}
                (Londres), Nelson a d'abord travaillé dans différents projets
                artistiques. Il a ensuite suivi une formation de technicien
                lumière à{" "}
                <a
                  href="https://formation-tsv.fr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="highlight-link-bio"
                >
                  TSV
                </a>
                , il est régisseur lumière depuis 15 ans. Plus récemment il a
                élargi ses compétences avec un bootcamp de développement web
                front-end chez{" "}
                <a
                  href="https://www.lereacteur.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="highlight-link-bio"
                >
                  Le Réacteur
                </a>{" "}
                et propose aujourd'hui ses services sous le nom de{" "}
                <a
                  href="https://www.thecoolaxolotl.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="highlight-link-bio"
                >
                  The Cool Axolotl
                </a>
                , en choisissant des projest qui l'inspire vraiment. Il a aussi
                suivi une formation de danse contemporaine au centre
                chorégraphique{" "}
                <a
                  href="https://www.le-cycle.fr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="highlight-link-bio"
                >
                  Le Cycle
                </a>{" "}
                à Lyon, et continue à alimenter sa sensibilité artistique.
              </p>
            </div>
          </div> */}
        </div>

        {/* ================= LOGO ================= */}

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

      {/* LIGHTBOX STEPH + NELSON */}

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
