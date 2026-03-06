"use client";

import React from 'react';
import Image from 'next/image';

export default function MissionVision() {
    return (
        <section className="bg-black/5 py-24 px-8 md:px-12 lg:px-16 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

                    {/* Content Side */}
                    <div className="flex-1 order-2 lg:order-1">
                        <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-teal-500/10 border border-teal-500/20">
                            <span className="text-teal-400 text-xs font-bold tracking-widest uppercase">Our Purpose</span>
                        </div>

                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium text-[#172b2d] leading-[1.1] mb-8">
                            Empowering the next generation of <span className="text-teal-600">student innovators.</span>
                        </h2>

                        <div className="space-y-6 text-lg text-black/70 leading-relaxed max-w-2xl">
                            <p>
                                Our mission is to empower student innovators by providing the resources, mentorship, and ecosystem needed to transform creative ideas into scalable startups that solve real-world problems.
                            </p>
                            <p>
                                We aim to foster a culture of entrepreneurship, technological innovation, and collaboration among students, bridging the gap between academic learning and industry-leading ventures.
                            </p>
                        </div>

                        <div className="mt-12 flex flex-wrap gap-8">
                            <div className="flex flex-col gap-2">
                                <span className="text-3xl font-bold text-teal-600">Innovation</span>
                                <span className="text-sm font-medium text-black/50 uppercase tracking-wider">Driven by creativity</span>
                            </div>
                            <div className="w-[1px] h-12 bg-black/10 hidden sm:block"></div>
                            <div className="flex flex-col gap-2">
                                <span className="text-3xl font-bold text-teal-600">Mentorship</span>
                                <span className="text-sm font-medium text-black/50 uppercase tracking-wider">Guided by experience</span>
                            </div>
                            <div className="w-[1px] h-12 bg-black/10 hidden sm:block"></div>
                            <div className="flex flex-col gap-2">
                                <span className="text-3xl font-bold text-teal-600">Ecosystem</span>
                                <span className="text-sm font-medium text-black/50 uppercase tracking-wider">Built for growth</span>
                            </div>
                        </div>
                    </div>

                    {/* Image Side */}
                    <div className="flex-1 order-1 lg:order-2 w-full">
                        <div className="relative group">
                            {/* Decorative background elements */}
                            <div className="absolute -inset-4 bg-teal-500/10 rounded-[2rem] blur-2xl group-hover:bg-teal-500/20 transition-all duration-700"></div>

                            <div className="relative overflow-hidden rounded-[2rem] shadow-2xl border border-white/20 aspect-[4/3]">
                                <Image
                                    src="/Whole_Incubation.jpeg"
                                    alt="Incubation Hub Collage"
                                    fill
                                    className="object-cover transform transition-transform duration-1000 group-hover:scale-110"
                                />

                                {/* Overlay gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-700"></div>

                                {/* Floating Badge */}
                                <div className="absolute bottom-8 left-8 right-8 bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    <p className="text-white text-sm font-medium italic">
                                        "Transforming ideas into reality within our vibrant incubation ecosystem."
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
