import { useEffect, useRef } from "react";
import useReducedMotion from "./useReducedMotion.js";

/**
 * Adds a `.is-visible` class to the target element the first time it
 * scrolls into view, powering the CSS fade + translate entrance defined
 * in style.css (see ".reveal"). No-ops when the user prefers reduced
 * motion — the element is just shown immediately.
 *
 * Usage: const ref = useScrollReveal(); <div ref={ref} className="reveal">
 */
export default function useScrollReveal({ threshold = 0.2 } = {}) {
  const ref = useRef(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (reducedMotion || typeof IntersectionObserver === "undefined") {
      node.classList.add("is-visible");
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [reducedMotion, threshold]);

  return ref;
}
