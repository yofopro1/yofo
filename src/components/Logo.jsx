import React from "react";

/**
 * Shared brand lockup: a small gem/diamond mark beside a two-line
 * "YOFO / STUDIO" wordmark. Used in the header and footer so the brand
 * treatment stays identical everywhere it appears.
 */
export default function Logo({ className = "" }) {
  return (
    <span className={`logo ${className}`}>
      <svg
        className="logo-mark"
        width="34"
        height="34"
        viewBox="0 0 34 34"
        fill="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="logoGradA" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#c084fc" />
            <stop offset="100%" stopColor="#7c1fd6" />
          </linearGradient>
          <linearGradient id="logoGradB" x1="1" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#9333ea" />
            <stop offset="100%" stopColor="#5b0fb0" />
          </linearGradient>
        </defs>
        <path d="M17 1 L28 12 L17 15 L11 8 Z" fill="url(#logoGradA)" />
        <path d="M17 33 L6 22 L17 19 L23 26 Z" fill="url(#logoGradB)" />
      </svg>
      <span className="logo-text">
        <span className="logo-text-primary">YoFo</span>
        <span className="logo-text-secondary">Studio</span>
      </span>
    </span>
  );
}
