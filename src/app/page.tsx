"use client";

import { useFounderRotation } from './hooks/useFounderRotation';
import Navbar from './component/Navbar';
import HeroContent from './component/HeroContent';
import FounderImageSlider from './component/FounderImageSlider';
import NavigationDots from './component/NavigatonDot';
import WhatWeOffer from './component/WhatWeOffer';

import MissionVision from './component/MissionVision';
import IncubationProcess from './component/IncubationProcess';
import OurStartups from './component/OurStartups';

export default function Home() {
  const { currentIndex, currentFounder, founders, setCurrentIndex } = useFounderRotation(5000);

  return (
    <div
      className="transition-colors duration-1000 ease-in-out"
      style={{ backgroundColor: currentFounder.bgColor }}
    >
      <Navbar />

      <main className="relative flex flex-col items-center justify-between px-8 pt-12 md:px-12 md:pt-20 lg:flex-row lg:px-16 lg:pt-32">
        <HeroContent
          currentIndex={currentIndex}
          founderName={currentFounder.name}
          founderRole={currentFounder.role}
        />

        <FounderImageSlider
          founders={founders}
          currentIndex={currentIndex}
        />
      </main>

      <NavigationDots
        founders={founders}
        currentIndex={currentIndex}
        onDotClick={setCurrentIndex}
      />
      <MissionVision />
      <IncubationProcess />

      {/* WhatWeOffer section will now also have the transitioning background */}
      <WhatWeOffer />
      <OurStartups />
    </div>
  );
}