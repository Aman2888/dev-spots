import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function PortfolioPage() {
    const [activeFilter, setActiveFilter] = useState('SEE ALL');

    const portfolioItems = [
        {
            id: 1,
            title: 'Sanaidee Admin',
            subtitle: 'Courier Delivery App Dashboard',
            image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200',
            tags: ['Web App', 'Logistics'],
            category: 'WEB APP',
            gradient: 'from-green-200/40 via-yellow-200/40 to-orange-200/40'
        },
        {
            id: 2,
            title: 'Soulcast',
            subtitle: 'AI Cloning Application',
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200',
            tags: ['AI Platform', 'Video Tech'],
            category: 'AI PLATFORM',
            gradient: 'from-blue-200/40 via-purple-200/40 to-pink-200/40'
        },
        {
            id: 3,
            title: 'College Choice 101',
            subtitle: 'Calculator for U.S Students',
            image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200',
            tags: ['Education', 'ROI Tool'],
            category: 'WEB APP',
            gradient: 'from-cyan-200/40 via-blue-200/40 to-teal-200/40'
        },
        {
            id: 4,
            title: 'Karzoun Chat App',
            subtitle: 'Social Media CRM app',
            image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200',
            tags: ['Mobile App', 'CRM'],
            category: 'MOBILE APP',
            gradient: 'from-blue-200/40 via-indigo-200/40 to-purple-200/40'
        },
        {
            id: 5,
            title: 'Manthar',
            subtitle: 'E-Ticking Application',
            image: 'https://images.unsplash.com/photo-1569025690938-a00729c9e1f9?w=1200',
            tags: ['Mobile App', 'Transportation'],
            category: 'MOBILE APP',
            gradient: 'from-yellow-200/40 via-orange-200/40 to-amber-200/40'
        },
        {
            id: 6,
            title: 'Tour Ease',
            subtitle: 'Tour and hotel booking app',
            image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1200',
            tags: ['Mobile App', 'Travel'],
            category: 'MOBILE APP',
            gradient: 'from-green-200/40 via-emerald-200/40 to-teal-200/40'
        },
    ];

    const filters = ['SEE ALL', 'WEB APP', 'MOBILE APP', 'AI PLATFORM', 'FINTECH'];

    const filteredItems = activeFilter === 'SEE ALL' 
        ? portfolioItems 
        : portfolioItems.filter(item => item.category === activeFilter);

    return (
        <div className="min-h-screen bg-[#E3F2FF]">
            {/* Hero Section */}
            <div className="bg-gradient-to-br from-[#020842] via-[#0a1454] to-[#020842] pt-32 pb-20 px-6">
                <div className="max-w-7xl mx-auto text-center">
                    <div className="mb-6">
               <span className='text-base text-white'> Our </span>
                        <span className="bg-[#F44380] text-white px-2 py-[1px] rounded font-semibold text-base">
                    Portfolio
                </span>
                    </div>
                    <h1 className="text-5xl md:text-6xl lg:text-5xl font-bold text-white mb-6">
                        Our Portfolio
                    </h1>
                </div>
            </div>

            {/* Filter Tabs */}
            <div className="bg-[#E3F2FF] pt-12 pb-8 px-6 sticky top-0 z-10">
                <div className="max-w-2xl bg-white mx-auto">
                    <div className="flex flex-wrap justify-center gap-1">
                        {filters.map((filter) => (
                            <button
                                key={filter}
                                onClick={() => setActiveFilter(filter)}
                                className={`px-6 py-2 rounded-xl font-semibold text-sm md:text-base transition-all duration-300 ${
                                    activeFilter === filter
                                        ? 'bg-blue-600 text-white shadow-lg transform scale-105'
                                        : 'bg-white text-[#020842] hover:bg-blue-200 hover:shadow-lg'
                                }`}
                            >
                                {filter}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Portfolio Grid */}
            <div className="bg-[#E3F2FF] py-12 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-8">
                        {filteredItems.map((item) => (
                            <Link
                                key={item.id}
                                to={`/portfolio/${item.id}`}
                                className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group block"
                            >
                                {/* Image Section */}
                                <div className={`relative h-96 bg-gradient-to-br ${item.gradient} p-8 flex items-center justify-center`}>
                              
                                    <div className="absolute top-8 left-0 right-0 text-center px-8">
                                        <h3 className="text-2xl md:text-3xl font-bold text-[#020842] mb-2">
                                            {item.title.split(' ')[0]}
                                        </h3>
                                        <p className="text-base md:text-lg text-gray-700">
                                            {item.subtitle}
                                        </p>
                                    </div>

                                    {/* Device Mockup */}
                                    <div className="relative z-10 max-w-2xl mx-auto">
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="w-full h-auto object-contain drop-shadow-2xl group-hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>

                                    {/* Decorative Gradient Blobs */}
                                    <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-white/20 to-transparent rounded-full blur-3xl"></div>
                                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-white/20 to-transparent rounded-full blur-3xl"></div>
                                </div>

                                {/* Info Section */}
                                <div className="p-8">
                                    <div className="flex flex-wrap gap-3 mb-4">
                                        {item.tags.map((tag, index) => (
                                            <span
                                                key={index}
                                                className="inline-flex items-center gap-2 text-sm font-semibold text-gray-700"
                                            >
                                                <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
                                                </svg>
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <h2 className="text-2xl md:text-3xl font-bold text-[#020842] mb-2">
                                        {item.title}
                                    </h2>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

        </div>
    );
}