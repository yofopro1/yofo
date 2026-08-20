import React from "react";

// This is the clean foundation shell.
// Pages, routing, database calls, auth, and the community/forum system
// get added on top of this as separate features in src/pages, src/components, etc.

export default function App() {
  return (
    <div className="app-shell">
      <header className="app-header">
        <span className="app-logo-dot" aria-hidden="true" />
        <span className="app-logo-text">YoFo Studios</span>
      </header>

      <main className="app-main">
        <h1>Foundation is running.</h1>
        <p>
          React + Vite is configured and ready. Build game pages, news,
          search, categories, accounts, and the forum on top of this shell.
        </p>
      </main>
    </div>
  );
}
