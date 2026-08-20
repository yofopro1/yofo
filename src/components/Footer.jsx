import React from "react";
import Logo from "./Logo.jsx";

const EXPLORE_LINKS = [
  { label: "Games", href: "#featured-games" },
  { label: "Discover", href: "#trending" },
  { label: "Game Finder", soon: true },
  { label: "News", href: "#latest-content" },
];

const COMPANY_LINKS = ["About Us", "Contact Us", "Partnerships", "Careers"];

const LEGAL_LINKS = ["Privacy Policy", "Terms of Service", "Cookie Policy", "Disclaimer"];

const SOCIALS = [
  {
    label: "YouTube",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="3.5" y="6" width="17" height="12" rx="4" stroke="currentColor" strokeWidth="1.8" />
        <path d="M11 10.5v3l3-1.5-3-1.5Z" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="3.5" y="3.5" width="17" height="17" rx="5" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="17" cy="7" r="1.1" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: "TikTok",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M14 3.5c.4 2 1.9 3.5 4 3.7v2.6a6.7 6.7 0 0 1-4-1.3v6.2a4.9 4.9 0 1 1-4.2-4.9v2.7a2.2 2.2 0 1 0 1.7 2.2V3.5H14Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
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
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="section-inner">
        <div className="footer-glass glass glass--subtle">
          <div className="footer-top">
            <div className="footer-brand">
              <Logo />
              <p className="footer-tagline">
                The clearest way to decide what to play next.
              </p>
              <span className="footer-copyright">
                © {year} YoFo Studio. All rights reserved.
              </span>
            </div>

            <nav className="footer-nav" aria-label="Explore">
              <span className="footer-nav-heading">Explore</span>
              {EXPLORE_LINKS.map((link) =>
                link.soon ? (
                  <span
                    key={link.label}
                    className="footer-nav-link footer-nav-link--soon"
                    title="Coming soon"
                  >
                    {link.label}
                  </span>
                ) : (
                  <a key={link.label} href={link.href} className="footer-nav-link">
                    {link.label}
                  </a>
                )
              )}
            </nav>

            <nav className="footer-nav" aria-label="Company">
              <span className="footer-nav-heading">Company</span>
              {COMPANY_LINKS.map((label) => (
                <span
                  key={label}
                  className="footer-nav-link footer-nav-link--soon"
                  title="Coming soon"
                >
                  {label}
                </span>
              ))}
            </nav>

            <nav className="footer-nav" aria-label="Legal">
              <span className="footer-nav-heading">Legal</span>
              {LEGAL_LINKS.map((label) => (
                <span
                  key={label}
                  className="footer-nav-link footer-nav-link--soon"
                  title="Coming soon"
                >
                  {label}
                </span>
              ))}
            </nav>

            <div className="footer-social">
              <span className="footer-nav-heading">Connect</span>
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
        </div>
      </div>
    </footer>
  );
}
