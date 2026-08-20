import React, { useEffect, useRef, useState } from "react";
import Logo from "./Logo.jsx";

const NAV_ITEMS = [
  { label: "Games", href: "#featured-games" },
  { label: "Discover", href: "#trending" },
  { label: "Reviews", soon: true },
  { label: "News", href: "#latest-content" },
  { label: "Game Finder", soon: true },
];

/**
 * Top navigation bar: logo, section links with a sliding underline under
 * the active one, an inline search field, and a placeholder account
 * icon (auth isn't built yet, so it's decorative). Collapses to a glass
 * dropdown menu on small screens.
 */
export default function Header() {
  const [activeHref, setActiveHref] = useState("#featured-games");
  const [isMobileOpen, setMobileOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [searchNotice, setSearchNotice] = useState(false);

  const linkRefs = useRef({});
  const [indicator, setIndicator] = useState({ left: 0, width: 0, opacity: 0 });

  // Track which section is in view to move the active-tab underline.
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

  // Position the sliding underline beneath the current link.
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
  }, [activeHref]);

  function handleNavClick(href) {
    setActiveHref(href);
    setMobileOpen(false);
  }

  function handleSearchSubmit(event) {
    event.preventDefault();
    setSearchNotice(true);
  }

  return (
    <header className="nav-wrap">
      <div className="nav-bar glass glass--strong">
        <a href="#top" className="nav-logo-link" aria-label="YoFo Studio home">
          <Logo />
        </a>

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

        <form className="nav-search" onSubmit={handleSearchSubmit}>
          <input
            type="text"
            placeholder="Search games..."
            aria-label="Search games"
            value={searchValue}
            onChange={(event) => {
              setSearchValue(event.target.value);
              setSearchNotice(false);
            }}
          />
          <button type="submit" className="nav-search-btn" aria-label="Search">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
              <path d="m20 20-3.5-3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
          {searchNotice && (
            <span className="nav-search-notice">Search is coming soon</span>
          )}
        </form>

        <button
          type="button"
          className="nav-avatar"
          title="Account — coming soon"
          aria-label="Account (coming soon)"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <circle cx="12" cy="8.5" r="3.5" stroke="currentColor" strokeWidth="1.8" />
            <path
              d="M4.5 20c1.4-4 4.2-6 7.5-6s6.1 2 7.5 6"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </svg>
        </button>

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
          <form className="nav-search nav-search--mobile" onSubmit={handleSearchSubmit}>
            <input
              type="text"
              placeholder="Search games..."
              aria-label="Search games"
              value={searchValue}
              onChange={(event) => {
                setSearchValue(event.target.value);
                setSearchNotice(false);
              }}
            />
            <button type="submit" className="nav-search-btn" aria-label="Search">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
                <path d="m20 20-3.5-3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          </form>
        </div>
      )}
    </header>
  );
}
