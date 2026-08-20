import React from "react";
import Section from "./Section.jsx";
import GameCard from "./GameCard.jsx";
import Reveal from "./Reveal.jsx";
import { primaryFeaturedGame, secondaryFeaturedGames } from "../data/games.js";

/**
 * Editorial featured-games layout: one large spotlight game alongside a
 * grid of secondary picks, rather than a flat uniform grid.
 */
export default function FeaturedGames() {
  return (
    <Section
      id="featured-games"
      eyebrow="Featured"
      title="Games worth your time"
      description="Curated by YoFo's editorial team and cross-checked against what players are actually saying."
    >
      <div className="featured-grid">
        <Reveal className="featured-primary">
          <GameCard game={primaryFeaturedGame} variant="primary" />
        </Reveal>
        <div className="featured-secondary">
          {secondaryFeaturedGames.map((game, index) => (
            <Reveal key={game.id} delay={index * 80}>
              <GameCard game={game} />
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
