import React, { useEffect, useRef, useState } from "react";
import Button from "./Button.jsx";

const NAV_ITEMS = [
  { label: "Games", href: "#featured-games" },
  { label: "Discover", href: "#trending" },
  { label: "Reviews", soon: true },
  { label: "News", href: "#latest-content" },
  { label: "Game Finder", href: "#game-finder" },
];

/**
 * Floating liquid-glass navigation. Tracks scroll position to highlight
 * the active section with an animated sliding indicator, and offers a
 * glass mobile menu + inline search on small screens / narrow viewports.
 */
export default function Header() {
  const [activeHref, setActiveHref] = useState("#featured-games");
  const [isMobileOpen, setMobileOpen] = useState(false);
  const [isSearchOpen, setSearchOpen] = useState(false);
  const [searchNotice, setSearchNotice] = useState(false);

  const linkRefs = useRef({});
  const [indicator, setIndicator] = useState({ left: 0, width: 0, opacity: 0 });

  // Track which section is in view to move the active-tab indicator.
  useEffect(() => {
    const sectionIds = NAV_ITEMS.filter((item) => item.href).map((item) =>
      item.href.replace("#", "")
    );
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (!sections.length || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveHref(`#${visible.target.id}`);
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  // Position the sliding active-tab indicator under the current link.
  useEffect(() => {
    function measure() {
      const node = linkRefs.current[activeHref];
      const container = node?.parentElement;
      if (!node || !container) {
        setIndicator((i) => ({ ...i, opacity: 0 }));
        return;
      }
      const nodeRect = node.getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();
      setIndicator({
        left: nodeRect.left - containerRect.left,
        width: nodeRect.width,
        opacity: 1,
      });
    }

    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [activeHref, isSearchOpen]);

  function handleNavClick(href) {
    setActiveHref(href);
    setMobileOpen(false);
  }

  function handleSearchSubmit(event) {
    event.preventDefault();
    setSearchNotice(true);
  }

  return (
    <header className="nav-float-wrap">
      <div className="nav-float glass glass--strong">
        <a href="#top" className="nav-logo" aria-label="YoFo home">
          <span className="nav-logo-mark" aria-hidden="true" />
          <span className="nav-logo-text">YoFo</span>
        </a>

        {!isSearchOpen && (
          <nav className="nav-links" aria-label="Primary">
            <span
              className="nav-indicator"
              style={{
                left: indicator.left,
                width: indicator.width,
                opacity: indicator.opacity,
              }}
              aria-hidden="true"
            />
            {NAV_ITEMS.map((item) =>
              item.soon ? (
                <span
                  key={item.label}
                  className="nav-link nav-link--soon"
                  title="Coming soon"
                  tabIndex={0}
                >
                  {item.label}
                </span>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  ref={(node) => (linkRefs.current[item.href] = node)}
                  className={`nav-link ${
                    activeHref === item.href ? "nav-link--active" : ""
                  }`}
                  onClick={() => handleNavClick(item.href)}
                >
                  {item.label}
                </a>
              )
            )}
          </nav>
        )}

        {isSearchOpen && (
          <form className="nav-search" onSubmit={handleSearchSubmit}>
            <svg
              className="nav-search-icon"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
              <path d="m20 20-3.5-3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <input
              type="text"
              placeholder="Search games, news, reviews…"
              autoFocus
              aria-label="Search"
              onChange={() => setSearchNotice(false)}
            />
            {searchNotice && (
              <span className="nav-search-notice">Search is coming soon</span>
            )}
            <button
              type="button"
              className="nav-search-close"
              aria-label="Close search"
              onClick={() => {
                setSearchOpen(false);
                setSearchNotice(false);
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M6 6l12 12M18 6 6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          </form>
        )}

        <div className="nav-actions">
          {!isSearchOpen && (
            <button
              type="button"
              className="nav-icon-btn"
              aria-label="Search"
              onClick={() => setSearchOpen(true)}
            >
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
                <path d="m20 20-3.5-3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          )}
          <Button href="#game-finder" size="sm" className="nav-cta">
            Find Your Game
          </Button>
          <button
            type="button"
            className="nav-mobile-toggle"
            aria-label="Toggle menu"
            aria-expanded={isMobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
          >
            <span className={`nav-burger ${isMobileOpen ? "is-open" : ""}`}>
              <span />
              <span />
              <span />
            </span>
          </button>
        </div>
      </div>

      {isMobileOpen && (
        <div className="nav-mobile glass glass--strong">
          {NAV_ITEMS.map((item) =>
            item.soon ? (
              <span key={item.label} className="nav-mobile-link nav-link--soon" title="Coming soon">
                {item.label}
              </span>
            ) : (
              <a
                key={item.label}
                href={item.href}
                className="nav-mobile-link"
                onClick={() => handleNavClick(item.href)}
              >
                {item.label}
              </a>
            )
          )}
          <Button href="#game-finder" className="nav-mobile-cta" onClick={() => setMobileOpen(false)}>
            Find Your Game
          </Button>
        </div>
      )}
    </header>
  );
}
