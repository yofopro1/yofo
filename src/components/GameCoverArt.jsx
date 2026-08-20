import React from "react";

/**
 * Placeholder cover art for a game: a generated gradient with the game's
 * initial. Swap for a real cover image field once the game database and
 * asset pipeline exist — every call site only needs a `game` object with
 * `title` and `gradient` ([from, to] hex colors).
 */
export default function GameCoverArt({ game, className = "" }) {
  const [from, to] = game.gradient;

  return (
    <div
      className={`game-cover ${className}`}
      style={{
        backgroundImage: `linear-gradient(155deg, ${from} 0%, ${to} 100%)`,
      }}
      role="img"
      aria-label={`${game.title} cover art`}
    >
      <span className="game-cover-initial">{game.title.charAt(0)}</span>
    </div>
  );
}
