"use client";

import React from 'react';

const teamData = {
    director: [
        {
            name: "Dr. Arvan Sharma",
            role: "Incubation Director",
            description: "Visionary leader with 15+ years in deep-tech commercialization.",
            image: "/home/tanmay-joshi/.gemini/antigravity/brain/9c44191d-7123-4497-aa17-f39532454cae/incubation_director_portrait_1772787250336.png",
        }
    ],
    coordinators: [
        {
            name: "Ms. Elena Rodriguez",
            role: "Faculty Coordinator",
            description: "Bridging academic research and market-ready startup ventures.",
            image: "/home/tanmay-joshi/.gemini/antigravity/brain/9c44191d-7123-4497-aa17-f39532454cae/faculty_coordinator_portrait_1772787268736.png",
        },
        {
            name: "Dr. Sarah Jenkins",
            role: "Faculty Coordinator",
            description: "Expert in institutional partnerships and research commercialization.",
            image: "/home/tanmay-joshi/.gemini/antigravity/brain/9c44191d-7123-4497-aa17-f39532454cae/faculty_coordinator_2_1772787548378.png",
        }
    ],
    mentors: [
        {
            name: "Mr. Vikram Malhotra",
            role: "Startup Mentor",
            description: "Serial entrepreneur helping founders navigate product-market fit.",
            image: "/home/tanmay-joshi/.gemini/antigravity/brain/9c44191d-7123-4497-aa17-f39532454cae/mentor_portrait_1_1772787284621.png",
        },
        {
            name: "Alex Rivera",
            role: "Startup Mentor",
            description: "Specialist in growth hacking and early-stage scaling strategies.",
            image: "/home/tanmay-joshi/.gemini/antigravity/brain/9c44191d-7123-4497-aa17-f39532454cae/startup_mentor_2_1772787564962.png",
        },
        {
            name: "Maya Patel",
            role: "Startup Mentor",
            description: "Former CTO with expertise in building scalable tech architectures.",
            image: "/home/tanmay-joshi/.gemini/antigravity/brain/9c44191d-7123-4497-aa17-f39532454cae/startup_mentor_3_woman_1772787580480.png",
        },
        {
            name: "Rajesh Iyer",
            role: "Startup Mentor",
            description: "Experienced investor focused on SaaS and B2B enterprise solutions.",
            image: "/home/tanmay-joshi/.gemini/antigravity/brain/9c44191d-7123-4497-aa17-f39532454cae/startup_mentor_4_man_indian_1772787595393.png",
        },
        {
            name: "Chloe Sims",
            role: "Startup Mentor",
            description: "Product design veteran passionate about user-centric innovation.",
            image: "/home/tanmay-joshi/.gemini/antigravity/brain/9c44191d-7123-4497-aa17-f39532454cae/startup_mentor_5_woman_product_1772787614361.png",
        }
    ],
    advisors: [
        {
            name: "Robert Sterling",
            role: "Industry Advisor",
            description: "Executive with 25+ years in Fortune 500 strategic operations.",
            image: "/home/tanmay-joshi/.gemini/antigravity/brain/9c44191d-7123-4497-aa17-f39532454cae/industry_advisor_1_senior_man_1772787631051.png",
        },
        {
            name: "Margaret Thorne",
            role: "Industry Advisor",
            description: "Authority on global supply chain and manufacturing excellence.",
            image: "/home/tanmay-joshi/.gemini/antigravity/brain/9c44191d-7123-4497-aa17-f39532454cae/industry_advisor_2_senior_woman_1772787660942.png",
        },
        {
            name: "David Chen",
            role: "Industry Advisor",
            description: "Investment banker specializing in fintech and M&A transactions.",
            image: "/home/tanmay-joshi/.gemini/antigravity/brain/9c44191d-7123-4497-aa17-f39532454cae/industry_advisor_3_man_finance_1772787678156.png",
        },
        {
            name: "Linda Wu",
            role: "Industry Advisor",
            description: "Legal expert in intellectual property and corporate governance.",
            image: "/home/tanmay-joshi/.gemini/antigravity/brain/9c44191d-7123-4497-aa17-f39532454cae/industry_advisor_4_woman_legal_1772787695764.png",
        }
    ]
};

const MemberCard = ({ member }: { member: any }) => (
    <div className="flex flex-col items-center text-center p-6 bg-white rounded-[2rem] border border-gray-100 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
        <div className="relative w-32 h-32 mb-6 rounded-full overflow-hidden border-4 border-white shadow-md">
            <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
        </div>
        <h3 className="text-lg font-bold text-[#172b2d] mb-1 leading-tight">
            {member.name}
        </h3>
        <p className="text-blue-500 font-medium text-[11px] uppercase tracking-wider mb-2">
            {member.role}
        </p>
        <p className="text-black/40 text-[11px] leading-relaxed max-w-[180px]">
            {member.description}
        </p>
    </div>
);

const SectionHeader = ({ title }: { title: string }) => (
    <div className="flex items-center gap-4 mb-12">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent to-blue-500/20" />
        <h3 className="text-black/30 text-xs font-bold uppercase tracking-[0.3em] whitespace-nowrap">
            {title}
        </h3>
        <div className="h-px flex-1 bg-gradient-to-l from-transparent to-blue-500/20" />
    </div>
);

export default function MeetTheTeam() {
    return (
        <section className="bg-white py-32 px-6 md:px-12 lg:px-24">
            <div className="max-w-7xl mx-auto">
                {/* Main Heading */}
                <div className="text-center mb-24">
                    <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-blue-500/5 border border-blue-500/10">
                        <span className="text-blue-500 text-[10px] font-bold tracking-widest uppercase">The Network</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium text-[#172b2d] leading-tight mb-6">
                        Meet Our Mentors <span className="text-blue-600 italic">& Team</span>
                    </h2>
                    <p className="text-black/40 text-lg max-w-2xl mx-auto leading-relaxed">
                        Introduce the people running the ecosystem. This section adds human credibility.
                    </p>
                </div>

                {/* 1. Incubation Director */}
                <div className="mb-24">
                    <SectionHeader title="Incubation Director" />
                    <div className="flex justify-center">
                        <div className="w-full max-w-[320px]">
                            <MemberCard member={teamData.director[0]} />
                        </div>
                    </div>
                </div>

                {/* 2. Faculty Coordinators */}
                <div className="mb-24">
                    <SectionHeader title="Faculty Coordinators" />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[700px] mx-auto">
                        {teamData.coordinators.map((member, idx) => (
                            <MemberCard key={idx} member={member} />
                        ))}
                    </div>
                </div>

                {/* 3. Startup Mentors */}
                <div className="mb-24">
                    <SectionHeader title="Startup Mentors" />
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                        {teamData.mentors.map((member, idx) => (
                            <MemberCard key={idx} member={member} />
                        ))}
                    </div>
                </div>

                {/* 4. Industry Advisors */}
                <div>
                    <SectionHeader title="Industry Advisors" />
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {teamData.advisors.map((member, idx) => (
                            <MemberCard key={idx} member={member} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
