import React from "react";

/**
 * Shared section wrapper used across the homepage for consistent spacing,
 * max-width, and heading layout (eyebrow + title + optional description).
 */
export default function Section({
  id,
  eyebrow,
  title,
  description,
  action,
  className = "",
  children,
}) {
  const hasHeader = eyebrow || title || description || action;

  return (
    <section id={id} className={`section ${className}`}>
      <div className="section-inner">
        {hasHeader && (
          <div className="section-header">
            <div className="section-header-text">
              {eyebrow && <span className="section-eyebrow">{eyebrow}</span>}
              {title && <h2 className="section-title">{title}</h2>}
              {description && (
                <p className="section-description">{description}</p>
              )}
            </div>
            {action && <div className="section-action">{action}</div>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
