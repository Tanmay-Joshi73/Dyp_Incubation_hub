"use client";

import React from 'react';
import Image from 'next/image';

const stats = [
    {
        value: "5+ years",
        description: "fostering student innovation"
    },
    {
        value: "50+",
        description: "startups incubated & growing"
    },
    {
        value: "500+",
        description: "students empowered to lead"
    }
];

export default function MissionVision() {
    return (
        <section className="bg-white py-24 px-8 md:px-12 lg:px-16 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="mb-16 max-w-4xl">
                    <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-teal-500/10 border border-teal-500/20">
                        <span className="text-teal-400 text-xs font-bold tracking-widest uppercase">Our Mission</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-7xl font-serif font-medium text-[#172b2d] leading-[1.1] mb-8">
                        To empower student innovators and build the ecosystem of <span className="text-teal-600 italic">tomorrow.</span>
                    </h2>
                    <p className="text-lg md:text-xl text-black/70 leading-relaxed max-w-3xl">
                        Our mission is to provide the resources, mentorship, and ecosystem needed to transform creative ideas into scalable startups that solve real-world problems. We aim to foster a culture of entrepreneurship and collaboration.
                    </p>
                </div>

                {/* Banner Image Section */}
                <div className="relative w-full aspect-[21/9] mb-6 rounded-2xl overflow-hidden shadow-2xl group">
                    <Image
                        src="/Whole_Incubation.jpeg"
                        alt="Incubation Hub Community"
                        fill
                        className="object-cover transform transition-transform duration-1000 group-hover:scale-105"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>

                {/* Statistics Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="bg-[#0a1a1b] p-10 lg:p-12 rounded-xl flex flex-col justify-between min-h-[280px] transition-all duration-300 hover:bg-[#0e2526]"
                        >
                            <h3 className="text-white text-6xl lg:text-7xl font-serif font-medium tracking-tight mb-8">
                                {stat.value}
                            </h3>
                            <p className="text-gray-400 text-lg font-medium leading-snug max-w-[200px]">
                                {stat.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
