import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BrandsMarquee, StatsSection } from '../reuse/Brandswork';
import Experts from '../expert/Experts'
import FeaturedService from './FeaturedService'
import OurRecentWork from './OurRecentWorks';

export default function Hero() {
    const blogPosts = [
        {
            image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800",
            category: "Web Development",
            title: "Why React Remains the Most Popular Frontend Library in 2025",
            imageOverlay: {
                title: "Why React Remains",
                subtitle: "the Most Popular Frontend Library in 2025"
            }
        },
        {
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",
            category: "Mobile App Development",
            title: "Unlocking ROI: How Strategic Application Development Drives Business Growth",
            imageOverlay: {
                title: "Unlocking ROI",
                subtitle: "How Strategic Application Development Drives Business Growth"
            }
        },
        {
            image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800",
            category: "Generative AI",
            title: "From Creativity to Automation: Uses and Opportunities of Generative AI",
            imageOverlay: {
                title: "FROM CREATIVITY",
                subtitle: "TO AUTOMATION – Uses and Opportunities of Generative AI"
            }
        }
    ];
    const navigate = useNavigate();

    const goToContact = () => {
        navigate('/contact');
    };
    return (
        <>
            {/* Hero Section */}
            <section className="pt-18 md:pt-10 pb-20 md:pb-12 w-full relative overflow-hidden">
                <div className="flex flex-col md:flex-row items-center relative z-10 w-full gap-6">

                    {/* Left - Text Content */}
                    <div className="relative w-full md:w-2/3 px-8 md:px-12 lg:px-36 py-20">
                        {/* Sky blue background */}
                        <div className="absolute rounded-[20px] inset-0 -z-10 bg-[#E3F0FF] opacity-80" />

                        <div className="relative z-10">
                            <div className="mb-4 flex items-center gap-2">
                                <span className='text-base text-black'>Hi We</span>
                                <span className="bg-[#F44380] text-white px-2 py-[1px] rounded font-semibold text-base">
                                    Are Devspots
                                </span>
                            </div>

                            <h1 className="text-[#020842] text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 md:mb-8">
                                Grow your <br />business<br />
                                sustainably with <br />
                                IT solution<br />
                                technologies
                            </h1>

                            <p className="text-lg md:text-xl text-gray-700 mb-8 md:mb-10 leading-relaxed max-w-lg">
                                In today's competitive business, the demand for efficient and cost-effective IT solutions has never been more critical.
                            </p>

                            <button onClick={goToContact} className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-bold text-base flex items-center gap-2 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                                BOOK A CONSULTATION
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M7 7h10v10" />
                                </svg>
                            </button>

                            <div className="flex  gap-3">
                                <div className="flex text-green-500 text-xl">★★★★★</div>
                                <div>
                                    <p className="font-bold text-xl text-[#020842]">4.8</p>
                                    <p className="text-sm text-gray-600">From <span className="font-semibold">200+</span> reviews</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right */}
                    <div className="w-full md:w-1/2 grid grid-cols-2 min-h-[540px]">

                        {/* Top Left  */}
                        <div className="overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800"
                                alt="Developer coding"
                                className="w-full h-[300px] object-cover"
                            />
                        </div>

                        {/* Top Right - Orange 150+ */}
                        <div className="bg-[#FB7929] flex flex-col rounded-[45%_8%_8%_45%] h-[420px] items-start justify-center px-8 py-8">
                            <p className="text-white text-6xl lg:text-7xl font-extrabold mb-2">150+</p>
                            <p className="text-white text-sm leading-snug mb-5">
                                Countries worldwide,<br />countless satisfied clients
                            </p>
                            <div className="flex -space-x-3">
                                <img src="https://i.pravatar.cc/150?img=12" alt="" className="w-11 h-11 rounded-full border-2 border-white" />
                                <img src="https://i.pravatar.cc/150?img=13" alt="" className="w-11 h-11 rounded-full border-2 border-white" />
                                <img src="https://i.pravatar.cc/150?img=14" alt="" className="w-11 h-11 rounded-full border-2 border-white" />
                                <img src="https://i.pravatar.cc/150?img=15" alt="" className="w-11 h-11 rounded-full border-2 border-white" />
                            </div>
                        </div>

                        {/* Bottom Left - Pink Service Tags */}
                        <div className="bg-[#F44380] flex items-center justify-center px-6 py-8 h-[320px] rounded-[0%_50%_0%_2%]">
                            <div className="text-white space-y-3">
                                <div className="flex gap-2 items-center">
                                    <span className="border-2 border-white rounded-full px-4 py-2 text-sm font-semibold whitespace-nowrap">
                                        Data Security
                                    </span>
                                    <span className="w-8 h-8 border-2 border-white rounded-full flex items-center justify-center text-lg font-bold flex-shrink-0">+</span>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <span className="w-8 h-8 border-2 border-white rounded-full flex items-center justify-center text-lg font-bold flex-shrink-0">+</span>
                                    <span className="border-2 border-white rounded-full px-4 py-2 text-sm font-semibold whitespace-nowrap">
                                        Web Development
                                    </span>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <span className="border-2 border-white rounded-full px-4 py-2 text-sm font-semibold whitespace-nowrap">
                                        Analytics & Optimization
                                    </span>
                                    <span className="w-8 h-8 border-2 border-white rounded-full flex items-center justify-center text-lg font-bold flex-shrink-0">+</span>
                                </div>
                            </div>
                        </div>

                        {/* Bottom Right - Purple/Rainbow 88% */}
                        <div className="bg-gradient-to-br from-[#090301] via-[#1C163B] to-[#3CA0BE] flex items-center justify-center">
                            <div className="w-[200px] h-[200px] bg-white rounded-full flex flex-col items-center justify-center shadow-xl">
                                <p className="text-6xl font-extrabold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                                    88%
                                </p>
                                <p className="text-center text-xs text-gray-700 px-6 mt-2 leading-tight font-medium">
                                    Unlock 88% of the best services and accelerate your business growth
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <BrandsMarquee />
            <StatsSection />

            {/* Client Commitment Section */}
            <section className="py-20 px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Left - Content */}
                        <div className="relative">
                            <img
                                src="https://png.pngtree.com/png-clipart/20230928/original/pngtree-flat-vector-illustration-depicting-customer-service-and-communication-through-call-centers-png-image_12897662.png"
                                alt="Client satisfaction illustration"
                                className="w-full h-auto"
                            />
                        </div>

                        {/* Right - Content */}
                        <div>
                            <div className="mb-6">
                                <span className="text-gray-700 text-base font-medium">We are </span>
                                <span className="bg-[#F44380] text-white px-2 py-[1px] rounded font-semibold text-base">
                                    Devspots
                                </span>
                            </div>

                            <h2 className="text-4xl md:text-5xl font-semibold text-[#020842] mb-6 leading-tight">
                                Our Commitment to <br /> Client Satisfaction
                            </h2>

                            <p className="text-gray-700 text-xl font-medium mb-8 leading-relaxed">
                                At Devspots, our commitment to client satisfaction is at <br /> the core of everything we do. We understand that our <br /> clients' success drives our own growth.
                            </p>

                            <div className="space-y-4 mb-8">
                                <div className="flex items-start gap-3">
                                    <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 flex-shrink-0"></div>
                                    <p className="text-gray-800 text-lg">Grow your business the right way.</p>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 flex-shrink-0"></div>
                                    <p className="text-gray-800 text-lg">Let business growth help your business grow.</p>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 flex-shrink-0"></div>
                                    <p className="text-gray-800 text-lg">Helping you to get better.</p>
                                </div>
                            </div>

                            <button
                                onClick={goToContact}
                                className="bg-blue-700 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold text-base flex items-center gap-2 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                            >
                                BOOK A CONSULTATION
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M7 7h10v10" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Three Feature Cards */}
                    <div className="grid md:grid-cols-3 gap-8 mt-20">

                        {/* Expert Team Members */}
                        <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all flex items-start gap-5">
                            <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0">
                                <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                                    <circle cx="18" cy="8" r="2" fill="currentColor" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-[#020842] mb-2">Expert Team Members</h3>
                                <p className="text-gray-500 text-sm leading-relaxed">
                                    We take pride in assembling a diverse and highly skilled team.
                                </p>
                            </div>
                        </div>

                        {/* Fastest Customer Service */}
                        <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all flex items-start gap-5">
                            <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0">
                                <svg className="w-8 h-8 text-pink-500" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-[#020842] mb-2">Fastest Customer Service</h3>
                                <p className="text-gray-500 text-sm leading-relaxed">
                                    We pride ourselves on providing the fastest customer service in the industry.
                                </p>
                            </div>
                        </div>

                        {/* Reasonable Pricing */}
                        <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all flex items-start gap-5">
                            <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0">
                                <svg className="w-8 h-8 text-pink-500" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-[#020842] mb-2">Reasonable Pricing</h3>
                                <p className="text-gray-500 text-sm leading-relaxed">
                                    We believe in providing reasonable pricing that offers exceptional value.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <FeaturedService />
            <OurRecentWork />
            <Experts />

            {/* Latest Articles  */}
            <div className='w-full bg-[#ddeefa]'>
                <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 py-16 md:py-20">
                    <div className="text-center mb-12 md:mb-16">
                        <div className="inline-block mb-3"><span className="bg-[#F44380] text-white px-2 py-[1px] rounded font-semibold text-base mr-1">
                            Blog
                        </span>
                            <span className="text-gray-700 text-base font-medium">Updates</span></div>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#020842] text-center mb-12 md:mb-16">
                            Latest Articles & Posts
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                        {blogPosts.map((post, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
                            >
                                {/* Image */}
                                <div className="relative h-56 overflow-hidden">
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    {/* Overlay text on image — top-left aligned like in image */}
                                    <div className="absolute inset-0 flex items-start justify-start p-5">
                                        <div className="text-white">
                                            <h3 className="text-base md:text-lg font-bold leading-snug drop-shadow-md max-w-[70%]">
                                                {post.imageOverlay?.title || post.title}
                                            </h3>
                                            {post.imageOverlay?.subtitle && (
                                                <p className="text-sm font-medium opacity-90 mt-1 max-w-[65%] drop-shadow-sm">
                                                    {post.imageOverlay.subtitle}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                {/* Card body */}
                                <div className="p-6">
                                    {/* Category + icons row */}
                                    <div className="flex items-center justify-between mb-4">
                                        <span className="text-sm font-medium text-gray-600 border border-gray-300 px-3 py-1 rounded-full">
                                            {post.category}
                                        </span>
                                        <div className="flex gap-2">
                                            <button className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded-full transition">
                                                <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                                                </svg>
                                            </button>
                                            <button className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded-full transition">
                                                <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-xl font-bold text-[#020842] mb-6 leading-snug group-hover:text-blue-700 transition-colors">
                                        {post.title}
                                    </h3>

                                    {/* Read More — dark circle arrow + text (exactly like image) */}
                                    <button className="flex items-center gap-3 group/btn">
                                        <span className="w-11 h-11 rounded-full bg-[#020842] flex items-center justify-center group-hover/btn:bg-blue-600 transition-colors duration-300 flex-shrink-0">
                                            <svg className="w-5 h-5 text-white -rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                            </svg>
                                        </span>
                                        <span className="text-[#020842] font-semibold text-base group-hover/btn:text-blue-600 transition-colors duration-300">
                                            Read More
                                        </span>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}