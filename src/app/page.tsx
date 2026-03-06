"use client";

import React, { useState, useRef } from 'react';
import { useFounderRotation } from './hooks/useFounderRotation';
import Navbar from './component/Navbar';
import HeroContent from './component/HeroContent';
import FounderImageSlider from './component/FounderImageSlider';
import NavigationDots from './component/NavigatonDot';
import WhatWeOffer from './component/WhatWeOffer';

import MissionVision from './component/MissionVision';
import IncubationProcess from './component/IncubationProcess';
import OurStartups from './component/OurStartups';
import Footer from './component/Footer';
import ContactSection from './component/ContactSection';

export default function Home() {
  const { currentIndex, currentFounder, founders, setCurrentIndex, nextFounder } = useFounderRotation(5000, false);

  // Drag and click state
  const [isDragging, setIsDragging] = useState(false);
  const dragStartX = useRef(0);
  const dragEndX = useRef(0);
  const isMoved = useRef(false);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    dragStartX.current = e.clientX;
    isMoved.current = false;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    if (Math.abs(e.clientX - dragStartX.current) > 10) {
      isMoved.current = true;
    }
  };

  const handleMouseUp = (e: React.MouseEvent) => {
    if (!isDragging) return;
    setIsDragging(false);
    dragEndX.current = e.clientX;

    const dragDistance = dragEndX.current - dragStartX.current;

    // If it was a swipe to the right (positive distance) or a simple click
    if (dragDistance > 50 || !isMoved.current) {
      nextFounder();
    }
  };

  // Touch support
  const handleTouchStart = (e: React.TouchEvent) => {
    dragStartX.current = e.touches[0].clientX;
    isMoved.current = false;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const dragDistance = e.changedTouches[0].clientX - dragStartX.current;
    if (dragDistance > 50 || !isMoved.current) {
      nextFounder();
    }
  };

  return (
    <div
      className="transition-colors duration-1000 ease-in-out"
      style={{ backgroundColor: currentFounder.bgColor }}
    >
      <Navbar />

      <main
        className="relative flex flex-col items-center justify-between px-8 pt-12 md:px-12 md:pt-20 lg:flex-row lg:px-16 lg:pt-32 cursor-grab active:cursor-grabbing select-none"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
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
      <ContactSection />
      <Footer />
    </div>
  );
}