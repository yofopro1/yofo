import React from "react";
import Button from "./Button.jsx";
import GameCoverArt from "./GameCoverArt.jsx";
import Reveal from "./Reveal.jsx";
import { featuredGames } from "../data/games.js";

const stageGames = featuredGames.slice(0, 3);

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero-glow" aria-hidden="true" />
      <div className="hero-grid" aria-hidden="true" />

      <div className="hero-inner container">
        <Reveal className="hero-content">
          <span className="hero-eyebrow">Game discovery, reimagined</span>
          <h1 className="hero-title">Find Your Next Game.</h1>
          <p className="hero-subtitle">
            YoFo brings together ratings, reviews, and a discovery engine
            built to cut through the noise — so you always know what's
            actually worth playing.
          </p>
          <div className="hero-actions">
            <Button href="#game-finder" size="md">
              Find Your Game
            </Button>
            <Button href="#featured-games" variant="secondary" size="md">
              Explore Games
            </Button>
          </div>
        </Reveal>

        <Reveal className="hero-visual" delay={140}>
          <div className="hero-visual-stage">
            {stageGames.map((game, index) => (
              <div
                className={`hero-visual-card hero-visual-card--${index}`}
                key={game.id}
              >
                <div className="hero-visual-card-glass glass glass--strong">
                  <GameCoverArt game={game} className="hero-visual-cover" />
                  <div className="hero-visual-card-info">
                    <span className="hero-visual-card-title">{game.title}</span>
                    <span className="hero-visual-card-meta">
                      {game.genre} · {game.releaseYear}
                    </span>
                  </div>
                  <span className="hero-visual-card-rating">
                    {game.yofoRating.toFixed(1)}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
