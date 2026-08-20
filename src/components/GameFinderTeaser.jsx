import React, { useState } from "react";
import Button from "./Button.jsx";
import Reveal from "./Reveal.jsx";

const PREVIEW_PROMPTS = [
  { label: "Mood", value: "Relaxed, competitive, or story-driven?" },
  { label: "Time", value: "Quick sessions or long deep-dives?" },
  { label: "Platform", value: "PC, console, or handheld?" },
  { label: "Genre", value: "Anything you want more — or less — of?" },
];

/**
 * Introduces the (not-yet-built) Game Finder quiz. The CTA doesn't fake a
 * working quiz — it reveals a short, honest preview of what the finder
 * will ask, so the section still feels functional rather than a dead
 * link.
 */
export default function GameFinderTeaser() {
  const [showPreview, setShowPreview] = useState(false);

  return (
    <section id="game-finder" className="finder">
      <div className="section-inner">
        <Reveal>
          <div className="finder-panel glass glass--strong glass--glow">
            <div className="finder-orbit" aria-hidden="true">
              <span className="finder-orbit-ring finder-orbit-ring--1" />
              <span className="finder-orbit-ring finder-orbit-ring--2" />
              <span className="finder-orbit-core" />
            </div>

            <div className="finder-content">
              <span className="section-eyebrow">Game Finder</span>
              <h2 className="finder-title">Not sure what to play?</h2>
              <p className="finder-description">
                Answer a few quick questions about your mood, time, and
                taste, and YoFo will match you with games you're actually
                likely to love — not just whatever's trending.
              </p>

              <div className="finder-actions">
                <Button
                  onClick={() => setShowPreview((v) => !v)}
                  aria-expanded={showPreview}
                >
                  Start Game Finder
                </Button>
                <span className="finder-hint">
                  {showPreview ? "Here's a preview of what we'll ask" : "Takes about 60 seconds"}
                </span>
              </div>

              <div className={`finder-preview ${showPreview ? "is-open" : ""}`}>
                <div className="finder-preview-grid">
                  {PREVIEW_PROMPTS.map((prompt) => (
                    <div className="finder-preview-item glass" key={prompt.label}>
                      <span className="finder-preview-label">{prompt.label}</span>
                      <span className="finder-preview-value">{prompt.value}</span>
                    </div>
                  ))}
                </div>
                <p className="finder-preview-note">
                  The full Game Finder — with real recommendations — is
                  launching soon.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
