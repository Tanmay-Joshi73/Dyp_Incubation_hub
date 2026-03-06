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
        side: "left",
        status: null
    },
    {
        title: "🔍 Evaluation",
        duration: "1–2 Weeks",
        description: "Our network of mentors and industry experts reviews your idea to assess its viability and market fit.",
        benefits: [
            "Feasibility Analysis: A clear breakdown of your idea's technical and operational strengths.",
            "Market Validation Suggestions: Actionable insights on your target market, competition, and positioning."
        ],
        side: "right",
        status: null
    },
    {
        title: "🧠 Mentorship Program",
        duration: "2–3 Months",
        description: "Selected teams are paired with dedicated mentors who guide you through the foundational stages of your business.",
        benefits: [
            "Business Model Refinement: Move from a simple idea to a robust, scalable business model.",
            "Product Strategy & Technical Mentoring: Define your product roadmap and get expert advice on your tech stack and development approach."
        ],
        side: "left",
        status: "🔥 Most Popular"
    },
    {
        title: "🛠 Prototype Development",
        duration: "2–4 Months",
        description: "It’s time to build! Transform your plans into a tangible, working prototype.",
        benefits: [
            "Access to Innovation Labs: Utilize our state-of-the-art labs equipped with the latest hardware and software.",
            "Technical Assistance: Get hands-on support from our technical staff to overcome development challenges."
        ],
        side: "right",
        status: null
    },
    {
        title: "🎤 Investor Pitch",
        duration: "Pitch Day / Demo Day",
        description: "Showcase your fully developed prototype and business plan to a room full of active investors and venture capitalists.",
        benefits: [
            "Exposure to Investors: Present your solution on a dedicated stage to those who can fund your future.",
            "Networking & Funding Possibilities: Connect with potential partners and investors in a curated networking environment."
        ],
        side: "left",
        status: null
    },
    {
        title: "🚀 Startup Launch",
        duration: "Post-Incubation Support (Ongoing)",
        description: "You've graduated from the incubation program, but our support doesn't stop here.",
        benefits: [
            "Funding & Market Access Support: Get assistance in securing your first round of funding and finding pilot customers.",
            "Incubation Graduation: Join our prestigious alumni network and continue to benefit from our ecosystem."
        ],
        side: "right",
        status: "⭐ Graduate Level"
    }
];

export default function IncubationProcess() {
    const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

    const toggleExpand = (index: number) => {
        setExpandedIndex(prevIndex => prevIndex === index ? null : index);
    };

    return (
        <section className="bg-white py-24 px-6 md:px-12 lg:px-24 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-24">
                    <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-teal-500/10 border border-teal-500/20">
                        <span className="text-teal-400 text-xs font-bold tracking-widest uppercase">The Roadmap</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium text-[#172b2d] leading-tight mb-6">
                        The 6-Step Incubation <span className="text-teal-600 italic">Journey</span>
                    </h2>
                    <p className="text-black/50 text-lg max-w-2xl mx-auto">
                        A structured path from idea to impact. Click any step to explore.
                    </p>
                </div>

                <div className="relative">
                    {/* The Central Vertical Trunk */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-teal-500/5 via-teal-500/30 to-teal-500/5 -translate-x-1/2 hidden md:block"></div>

                    <div className="space-y-16 md:space-y-8 relative">
                        {steps.map((step, index) => {
                            const isExpanded = expandedIndex === index;
                            const isLeft = index % 2 === 0;

                            return (
                                <div
                                    key={index}
                                    className={`relative flex flex-col md:flex-row items-center justify-between w-full transition-all duration-300 ease-out ${isLeft ? '' : 'md:flex-row-reverse'}`}
                                >
                                    {/* Connection Node on Trunk */}
                                    <div 
                                        className={`absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-2 border-white shadow-md z-30 hidden md:block transition-all duration-300 ${
                                            isExpanded ? 'bg-teal-600 scale-110' : 'bg-teal-200'
                                        }`}
                                    />

                                    {/* Curved Branch SVG - Simplified for performance */}
                                    <div className={`absolute top-1/2 -translate-y-1/2 w-1/2 h-24 hidden md:block z-20 pointer-events-none transition-opacity duration-300 ${
                                        isLeft ? 'left-[0%]' : 'right-[0%]'
                                    } ${isExpanded ? 'opacity-40' : 'opacity-10'}`}>
                                        <svg width="100%" height="100%" viewBox="0 0 200 50" preserveAspectRatio="none" className={isLeft ? '' : 'scale-x-[-1]'}>
                                            <path
                                                d="M200 25 C 150 25, 100 25, 0 40"
                                                stroke="#0d9488"
                                                strokeWidth="1.5"
                                                fill="none"
                                            />
                                        </svg>
                                    </div>

                                    {/* Step Card Content */}
                                    <div className="w-full md:w-[42%] relative">
                                        {/* Mobile Junction Line */}
                                        <div className="md:hidden absolute -top-8 left-1/2 -translate-x-1/2 w-0.5 h-8 bg-gradient-to-b from-teal-500/20 to-teal-500/40" />

                                        <div
                                            onClick={() => toggleExpand(index)}
                                            className={`cursor-pointer bg-white p-6 md:p-8 rounded-3xl border transition-all duration-300 ${
                                                isExpanded 
                                                    ? 'border-teal-500/40 shadow-xl shadow-teal-900/10' 
                                                    : 'border-teal-500/10 hover:border-teal-500/30 hover:shadow-md'
                                            }`}
                                        >
                                            {/* Status Badge */}
                                            {step.status && (
                                                <div className="float-right ml-4 mb-2">
                                                    <span className={`text-[9px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider ${
                                                        step.status.includes('🔥') ? 'bg-amber-100 text-amber-700' : 'bg-purple-100 text-purple-700'
                                                    }`}>
                                                        {step.status}
                                                    </span>
                                                </div>
                                            )}

                                            <div className="flex items-center gap-3 mb-3">
                                                <span className={`flex items-center justify-center w-10 h-10 rounded-xl text-sm font-bold transition-colors duration-300 ${
                                                    isExpanded ? 'bg-teal-600 text-white' : 'bg-teal-50 text-teal-600'
                                                }`}>
                                                    {index + 1}
                                                </span>
                                                <div>
                                                    <span className="text-teal-600/60 text-[9px] font-bold tracking-wider uppercase block">
                                                        Step {index + 1}
                                                    </span>
                                                    <span className="text-black/30 text-[9px] font-medium uppercase">
                                                        {step.duration}
                                                    </span>
                                                </div>
                                            </div>

                                            <h3 className={`text-xl md:text-2xl font-serif font-medium mb-2 transition-colors duration-300 ${
                                                isExpanded ? 'text-teal-600' : 'text-[#172b2d]'
                                            }`}>
                                                {step.title}
                                            </h3>

                                            {/* Expandable Content - Using height instead of grid-rows for better performance */}
                                            <div 
                                                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                                                    isExpanded ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
                                                }`}
                                            >
                                                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                                                    {step.description}
                                                </p>
                                                
                                                <div className="pt-4 border-t border-teal-500/10">
                                                    <h4 className="text-[10px] font-bold text-teal-700 uppercase tracking-wider mb-3 flex items-center gap-2">
                                                        <span className="w-1.5 h-1.5 bg-teal-500 rounded-full"></span>
                                                        Key Outcomes:
                                                    </h4>
                                                    <ul className="space-y-3">
                                                        {step.benefits.map((benefit, bIndex) => (
                                                            <li key={bIndex} className="flex gap-3 text-xs text-gray-600">
                                                                <span className="w-5 h-5 rounded-lg bg-teal-50 flex items-center justify-center flex-shrink-0">
                                                                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="text-teal-600">
                                                                        <polyline points="20 6 9 17 4 12" />
                                                                    </svg>
                                                                </span>
                                                                <span>{benefit}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>

                                            {!isExpanded && (
                                                <div className="mt-3 flex items-center gap-2">
                                                    <span className="text-teal-600 text-[8px] font-bold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                        Click to expand
                                                    </span>
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    {/* Spacer for Desktop */}
                                    <div className="hidden md:block md:w-[42%]" />
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Bottom Navigation */}
                <div className="mt-24 text-center">
                    <div className="inline-flex flex-col items-center gap-4">
                        <div className="flex gap-2">
                            {steps.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setExpandedIndex(i)}
                                    className={`h-1.5 rounded-full transition-all duration-300 ${
                                        expandedIndex === i ? 'w-8 bg-teal-600' : 'w-1.5 bg-teal-100 hover:bg-teal-200'
                                    }`}
                                    aria-label={`Go to step ${i + 1}`}
                                />
                            ))}
                        </div>
                        <p className="text-black/20 text-[8px] font-bold uppercase tracking-widest">
                            Follow the branches of innovation
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}