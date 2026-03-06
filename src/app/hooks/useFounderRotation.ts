"use client";

import { useState, useEffect } from 'react';
import { founders } from '../data/founder';

export function useFounderRotation(intervalTime: number = 5000) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % founders.length);
    }, intervalTime);

    return () => clearInterval(interval);
  }, [intervalTime]);

  const currentFounder = founders[currentIndex];

  return {
    currentIndex,
    currentFounder,
    founders,
    setCurrentIndex
  };
}