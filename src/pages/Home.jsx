import React from "react";
import Header from "../components/Header.jsx";
import Hero from "../components/Hero.jsx";
import FeaturedGames from "../components/FeaturedGames.jsx";
import TrendingGames from "../components/TrendingGames.jsx";
import LatestContent from "../components/LatestContent.jsx";
import BuiltForGamers from "../components/BuiltForGamers.jsx";
import Footer from "../components/Footer.jsx";

/**
 * The homepage. Database, auth, admin, and the real Game Finder algorithm
 * are intentionally out of scope here — everything below runs on local
 * mock data (see src/data) and is built to be swapped for real data
 * sources later without changing the section components' shape. The
 * standalone Game Finder teaser section was folded into a nav link and a
 * "coming soon" feature card in BuiltForGamers — the reference layout
 * doesn't have a dedicated Game Finder section on the homepage.
 */
export default function Home() {
  return (
    <>
      <Header />
      <main className="app-main">
        <Hero />
        <FeaturedGames />
        <TrendingGames />
        <LatestContent />
        <BuiltForGamers />
      </main>
      <Footer />
    </>
  );
}
