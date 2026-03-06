"use client";

import React, { useState } from 'react';

const steps = [
    {
        title: "💡 Idea Submission",
        duration: "1 Week",
        description: "This is the starting line. You share your groundbreaking concept with us through our online portal.",
        benefits: [
            "Initial Validation: Get a first look at your idea's potential.",
            "Expert Feedback: Receive initial thoughts and questions from our innovation committee to sharpen your focus."
        ],
        side: "left"
    },
    {
        title: "🔍 Evaluation",
        duration: "1–2 Weeks",
        description: "Our network of mentors and industry experts reviews your idea to assess its viability and market fit.",
        benefits: [
            "Feasibility Analysis: A clear breakdown of your idea's technical and operational strengths.",
            "Market Validation Suggestions: Actionable insights on your target market, competition, and positioning."
        ],
        side: "right"
    },
    {
        title: "🧠 Mentorship Program",
        duration: "2–3 Months",
        description: "Selected teams are paired with dedicated mentors who guide you through the foundational stages of your business.",
        benefits: [
            "Business Model Refinement: Move from a simple idea to a robust, scalable business model.",
            "Product Strategy & Technical Mentoring: Define your product roadmap and get expert advice on your tech stack and development approach."
        ],
        side: "left"
    },
    {
        title: "🛠 Prototype Development",
        duration: "2–4 Months",
        description: "It’s time to build! Transform your plans into a tangible, working prototype.",
        benefits: [
            "Access to Innovation Labs: Utilize our state-of-the-art labs equipped with the latest hardware and software.",
            "Technical Assistance: Get hands-on support from our technical staff to overcome development challenges."
        ],
        side: "right"
    },
    {
        title: "🎤 Investor Pitch",
        duration: "Pitch Day / Demo Day",
        description: "Showcase your fully developed prototype and business plan to a room full of active investors and venture capitalists.",
        benefits: [
            "Exposure to Investors: Present your solution on a dedicated stage to those who can fund your future.",
            "Networking & Funding Possibilities: Connect with potential partners and investors in a curated networking environment."
        ],
        side: "left"
    },
    {
        title: "🚀 Startup Launch",
        duration: "Post-Incubation Support (Ongoing)",
        description: "You've graduated from the incubation program, but our support doesn't stop here.",
        benefits: [
            "Funding & Market Access Support: Get assistance in securing your first round of funding and finding pilot customers.",
            "Incubation Graduation: Join our prestigious alumni network and continue to benefit from our ecosystem."
        ],
        side: "right"
    }
];

export default function IncubationProcess() {
    const [expandedIndex, setExpandedIndex] = useState<number | null>(0); // First one expanded by default

    const toggleExpand = (index: number) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    return (
        <section className="bg-white py-24 px-8 md:px-12 lg:px-16 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-24">
                    <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-teal-500/10 border border-teal-500/20">
                        <span className="text-teal-400 text-xs font-bold tracking-widest uppercase">The Journey</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium text-[#172b2d] leading-tight mb-6">
                        The 6-Step Incubation <span className="text-teal-600 italic">Roadmap</span>
                    </h2>
                    <p className="text-black/50 text-lg max-w-2xl mx-auto">
                        Click on a step to explore the details of each milestone.
                    </p>
                </div>

                <div className="relative">
                    {/* The Tree Trunk (Line) */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-teal-500/20 via-teal-500/40 to-teal-500/20 -translate-x-1/2 hidden md:block"></div>

                    <div className="space-y-16 md:space-y-0">
                        {steps.map((step, index) => {
                            const isExpanded = expandedIndex === index;
                            return (
                                <div key={index} className={`relative flex items-center justify-between md:mb-12 last:mb-0 transition-all duration-500 ${step.side === 'right' ? 'md:flex-row-reverse' : ''}`}>

                                    {/* Content Card */}
                                    <div className="w-full md:w-[45%]">
                                        <div
                                            onClick={() => toggleExpand(index)}
                                            className={`cursor-pointer bg-[#f8fcfc] p-6 md:p-8 rounded-2xl border transition-all duration-500 group overflow-hidden ${isExpanded ? 'border-teal-500/40 shadow-2xl shadow-teal-900/10' : 'border-teal-500/10 hover:border-teal-500/30'}`}
                                        >
                                            <div className="flex flex-col gap-2">
                                                <div className="flex items-center justify-between">
                                                    <span className={`flex items-center justify-center w-8 h-8 rounded-full text-xs font-bold transition-colors duration-500 ${isExpanded ? 'bg-teal-600 text-white' : 'bg-teal-100 text-teal-600'}`}>
                                                        {index + 1}
                                                    </span>
                                                    <div className="flex items-center gap-3">
                                                        <span className="text-teal-600/80 text-[10px] md:text-xs font-bold tracking-wider uppercase">
                                                            {step.duration}
                                                        </span>
                                                        <svg
                                                            className={`w-4 h-4 text-teal-400 transition-transform duration-500 ${isExpanded ? 'rotate-180' : ''}`}
                                                            fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"
                                                        >
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                                        </svg>
                                                    </div>
                                                </div>
                                                <h3 className={`text-xl md:text-2xl font-bold transition-colors duration-500 mt-2 ${isExpanded ? 'text-teal-600' : 'text-[#172b2d] group-hover:text-teal-600'}`}>
                                                    {step.title}
                                                </h3>
                                            </div>

                                            {/* Expandable Content Wrapper */}
                                            <div
                                                className={`grid transition-[grid-template-rows,opacity] duration-500 ease-in-out ${isExpanded ? 'grid-rows-[1fr] opacity-100 mt-6' : 'grid-rows-[0fr] opacity-0'}`}
                                            >
                                                <div className="overflow-hidden">
                                                    <p className="text-gray-600 leading-relaxed mb-6">
                                                        {step.description}
                                                    </p>

                                                    <div className="space-y-4 pt-4 border-t border-teal-500/10">
                                                        <h4 className="text-[10px] md:text-xs font-bold text-teal-700/80 uppercase tracking-widest">
                                                            What You Get:
                                                        </h4>
                                                        <ul className="space-y-3">
                                                            {step.benefits.map((benefit, bIndex) => (
                                                                <li key={bIndex} className="flex gap-3 text-sm text-gray-700 leading-relaxed">
                                                                    <span className="text-teal-500 mt-1 flex-shrink-0">
                                                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                                                            <polyline points="20 6 9 17 4 12"></polyline>
                                                                        </svg>
                                                                    </span>
                                                                    {benefit}
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Node (Leaf Connector) */}
                                    <div className={`absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-4 border-white shadow-lg hidden md:block z-20 transition-all duration-500 ${isExpanded ? 'bg-teal-600 scale-125' : 'bg-teal-200 scale-100'}`}>
                                        {isExpanded && <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-teal-500/20 rounded-full animate-ping"></div>}
                                    </div>

                                    {/* Branch Connection SVG */}
                                    <div className={`absolute top-1/2 -translate-y-1/2 w-[5%] h-12 hidden md:block z-10 transition-all duration-500 ${step.side === 'left' ? 'left-[45%]' : 'right-[45%] rotate-180'} ${isExpanded ? 'opacity-100' : 'opacity-30'}`}>
                                        <svg width="100%" height="100%" viewBox="0 0 50 100" fill="none" preserveAspectRatio="none">
                                            <path
                                                d="M50 50 L 0 50 M 50 50 C 40 40 30 45 25 35 M 50 50 C 40 60 30 55 25 65"
                                                stroke="#0d9488"
                                                strokeWidth="2"
                                                strokeOpacity="0.8"
                                                strokeLinecap="round"
                                            />
                                        </svg>
                                    </div>

                                    {/* Empty space for the other side on desktop */}
                                    <div className="hidden md:block md:w-[45%]"></div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
