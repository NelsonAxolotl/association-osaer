import { useState, useEffect, forwardRef } from "react";
import Nav from "../Components/Nav";
import Footer from "../Components/Footer";
import "./Bio.css";

/* ===================== LIENS CENTRALISÉS ===================== */

const LINKS = {
  "CNDC d’Angers": "https://www.cndc.fr",
  "Régis Obadia": "https://www.regisobadia.com/",
  "Suzy Block": "https://www.youtube.com/@0101shr/videos/",
  Françoise: "https://numeridanse.com/profil/dupuy-francoise/",
  "Dominique Dupuy": "https://numeridanse.com/profil/dupuy-dominique/",
  "Gianni Joseph": "https://www.ciegiannijoseph.com/",
  "Christine Bastin": "https://cbastin.com/",
  "Valérie Rivière": "https://www.opera-bordeaux.com/valerie-riviere-1451",
  "Philippe Jamet":
    "https://www.theatredunord.fr/lecole/les-promos/promo-6/les-intervenants-6/philippe-jamet",
  "Paco Décina": "https://pacodecina.com/",
  "Marc Vincent": "https://gmem.org/marc-vincent-floy-krouchi",
  "Aicha M’Barek, Hafiz Dahou": "https://chatha.org/",
  "Françoise Tartinville": "https://www.atmen.org/fran%C3%A7oise-tartinville-1",
  "Chloé Camus Hernandez": "https://compagnie-yma.com/a-propos",
  "Orin Camus": "https://compagnie-yma.com/a-propos",
  "Carole Vergne et Hugo Dayot": "https://www.collectifaao.fr/compagnie",
  "Blandine Soulage": "https://blandinesoulage.com/",
  "Abdoul Michel":
    "https://cbastin.com/christine-et-cie/la-compagnie/interpretes/michel-abdoul/",
  "Alexandre Roccoli": "https://www.alexandreroccoli.com/",
  "Diana Lui": "https://dianalui.fr/",
  "Maria Ponti": "http://www.mariaponti.com/",
  "Chloé Belloc": "http://chloebelloc.com/",
  "Nefeli Papadimouli": "https://www.nefelipapadimouli.com/",
  "Julie Plus":
    "https://www.doitinparis.com/fr/interview-julie-plus-wipplay-21593",
  "Yann Bertrand": "https://fr.wikipedia.org/wiki/Yann_Arthus-Bertrand",
  "Jeff Mills": "https://fr.wikipedia.org/wiki/Jeff_Mills",
  "Patricia kass": "https://fr.wikipedia.org/wiki/Patricia_Kaas",
  "la compagnie Atmen": "https://www.atmen.org/fran%C3%A7oise-tartinville-1",
  "le collectif AR": "https://www.collectifar.com/collectif-ar",
  "la compagnie Sauf le Dimanche": "https://saufledimanche.com/la-compagnie/",
  "la compagnie Tangible": "https://tangible-et-cie.org/",
  "Didier Théron": "https://www.didiertheron.com/",
  "la compagnie pilote": null,
  "Etienne Decroux": "https://mimecorporel.com/etienne-decroux/",
};

/* ===================== SMART LINK ===================== */

function SmartLink({ name }) {
  const url = LINKS[name];

  if (!url) return <span>{name}</span>;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="highlight-artist"
    >
      {name}
    </a>
  );
}

/* ===================== BIO ===================== */

const Bio = forwardRef((props, externalRef) => {
  const [contentVisible, setContentVisible] = useState(false);
  const [zoomedImage1, setZoomedImage1] = useState(null);

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

        if (id === "stephanie-pignon") {
          yOffset =
            window.innerWidth <= 500
              ? -260
              : window.innerWidth <= 900
                ? -240
                : -120;
        } else if (id === "olivia-caillaud") {
          yOffset =
            window.innerWidth <= 500
              ? -260
              : window.innerWidth <= 900
                ? -240
                : -90;
        } else {
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
              onClick={() => {
                if (window.innerWidth <= 768) return;
                setZoomedImage1("/Pics/steph.webp");
              }}
            >
              <img
                src="/Pics/steph.webp"
                alt="Stéphanie Pignon en danse contemporaine"
                width={400}
                height={400}
                loading="eager"
                fetchPriority="high"
                decoding="async"
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
                <SmartLink name="Régis Obadia" />,{" "}
                <SmartLink name="Suzy Block" /> ainsi que{" "}
                <SmartLink name="Françoise" /> et{" "}
                <SmartLink name="Dominique Dupuy" />. Elle explore ensuite
                divers univers chorégraphiques sensibles en collaborant avec des
                artistes tels que <SmartLink name="Gianni Joseph" />,{" "}
                <SmartLink name="Christine Bastin" />,{" "}
                <SmartLink name="Valérie Rivière" />,{" "}
                <SmartLink name="Philippe Jamet" />,{" "}
                <SmartLink name="Paco Décina" />,{" "}
                <SmartLink name="Marc Vincent" />,{" "}
                <SmartLink name="Aicha M’Barek, Hafiz Dahou" />,{" "}
                <SmartLink name="Françoise Tartinville" />,{" "}
                <SmartLink name="Chloé Camus Hernandez" />,{" "}
                <SmartLink name="Orin Camus" />,{" "}
                <SmartLink name="Carole Vergne et Hugo Dayot" />.
              </p>
            </div>

            <div className={`bio-text5 ${visibleClass}`}>
              <p>
                Curieuse et avide de découvertes et de rencontres, elle
                collabore avec de nombreux artistes pluridisciplinaires tels que{" "}
                <SmartLink name="Abdoul Michel" />,{" "}
                <SmartLink name="Alexandre Roccoli" />,{" "}
                <SmartLink name="Diana Lui" />,{" "}
                <SmartLink name="Patricia kass" />,{" "}
                <SmartLink name="Julie Plus" />,{" "}
                <SmartLink name="Yann Bertrand" />,{" "}
                <SmartLink name="Jeff Mills" />,{" "}
                <SmartLink name="Maria Ponti" />,{" "}
                <SmartLink name="Chloé Belloc" />,{" "}
                <SmartLink name="Nefeli Papadimouli" /> et{" "}
                <SmartLink name="Blandine Soulage" /> à travers divers projets
                performatifs, photographiques et cinématographiques (
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
                Parallèlement à son parcourt d’interprète, Stéphanie mène
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
              onClick={() => {
                if (window.innerWidth <= 768) return;
                setZoomedImage1("/Pics/Olivia.webp");
              }}
            >
              <img
                src="/Pics/Olivia.webp"
                alt="Olivia Caillaud danseuse"
                width={400}
                height={400}
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
                , <SmartLink name="Philippe Jamet" />, et{" "}
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
                avec <SmartLink name="le collectif AR" />,{" "}
                <SmartLink name="la compagnie Sauf le Dimanche" />,{" "}
                <SmartLink name="Didier Théron" />,{" "}
                <SmartLink name="la compagnie Atmen" /> et elle decouvre{" "}
                <a
                  href="https://fr.wikipedia.org/wiki/Arch%C3%A9ographie"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="highlight-link-bio"
                >
                  l’archéographie
                </a>{" "}
                avec <SmartLink name="la compagnie Tangible" />.
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
                En 2021, elle crée <SmartLink name="la compagnie Pilote" /> qui
                lui permet de libérer des temps dédiés à ses recherches
                chorégraphiques et d’héberger des projets plus personnels.
              </p>
            </div>
          </div>
          <div className="nelson">
            <h2>
              {" "}
              ✨<span className="name">Nelson Paraïso</span>
              <span className="dash"> – </span>
              <span className="role">Régisseur Lumière & Développeur</span>
            </h2>
          </div>
          <div className="bio-content-nelson">
            <div
              className="bio-photo-nelson"
              onClick={() => {
                if (window.innerWidth <= 768) return;
                setZoomedImage1("/Pics/nelson.webp");
              }}
            >
              <img
                src="/Pics/nelson.webp"
                alt="Nelson Paraïso régisseur lumière"
                width={400}
                height={400}
                loading="lazy"
              />
            </div>
            <div className={`bio-text-nelson ${visibleClass}`}>
              <p>
                {" "}
                Musicien de formation, avec des études de musicologie à{" "}
                <a
                  href="https://www.gold.ac.uk/"
                  target="_blank"
                  className="highlight-link-bio"
                >
                  Goldsmiths University{" "}
                </a>{" "}
                (Londres), Nelson a d'abord travaillé dans différents projets
                artistiques. Il s'est ensuite formé comme technicien lumière à{" "}
                <a
                  href="https://formation-tsv.fr/"
                  target="_blank"
                  className="highlight-link-bio"
                >
                  TSV{" "}
                </a>{" "}
                et exerce depuis plus de 16 ans en tant que régisseur lumière.
                Plus récemment il a élargi ses compétences avec une formation de
                développement front-end au{" "}
                <a
                  href="https://www.lereacteur.io/"
                  target="_blank"
                  className="highlight-link-bio"
                >
                  {" "}
                  Réacteur
                </a>
                , en choisissant des projest qui l'inspire vraiment. Il a
                également suivi une formation de danse contemporaine au centre
                chorégraphique{" "}
                <a
                  href="https://www.le-cycle.fr/"
                  target="_blank"
                  className="highlight-link-bio"
                >
                  {" "}
                  Le Cycle{" "}
                </a>{" "}
                à Lyon, nourrissant une approche transversale de la création. Il
                a conçu est développé le site internet de la compagnie Osaer
                sous le nom de{" "}
                <a
                  href="https://www.thecoolaxolotl.com/"
                  target="_blank"
                  className="highlight-link-bio"
                >
                  The Cool Axolotl
                </a>
                , en collaboration avec l'équipe artistique.
              </p>
            </div>
          </div>
        </div>
        <div className={`logobio ${visibleClass}`}>
          <a href="/">
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

        <div className={`scroll-arrow-down ${visibleClass}`}>↓</div>
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
      <Footer className="bio-footer" />
    </>
  );
});

export default Bio;
