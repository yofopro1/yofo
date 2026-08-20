// Local mock data for the "Latest Gaming Content" section. Replace with
// real CMS/API data once the news/content backend is built.

export const articles = [
  {
    id: "ember-throne-review",
    category: "Review",
    title: "Ember Throne turns revenge into a full-time job",
    excerpt:
      "Ember Throne's kingdom-building loop rewards patience and cruelty in equal measure — and somehow makes both feel earned.",
    date: "2026-08-12",
    readTime: "6 min read",
    gradient: ["#9330f0", "#180032"],
    primary: true,
  },
  {
    id: "aurora-drift-patch",
    category: "News",
    title: "Aurora Drift's next update adds a full night cycle",
    excerpt:
      "Drift Studios confirms a free content drop bringing dynamic weather and a rebalanced drift-scoring system.",
    date: "2026-08-09",
    readTime: "3 min read",
    gradient: ["#8700fa", "#22004a"],
  },
  {
    id: "quiet-orbit-soundtrack",
    category: "Feature",
    title: "Inside the ambient score that makes Quiet Orbit unforgettable",
    excerpt:
      "We talked to the composer behind one of the year's most talked-about soundtracks about writing for silence.",
    date: "2026-08-05",
    readTime: "8 min read",
    gradient: ["#00c2ff", "#001a3a"],
  },
  {
    id: "fall-releases-preview",
    category: "Preview",
    title: "8 games we're watching this fall",
    excerpt:
      "From tactics revivals to a genre-bending narrative adventure, here's what's actually worth your calendar space.",
    date: "2026-08-01",
    readTime: "5 min read",
    gradient: ["#3ddc97", "#00291c"],
  },
];

export const primaryArticle = articles.find((a) => a.primary) || articles[0];
export const secondaryArticles = articles.filter(
  (a) => a.id !== primaryArticle?.id
);
