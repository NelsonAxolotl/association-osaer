import { useRef, useState, useEffect, forwardRef } from "react";
import "./VideoLoop.css";
import Nav from "../Components/Nav";
import Footer from "../Components/Footer";

const VideoLoop = forwardRef((props, externalRef) => {
  const videoRef = useRef(null);
  const audioRef = useRef(null);
  const [soundOn, setSoundOn] = useState(false);
  const [contentVisible, setContentVisible] = useState(false);
  const [rightAnimate, setRightAnimate] = useState(false);
  const [curtainActive, setCurtainActive] = useState(false);
  const [lineAnimate, setLineAnimate] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => {
      setCurtainActive(true);
      setLineAnimate(true); // démarre la ligne au même moment
      // on retire les classes après l'animation pour reset si besoin
      setTimeout(() => {
        setCurtainActive(false);
        setLineAnimate(false);
      }, 3000); // même durée que l'animation CSS (6s)
    }, 15000); // démarre après 15 secondes
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const t = setTimeout(() => {
      setCurtainActive(true);
      // on retire la classe après l'animation pour reset si besoin
      setTimeout(() => setCurtainActive(false), 3000);
    }, 15000); // 15000ms = 15s
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const t = setTimeout(() => {
      setRightAnimate(true);
      setTimeout(() => setRightAnimate(false), 8000);
    }, 21500); // 15000ms = 15s
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const t = setTimeout(() => setContentVisible(true), 2000);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const enableOnFirstClick = () => {
      if (audioRef.current && !soundOn) {
        audioRef.current.volume = 0.1;
        audioRef.current.play().catch(() => {});
        setSoundOn(true);
      }
      window.removeEventListener("click", enableOnFirstClick);
    };
    window.addEventListener("click", enableOnFirstClick);
    return () => window.removeEventListener("click", enableOnFirstClick);
  }, [soundOn]);

  const toggleSound = (e) => {
    e.stopPropagation();
    if (!audioRef.current) return;

    if (soundOn) {
      audioRef.current.pause();
      setSoundOn(false);
    } else {
      audioRef.current.volume = 0.1;
      audioRef.current.play().catch(() => {});
      setSoundOn(true);
    }
  };

  return (
    <>
      <div
        id="page-container"
        className={`crossfade-container videoloop-page ${
          contentVisible ? "crossfade-visible" : ""
        }`}
        ref={externalRef}
      >
        <Nav className="videoloop-nav" />

        <h1 className="main-title">Association OSAER</h1>
        <div className="crossfade-line"></div>

        <div
          className={`video-container ${curtainActive ? "video-curtain" : ""}${
            rightAnimate ? "right-animate" : ""
          }`}
        >
          <video
            className="fade-video"
            src="/Videos/osaer2.mp4"
            autoPlay
            loop
            playsInline
            muted
            ref={videoRef}
          />
        </div>
        <div
          className={`scroll-arrow-down ${
            contentVisible ? "visible-after-video" : ""
          }`}
        >
          ↓
        </div>
        <div className={`logo ${contentVisible ? "visible-after-video" : ""}`}>
          <a href="/">
            <img src="/Pics/logo2.jpg" alt="Logo OSAER" />
          </a>
        </div>

        <button
          className={`sound-toggle ${soundOn ? "on" : "off"} ${
            contentVisible ? "visible-after-video" : ""
          }`}
          onClick={toggleSound}
          aria-pressed={soundOn}
          aria-label={soundOn ? "Couper le son" : "Activer le son"}
          title={soundOn ? "Couper le son" : "Activer le son"}
        >
          {soundOn ? "🔊" : "🔇"}
        </button>
        <audio ref={audioRef} src="/Son/ring2.mp3" loop preload="auto" />
        <div
          className={`bottom-line-responsive ${
            lineAnimate ? "line-animate" : ""
          }`}
        />
      </div>
      <Footer className="videoloop-footer" />
    </>
  );
});

export default VideoLoop;
