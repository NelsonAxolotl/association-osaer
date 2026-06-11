import { useEffect, useRef, useState, forwardRef } from "react";
import { Link } from "react-router-dom";
import "./VideoLoop.css";

import Footer from "../Components/Footer";

const VideoLoop = forwardRef((props, ref) => {
  const videoRef = useRef(null);
  const gridRef = useRef(null);
  const [gridVisible, setGridVisible] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5;
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setGridVisible(true);
        }
      },
      { threshold: 0.2 },
    );

    if (gridRef.current) {
      observer.observe(gridRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const cards = document.querySelectorAll(".video-card");

    if (window.innerWidth <= 768) {
      cards.forEach((card) => {
        const video = card.querySelector("video");
        if (!video) return;
        video.currentTime = 0;
        video.play().catch(() => {});
      });
      return;
    }

    const handlers = [];

    cards.forEach((card) => {
      const video = card.querySelector("video");
      if (!video) return;

      const play = () => {
        video.currentTime = 0;
        video.play();
      };

      const pause = () => {
        video.pause();
      };

      card.addEventListener("mouseenter", play);
      card.addEventListener("mouseleave", pause);

      handlers.push({ card, play, pause });
    });

    return () => {
      handlers.forEach(({ card, play, pause }) => {
        card.removeEventListener("mouseenter", play);
        card.removeEventListener("mouseleave", pause);
      });
    };
  }, []);

  return (
    <main className="home" ref={ref}>
      {/* ================= HERO ================= */}
      <section className="hero">
        {/* VIDEO BACKGROUND */}
        <video
          className="hero-video"
          src="/Videos/oz.mp4"
          autoPlay
          muted
          loop
          playsInline
        />

        {/* GRADIENT OVERLAY */}
        <div className="hero-overlay" />

        {/* HERO CONTENT */}
        <div className="hero-content">
          <h1 className="hero-title">OSAER</h1>

          <p className="hero-text">
            <span className="hero-line hero-line-1">
              Compagnie de danse contemporaine
            </span>

            <span className="hero-line hero-line-2">
              création · transmission · recherche
            </span>
          </p>
        </div>
      </section>
      {/* ================= INTRO COMPANY ================= */}

      <section className="intro-osaer">
        <div className="intro-frame">
          <p className="intro-osaer-direction">
            Direction artistique :{" "}
            <Link to="/artistes#stephanie-pignon" className="bio-link">
              Stéphanie Pignon
            </Link>
            ,
            <br /> en co-direction avec{" "}
            <Link to="/artistes#olivia-caillaud" className="bio-link">
              Olivia Caillaud
            </Link>
          </p>
        </div>
      </section>

      {/* ================= NAV GRID ================= */}
      <section
        ref={gridRef}
        className={`grid ${gridVisible ? "grid-visible" : ""}`}
      >
        <a href="/compagnie" className="card orange compagnie-card">
          <img
            src="/Pics/asso5.webp"
            alt="Compagnie OSAER"
            className="card-media compagnie-media"
          />

          <div className="card-content">
            <h2>Compagnie</h2>
            <p>Identité . direction artistique . recherche</p>
          </div>
        </a>

        <a href="/artistes" className="card white artists-card">
          <div className="artists-media">
            <div className="img-steph artists-img"></div>
            <div className="img-olivia artists-img"></div>
            <div className="img-nelson artists-img"></div>
            <div className="diagonal-split" />
          </div>

          <div className="card-content">
            <h2>Artistes</h2>
            <p>Interprètes & collaborations</p>
          </div>
        </a>

        <a href="/creations" className="card blue video-card">
          <video
            className="card-video"
            src="/Videos/ephe.mp4"
            muted
            playsInline
            preload="metadata"
            loop
          />
          <div className="card-content-video">
            <h2>Créations</h2>
            <p>Pièces chorégraphiques · projets</p>
          </div>
        </a>

        <a href="/rencontres" className="card green video-card">
          <video
            className="card-video"
            src="/Videos/walk3.mp4"
            muted
            playsInline
            preload="metadata"
            loop
          />

          <div className="card-content">
            <h2>Rencontres</h2>
            <p>Médiation · transmission</p>
          </div>
        </a>

        <a href="/contact" className="card yellow video-card">
          <video
            className="card-video"
            src="/Videos/flaw.mp4"
            muted
            playsInline
            preload="metadata"
          />
          <div className="card-content">
            <h2>Contact</h2>
            <p>Production · diffusion</p>
          </div>
        </a>

        <a href="/mentions-politique" className="card purple">
          <img
            src="/Pics/tulle.webp"
            alt="Compagnie OSAER"
            className="card-media compagnie-media"
          />
          <div className="card-content">
            <h2>Mentions légales</h2>
            <p>Politique de confidentialité</p>
          </div>
        </a>
      </section>

      {/* ================= FOOTER ================= */}
      <Footer showLegal={false} className="videoloop-footer" />
    </main>
  );
});

export default VideoLoop;
