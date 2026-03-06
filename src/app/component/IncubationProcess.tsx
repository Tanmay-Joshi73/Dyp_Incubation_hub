"use client";

import React from 'react';

const steps = [
    {
        title: "Idea Submission",
        description: "Students submit their startup idea through the application portal.",
        side: "left"
    },
    {
        title: "Evaluation",
        description: "Ideas are reviewed by mentors and industry experts.",
        side: "right"
    },
    {
        title: "Mentorship Program",
        description: "Selected teams receive guidance and mentoring.",
        side: "left"
    },
    {
        title: "Prototype Development",
        description: "Teams build prototypes with access to innovation labs.",
        side: "right"
    },
    {
        title: "Investor Pitch",
        description: "Startups present their ideas to potential investors.",
        side: "left"
    },
    {
        title: "Startup Launch",
        description: "Successful startups receive funding and support to scale.",
        side: "right"
    }
];

export default function IncubationProcess() {
    return (
        <section className="bg-white py-24 px-8 md:px-12 lg:px-16 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-24">
                    <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-teal-500/10 border border-teal-500/20">
                        <span className="text-teal-400 text-xs font-bold tracking-widest uppercase">The Journey</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium text-[#172b2d] leading-tight">
                        Our Incubation <span className="text-teal-600 italic">Process</span>
                    </h2>
                </div>

                <div className="relative">
                    {/* The Tree Trunk (Line) */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-teal-500/20 via-teal-500/40 to-teal-500/20 -translate-x-1/2 hidden md:block"></div>

                    <div className="space-y-16 md:space-y-0">
                        {steps.map((step, index) => (
                            <div key={index} className={`relative flex items-center justify-between md:mb-24 last:mb-0 ${step.side === 'right' ? 'md:flex-row-reverse' : ''}`}>

                                {/* Content Card */}
                                <div className="w-full md:w-[45%]">
                                    <div className="bg-[#f8fcfc] p-8 rounded-2xl border border-teal-500/10 hover:border-teal-500/30 transition-all duration-300 group hover:-translate-y-1 hover:shadow-xl hover:shadow-teal-900/5">
                                        <div className="flex items-center gap-4 mb-4">
                                            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-teal-600 text-white text-xs font-bold">
                                                {index + 1}
                                            </span>
                                            <h3 className="text-xl font-bold text-[#172b2d] group-hover:text-teal-600 transition-colors">
                                                {step.title}
                                            </h3>
                                        </div>
                                        <p className="text-gray-600 leading-relaxed">
                                            {step.description}
                                        </p>
                                    </div>
                                </div>

                                {/* Node (Leaf Connector) */}
                                <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-teal-600 border-4 border-white shadow-lg hidden md:block z-10">
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-teal-500/20 rounded-full animate-ping"></div>
                                </div>

                                {/* Empty space for the other side on desktop */}
                                <div className="hidden md:block md:w-[45%]"></div>
                            </div>
                        ))}
                    </div>

                    {/* Background Decorative SVG (Tree Branches) */}
                    <div className="absolute inset-0 pointer-events-none opacity-10 hidden lg:block">
                        <svg className="w-full h-full" viewBox="0 0 1000 1200" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M500 0V1200" stroke="currentColor" strokeWidth="2" strokeDasharray="8 8" className="text-teal-600" />
                            <path d="M500 200C400 200 350 150 300 150" stroke="currentColor" strokeWidth="2" className="text-teal-600" />
                            <path d="M500 450C600 450 650 400 700 400" stroke="currentColor" strokeWidth="2" className="text-teal-600" />
                            <path d="M500 700C400 700 350 650 300 650" stroke="currentColor" strokeWidth="2" className="text-teal-600" />
                            <path d="M500 950C600 950 650 900 700 900" stroke="currentColor" strokeWidth="2" className="text-teal-600" />
                        </svg>
                    </div>
                </div>
            </div>
        </section>
    );
}
