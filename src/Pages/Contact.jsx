import "./Contact.css";
import { useState, useEffect, forwardRef, useRef } from "react";
import { FaInstagram, FaFacebook } from "react-icons/fa";

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
      videoRef.current.playbackRate = 0.6;
    }
  }, []);

  return (
    <>
      <div
        className={`maincontact contact-page ${
          contentVisible ? "crossfade-visible" : ""
        }`}
        ref={externalRef}
      >
        <Nav />
        <div className="bio-bg" aria-hidden="true"></div>
        <h1
          className={`contact-title ${
            contentVisible ? "visible-after-video" : ""
          }`}
        >
          Contact
        </h1>
        <div className="contact-rectangle">
          <video
            ref={videoRef}
            className="contact-video-background"
            src="/Videos/pissenlit4.mp4"
            loop
            autoPlay
            muted
            playsInline
          />
          <div className={`contact-info ${contentVisible ? "visible" : ""}`}>
            <h3>ASSOCIATION OSAER</h3>
            <a href="mailto:cie.osaer@yahoo.com" className="contact-mail">
              cie.osaer@yahoo.com
            </a>
            <p>
              <a href="tel:+33666213417" className="contact-phone">
                06 66 21 34 17
              </a>
            </p>
            <p>Siret: </p>
            <div className="contact-socials">
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
            </div>
          </div>
        </div>
        <div
          className={`logocontact ${
            contentVisible ? "visible-after-video" : ""
          }`}
        >
          <a href="/">
            <img src="/Pics/logo2.jpg" alt="Logo OSAER" />
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
      <Footer className="contact-footer" />
    </>
  );
});
export default Contact;
