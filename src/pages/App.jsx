import React from "react";
import Home from "./pages/Home.jsx";

// Root shell. Routing, auth, and other cross-cutting concerns get added
// here as they're built — for now this renders the homepage directly.
export default function App() {
  return (
    <div className="app-shell">
      <div className="app-noise" aria-hidden="true" />
      <div className="app-content">
        <Home />
      </div>
    </div>
  );
}
