import React from "react";

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  month: "short",
  day: "numeric",
});

/**
 * Editorial content card for news/reviews/features/guides. `variant`
 * "primary" renders the large spotlight story; "default" renders the
 * compact secondary cards.
 */
export default function ContentCard({ article, variant = "default" }) {
  return (
    <article
      className={`content-card content-card--${variant} glass glass--interactive`}
      tabIndex={0}
      title={`${article.title} — full article coming soon`}
    >
      <div
        className="content-card-media"
        style={{
          backgroundImage: `linear-gradient(155deg, ${article.gradient[0]} 0%, ${article.gradient[1]} 100%)`,
        }}
      >
        <span className="content-card-category">{article.category}</span>
      </div>
      <div className="content-card-body">
        <h3 className="content-card-title">{article.title}</h3>
        {variant === "primary" && (
          <p className="content-card-excerpt">{article.excerpt}</p>
        )}
        <div className="content-card-meta">
          <span>{dateFormatter.format(new Date(article.date))}</span>
          <span className="content-card-dot" aria-hidden="true" />
          <span>{article.readTime}</span>
        </div>
      </div>
    </article>
  );
}
