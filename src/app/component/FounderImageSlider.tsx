"use client";

import React from 'react';
import Image from 'next/image';
import { Founder } from '../types';

interface FounderImageSliderProps {
  founders: Founder[];
  currentIndex: number;
}

export default function FounderImageSlider({ founders, currentIndex }: FounderImageSliderProps) {
  return (
    <div className="relative mt-12 w-full max-w-xl lg:mt-0 lg:-mt-40 lg:mb-24 -mb-32 lg:-mb-48">
      <div className="relative aspect-[4/5] w-full overflow-visible">
        {founders.map((founder, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${index === currentIndex
                ? "opacity-100 scale-100 translate-y-0"
                : "opacity-0 scale-95 translate-y-4"
              }`}
          >
            {/* Add a subtle glow effect that matches the background */}
            <div
              className="absolute inset-0 rounded-full blur-3xl opacity-20"
              style={{ backgroundColor: founder.bgColor }}
            />
            <Image
              src={founder.image}
              alt={founder.name}
              fill
              className="object-contain object-center -translate-y-8 scale-110 relative z-10"
              style={{
                filter: 'contrast(1.05) brightness(1.02)'
              }}
              priority={index === 0}
            />
          </div>
        ))}
      </div>
    </div>
  );
}