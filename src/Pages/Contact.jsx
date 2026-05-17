import "./Contact.css";
import { useState, useEffect, forwardRef, useRef } from "react";
import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";

import Nav from "../Components/Nav";
import Footer from "../Components/Footer";

const Contact = forwardRef((props, externalRef) => {
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
      <div
        className={`maincontact contact-page ${
          contentVisible ? "crossfade-visible" : ""
        }`}
        ref={externalRef}
        role="main"
      >
        <Nav />
        <div className="contact-bg" aria-hidden="true"></div>
        <h1
          className={`contact-title ${
            contentVisible ? "visible-after-video" : ""
          }`}
        >
          Contact
        </h1>
        <div className="contact-rectangle" aria-labelledby="contact-heading">
          <video
            ref={videoRef}
            className="contact-video-background"
            src="/Videos/flaw.mp4"
            autoPlay
            muted
            playsInline
            preload="metadata"
            fetchPriority="high"
          />
          <div className={`contact-info ${contentVisible ? "visible" : ""}`}>
            <h2>CIE OSAER</h2>
            <a href="mailto:cie.osaer@yahoo.com" className="contact-mail">
              cie.osaer@yahoo.com
            </a>
            <p>
              <a href="tel:+33666213417" className="contact-phone">
                06 66 21 34 17
              </a>
            </p>
            <p>Siret : 902 789 411 00011</p>
            <p>Code APE/NAF : 90.01Z</p>
            <div className="contact-socials" aria-label="Réseaux sociaux">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <FaFacebook />
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Linkedin"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
        <div
          className={`logocontact ${
            contentVisible ? "visible-after-video" : ""
          }`}
        >
          <a href="/">
            <img
              src="/Pics/logo2.webp"
              alt="Logo de l'association OSAER"
              width={200}
              height={200}
              fetchPriority="high"
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
      </div>
      <Footer className="contact-footer" />
    </>
  );
});
export default Contact;
