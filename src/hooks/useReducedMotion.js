import { useEffect, useState } from "react";

/**
 * Tracks the user's `prefers-reduced-motion` setting so components can
 * skip non-essential motion (parallax, ambient drift, staggered reveals)
 * while keeping instant, accessible state changes.
 */
export default function useReducedMotion() {
  const [reduced, setReduced] = useState(() => {
    if (typeof window === "undefined" || !window.matchMedia) return false;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  });

  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handleChange = (event) => setReduced(event.matches);

    query.addEventListener("change", handleChange);
    return () => query.removeEventListener("change", handleChange);
  }, []);

  return reduced;
}
