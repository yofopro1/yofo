import React, { useRef } from "react";

/**
 * Shared button/link primitive used for every CTA on the site.
 *
 * variant: "primary" | "secondary" | "ghost"
 * size: "md" | "sm"
 * as: "button" | "a" — renders an anchor when `href` is passed.
 *
 * Handles the subtle "light pulse from the click point" micro-interaction
 * via a CSS custom property (--pulse-x/--pulse-y) set from the pointer
 * event, then toggles a short-lived class that plays the pulse keyframe.
 */
export default function Button({
  variant = "primary",
  size = "md",
  as,
  href,
  className = "",
  onClick,
  children,
  ...rest
}) {
  const ref = useRef(null);
  const Tag = as || (href ? "a" : "button");

  function handlePointerDown(event) {
    const node = ref.current;
    if (node) {
      const rect = node.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      node.style.setProperty("--pulse-x", `${x}px`);
      node.style.setProperty("--pulse-y", `${y}px`);
      node.classList.remove("btn--pulsing");
      // Force reflow so the animation can restart on rapid clicks.
      // eslint-disable-next-line no-unused-expressions
      node.offsetWidth;
      node.classList.add("btn--pulsing");
    }
  }

  function handleAnimationEnd() {
    ref.current?.classList.remove("btn--pulsing");
  }

  return (
    <Tag
      ref={ref}
      href={Tag === "a" ? href : undefined}
      type={Tag === "button" ? rest.type || "button" : undefined}
      className={`btn btn--${variant} btn--${size} ${className}`}
      onPointerDown={handlePointerDown}
      onAnimationEnd={handleAnimationEnd}
      onClick={onClick}
      {...rest}
    >
      <span className="btn-label">{children}</span>
    </Tag>
  );
}
