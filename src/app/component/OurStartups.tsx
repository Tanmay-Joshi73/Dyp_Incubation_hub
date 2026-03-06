"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { startups } from '../data/startups';

export default function OurStartups() {
    return (
        <section className="relative w-full py-24 overflow-hidden bg-white/30 backdrop-blur-sm border-t border-black/5">
            <div className="container mx-auto px-8 lg:px-16 flex flex-col lg:flex-row items-center gap-16">

                {/* Left Side: Text Content */}
                <div className="w-full lg:w-1/3 z-20">
                    <h2 className="font-serif text-5xl lg:text-6xl font-medium leading-tight text-[#172b2d] mb-6">
                        Investment Highlights
                    </h2>
                    <p className="text-xl text-black/60 font-sans leading-relaxed mb-8 max-w-md">
                        We cultivate relationships with specialized venture capital leaders,
                        enabling access to top companies.*
                    </p>
                    <Link
                        href="/startups"
                        className="group flex items-center gap-3 text-lg font-bold text-black hover:text-[#e23e3e] transition-colors"
                    >
                        Explore Our Investments
                        <span className="transform group-hover:translate-x-2 transition-transform">→</span>
                    </Link>
                </div>

                {/* Right Side: Bubble Layout */}
                <div className="relative w-full lg:w-2/3 min-h-[500px] lg:h-[600px] flex items-center justify-center mt-12 lg:mt-0">
                    <div className="absolute inset-0 w-full h-full scale-75 md:scale-90 lg:scale-110 xl:scale-125">
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
                                <div className="relative w-full h-full rounded-full bg-white shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] flex items-center justify-center p-6 border border-black/5 group-hover:border-[#e23e3e]/20 overflow-hidden group-hover:shadow-[0_20px_50px_-12px_rgba(226,62,62,0.15)] bg-transition">
                                    <div className="relative w-full h-full cursor-pointer">
                                        <Image
                                            src={startup.logo}
                                            alt={startup.name}
                                            fill
                                            className="object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500 opacity-60 group-hover:opacity-100 p-4"
                                        />
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                    {/* Subtitle at the bottom right */}
                    <div className="absolute bottom-0 right-10 text-right">
                        <div className="h-[60px] w-[2px] bg-green-500 mx-auto mb-2 opacity-60"></div>
                        <p className="text-xs font-bold tracking-[0.2em] text-black/40 uppercase">
                            Industry Leaders <br /> From the start
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
