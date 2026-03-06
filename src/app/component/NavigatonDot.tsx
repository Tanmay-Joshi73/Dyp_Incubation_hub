"use client";

import React from 'react';
import { Founder } from '../types';

interface NavigationDotsProps {
  founders: Founder[];
  currentIndex: number;
  onDotClick: (index: number) => void;
}

export default function NavigationDots({ founders, currentIndex, onDotClick }: NavigationDotsProps) {
  return (
    <div className="absolute bottom-12 left-1/2 flex -translate-x-1/2 gap-3">
      {founders.map((_, index) => (
        <button
          key={index}
          onClick={() => onDotClick(index)}
          className={`h-1 transition-all duration-500 ${
            index === currentIndex ? "w-8 bg-[#e23e3e]" : "w-4 bg-black/10"
          }`}
        />
      ))}
    </div>
  );
}