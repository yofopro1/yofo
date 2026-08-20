import React from "react";
import Button from "./Button.jsx";
import Reveal from "./Reveal.jsx";
import { primaryFeaturedGame, games } from "../data/games.js";

const STATS = [
  { value: `${games.length * 40}+`, label: "Games tracked" },
  { value: "12K+", label: "Player reviews" },
  { value: "38K+", label: "Monthly players" },
  { value: "Daily", label: "Fresh updates" },
];

/**
 * Hero: one large atmospheric card for the current editorial pick, a
 * single primary CTA, and a glass stats bar overlapping the card's
 * bottom edge. The background is an original gradient treatment (not
 * cover art) so no specific game's art is misrepresented here.
 */
export default function Hero() {
  const [from, to] = primaryFeaturedGame.gradient;

  return (
    <section id="top" className="hero">
      <div className="container">
        <Reveal className="hero-card-wrap">
          <div
            className="hero-card"
            style={{
              backgroundImage: `radial-gradient(120% 140% at 15% 0%, ${from}66 0%, transparent 55%), radial-gradient(90% 120% at 100% 100%, ${to}80 0%, transparent 60%), linear-gradient(160deg, #1a0533 0%, #0a0116 70%)`,
            }}
          >
            <div className="hero-card-noise" aria-hidden="true" />

            <span className="hero-badge">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2 14.9 9h7.1l-5.7 4.3 2.2 7.1L12 16.2 5.5 20.4l2.2-7.1L2 9h7.1z" />
              </svg>
              Featured Pick
            </span>

            <div className="hero-card-body">
              <h1 className="hero-title">
                {primaryFeaturedGame.title.split(" ").map((word, i) => (
                  <span className="hero-title-line" key={i}>
                    {word}
                  </span>
                ))}
              </h1>
              <p className="hero-subtitle">{primaryFeaturedGame.tagline}</p>
              <Button href={`#featured-games`} size="md" className="hero-cta">
                Dive In
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M5 12h14M13 6l6 6-6 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Button>
            </div>

            <div className="hero-dots" aria-hidden="true">
              {[0, 1, 2].map((i) => (
                <span key={i} className={`dot ${i === 0 ? "is-active" : ""}`} />
              ))}
            </div>
          </div>

          <div className="hero-stats glass glass--strong">
            {STATS.map((stat) => (
              <div className="hero-stat" key={stat.label}>
                <span className="hero-stat-value">{stat.value}</span>
                <span className="hero-stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
