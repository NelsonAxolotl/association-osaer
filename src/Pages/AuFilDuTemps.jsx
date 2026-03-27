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
              <source src="/Videos/ephe.mp4" type="video/mp4" />
              Votre navigateur ne supporte pas la vidéo.
            </video>
            <p className="ephe-duration">
              Duo de danse contemporaine <br />
              tout public de 25 min
            </p>
            <p className="ephe-duration2">
              Interpètes : <br />
              Olivia Caillaud / Stéphanie Pignon
            </p>
            <p className="ephe-duration3">Musique : Christophe Zurfluh</p>
            <div className="ephe-block">
              <p className="ephe-texte">
                <span className="pastel-text">
                  " Mon atelier ! Mais je n’ai jamais eu d’atelier, moi. Je ne
                  comprends pas qu’on s’enferme dans une chambre. Pour dessiner,
                  oui, mais pour peindre, non "
                </span>
                , déclarait{" "}
                <a
                  href="https://fr.wikipedia.org/wiki/Jean-Claude_Monet"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="highlight"
                >
                  Claude Monet
                </a>{" "}
                en 1880.
              </p>

              <p className="ephe-texte">
                À l’image de l’impressionnisme, la pièce privilégie la
                perception à la démonstration, l’état de corps à la forme, comme
                un espace de communion. Conçue pour être interprétée in situ,
                dehors. La pièce conserve son élan dramatique clair tout en
                s’adaptant au lieu où elle se joue. L’écriture est conçue pour
                se moduler, rester poreuse. Elle donne aux spectateurs un point
                de vue pertinent au lieu où il se trouve. L’architecture, la
                lumière naturelle, les sons ambiants et la circulation du public
                sont des partenaires actifs du geste.
              </p>

              <p className="ephe-texte">
                La rencontre est le moteur de la pièce : les corps, les sons,
                les espaces aux contours nuancés donnent à voir que rien n’est
                jamais figé, toujours traversé par l’instant, libre. Largement
                inspiré par le livre de{" "}
                <a
                  href="https://fr.wikipedia.org/wiki/Charles_P%C3%A9pin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="highlight"
                >
                  Charles Pepin
                </a>{" "}
                " La rencontre, une philosophie ", nous tendons à souligner
                l’importance d’une bienveillance à l’instar de l’autre, de
                l’écoute pour soigner la qualité des échanges et conserver le
                lien entre tous.
              </p>

              <p className="ephe-texte">
                La création interroge enfin la notion de trace : qu’est-ce qui
                demeure d’une rencontre éphémère ? Quelle empreinte sur moi ?
                Quel geste cela va m'influencer? À l’instar des réflexions
                portées par{" "}
                <a
                  href="https://fr.wikipedia.org/wiki/Cyril_Dion"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="highlight"
                >
                  Cyril Dion
                </a>
                , l’œuvre affirme que l’influence d’un acte artistique se
                déploie dans le sensible plutôt que dans la mesure.
              </p>
            </div>
            <div className="ephe-status-wrapper">
              <p className="ephe-status">En cours de création</p>
            </div>
          </div>
          <div className="papier">
            <h2 className="papier-title">"Couleur Papier"</h2>
            <div className="papier-row">
              <div className="texte gauche">
                La compagnie est actuelement en création de la pièce{" "}
                <span>"couleur Papier"</span>, une commande du festival{" "}
                <span>
                  {" "}
                  <a
                    href="https://www.paroles-paroles.fr/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="highlight"
                  >
                    Paroles-Paroles
                  </a>
                </span>
                . Cette création est spécialement conçue pour lmes élèves
                danseuses de l'option danse au collège Alphonse Allais (14){" "}
              </div>
              <div className="traits"></div>
              <div className="texte droite">
                Pensée comme une oeuvre collective,{" "}
                <span>"Couleur papier"</span> accompagne les jeunes interprètes
                dans un véritable processus de création chorégraphique, mêlant
                exigence artistique, engagement du corps et du travail sensible
                autour du mouvement.
              </div>
            </div>
            <div className="traits-bis"></div>
            <div className="texte-centre">
              La pièce sera présentée au public en avril 2026 au{" "}
              <a
                href="https://www.musees-honfleur.fr/"
                target="_blank"
                rel="noopener noreferrer"
                className="highlight"
              >
                musée Eugène Boudin
              </a>{" "}
              de Honfleur, dans le cadre du festival.
            </div>
          </div>
          <div className="ephe-status2-wrapper">
            <div className="ephe-status2">
              <span className="trait"></span>
              <span>En cours de création</span>
              <span className="trait"></span>
            </div>
          </div>
          <div className="status-diagonal-wrapper">
            <div className="status-diagonal">
              <h2>"Parole Portée"</h2>
              <p>
                Par ailleurs, la Cie <span>Osaer</span> développe actuellement
                le projet
                <span> "Parole portée"</span> au sein de la structure sociale et
                médio-sociale IDEFHI à Rouen.Cette création s'adresse à une
                vingtaine de mineurs isolés et s'inscrit dans une démarche
                artisique et humaine de rencontre, d'écoute et d'expression.
                Mené par l'artiste chorégraphique Stéphanie Pignon, en
                collaboration avec l'écrivaine{" "}
                <a
                  href="https://marceline-putnai.fr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="highlight"
                >
                  Marceline Putnaï
                </a>
                , <span> "Parole Portée" </span>croise écriture et mouvement
                afin de faire émerger une parole incarnée, portée par le corps
                et le collectif.
              </p>
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
