import "./Contact.css";
import { useState, useEffect, forwardRef } from "react";

import Nav from "../Components/Nav";
import Footer from "../Components/Footer";

const Contact = forwardRef(function Contact(props, ref) {
  const [contentVisible, setContentVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setContentVisible(true), 200);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <main
        ref={ref}
        className={`maincontact contact-page ${
          contentVisible ? "crossfade-visible" : ""
        }`}
      >
        <Nav />

        <div className="contact-bg" aria-hidden="true" />

        <h1
          id="contact-heading"
          className={`contact-title ${
            contentVisible ? "visible-after-video" : ""
          }`}
        >
          Contact
        </h1>

        <section
          className="contact-rectangle"
          aria-labelledby="contact-heading"
        >
          <div className="contact-intro">
            <h2>Contactez-nous</h2>

            <p>
              Vous souhaitez obtenir plus d'infos sur la compagnie ou nos
              projets ?
            </p>

            <p>
              Utilisez le formulaire ci-dessous pour nous envoyer votre message.
            </p>
          </div>

          {/* FORM FORMSPREE */}
          <form
            action="https://formspree.io/f/mzdqejek"
            method="POST"
            className="contact-form"
          >
            <input
              type="text"
              name="name"
              placeholder="Nom / Prénom"
              required
            />

            <select name="type" required>
              <option value="">Vous êtes ?</option>
              <option value="particulier">Particulier</option>
              <option value="asso">Association</option>
              <option value="institution">Institution</option>
              <option value="programmateur">Programmateur</option>
              <option value="autre">Autre</option>
            </select>

            <input type="email" name="email" placeholder="Email" required />

            <textarea
              name="message"
              placeholder="Votre message"
              rows="6"
              required
            />

            <input
              type="hidden"
              name="_subject"
              value="[OSAER] Nouveau message depuis le site"
            />

            <input type="hidden" name="_format" value="plain" />
            <input type="hidden" name="_replyto" value="email" />
            <button type="submit">Envoyer</button>
            <label className="contact-rgpd">
              <input type="checkbox" name="consent" required />
              <span>
                J’accepte que mes informations soient utilisées uniquement dans
                le cadre de ma demande de contact.
              </span>
            </label>
          </form>

          <div className={`contact-info ${contentVisible ? "visible" : ""}`}>
            <a href="mailto:cie.osaer@yahoo.com" className="contact-mail">
              cie.osaer@yahoo.com
            </a>

            <a href="tel:+33666213417" className="contact-phone">
              06 66 21 34 17
            </a>
          </div>
        </section>

        <div
          className={`logocontact ${
            contentVisible ? "visible-after-video" : ""
          }`}
        >
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

        <div
          className={`scroll-arrow-down ${
            contentVisible ? "visible-after-video" : ""
          }`}
          aria-hidden="true"
        >
          ↓
        </div>
      </main>

      <Footer className="contact-footer" />
    </>
  );
});

export default Contact;
