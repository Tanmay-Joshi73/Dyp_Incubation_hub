import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { startups } from '../../data/startups';
import Navbar from '../../component/Navbar';
import Footer from '../../component/Footer';

export default async function StartupPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const startup = startups.find((s) => s.id === id);

    if (!startup) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-[#fdfaf5]">
                <div className="text-center">
                    <h1 className="text-4xl font-serif mb-4">Startup Not Found</h1>
                    <Link href="/" className="text-[#e23e3e] hover:underline font-bold font-sans">
                        Back to Home
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#fdfaf5] transition-colors duration-1000">
            <Navbar />

            <main className="container mx-auto px-8 lg:px-16 pt-48 pb-24">
                <Link
                    href="/"
                    className="group flex items-center gap-2 text-black/40 hover:text-black mb-12 transition-colors font-bold uppercase tracking-widest text-xs"
                >
                    <span className="transform group-hover:-translate-x-1 transition-transform">←</span>
                    Back to Investments
                </Link>

                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
                    {/* Left: Startup Branding */}
                    <div className="w-full lg:w-1/3">
                        <div className="relative aspect-square w-full rounded-3xl bg-white shadow-2xl shadow-black/5 flex items-center justify-center p-12 overflow-hidden border border-black/5">
                            <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-black/5"></div>
                            <div className="relative w-full h-full">
                                <Image
                                    src={startup.logo}
                                    alt={startup.name}
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </div>

                        <div className="mt-8 flex flex-col gap-4">
                            <div className="flex items-center justify-between py-4 border-b border-black/5">
                                <span className="text-xs font-bold text-black/40 uppercase tracking-widest">Industry</span>
                                <span className="text-sm font-bold text-black">{startup.industry}</span>
                            </div>
                            {startup.website && (
                                <div className="flex items-center justify-between py-4 border-b border-black/5">
                                    <span className="text-xs font-bold text-black/40 uppercase tracking-widest">Website</span>
                                    <a href={startup.website} target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-[#e23e3e] hover:underline">
                                        {startup.website.replace('https://', '').replace('http://', '')}
                                    </a>
                                </div>
                            )}
                            {startup.media && (
                                <div className="flex items-center justify-between py-4 border-b border-black/5">
                                    <span className="text-xs font-bold text-black/40 uppercase tracking-widest">Media</span>
                                    <a href={startup.media} target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-[#e23e3e] hover:underline">
                                        View Coverage
                                    </a>
                                </div>
                            )}
                        </div>

                        {/* Contact Info Card */}
                        <div className="mt-8 p-6 bg-white/50 rounded-2xl border border-black/5">
                            <h3 className="text-xs font-black text-black/30 uppercase tracking-[0.2em] mb-6">Contact Info</h3>
                            <div className="flex flex-col gap-4">
                                <div>
                                    <p className="text-[10px] font-bold text-black/40 uppercase mb-1">Email Address</p>
                                    <p className="text-sm font-bold text-black">{startup.email}</p>
                                </div>
                                <div>
                                    <p className="text-[10px] font-bold text-black/40 uppercase mb-1">Phone Number</p>
                                    <p className="text-sm font-bold text-black">{startup.phoneNo}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Startup Information */}
                    <div className="w-full lg:w-2/3">
                        <h1 className="font-serif text-6xl lg:text-8xl font-medium tracking-tight text-[#172b2d] mb-8">
                            {startup.name}
                        </h1>

                        <div className="h-[2px] w-32 bg-[#e23e3e] mb-12 opacity-60"></div>

                        <div className="mb-12">
                            <p className="text-xs font-black text-black/30 uppercase tracking-[0.3em] mb-6">Founders</p>
                            <div className="flex flex-wrap gap-8 lg:gap-12">
                                {startup.founder.map((name, index) => (
                                    <div key={index} className="flex flex-col items-center lg:items-start gap-4">
                                        {startup.founderPhotos && startup.founderPhotos[index] && (
                                            <div className="relative w-32 h-32 lg:w-40 lg:h-40 rounded-3xl overflow-hidden border border-black/5 shadow-xl transition-transform hover:scale-105 duration-300">
                                                <Image
                                                    src={startup.founderPhotos[index]}
                                                    alt={name}
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>
                                        )}
                                        <p className="text-xl lg:text-2xl font-serif text-[#172b2d] font-medium text-center lg:text-left">{name}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <p className="text-2xl lg:text-3xl text-black/80 font-sans leading-relaxed mb-12 max-w-2xl italic">
                            "{startup.description}"
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-12 border-t border-black/10">
                            <div>
                                <h3 className="text-xs font-black text-black/30 uppercase tracking-[0.3em] mb-4">Special Achievement</h3>
                                <p className="text-lg font-bold text-black">{startup.specialAchievement}</p>
                            </div>
                            <div>
                                <h3 className="text-xs font-black text-black/30 uppercase tracking-[0.3em] mb-4">Founding Year</h3>
                                <p className="text-lg font-bold text-black">{startup.foundingYear}</p>
                            </div>
                            <div>
                                <h3 className="text-xs font-black text-black/30 uppercase tracking-[0.3em] mb-4">Headquarters</h3>
                                <p className="text-lg font-bold text-black">{startup.address}</p>
                            </div>
                        </div>

                        <button className="mt-8 px-10 py-5 bg-[#172b2d] text-white font-bold rounded-full hover:bg-[#e23e3e] transition-all duration-300 transform hover:scale-105 shadow-xl shadow-black/10">
                            Request Detailed Memo
                        </button>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
