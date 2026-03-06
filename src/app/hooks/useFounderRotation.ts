"use client";

import { useState, useEffect } from 'react';
import { founders } from '../data/founder';

export function useFounderRotation(intervalTime: number = 5000, isAuto: boolean = true) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!isAuto) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % founders.length);
    }, intervalTime);

    return () => clearInterval(interval);
  }, [intervalTime, isAuto]);

  const nextFounder = () => {
    setCurrentIndex((prev) => (prev + 1) % founders.length);
  };

  const prevFounder = () => {
    setCurrentIndex((prev) => (prev - 1 + founders.length) % founders.length);
  };

  const currentFounder = founders[currentIndex];

  return {
    currentIndex,
    currentFounder,
    founders,
    setCurrentIndex,
    nextFounder,
    prevFounder
  };
}