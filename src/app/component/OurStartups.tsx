"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { startups } from '../data/startups';

export default function OurStartups() {
    return (
        <section className="relative w-full py-24 overflow-hidden bg-[#ffead2] border-t border-black/5">
            <div className="container mx-auto px-8 lg:px-16 flex flex-col lg:flex-row items-center gap-16">

                {/* Left Side: Text Content - ENLARGED */}
                <div className="w-full lg:w-1/3 z-20">
                    <h2 className="font-serif text-6xl lg:text-7xl xl:text-8xl font-medium leading-tight text-[#172b2d] mb-8">
                        Investment Highlights
                    </h2>
                    <p className="text-2xl lg:text-3xl text-black/60 font-sans leading-relaxed mb-10 max-w-2xl">
                        We cultivate relationships with specialized venture capital leaders,
                        enabling access to top companies.*
                    </p>
                    <Link
                        href="/startups"
                        className="group flex items-center gap-4 text-2xl lg:text-3xl font-bold text-black hover:text-[#e23e3e] transition-colors"
                    >
                        Explore Our Investments
                        <span className="transform group-hover:translate-x-2 transition-transform text-3xl">→</span>
                    </Link>
                </div>

                {/* Right Side: Bubble Layout */}
                <div className="relative w-full lg:w-2/3 min-h-[700px] lg:h-[750px] flex items-center justify-center mt-12 lg:mt-0">
                    {startups.map((startup) => (
                        <Link
                            key={startup.id}
                            href={`/startup/${startup.id}`}
                            className="absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-500 hover:scale-110 hover:z-30 group"
                            style={{
                                top: startup.top,
                                left: startup.left,
                                width: `${startup.size}px`,
                                height: `${startup.size}px`,
                            }}
                        >
                            <div className="relative w-full h-full rounded-full bg-white shadow-[0_15px_45px_-15px_rgba(0,0,0,0.15)] flex items-center justify-center p-5 border border-black/5 group-hover:border-[#e23e3e]/20 overflow-hidden group-hover:shadow-[0_25px_60px_-15px_rgba(226,62,62,0.2)] transition-all duration-300">
                                <div className="relative w-full h-full">
                                    <Image
                                        src={startup.logo}
                                        alt={startup.name}
                                        fill
                                        className="object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500 opacity-70 group-hover:opacity-100 p-2"
                                    />
                                </div>
                            </div>
                        </Link>
                    ))}

                    {/* Subtitle at the bottom - moved more left with top margin */}
                    <div className="absolute bottom-0 left-10 text-left">
                        <div className="h-[80px] w-[3px] bg-green-500 mb-3 opacity-60"></div>
                        <p className="text-sm lg:text-base font-bold tracking-[0.25em] text-black/40 uppercase mt-4">
                            Industry Leaders <br /> From the start
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}