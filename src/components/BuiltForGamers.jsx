import React from "react";
import Section from "./Section.jsx";
import Reveal from "./Reveal.jsx";

const FEATURES = [
  {
    title: "Smart Discovery",
    text: "Browse a curated catalog built around genres, platforms, and release history — not just what's trending.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.8" />
        <path d="m20 20-3.5-3.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Honest Reviews",
    text: "Our editorial YoFo Rating sits side by side with real audience scores, so you get the full picture.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M12 3.5l2.47 5.15 5.68.77-4.12 3.98.99 5.63L12 16.6l-5.02 2.43.99-5.63-4.12-3.98 5.68-.77L12 3.5Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Game Finder",
    text: "Answer a few quick questions and get a shortlist matched to your taste. Coming soon.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M12 4v4M12 16v4M4 12h4M16 12h4"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <circle cx="12" cy="12" r="3.4" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    ),
  },
  {
    title: "Track & Save",
    text: "Bookmark what catches your eye and build a running list of what to play next. Coming soon.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M7 3.5h10a1 1 0 0 1 1 1V21l-6-3.8-6 3.8V4.5a1 1 0 0 1 1-1Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

/**
 * "Built for gamers" feature grid — replaces the old WhyYoFo section.
 * Heading and lede sit side by side per the reference; two of the four
 * features (Game Finder, Track & Save) are marked coming soon since
 * neither is built yet.
 */
export default function BuiltForGamers() {
  return (
    <Section
      eyebrow="Built for gamers"
      title={
        <>
          Discover Your Next
          <br />
          Favorite <span className="text-gradient">Game</span>
        </>
      }
      action={
        <p className="gamers-lede">
          Every tool here exists to answer one question faster: what's
          actually worth your time. No noise, no hype — just the
          information you need to decide.
        </p>
      }
    >
      <div className="gamers-grid">
        {FEATURES.map((feature, index) => (
          <Reveal
            key={feature.title}
            delay={index * 70}
            className="gamers-card glass glass--interactive"
          >
            <span className="gamers-icon">{feature.icon}</span>
            <h3 className="gamers-title">{feature.title}</h3>
            <p className="gamers-text">{feature.text}</p>
            <span className="gamers-arrow" aria-hidden="true">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path
                  d="M7 17 17 7M9 7h8v8"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
