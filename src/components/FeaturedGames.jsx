import React from "react";
import Section from "./Section.jsx";
import GameCard from "./GameCard.jsx";
import Reveal from "./Reveal.jsx";
import { featuredGames, primaryFeaturedGame } from "../data/games.js";

/**
 * Featured games: a row of portrait poster cards, editorial pick marked
 * with a "Featured" ribbon, with decorative pagination dots below —
 * matching the poster-row treatment used across the site.
 */
export default function FeaturedGames() {
  return (
    <Section
      id="featured-games"
      eyebrow="Featured"
      title="Games worth your time"
      description="Curated by YoFo's editorial team and cross-checked against what players are actually saying."
    >
      <div className="featured-row">
        {featuredGames.map((game, index) => {
          const isPrimary = game.id === primaryFeaturedGame.id;
          return (
            <Reveal key={game.id} delay={index * 70} className="featured-row-item">
              <GameCard game={game} variant={isPrimary ? "primary" : "default"} />
            </Reveal>
          );
        })}
      </div>

      <div className="featured-dots" aria-hidden="true">
        {featuredGames.map((_, index) => (
          <span key={index} className={`dot ${index === 0 ? "is-active" : ""}`} />
        ))}
      </div>
    </Section>
  );
}
