import { useEffect, useState, forwardRef } from "react";
import "./MentionsPolitique.css";
import Nav from "../Components/Nav";
import Footer from "../Components/Footer";

const MentionsPolitique = forwardRef((props, externalRef) => {
  const [contentVisible, setContentVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setContentVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  const visibleClass = contentVisible ? "visible-after-video" : "";

  return (
    <>
      <main
        id="main-content"
        className={`mainlegal legal-page ${contentVisible ? "crossfade-visible" : ""}`}
        ref={externalRef}
        role="main"
      >
        <Nav />
        <div className="legal-bg" aria-hidden="true"></div>

        <h1 className={`legal-title ${visibleClass}`}>
          Mentions légales & <br />
          Politique de confidentialité
        </h1>

        <div className="legal-rectangle">
          <div className="ley">
            <section class="mentions-legales">
              <h2>1. Mentions légales</h2>

              <p>
                Le présent site est édité par{" "}
                <span>
                  l’association <strong>OSAER</strong>
                </span>
                , association loi 1901 dédiée à la création artistique et au
                spectacle vivant.
              </p>

              <p>
                <strong>Dénomination :</strong> Association OSAER
              </p>
              <p>
                <strong>Statut :</strong> Association loi 1901
              </p>
              <p>
                <strong>SIRET :</strong> 902 789 411 00011
              </p>
              <p>
                <strong>Code APE / NAF :</strong> 90.01Z – Arts du spectacle
                vivant
              </p>

              <p>
                <strong>Directeur de la publication :</strong> Stéphanie Pignon
              </p>

              <p>
                <strong>Contact :</strong>
              </p>
              <p>
                Email :{" "}
                <a href="mailto:cie.osaer@yahoo.com">cie.osaer@yahoo.com</a>
              </p>
              <p>
                Téléphone : <a href="tel:+33666213417">06 66 21 34 17</a>
              </p>

              <p>
                <strong>Hébergement :</strong>
                <br />
                Le site est hébergé par par Vercel Inc. ,440 N Barranca Ave 4133
                Covina, CA 91723 États-Unis,{" "}
                <a
                  href="https://vercel.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Vercel
                </a>
              </p>

              <p>
                L’ensemble du contenu du site (textes, images, vidéos,
                graphismes, logo) est protégé par le droit d’auteur. Toute
                reproduction, représentation, modification ou diffusion, sans
                autorisation préalable, est interdite.
              </p>
            </section>

            <section class="politique-confidentialite">
              <h2>2. Politique de confidentialité</h2>

              <h3>2.1 Données collectées</h3>
              <p>
                Le site peut collecter certaines données personnelles lorsque
                vous contactez l’association via le formulaire ou par email,
                notamment :
              </p>
              <ul>
                <li>Nom et prénom</li>
                <li>Adresse email</li>
                <li>Contenu du message</li>
              </ul>

              <h3>2.2 Finalité de la collecte</h3>
              <p>Ces données sont collectées uniquement dans le but de :</p>
              <ul>
                <li>Répondre à vos demandes</li>
                <li>
                  Échanger avec vous dans un cadre professionnel ou artistique
                </li>
              </ul>

              <h3>2.3 Durée de conservation</h3>
              <p>
                Les données sont conservées pendant une durée maximale de 3 ans
                après le dernier contact, sauf obligation légale contraire.
              </p>

              <h3>2.4 Partage des données</h3>
              <p>
                Les données personnelles ne sont jamais vendues ni cédées à des
                tiers. Elles peuvent être traitées par des services techniques
                nécessaires au fonctionnement du site (ex : service d’email).
              </p>

              <h3>2.5 Sécurité</h3>
              <p>
                L’association met en œuvre des mesures techniques et
                organisationnelles afin de protéger les données personnelles
                contre toute perte, accès non autorisé ou divulgation.
              </p>

              <h3>2.6 Vos droits</h3>
              <p>
                Conformément au Règlement Général sur la Protection des Données
                (RGPD), vous disposez des droits suivants :
              </p>
              <ul>
                <li>Droit d’accès à vos données</li>
                <li>Droit de rectification</li>
                <li>Droit de suppression</li>
                <li>Droit d’opposition</li>
              </ul>

              <p>
                Pour exercer ces droits, vous pouvez nous contacter à :
                <a href="mailto:cie.osaer@yahoo.com"> cie.osaer@yahoo.com</a>
              </p>

              <h3>2.7 Cookies</h3>
              <p>
                Le site peut utiliser des cookies afin d’améliorer l’expérience
                utilisateur et mesurer l’audience. Vous pouvez configurer votre
                navigateur pour refuser ces cookies.
              </p>

              <h3>2.8 Modification</h3>
              <p>
                La présente politique de confidentialité peut être modifiée à
                tout moment. Nous vous invitons à la consulter régulièrement.
              </p>
            </section>
          </div>
        </div>

        <div className={`logolegal ${visibleClass}`}>
          <a href="/">
            <img
              src="/Pics/logo2.webp"
              alt="Logo de l'association OSAER"
              width={200}
              height={200}
              fetchpriority="high"
              loading="lazy"
            />
          </a>
        </div>

        <div className={`scroll-arrow-down ${visibleClass}`}>↓</div>
      </main>

      <Footer className="legal-footer" />
    </>
  );
});

export default MentionsPolitique;
