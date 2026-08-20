import React from "react";
import Section from "./Section.jsx";
import ContentCard from "./ContentCard.jsx";
import Reveal from "./Reveal.jsx";
import { primaryArticle, secondaryArticles } from "../data/articles.js";

export default function LatestContent() {
  return (
    <Section
      id="latest-content"
      eyebrow="Latest"
      title="Gaming content, worth reading"
      description="Reviews, news, and guides from the YoFo editorial team."
    >
      <div className="content-grid">
        <Reveal>
          <ContentCard article={primaryArticle} variant="primary" />
        </Reveal>
        <div className="content-secondary">
          {secondaryArticles.map((article, index) => (
            <Reveal key={article.id} delay={index * 70}>
              <ContentCard article={article} />
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
