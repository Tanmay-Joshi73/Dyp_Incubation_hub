"use client";

import React from "react";

const FOOTER_LINKS = {
    Company: ["About Us", "Our Team", "News", "Careers"],
    Investments: ["Companies", "Resources", "Submit Pitch"],
    Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
};

export default function Footer() {
    return (
        <footer className="bg-[#fdfaf5] border-t border-black/5 pt-24 pb-12">
            <div className="container mx-auto px-8 lg:px-16">
                {/* Top Section */}
                <div className="flex flex-col lg:flex-row justify-between gap-16 mb-20">
                    <div className="max-w-md">
                        <a href="/" className="text-4xl font-bold tracking-tight text-black flex items-center gap-[1px] mb-8">
                            DYP Incubation Hub<span className="text-[#e23e3e]">.</span>
                        </a>
                        <p className="text-xl text-black/60 font-sans leading-relaxed">
                            Empowering the next generation of founders to build world-changing companies from the ground up.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-12 lg:gap-24">
                        {Object.entries(FOOTER_LINKS).map(([title, links]) => (
                            <div key={title}>
                                <h4 className="text-[12px] font-black tracking-[0.2em] uppercase text-black/40 mb-6">
                                    {title}
                                </h4>
                                <ul className="flex flex-col gap-4">
                                    {links.map((link) => (
                                        <li key={link}>
                                            <a
                                                href="#"
                                                className="text-[15px] font-bold text-black/70 hover:text-[#e23e3e] transition-colors"
                                            >
                                                {link}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Middle Section: Contact & Newsletter */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center py-12 border-t border-black/5 gap-8">
                    <div>
                        <h4 className="text-[12px] font-black tracking-[0.2em] uppercase text-black/40 mb-4">
                            Get in Touch
                        </h4>
                        <p className="text-lg font-bold text-black">
                            incubation@dypcoeakurdi.ac.in
                        </p>
                    </div>

                    <div className="flex gap-6">
                        {["Twitter", "LinkedIn", "Instagram"].map((social) => (
                            <a
                                key={social}
                                href="#"
                                className="text-sm font-bold tracking-widest uppercase text-black/40 hover:text-black transition-colors"
                            >
                                {social}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="pt-12 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-xs font-bold text-black/30 uppercase tracking-widest">
                        © {new Date().getFullYear()} dypcoeakurdi.ac.in. All rights reserved.
                    </p>
                    <div className="flex gap-8">
                        <p className="text-[10px] font-black text-black/20 uppercase tracking-[0.3em]">
                            Designed with precision
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
