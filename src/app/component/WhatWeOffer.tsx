"use client";

import React from 'react';

const offers = [
    {
        title: "WE MAKE BOLD INVESTMENTS",
        description: "We are fearless in writing the first check for a crazy mission. Even if no other VC believes in you. And since we invest our own money, we are fast and patient.",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10 text-white">
                <path d="M12 3L4 9V21H20V9L12 3Z" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12 3V21" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12 9L15 12L12 15" strokeLinecap="round" strokeLinejoin="round" className="text-teal-400" />
                <circle cx="12" cy="7" r="1" fill="currentColor" className="text-teal-400" />
            </svg>
        )
    },
    {
        title: "WE THINK LONG TERM",
        description: "With our long term investment horizon, we are prepared to grow your company with you over decades. We are not looking for a quick exit.",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10 text-white">
                <path d="M12 8V12L15 15" strokeLinecap="round" strokeLinejoin="round" className="text-teal-400" />
                <circle cx="12" cy="12" r="9" stroke="currentColor" />
                <path d="M12 3V5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12 19V21" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M3 12H5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M19 12H21" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        )
    },
    {
        title: "WE OPEN UP OUR NETWORK",
        description: "Not only will we get you on a table with the right business partners, experts and potential customers - we'll be right there with you on that table.",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10 text-white">
                <circle cx="12" cy="12" r="3" stroke="currentColor" className="text-teal-400" />
                <circle cx="19" cy="5" r="2" stroke="currentColor" />
                <circle cx="5" cy="5" r="2" stroke="currentColor" />
                <circle cx="19" cy="19" r="2" stroke="currentColor" />
                <circle cx="5" cy="19" r="2" stroke="currentColor" />
                <path d="M12 9L19 5" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="2 2" />
                <path d="M12 15L19 19" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="2 2" />
                <path d="M9 12L5 5" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="2 2" />
                <path d="M9 12L5 19" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="2 2" />
            </svg>
        )
    },
    {
        title: "WE THRIVE FOR A BETTER WORLD",
        description: "We believe that technology is our biggest chance to overcome global challenges and we are willing to take higher risks for purpose-driven innovations.",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10 text-white">
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" />
                <path d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18Z" stroke="currentColor" className="text-teal-400" />
                <path d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z" fill="currentColor" className="text-teal-400" />
            </svg>
        )
    },
    {
        title: "WE ARE A TEAM OF SERIAL FOUNDERS",
        description: "Being founders ourselves, we know the challenges that lie ahead and are eager to share our experience and put in the extra hours to help. We truly do have a hands-on mentality.",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10 text-white">
                <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="currentColor" />
                <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="currentColor" className="text-teal-400" />
                <path d="M23 21V19C22.9993 18.1137 22.7044 17.2524 22.1614 16.5523C21.6184 15.8522 20.8581 15.3516 20 15.13" stroke="currentColor" />
                <path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89317 18.7122 8.75608 18.1676 9.45768C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="currentColor" className="text-teal-400" />
            </svg>
        )
    },
    {
        title: "WE LOVE TECHNOLOGY",
        description: "We understand and are passionate about technology. We don't just look at KPIs, we first want to truly understand your product and technology.",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10 text-white">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" />
                <path d="M2 17L12 22L22 17" stroke="currentColor" className="text-teal-400" />
                <path d="M2 12L12 17L22 12" stroke="currentColor" strokeDasharray="2 2" />
            </svg>
        )
    }
];

export default function WhatWeOffer() {
    return (
        <section className="bg-black py-24 px-8 md:px-12 lg:px-16">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-white text-3xl md:text-4xl font-bold tracking-tight max-w-2xl mx-auto uppercase leading-tight">
                        The real value of our investment goes far beyond the capital
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {offers.map((offer, index) => (
                        <div
                            key={index}
                            className="bg-[#232326] p-10 rounded-xl transition-all duration-300 hover:bg-[#2d2d31] hover:-translate-y-1 group border border-white/5"
                        >
                            <div className="mb-8">
                                {offer.icon}
                            </div>
                            <h3 className="text-white text-base md:text-lg font-bold mb-4 tracking-wide group-hover:text-teal-400 transition-colors">
                                {offer.title}
                            </h3>
                            <p className="text-gray-400 text-sm leading-relaxed font-medium">
                                {offer.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
