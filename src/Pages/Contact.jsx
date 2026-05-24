import "./Contact.css";
import { useState, useEffect, forwardRef, useRef } from "react";
import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";

import Nav from "../Components/Nav";
import Footer from "../Components/Footer";

const SOCIALS = [
  {
    href: "https://www.instagram.com/",
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
  const [contentVisible, setContentVisible] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const t = setTimeout(() => setContentVisible(true), 200);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5;
    }
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
          <video
            ref={videoRef}
            className="contact-video-background"
            src="/Videos/flaw.mp4"
            autoPlay
            muted
            playsInline
            preload="metadata"
            loop
          />

          <div className={`contact-info ${contentVisible ? "visible" : ""}`}>
            <h2>CIE OSAER</h2>

            <a href="mailto:cie.osaer@yahoo.com" className="contact-mail">
              cie.osaer@yahoo.com
            </a>

            <a href="tel:+33666213417" className="contact-phone">
              06 66 21 34 17
            </a>

            <p>SIRET : 902 789 411 00011</p>
            <p>Code APE/NAF : 90.01Z</p>

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
