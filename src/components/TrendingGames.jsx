import React from "react";
import Section from "./Section.jsx";
import GameCoverArt from "./GameCoverArt.jsx";
import Reveal from "./Reveal.jsx";
import { trendingGames } from "../data/games.js";

const TREND_ICON = {
  up: (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 17 12 7l8 10" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  down: (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 7l8 10 8-10" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  steady: (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 12h16" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />
    </svg>
  ),
};

export default function TrendingGames() {
  return (
    <Section
      id="trending"
      eyebrow="Discover"
      title="Trending this week"
      description="What the YoFo community is playing, rating, and talking about right now."
    >
      <div className="trending-rail">
        {trendingGames.map((game, index) => (
          <Reveal
            key={game.id}
            as="article"
            className="trending-card glass glass--interactive"
            delay={index * 60}
            tabIndex={0}
            title={`${game.title} — full game page coming soon`}
          >
            <span className="trending-rank">{index + 1}</span>
            <GameCoverArt game={game} className="trending-cover" />
            <div className="trending-info">
              <span className="trending-title">{game.title}</span>
              <span className="trending-genre">{game.genre}</span>
            </div>
            <div className="trending-footer">
              <span className="trending-rating">{game.yofoRating.toFixed(1)}</span>
              <span className={`trending-trend trending-trend--${game.trend}`}>
                {TREND_ICON[game.trend]}
                {game.trend !== "steady" && Math.abs(game.rankChange)}
              </span>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
