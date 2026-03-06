"use client";

import React from "react";

export default function ContactSection() {
    return (
        <section className="bg-[#fdfaf5] py-24 border-t border-black/5">
            <div className="container mx-auto px-8 lg:px-16">
                <div className="mb-16">
                    <span className="text-[12px] font-black tracking-[0.2em] uppercase text-black/40 mb-4 block">
                        CONTACT
                    </span>
                    <h2 className="font-serif text-5xl lg:text-6xl font-medium tracking-tight text-[#172b2d] mb-6">
                        Get in touch with us
                    </h2>
                    <p className="text-xl text-black/60 font-sans leading-relaxed max-w-2xl">
                        Have an idea or want to learn more about our incubation program? <br />
                        We'd love to hear from you.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
                    {/* Left Side: Contact Form */}
                    <div className="w-full lg:w-3/5">
                        <form className="flex flex-col gap-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="flex flex-col gap-3">
                                    <label className="text-[12px] font-black tracking-[0.1em] uppercase text-black/40">
                                        NAME
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Your name"
                                        className="w-full bg-[#fcf9f2] border border-black/5 rounded-2xl px-6 py-4 outline-none focus:border-[#e23e3e]/30 transition-all font-sans text-lg text-black placeholder:text-black/20"
                                    />
                                </div>
                                <div className="flex flex-col gap-3">
                                    <label className="text-[12px] font-black tracking-[0.1em] uppercase text-black/40">
                                        EMAIL
                                    </label>
                                    <input
                                        type="email"
                                        placeholder="you@email.com"
                                        className="w-full bg-[#fcf9f2] border border-black/5 rounded-2xl px-6 py-4 outline-none focus:border-[#e23e3e]/30 transition-all font-sans text-lg text-black placeholder:text-black/20"
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col gap-3">
                                <label className="text-[12px] font-black tracking-[0.1em] uppercase text-black/40">
                                    SUBJECT
                                </label>
                                <input
                                    type="text"
                                    placeholder="What's this about?"
                                    className="w-full bg-[#fcf9f2] border border-black/5 rounded-2xl px-6 py-4 outline-none focus:border-[#e23e3e]/30 transition-all font-sans text-lg text-black placeholder:text-black/20"
                                />
                            </div>

                            <div className="flex flex-col gap-3">
                                <label className="text-[12px] font-black tracking-[0.1em] uppercase text-black/40">
                                    MESSAGE
                                </label>
                                <textarea
                                    placeholder="Tell us about your idea or query..."
                                    rows={6}
                                    className="w-full bg-[#fcf9f2] border border-black/5 rounded-2xl px-6 py-4 outline-none focus:border-[#e23e3e]/30 transition-all font-sans text-lg text-black placeholder:text-black/20 resize-none"
                                />
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    className="bg-[#1a1917] text-white px-10 py-5 rounded-2xl font-bold flex items-center gap-3 hover:bg-[#e23e3e] transition-all transform hover:scale-[1.02] shadow-xl shadow-black/10 group active:scale-95"
                                >
                                    Send Message
                                    <svg
                                        width="18"
                                        height="18"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                                    >
                                        <line x1="22" y1="2" x2="11" y2="13"></line>
                                        <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                                    </svg>
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* Right Side: Contact Info Cards */}
                    <div className="w-full lg:w-2/5 flex flex-col gap-5">
                        {/* Email Card */}
                        <div className="bg-[#fcf9f2] p-8 rounded-3xl border border-black/5 flex items-center justify-between group cursor-pointer hover:border-[#e23e3e]/20 hover:shadow-lg hover:shadow-black/[0.02] transition-all">
                            <div className="flex items-center gap-6">
                                <div className="w-14 h-14 rounded-2xl bg-[#f2e8da] flex items-center justify-center text-[#9c7b50]">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                        <polyline points="22,6 12,13 2,6"></polyline>
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="text-[12px] font-black tracking-[0.1em] uppercase text-black/30 mb-1">EMAIL</h4>
                                    <p className="text-lg font-bold text-black group-hover:text-[#e23e3e] transition-colors">incubation@dypcoeakurdi.ac.in</p>
                                </div>
                            </div>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-black/10 group-hover:text-[#e23e3e] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all">
                                <line x1="7" y1="17" x2="17" y2="7"></line>
                                <polyline points="7 7 17 7 17 17"></polyline>
                            </svg>
                        </div>

                        {/* Phone Card */}
                        <div className="bg-[#fcf9f2] p-8 rounded-3xl border border-black/5 flex items-center justify-between group cursor-pointer hover:border-[#e23e3e]/20 hover:shadow-lg hover:shadow-black/[0.02] transition-all">
                            <div className="flex items-center gap-6">
                                <div className="w-14 h-14 rounded-2xl bg-[#f2e8da] flex items-center justify-center text-[#9c7b50]">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="text-[12px] font-black tracking-[0.1em] uppercase text-black/30 mb-1">PHONE</h4>
                                    <p className="text-lg font-bold text-black group-hover:text-[#e23e3e] transition-colors">+91-20-2765-3054</p>
                                </div>
                            </div>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-black/10 group-hover:text-[#e23e3e] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all">
                                <line x1="7" y1="17" x2="17" y2="7"></line>
                                <polyline points="7 7 17 7 17 17"></polyline>
                            </svg>
                        </div>

                        {/* Address Card */}
                        <div className="bg-[#fcf9f2] p-8 rounded-3xl border border-black/5 flex items-center justify-between group cursor-pointer hover:border-[#e23e3e]/20 hover:shadow-lg hover:shadow-black/[0.02] transition-all">
                            <div className="flex items-center gap-6">
                                <div className="w-14 h-14 rounded-2xl bg-[#f2e8da] flex items-center justify-center text-[#9c7b50]">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                        <circle cx="12" cy="10" r="3"></circle>
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="text-[12px] font-black tracking-[0.1em] uppercase text-black/30 mb-1">ADDRESS</h4>
                                    <p className="text-lg font-bold text-black group-hover:text-[#e23e3e] transition-colors">Sector 29, Akurdi, Pune – 411044</p>
                                </div>
                            </div>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-black/10 group-hover:text-[#e23e3e] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all">
                                <line x1="7" y1="17" x2="17" y2="7"></line>
                                <polyline points="7 7 17 7 17 17"></polyline>
                            </svg>
                        </div>

                        {/* Parent Institution Card */}
                        <div className="bg-[#fcf9f2] p-8 rounded-3xl border border-black/5 group cursor-pointer hover:border-[#e23e3e]/20 hover:shadow-lg hover:shadow-black/[0.02] transition-all relative">
                            <h4 className="text-[12px] font-black tracking-[0.1em] uppercase text-black/30 mb-3">PARENT INSTITUTION</h4>
                            <div className="flex items-center gap-2 mb-2">
                                <p className="text-lg font-bold text-black group-hover:text-[#e23e3e] transition-colors">DY Patil College of Engineering, Akurdi</p>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-black/10 group-hover:text-[#e23e3e] transition-all">
                                    <line x1="7" y1="17" x2="17" y2="7"></line>
                                    <polyline points="7 7 17 7 17 17"></polyline>
                                </svg>
                            </div>
                            <p className="text-xs font-medium text-black/40">Affiliated to Savitribai Phule Pune University</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
