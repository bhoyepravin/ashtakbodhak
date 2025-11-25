import React from "react";
import HeroSection from "./HeroSection";
import TargetAudience from "./TargetAudience";
import FaqSection from "./FaqSection";
import Homesection from "./Homesection";
import RoadmapComponent from "./RoadmapComponent";

function Home() {
  return (
    <div>
      {/* <HeroSection /> */}
      <Homesection />
      {/* <RoadmapComponent /> */}
      <FaqSection />
    </div>
  );
}

export default Home;
