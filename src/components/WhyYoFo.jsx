import React from "react";
import Section from "./Section.jsx";
import Reveal from "./Reveal.jsx";

const FEATURES = [
  {
    title: "Real game information",
    text: "Genres, platforms, release history, and everything else you need in one clean profile per game.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="3.5" y="4.5" width="17" height="15" rx="3" stroke="currentColor" strokeWidth="1.6" />
        <path d="M7.5 9h9M7.5 13h6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "YoFo Rating",
    text: "Our own editorial score — consistent, considered, and never inflated by hype.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M12 3.5l2.47 5.15 5.68.77-4.12 3.98.99 5.63L12 16.6l-5.02 2.43.99-5.63-4.12-3.98 5.68-.77L12 3.5Z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Audience Rating",
    text: "See how real players feel, side by side with our score — the full picture, not just one opinion.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="8.5" cy="9" r="3" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="16" cy="10.5" r="2.3" stroke="currentColor" strokeWidth="1.6" />
        <path d="M3.5 19c.6-2.9 2.6-4.5 5-4.5s4.4 1.6 5 4.5M13.8 19c.4-2 1.7-3.3 3.6-3.3s3.2 1.3 3.6 3.3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Personalized discovery",
    text: "The Game Finder turns your taste into a shortlist — so you spend less time browsing and more time playing.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.6" />
        <path d="m20 20-3.5-3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M11 8v3l2 1.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function WhyYoFo() {
  return (
    <Section
      eyebrow="Why YoFo"
      title="Discover better. Decide faster."
      description="YoFo exists to make one decision easier: what to play next."
    >
      <div className="why-grid">
        {FEATURES.map((feature, index) => (
          <Reveal key={feature.title} delay={index * 70} className="why-card glass glass--interactive">
            <span className="why-icon">{feature.icon}</span>
            <h3 className="why-title">{feature.title}</h3>
            <p className="why-text">{feature.text}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
