import React from "react";
import HeroSection from "./HeroSection";
import TargetAudience from "./TargetAudience";
import FaqSection from "./FaqSection";
import Homesection from "./Homesection";

function Home() {
  return (
    <div>
      {/* <HeroSection /> */}
      <Homesection />
      <FaqSection />
    </div>
  );
}

export default Home;
