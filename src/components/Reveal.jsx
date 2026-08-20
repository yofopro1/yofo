import React from "react";
import useScrollReveal from "../hooks/useScrollReveal.js";

/**
 * Wraps children in a fade + translate entrance animation that triggers
 * once the element scrolls into view. Pass `delay` (ms) to stagger a
 * group of siblings. Respects prefers-reduced-motion via useScrollReveal.
 */
export default function Reveal({
  as: Tag = "div",
  delay = 0,
  className = "",
  children,
  ...rest
}) {
  const ref = useScrollReveal();

  return (
    <Tag
      ref={ref}
      className={`reveal ${className}`}
      style={{ transitionDelay: delay ? `${delay}ms` : undefined }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
