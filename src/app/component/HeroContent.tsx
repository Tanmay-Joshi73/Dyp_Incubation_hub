"use client";

import React from 'react';

interface HeroContentProps {
  currentIndex: number;
  founderName: string;
  founderRole: string;
}

export default function HeroContent({ currentIndex, founderName, founderRole }: HeroContentProps) {
  return (
    <div className="z-10 w-full max-w-3xl lg:ml-16 xl:ml-24 2xl:ml-32 flex flex-col h-[calc(100vh-200px)] lg:h-[calc(100vh-250px)]">
      {/* Main heading - positioned at top */}
      <div key={currentIndex} className="fade-in mt-12 lg:mt-0">
        <h1 className="font-serif text-[clamp(3.5rem,10vw,7.5rem)] font-medium leading-[1.02] tracking-tight text-[#172b2d]">
          The best way to change the world is to build a business.
          <div className="h-[2px] w-full max-w-md bg-[#e23e3e] mt-2 opacity-60"></div>
        </h1>
      </div>

      {/* Founder name and role - positioned at bottom */}
      <div className="flex flex-col gap-1 mt-auto pb-12 lg:pb-20">
        <p key={`name-${currentIndex}`} className="fade-in text-xl font-bold text-black">
          {founderName}
        </p>
        <p key={`role-${currentIndex}`} className="fade-in text-base font-medium text-black/60">
          {founderRole}
        </p>
      </div>
    </div>
  );
}