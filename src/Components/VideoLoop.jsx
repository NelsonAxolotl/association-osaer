import { useRef, useState, useEffect, forwardRef } from "react";
import "./VideoLoop.css";
import Nav from "../Components/Nav";
import Footer from "../Components/Footer";

const VideoLoop = forwardRef((props, externalRef) => {
  const videoRef = useRef(null);
  const audioRef = useRef(null);

  // ===== STATES =====
  const [soundOn, setSoundOn] = useState(false);
  const [contentVisible, setContentVisible] = useState(false);
  const [rightAnimate, setRightAnimate] = useState(false);
  const [leftAnimate, setLeftAnimate] = useState(false);
  const [curtainActive, setCurtainActive] = useState(false);
  const [lineAnimate, setLineAnimate] = useState(false);

  // ===== FADE IN =====
  useEffect(() => {
    const t = setTimeout(() => setContentVisible(true), 800);
    return () => clearTimeout(t);
  }, []);

  // ===== TIMELINE 1 (15s) =====
  useEffect(() => {
    const t = setTimeout(() => {
      setCurtainActive(true);
      setLineAnimate(true);

      setTimeout(() => {
        setCurtainActive(false);
        setLineAnimate(false);
      }, 3300);
    }, 15000);

    return () => clearTimeout(t);
  }, []);

  // ===== TIMELINE 2 (18s) =====
  useEffect(() => {
    const t = setTimeout(() => {
      setCurtainActive(true);

      setTimeout(() => {
        setCurtainActive(false);
      }, 3000);
    }, 18000);

    return () => clearTimeout(t);
  }, []);

  // ===== LEFT / RIGHT =====
  useEffect(() => {
    const t = setTimeout(() => {
      setRightAnimate(true);
      setLeftAnimate(true);

      setTimeout(() => {
        setRightAnimate(false);
        setLeftAnimate(false);
      }, 8000);
    }, 20000);

    return () => clearTimeout(t);
  }, []);

  // ===== AUDIO (1er clic) =====
  useEffect(() => {
    const enableAudio = () => {
      if (audioRef.current && !soundOn) {
        audioRef.current.volume = 0.5;
        audioRef.current.play().catch(() => {});
        setSoundOn(true);
      }
      window.removeEventListener("click", enableAudio);
    };

    window.addEventListener("click", enableAudio);
    return () => window.removeEventListener("click", enableAudio);
  }, [soundOn]);

  const toggleSound = (e) => {
    e.stopPropagation();
    if (!audioRef.current) return;

    if (soundOn) {
      audioRef.current.pause();
      setSoundOn(false);
    } else {
      audioRef.current.volume = 0.5;
      audioRef.current.play().catch(() => {});
      setSoundOn(true);
    }
  };

  // ===== JSX =====
  return (
    <>
      <main
        id="page-container"
        className={`crossfade-container videoloop-page ${
          contentVisible ? "crossfade-visible" : ""
        }`}
        ref={externalRef}
        role="main"
      >
        <Nav className="videoloop-nav" />

        <div className="video-bg" aria-hidden="true"></div>

        <h1 className="main-title">Association OSAER</h1>

        <div className="crossfade-line"></div>

        {/* SEO */}
        <section className="video-description">
          <p>
            L’association OSAER propose des performances de danse contemporaine,
            et chorégraphie.
          </p>
        </section>

        {/* VIDEO + ANIMATIONS */}
        <div
          className={`video-container
            ${curtainActive ? "video-curtain" : ""}
            ${rightAnimate ? "right-animate" : ""}
            ${leftAnimate ? "left-animate" : ""}
          `}
        >
          <video
            className="fade-video"
            src="/Videos/walk3.mp4"
            autoPlay
            loop
            playsInline
            muted
            ref={videoRef}
            preload="metadata"
            fetchPriority="high"
          />
        </div>

        {/* LOGO */}
        <div className={`logo ${contentVisible ? "visible-after-video" : ""}`}>
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

        {/* SCROLL */}
        <div
          className={`scroll-arrow-down ${
            contentVisible ? "visible-after-video" : ""
          }`}
        >
          ↓
        </div>

        {/* SOUND */}
        <button
          className={`sound-toggle ${soundOn ? "on" : "off"} ${
            contentVisible ? "visible-after-video" : ""
          }`}
          onClick={toggleSound}
        >
          {soundOn ? "🔊" : "🔇"}
        </button>

        <audio ref={audioRef} src="/Son/zur.mp3" loop preload="none" />

        {/* LIGNE RESPONSIVE */}
        <div
          className={`bottom-line-responsive ${
            lineAnimate ? "line-animate" : ""
          }`}
        />
      </main>

      <Footer className="videoloop-footer" />
    </>
  );
});

export default VideoLoop;
