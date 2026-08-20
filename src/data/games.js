// Local mock data for the homepage. Replace with real API/database data
// once the game database backend is built (see README).
//
// Ratings are on a 0-10 scale for both YoFo's editorial score and the
// aggregated audience score, shown side by side on every game card.

export const games = [
  {
    id: "aurora-drift",
    title: "Aurora Drift",
    genre: "Racing",
    releaseYear: 2025,
    yofoRating: 9.1,
    audienceRating: 8.6,
    tagline: "Neon-lit street racing across a fractured skyline.",
    gradient: ["#8700fa", "#1c0040"],
    platforms: ["PC", "PS5", "Xbox"],
    featured: true,
    trending: true,
    trend: "up",
    rankChange: 3,
  },
  {
    id: "ember-throne",
    title: "Ember Throne",
    genre: "Action RPG",
    releaseYear: 2025,
    yofoRating: 9.4,
    audienceRating: 8.9,
    tagline: "Claim a kingdom built from ash and old grudges.",
    gradient: ["#b23bff", "#2a0060"],
    platforms: ["PC", "PS5"],
    featured: true,
    primary: true,
    trending: true,
    trend: "up",
    rankChange: 1,
  },
  {
    id: "hollow-signal",
    title: "Hollow Signal",
    genre: "Sci-Fi Horror",
    releaseYear: 2024,
    yofoRating: 8.7,
    audienceRating: 8.3,
    tagline: "Something answered back from the derelict station.",
    gradient: ["#6a1fd0", "#160033"],
    platforms: ["PC", "Xbox"],
    featured: true,
    trending: false,
    trend: "steady",
    rankChange: 0,
  },
  {
    id: "quiet-orbit",
    title: "Quiet Orbit",
    genre: "Puzzle / Exploration",
    releaseYear: 2023,
    yofoRating: 8.9,
    audienceRating: 8.5,
    tagline: "A meditative journey through a dying satellite network.",
    gradient: ["#7a2be2", "#1a0038"],
    platforms: ["PC", "Switch", "PS5"],
    featured: true,
    trending: true,
    trend: "up",
    rankChange: 2,
  },
  {
    id: "iron-choir",
    title: "Iron Choir",
    genre: "Tactics",
    releaseYear: 2024,
    yofoRating: 8.5,
    audienceRating: 8.0,
    tagline: "Command a squad of broken machines back to war.",
    gradient: ["#9330f0", "#1c0040"],
    platforms: ["PC"],
    featured: false,
    trending: true,
    trend: "down",
    rankChange: -1,
  },
  {
    id: "paperback-city",
    title: "Paperback City",
    genre: "Narrative Adventure",
    releaseYear: 2025,
    yofoRating: 9.0,
    audienceRating: 8.8,
    tagline: "A noir detective story told one folded page at a time.",
    gradient: ["#a83bff", "#22004f"],
    platforms: ["PC", "Switch"],
    featured: false,
    trending: true,
    trend: "up",
    rankChange: 4,
  },
  {
    id: "static-harvest",
    title: "Static Harvest",
    genre: "Survival",
    releaseYear: 2023,
    yofoRating: 8.2,
    audienceRating: 7.9,
    tagline: "Grow what you can before the storms take it back.",
    gradient: ["#7c2ae8", "#170036"],
    platforms: ["PC", "Xbox", "PS5"],
    featured: false,
    trending: true,
    trend: "steady",
    rankChange: 0,
  },
];

export const featuredGames = games.filter((game) => game.featured);
export const primaryFeaturedGame =
  games.find((game) => game.primary) || featuredGames[0];
export const secondaryFeaturedGames = featuredGames.filter(
  (game) => game.id !== primaryFeaturedGame?.id
);
export const trendingGames = games
  .filter((game) => game.trending)
  .sort((a, b) => (b.rankChange ?? 0) - (a.rankChange ?? 0));

export function ratingTier(score) {
  if (score >= 9) return "Excellent";
  if (score >= 8) return "Great";
  if (score >= 7) return "Good";
  if (score >= 5) return "Fair";
  return "Mixed";
}
