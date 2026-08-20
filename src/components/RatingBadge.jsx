import React from "react";
import { ratingTier } from "../data/games.js";

/**
 * YoFo's core rating identity: the editorial "YoFo Rating" and the
 * aggregated "Audience" score, shown together wherever a game appears.
 *
 * size "lg" is used for hero/detail-style displays ("9.4 Excellent"),
 * "sm"/"md" for compact card metadata.
 */
export default function RatingBadge({ variant = "yofo", value, size = "md" }) {
  const isYofo = variant === "yofo";
  const label = isYofo ? "YoFo Rating" : "Audience";
  const tier = isYofo ? ratingTier(value) : null;

  return (
    <div className={`rating rating--${variant} rating--${size}`}>
      <span className="rating-value">{value.toFixed(1)}</span>
      <span className="rating-meta">
        <span className="rating-label">{label}</span>
        {tier && size === "lg" && <span className="rating-tier">{tier}</span>}
      </span>
    </div>
  );
}
