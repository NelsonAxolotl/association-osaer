import { useRef, useState, useEffect, forwardRef } from "react";
import "./VideoLoop.css";
import Nav from "../Components/Nav";
import Footer from "../Components/Footer";

const VideoLoop = forwardRef((props, externalRef) => {
  const videoRef = useRef(null);

  const [showIntro, setShowIntro] = useState(true);
  const [contentVisible, setContentVisible] = useState(false);

  useEffect(() => {
    // intro disparaît après 5s
    const introTimer = setTimeout(() => {
      setShowIntro(false);

      // apparition du contenu ensuite
      setTimeout(() => {
        setContentVisible(true);
      }, 300);
    }, 5000);

    return () => clearTimeout(introTimer);
  }, []);

  return (
    <>
      <div
        className={`mainvideo videoloop-page ${contentVisible ? "crossfade-visible" : ""}`}
        ref={externalRef}
        role="main"
      >
        {showIntro && (
          <div className="intro-video">
            <video
              className="intro-video-player"
              src="/Videos/oz.mp4"
              autoPlay
              muted
              playsInline
            />
          </div>
        )}

        {!showIntro && (
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

              <h1
                className={`main-title ${
                  contentVisible ? "visible-after-video" : ""
                }`}
              >
                Cie OSAER
              </h1>

              <div className="video-rectangle"></div>

              {/* logo */}
              <div
                className={`logovideo ${
                  contentVisible ? "visible-after-video" : ""
                }`}
              >
                <a href="/">
                  <img
                    src="/Pics/logo2.webp"
                    alt="Logo de l'association OSAER"
                    width={200}
                    height={200}
                  />
                </a>
              </div>

              {/* flèche */}
              <div
                className={`scroll-arrow-down ${
                  contentVisible ? "visible-after-video" : ""
                }`}
                aria-hidden="true"
              >
                ↓
              </div>
            </main>

            <Footer className="videoloop-footer" />
          </>
        )}
      </div>
    </>
  );
});

export default VideoLoop;
