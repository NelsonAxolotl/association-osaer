import { useState, useEffect, forwardRef } from "react";
import "./VideoLoop.css";
import Nav from "../Components/Nav";
import Footer from "../Components/Footer";

const VideoLoop = forwardRef((props, externalRef) => {
  const [showIntro, setShowIntro] = useState(true);
  const [contentVisible, setContentVisible] = useState(false);

  useEffect(() => {
    const introTimer = setTimeout(() => {
      setShowIntro(false);

      setTimeout(() => {
        setContentVisible(true);
      }, 300);
    }, 5000);

    return () => clearTimeout(introTimer);
  }, []);

  return (
    <>
      <div
        className={`mainvideo videoloop-page ${
          contentVisible ? "crossfade-visible" : ""
        }`}
      >
        {showIntro && (
          <div className="intro-video">
            <video
              className="intro-video-player"
              src="/Videos/oz.mp4"
              autoPlay
              muted
              playsInline
              preload="auto"
            >
              Votre navigateur ne supporte pas la vidéo.
            </video>
          </div>
        )}

        {!showIntro && (
          <main
            id="page-container"
            className={`crossfade-container ${
              contentVisible ? "crossfade-visible" : ""
            }`}
            ref={externalRef}
            role="main"
          >
            <Nav className="videoloop-nav" />

            <div className="video-bg" aria-hidden="true"></div>

            <h1
              className={`main-title ${
                contentVisible ? "visible-after-video" : ""
              }`}
            >
              Cie OSAER
            </h1>

            <div className="video-rectangle"></div>

            <div
              className={`logovideo ${
                contentVisible ? "visible-after-video" : ""
              }`}
            >
              <a href="/">
                <img
                  src="/Pics/logo2.webp"
                  width="200"
                  height="70"
                  style={{ height: "auto" }}
                  alt="Logo OSAER"
                  loading="eager"
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
          </main>
        )}

        {!showIntro && <Footer className="videoloop-footer" />}
      </div>
    </>
  );
});

export default VideoLoop;
