import { useState, useEffect } from 'react';

function useVisibleCount() {
    const [count, setCount] = useState(4);
    useEffect(() => {
        const update = () => {
            const w = window.innerWidth;
            if (w < 640) setCount(1);
            else if (w < 1024) setCount(2);
            else setCount(4);
        };
        update();
        window.addEventListener('resize', update);
        return () => window.removeEventListener('resize', update);
    }, []);
    return count;
}

export default function TeamExperts() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [selectedExpert, setSelectedExpert] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const visibleCount = useVisibleCount();

    const experts = [
        {
            name: "Usama Arif",
            role: "PROJECT MANAGER",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
            bio: "With over 8 years of experience in project management, Usama excels at delivering complex IT projects on time and within budget.",
            email: "usama@devspots.de",
            linkedin: "#",
            skills: ["Agile", "Scrum", "Project Planning", "Team Leadership"]
        },
        {
            name: "Usama Zahid",
            role: "BUSINESS DEVELOPMENT OFFICER",
            image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400",
            bio: "Usama Zahid specializes in identifying growth opportunities and building strategic partnerships to drive business expansion.",
            email: "zahid@devspots.de",
            linkedin: "#",
            skills: ["Sales Strategy", "Client Relations", "Market Analysis", "Negotiation"]
        },
        {
            name: "Gull Husnain",
            role: "AI/ML ENGINEER",
            image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400",
            bio: "Expert in artificial intelligence and machine learning, Gull develops cutting-edge solutions using the latest AI technologies.",
            email: "gull@devspots.de",
            linkedin: "#",
            skills: ["Python", "TensorFlow", "Deep Learning", "NLP", "Computer Vision"]
        },
        {
            name: "Muhammad Furqan",
            role: "UI/UX DESIGNER & MERN DEVELOPER",
            image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400",
            bio: "Furqan combines design expertise with full-stack development skills to create beautiful and functional web applications.",
            email: "furqan@devspots.de",
            linkedin: "#",
            skills: ["Figma", "React", "Node.js", "MongoDB", "UI Design"]
        },
        {
            name: "Ahmed Khan",
            role: "SENIOR BACKEND DEVELOPER",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400",
            bio: "Ahmed specializes in building scalable backend systems and APIs that power modern web applications.",
            email: "ahmed@devspots.de",
            linkedin: "#",
            skills: ["Node.js", "Python", "AWS", "PostgreSQL", "Microservices"]
        },
        {
            name: "Sara Ali",
            role: "QUALITY ASSURANCE LEAD",
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400",
            bio: "Sara ensures every product meets the highest quality standards through comprehensive testing and quality processes.",
            email: "sara@devspots.de",
            linkedin: "#",
            skills: ["Test Automation", "Selenium", "QA Strategy", "Bug Tracking"]
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % experts.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [experts.length]);

    const openModal = (expert) => {
        setSelectedExpert(expert);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setTimeout(() => setSelectedExpert(null), 300);
    };

    const getVisibleExperts = () => {
        const indices = [];
        for (let i = 0; i < visibleCount; i++) {
            indices.push((currentSlide + i) % experts.length);
        }
        return indices.map(i => experts[i]);
    };

    return (
        <section className="w-full bg-white py-16 md:py-20 overflow-hidden">
            <style>{`
                @keyframes fadeSlideIn {
                    from { opacity: 0.3; transform: translateX(16px); }
                    to { opacity: 1; transform: translateX(0); }
                }
                .expert-card-anim {
                    animation: fadeSlideIn 0.35s ease forwards;
                }
                .expert-img {
                    filter: grayscale(100%);
                    transition: filter 0.4s ease, transform 0.5s ease;
                }
                .expert-card-wrap:hover .expert-img {
                    filter: grayscale(0%);
                    transform: scale(1.04);
                }
            `}</style>

            <div className="max-w-full min-h-[280px] mx-auto px-6 md:px-8 lg:px-12">
                {/* Section Title */}
                <div className="text-center mb-12 md:mb-16">
                    <div className="inline-block mb-3">
                        <span className="bg-[#F44380] text-white px-2 py-[1px] rounded font-semibold text-base mr-1">
                            Our Expert
                        </span>
                        <span className="text-gray-700 text-base font-medium">Team Members</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#020842]">
                        Top Skilled Experts
                    </h2>
                </div>

                {/* Cards Grid — same grid, just visibleCount controls how many show */}
                <div className={`grid gap-6 lg:gap-7 ${
                    visibleCount === 1 ? 'grid-cols-1' :
                    visibleCount === 2 ? 'grid-cols-2' :
                    'grid-cols-4'
                }`}>
                    {getVisibleExperts().map((expert, index) => (
                        <div
                            key={`${expert.name}-${index}`}
                            onClick={() => openModal(expert)}
                            className="expert-card-anim expert-card-wrap rounded-3xl overflow-hidden cursor-pointer group
                                border border-blue-100 hover:border-blue-200
                                hover:shadow-xl transition-all duration-300 hover:-translate-y-2
                                flex flex-col"
                            style={{ background: '#ddeefa' }}
                        >
                            {/* Image */}
                            <div className="flex-1 overflow-hidden flex items-end justify-center pt-6 px-5 pb-0 min-h-[320px]">
                                <img
                                    src={expert.image}
                                    alt={expert.name}
                                    className="expert-img w-full h-[370px] object-cover object-top rounded-2xl"
                                />
                            </div>

                            {/* bottom */}
                            <div className="bg-[#ddeefa] text-center px-5 pt-4 pb-9 mt-0 border-t border-blue-50">
                                <h3 className="text-[17px] font-bold text-[#020842] leading-tight">
                                    {expert.name}
                                </h3>
                                <p className="text-[11px] font-semibold tracking-widest text-gray-400 uppercase mt-1">
                                    {expert.role}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>

            {/* Modal */}
            {isModalOpen && selectedExpert && (
                <div
                    className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                    onClick={closeModal}
                >
                    <div
                        className="bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Modal header */}
                        <div className="relative h-64 bg-gradient-to-br from-blue-600 to-purple-600">
                            <img
                                src={selectedExpert.image}
                                alt={selectedExpert.name}
                                className="w-32 h-32 rounded-full object-cover border-4 border-white absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 shadow-xl"
                            />
                            <button
                                onClick={closeModal}
                                className="absolute top-4 right-4 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        {/* Modal content */}
                        <div className="pt-20 pb-8 px-8">
                            <div className="text-center mb-6">
                                <h3 className="text-3xl font-bold text-[#020842] mb-2">{selectedExpert.name}</h3>
                                <p className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-4">{selectedExpert.role}</p>
                                <div className="h-1 w-20 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mx-auto" />
                            </div>

                            <p className="text-gray-700 leading-relaxed mb-6 text-center">{selectedExpert.bio}</p>

                            <div className="mb-6">
                                <h4 className="text-lg font-bold text-[#020842] mb-3 text-center">Skills & Expertise</h4>
                                <div className="flex flex-wrap gap-2 justify-center">
                                    {selectedExpert.skills.map((skill, i) => (
                                        <span key={i} className="px-4 py-2 bg-blue-50 text-[#020842] rounded-full text-sm font-medium border border-blue-200">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="flex gap-4 justify-center pt-4 border-t border-gray-200">
                                <a
                                    href={`mailto:${selectedExpert.email}`}
                                    className="flex items-center gap-2 bg-[#020842] hover:bg-blue-600 text-white px-6 py-3 rounded-full font-semibold transition-all"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    Email
                                </a>
                                <a
                                    href={selectedExpert.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold transition-all"
                                >
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                    </svg>
                                    LinkedIn
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}