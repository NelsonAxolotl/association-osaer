import "./Contact.css";
import { useState, useEffect, forwardRef, useRef } from "react";
import emailjs from "@emailjs/browser";
import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";

import Nav from "../Components/Nav";
import Footer from "../Components/Footer";

const SOCIALS = [
  {
    href: "https://www.instagram.com/cieosaer/",
    icon: FaInstagram,
    label: "Instagram",
  },
  {
    href: "https://www.facebook.com/",
    icon: FaFacebook,
    label: "Facebook",
  },
  {
    href: "https://www.linkedin.com/",
    icon: FaLinkedin,
    label: "LinkedIn",
  },
];

const Contact = forwardRef(function Contact(props, ref) {
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formRef.current) return;
    emailjs
      .sendForm("SERVICE_ID", "TEMPLATE_ID", formRef.current, "PUBLIC_KEY")
      .then(() => {
        alert("Message envoyé !");
      })
      .catch((err) => {
        console.error(err);
        alert("Erreur envoi");
      });
  };

  const [contentVisible, setContentVisible] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const t = setTimeout(() => setContentVisible(true), 200);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const onLoaded = () => {
      video.playbackRate = 0.5;
    };

    video.addEventListener("loadeddata", onLoaded);

    return () => {
      video.removeEventListener("loadeddata", onLoaded);
    };
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
          <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
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
            </select>

            <input type="email" name="email" placeholder="Email" required />

            <textarea
              name="message"
              placeholder="Votre message"
              rows="6"
              required
            />

            <button type="submit">Envoyer</button>
          </form>
          <label className="contact-rgpd">
            <input type="checkbox" required />
            <span>
              En soumettant ce formulaire, vous acceptez que les informations
              saisies soient utilisées pour vous recontacter dans le cadre d’une
              demande de devis ou de renseignements.
            </span>
          </label>
          <div className={`contact-info ${contentVisible ? "visible" : ""}`}>
            <a href="mailto:cie.osaer@yahoo.com" className="contact-mail">
              cie.osaer@yahoo.com
            </a>

            <a href="tel:+33666213417" className="contact-phone">
              06 66 21 34 17
            </a>

            <div className="contact-socials" aria-label="Réseaux sociaux">
              {SOCIALS.map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  title={label}
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>
        </section>

        <div
          className={`logocontact ${
            contentVisible ? "visible-after-video" : ""
          }`}
        >
          <a href="/" aria-label="Retour à l'accueil">
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
