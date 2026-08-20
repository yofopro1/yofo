import React, { useRef } from "react";

/**
 * Base liquid-glass surface used for floating panels, rating displays,
 * and interactive cards. Intensity controls how strong the glass surface
 * reads visually — use "subtle" for background panels and "strong" for
 * primary interactive controls, per the design system's glass hierarchy.
 *
 * When `interactiveGlow` is set, a soft purple highlight follows the
 * pointer across the surface (desktop hover only — ignored on touch).
 */
export default function GlassPanel({
  as: Tag = "div",
  intensity = "default",
  interactiveGlow = false,
  className = "",
  children,
  ...rest
}) {
  const ref = useRef(null);

  function handlePointerMove(event) {
    if (!interactiveGlow || event.pointerType === "touch") return;
    const node = ref.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    node.style.setProperty("--glow-x", `${event.clientX - rect.left}px`);
    node.style.setProperty("--glow-y", `${event.clientY - rect.top}px`);
  }

  return (
    <Tag
      ref={ref}
      className={`glass glass--${intensity} ${
        interactiveGlow ? "glass--glow" : ""
      } ${className}`}
      onPointerMove={interactiveGlow ? handlePointerMove : undefined}
      {...rest}
    >
      {children}
    </Tag>
  );
}
