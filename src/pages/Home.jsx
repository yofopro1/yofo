import React from "react";
import Header from "../components/Header.jsx";
import Hero from "../components/Hero.jsx";
import FeaturedGames from "../components/FeaturedGames.jsx";
import GameFinderTeaser from "../components/GameFinderTeaser.jsx";
import TrendingGames from "../components/TrendingGames.jsx";
import LatestContent from "../components/LatestContent.jsx";
import WhyYoFo from "../components/WhyYoFo.jsx";
import Footer from "../components/Footer.jsx";

/**
 * The homepage. Database, auth, admin, and the real Game Finder algorithm
 * are intentionally out of scope here — everything below runs on local
 * mock data (see src/data) and is built to be swapped for real data
 * sources later without changing the section components' shape.
 */
export default function Home() {
  return (
    <>
      <Header />
      <main className="app-main">
        <Hero />
        <FeaturedGames />
        <GameFinderTeaser />
        <TrendingGames />
        <LatestContent />
        <WhyYoFo />
      </main>
      <Footer />
    </>
  );
}
