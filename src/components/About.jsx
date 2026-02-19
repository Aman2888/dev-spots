import React from 'react';
import { BrandsMarquee, StatsSection } from './reuse/Brandswork';
import TeamExperts from './expert/Experts';

export default function AboutPage() {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <div className="bg-gradient-to-br from-[#020842] via-[#0a1454] to-[#020842] pt-32 pb-20 px-6">
                <div className="max-w-7xl mx-auto text-center">
                    <div className="mb-6">
                        <span className='text-base text-white'>About </span>
                        <span className="bg-[#F44380] text-white px-2 py-[1px] rounded font-semibold text-base">
                            More Devspots
                        </span>
                    </div>
                    <h1 className="text-5xl md:text-6xl lg:text-5xl font-bold text-white mb-6">
                        About Us
                    </h1>
                </div>
            </div>

            {/* History, Mission, Vision Cards Section */}
            <div className="bg-[#E3F2FF] py-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-3 gap-8">
                        {/* History Card */}
                        <div className="bg-white rounded-3xl p-10 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                            <div className="flex justify-center mb-6">
                                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center">
                                    <svg className="w-10 h-10 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z" />
                                    </svg>
                                </div>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-[#020842] text-center mb-4">
                                Our History
                            </h2>
                            <p className="text-gray-700 text-center leading-relaxed">
                                Since 1997, we have been a visionary and reliable software engineering partner for world-class brands.
                            </p>
                        </div>

                        {/* Mission Card */}
                        <div className="bg-white rounded-3xl p-10 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                            <div className="flex justify-center mb-6">
                                <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center">
                                    <svg className="w-10 h-10 text-red-600" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
                                        <circle cx="12" cy="12" r="3" fill="currentColor" />
                                    </svg>
                                </div>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-[#020842] text-center mb-4">
                                Our Mission
                            </h2>
                            <p className="text-gray-700 text-center leading-relaxed">
                                Our mission is to empower organizations with innovative technology solutions that drive growth and impact.
                            </p>
                        </div>

                        {/* Vision Card */}
                        <div className="bg-white rounded-3xl p-10 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                            <div className="flex justify-center mb-6">
                                <div className="w-20 h-20 bg-pink-100 rounded-full flex items-center justify-center">
                                    <svg className="w-10 h-10 text-pink-600" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
                                    </svg>
                                </div>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-[#020842] text-center mb-4">
                                Our Vision
                            </h2>
                            <p className="text-gray-700 text-center leading-relaxed">
                                We aim to be a global leader in technology innovation, helping businesses shape the future through digital excellence.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <BrandsMarquee />
            <StatsSection />
            <TeamExperts />

            <div className="bg-[#E3F2FF] pb-20 px-6 pt-14">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Left Side - Image */}
                        <div className="order-2 lg:order-1">
                            <div className="rounded-3xl overflow-hidden shadow-2xl">
                                <img
                                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&auto=format&fit=crop&q=80"
                                    alt="Team meeting presentation"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>

                        {/* Right Side - Content */}
                        <div className="order-1 lg:order-2">
                            <div className="mb-8">
                                <span className="bg-gradient-to-r from-pink-500 to-red-500 text-white px-4 py-2 rounded font-semibold text-sm">
                                    Why Us
                                </span>
                                <span className="text-gray-700 text-lg ml-3 font-medium">Better</span>
                            </div>

                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#020842] mb-10 leading-tight">
                                Why Our Services Are Better Than Others?
                            </h2>

                            {/* Features Grid */}
                            <div className="grid sm:grid-cols-2 gap-6">
                                {/* Quality Comes First */}
                                <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
                                            </svg>
                                        </div>
                                        <h3 className="text-lg font-bold text-[#020842]">
                                            Quality Comes First
                                        </h3>
                                    </div>
                                </div>

                                {/* Flexible Cooperation */}
                                <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
                                            </svg>
                                        </div>
                                        <h3 className="text-lg font-bold text-[#020842]">
                                            Flexible Cooperation
                                        </h3>
                                    </div>
                                </div>

                                {/* On-time Delivery */}
                                <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M20 6h-2.18c.11-.31.18-.65.18-1 0-1.66-1.34-3-3-3-1.05 0-1.96.54-2.5 1.35l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm11 15H4v-2h16v2zm0-5H4V8h5.08L7 10.83 8.62 12 11 8.76l1-1.36 1 1.36L15.38 12 17 10.83 14.92 8H20v6z" />
                                            </svg>
                                        </div>
                                        <h3 className="text-lg font-bold text-[#020842]">
                                            On-time Delivery
                                        </h3>
                                    </div>
                                </div>

                                {/* Transparent Costs */}
                                <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z" />
                                            </svg>
                                        </div>
                                        <h3 className="text-lg font-bold text-[#020842]">
                                            Transparent Costs
                                        </h3>
                                    </div>
                                </div>

                                {/* Qualified Developers */}
                                <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M20 18c1.1 0 1.99-.9 1.99-2L22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z" />
                                            </svg>
                                        </div>
                                        <h3 className="text-lg font-bold text-[#020842]">
                                            Qualified Developers
                                        </h3>
                                    </div>
                                </div>

                                {/* Quick Scale-up */}
                                <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94L14.4 2.81c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z" />
                                            </svg>
                                        </div>
                                        <h3 className="text-lg font-bold text-[#020842]">
                                            Quick Scale-up
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}