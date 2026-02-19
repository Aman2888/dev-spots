import { useEffect, useRef, useState } from 'react';

function Counter({ end, label, icon, suffix = '' }) {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const hasAnimated = useRef(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated.current) {
                    hasAnimated.current = true;
                    let start = 1;
                    const duration = 2200;
                    const stepTime = 30;
                    const steps = duration / stepTime;
                    const increment = (end - start) / steps;

                    const timer = setInterval(() => {
                        start += increment;
                        if (start >= end) {
                            setCount(end);
                            clearInterval(timer);
                        } else {
                            setCount(Math.ceil(start));
                        }
                    }, stepTime);

                    return () => clearInterval(timer);
                }
            },
            { threshold: 0.4 }
        );

        if (ref.current) observer.observe(ref.current);
        return () => { if (ref.current) observer.unobserve(ref.current); };
    }, [end]);

    return (
        <div
            ref={ref}
            className="bg-white rounded-3xl p-8 md:p-10 shadow-md transition-all duration-300 text-left transform "
        >
            <div className="mb-6">
                {typeof icon === 'string' ? (
                    <div className="text-5xl md:text-6xl">{icon}</div>
                ) : (
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                        {icon}
                    </div>
                )}
            </div>
            <div className="text-4xl md:text-5xl font-bold text-[#020842] mb-2">
                {count}{suffix}
            </div>
            <p className="text-gray-700 font-medium text-base md:text-lg">{label}</p>
        </div>
    );
}

// Brands Marquee
function BrandsMarquee() {
    const logos = [
        "https://static.vecteezy.com/system/resources/thumbnails/046/396/548/small/bird-wing-logo-free-png.png",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQbWEtfhD4HqXfQ_CyiOhaAZAHPjMQcg_cIQ&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvlY-bbHvq6ozPEk024OnGWMvYj9zdF4bd2Q&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIJJVXJC2s4GXW2SH_U8B-zKAiBLKW0SlsRg&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYer72WLKNdwZvOp2FUMETYDlPYbt4ugGILQ&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1I06x86BQSbz0X8qT3VuA9Ef4EZ6IrywIFw&s",
        "https://png.pngtree.com/png-vector/20230609/ourmid/pngtree-environmental-protection-natural-environment-logo-vector-png-image_7124553.png",
    ];

    const extendedLogos = [...logos, ...logos, ...logos];

    return (
        <div className="py-16 md:py-20 bg-[#E3F2FF] overflow-hidden">
            <style>{`
                @keyframes scroll-slow {
                    0%   { transform: translateX(0); }
                    100% { transform: translateX(-33.333%); }
                }
                .brands-track {
                    animation: scroll-slow 30s linear infinite;
                    display: flex;
                    width: max-content;
                }
            `}</style>

            {/* Heading */}
            <h3 className="text-center text-xl md:text-2xl font-semibold text-gray-800 mb-10 md:mb-14">
               <span className="bg-[#F44380] text-white px-2 py-[1px] rounded font-semibold text-base">
                    Brands We
                </span>
               <span className='text-base'> Work With</span>
            </h3>

            <div className="max-w-7xl mx-auto px-6">
                <div className="relative overflow-hidden">
                    <div className="brands-track">
                        {extendedLogos.map((logo, idx) => (
                            <div
                                key={idx}
                                style={{
                                    flexShrink: 0,
                                    width: '220px',
                                    height: '110px',
                                    margin: '0 12px',
                                    backgroundColor: 'white',
                                    borderRadius: '14px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    boxShadow: '0 2px 10px rgba(0,0,0,0.07)',
                                    transition: 'box-shadow 0.3s, transform 0.3s',
                                    padding: '16px 24px',
                                }}
                            >
                                <img
                                    src={logo}
                                    alt={`Brand ${idx + 1}`}
                                    style={{
                                        maxHeight: '60px',
                                        maxWidth: '160px',
                                        width: 'auto',
                                        objectFit: 'contain',
                                        filter: 'grayscale(0%)',
                                        transition: 'transform 0.3s',
                                    }}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

// Stats Section
function StatsSection() {
    const BrainIcon = () => (
        <svg className="w-12 h-12 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C9.79 2 8 3.79 8 6c0 .88.29 1.68.78 2.34C7.23 9.04 6 10.79 6 13c0 2.76 2.24 5 5 5h2c2.76 0 5-2.24 5-5 0-2.21-1.23-3.96-2.78-4.66.49-.66.78-1.46.78-2.34 0-2.21-1.79-4-4-4zm0 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z" />
        </svg>
    );
    const ShieldCheckIcon = () => (
        <svg className="w-12 h-12 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
        </svg>
    );
    const ThumbsUpIcon = () => (
        <svg className="w-12 h-12 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
            <path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2z" />
        </svg>
    );
    const TargetIcon = () => (
        <svg className="w-12 h-12 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm0-14c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
        </svg>
    );

    return (
        <div className="bg-[#E3F2FF] py-16 md:py-20">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-3 gap-6 md:gap-8">
                    <div className="lg:col-span-2">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
                            <Counter end={7} label="Years of experience" icon={<BrainIcon />} suffix="+" />
                            <Counter end={30} label="Success Stories" icon={<ShieldCheckIcon />} suffix="+" />
                            <Counter end={500} label="Companies Trust Us" icon={<ThumbsUpIcon />} suffix="+" />
                            <Counter end={100} label="Results Guaranteed" icon={<TargetIcon />} suffix="%" />
                        </div>
                    </div>
                    <div className="lg:col-span-1">
                        <div className="relative rounded-3xl overflow-hidden shadow-xl group h-full min-h-[400px]">
                            <img
                                src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=1200&auto=format&fit=crop&q=80"
                                alt="Team collaborating in modern office"
                                className="w-full h-full object-cover transition-transform duration-700 "
                            />
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-700/20 to-blue-700/100" />
                            <div className="absolute bottom-8 left-8 text-white">
                                <p className="text-5xl md:text-6xl font-extrabold drop-shadow-lg mb-2">80+</p>
                                <p className="text-xl md:text-2xl font-semibold drop-shadow-md">employees<br />worldwide</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export { BrandsMarquee, StatsSection };