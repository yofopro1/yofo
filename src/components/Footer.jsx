import React from "react";

const EXPLORE_LINKS = [
  { label: "Games", href: "#featured-games" },
  { label: "Discover", href: "#trending" },
  { label: "Game Finder", href: "#game-finder" },
  { label: "News", href: "#latest-content" },
];

const SOON_LINKS = ["Reviews", "Community", "Support"];

const SOCIALS = [
  {
    label: "X",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M4 4l16 16M20 4 4 20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: "Discord",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="4" y="7" width="16" height="11" rx="4" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="9.5" cy="12.5" r="1.2" fill="currentColor" />
        <circle cx="14.5" cy="12.5" r="1.2" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="3.5" y="6" width="17" height="12" rx="4" stroke="currentColor" strokeWidth="1.8" />
        <path d="M11 10.5v3l3-1.5-3-1.5Z" fill="currentColor" />
      </svg>
    ),
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="section-inner">
        <div className="footer-glass glass glass--subtle">
          <div className="footer-top">
            <div className="footer-brand">
              <span className="nav-logo-mark" aria-hidden="true" />
              <span className="footer-brand-text">YoFo</span>
              <p className="footer-tagline">
                The clearest way to decide what to play next.
              </p>
            </div>

            <nav className="footer-nav" aria-label="Explore">
              <span className="footer-nav-heading">Explore</span>
              {EXPLORE_LINKS.map((link) => (
                <a key={link.label} href={link.href} className="footer-nav-link">
                  {link.label}
                </a>
              ))}
            </nav>

            <nav className="footer-nav" aria-label="Coming soon">
              <span className="footer-nav-heading">Coming soon</span>
              {SOON_LINKS.map((label) => (
                <span key={label} className="footer-nav-link footer-nav-link--soon" title="Coming soon">
                  {label}
                </span>
              ))}
            </nav>

            <div className="footer-social">
              <span className="footer-nav-heading">Follow</span>
              <div className="footer-social-icons">
                {SOCIALS.map((social) => (
                  <button
                    key={social.label}
                    type="button"
                    className="footer-social-btn"
                    title={`${social.label} — coming soon`}
                    aria-label={`${social.label} (coming soon)`}
                  >
                    {social.icon}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <span>© {year} YoFo. All rights reserved.</span>
            <span className="footer-bottom-note">Built for people who play.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
