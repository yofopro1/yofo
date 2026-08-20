import React from "react";
import GameCoverArt from "./GameCoverArt.jsx";
import RatingBadge from "./RatingBadge.jsx";

/**
 * Premium glass game card — the core content unit of the site. Used at
 * two sizes: "primary" for the single editorial spotlight in Featured
 * Games, and "default" for every other grid context.
 *
 * There's no game-detail page yet, so the card is a non-navigating
 * placeholder control: it's focusable and shows what a detail view will
 * eventually contain, but doesn't pretend to link anywhere real yet.
 */
export default function GameCard({ game, variant = "default" }) {
  return (
    <article
      className={`game-card game-card--${variant} glass glass--interactive glass--glow`}
      tabIndex={0}
      title={`${game.title} — full game page coming soon`}
    >
      <div className="game-card-cover-wrap">
        <GameCoverArt game={game} className="game-card-cover" />
        <span className="game-card-genre-tag">{game.genre}</span>
      </div>

      <div className="game-card-body">
        <div className="game-card-heading">
          <h3 className="game-card-title">{game.title}</h3>
          <span className="game-card-year">{game.releaseYear}</span>
        </div>

        {variant === "primary" && (
          <p className="game-card-tagline">{game.tagline}</p>
        )}

        <div className="game-card-platforms">
          {game.platforms.map((platform) => (
            <span key={platform} className="game-card-platform">
              {platform}
            </span>
          ))}
        </div>

        <div className="game-card-ratings">
          <RatingBadge variant="yofo" value={game.yofoRating} size="sm" />
          <RatingBadge variant="audience" value={game.audienceRating} size="sm" />
        </div>
      </div>
    </article>
  );
}
