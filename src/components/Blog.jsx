import { useState } from 'react';

export default function BlogPage() {
    const blogPosts = [
        {
            id: 1,
            image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800",
            category: "Web Development",
            title: "Why React Remains the Most Popular Frontend Library in 2025",
            excerpt: "In the ever-evolving world of web development, trends come and go, but React has consistently held its ground as the leading...",
            imageText: "Why React Remains the Most Popular Frontend Library in 2025"
        },
        {
            id: 2,
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",
            category: "Mobile App Development",
            title: "Unlocking ROI: How Strategic Application Development Drives Business Growth",
            excerpt: "Strategic application development is a disciplined approach where every technical decision maps back to business objectives...",
            imageText: "ROI: Strategic Application Development Drives Business Growth"
        },
        {
            id: 3,
            image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800",
            category: "Generative AI",
            title: "From Creativity to Automation: Uses and Opportunities of Generative AI",
            excerpt: "Generative artificial intelligence is reshaping how organisations and creators solve problems. Once mostly confined to labs...",
            imageText: "From Creativity to Automation: Uses and Opportunities of Generative AI"
        },
        {
            id: 4,
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
            category: "Generative AI",
            title: "Why Backend Optimization Matters More Than Ever in 2025",
            excerpt: "In a digital world where attention spans are shorter than ever, performance is everything. Whether someone is using a SaaS...",
            imageText: "Backend Optimization Matters More Than Ever in 2025"
        }
    ];

    const relatedPosts = [
        "Why React Remains the Most Popular Frontend Library in 2025",
        "Unlocking ROI: How Strategic Application Development Drives Business Growth",
        "From Creativity to Automation: Uses and Opportunities of Generative AI"
    ];

    const categories = [
        "Web Development",
        "App Development",
        "Custom Software Development",
        "UX/UI Design",
        "Quality Assurance",
        "Gen AI"
    ];

    return (
        <div className="min-h-screen bg-[#E3F2FF]">
            {/* Hero Section */}
            <div className="bg-gradient-to-br from-[#020842] via-[#0a1454] to-[#020842] pt-32 pb-20 px-6">
                <div className="max-w-7xl mx-auto text-center">
                    <div className="mb-6">
                        <span className='text-base text-white'>Our </span>
                        <span className="bg-[#F44380] text-white px-2 py-[1px] rounded font-semibold text-base">
                            Blogs
                        </span>
                    </div>
                    <h1 className="text-5xl md:text-6xl lg:text-5xl font-bold text-white mb-6">
                        Our Latest Blog
                    </h1>
                </div>
            </div>

            {/* Blog Content Section */}
            <div className="py-16 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-3 gap-8">
                        {/* Left Side */}
                        <div className="lg:col-span-2 space-y-6">
                            {blogPosts.map((post) => (
                                <div
                                    key={post.id}
                                    className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                                >
                                    <div className="grid md:grid-cols-5 gap-0">
                                        {/* Image Section */}
                                        <div className="md:col-span-2 relative h-64 md:h-auto overflow-hidden bg-gradient-to-br from-slate-900 to-slate-700">
                                            <img
                                                src={post.image}
                                                alt={post.title}
                                                className="w-full h-full object-cover opacity-70"
                                            />
                                            <div className="absolute inset-0 flex items-center justify-center p-6">
                                                <h3 className="text-white text-xl md:text-2xl font-bold text-center leading-tight">
                                                    {post.imageText}
                                                </h3>
                                            </div>
                                        </div>

                                        {/* Content Section */}
                                        <div className="md:col-span-3 p-8">
                                            <span className="inline-block text-sm font-medium text-gray-600 bg-gray-100 px-4 py-2 rounded-full mb-4">
                                                {post.category}
                                            </span>

                                            <h2 className="text-2xl md:text-3xl font-bold text-[#020842] mb-4 leading-tight">
                                                {post.title}
                                            </h2>

                                            <p className="text-gray-700 leading-relaxed mb-6">
                                                {post.excerpt}
                                            </p>

                                            <button className="flex items-center gap-2 bg-[#020842] hover:bg-blue-700 text-white px-6 py-3 rounded-full font-bold transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg">
                                                READ MORE
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Sidebar - Right Side */}
                        <div className="lg:col-span-1 space-y-6">
                            {/* Related Posts */}
                            <div className="bg-white rounded-3xl p-8 shadow-lg">
                                <h3 className="text-2xl font-bold text-[#020842] mb-6">
                                    RELATED POSTS
                                </h3>
                                <div className="space-y-4">
                                    {relatedPosts.map((post, index) => (
                                        <div
                                            key={index}
                                            className="p-4 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-all cursor-pointer"
                                        >
                                            <p className="text-[#020842] font-semibold leading-tight">
                                                {post}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Categories */}
                            <div className=" p-8 ">
                                <h3 className="text-2xl font-bold text-[#020842] mb-6">
                                    CATEGORIES
                                </h3>
                                <div className="space-y-3">
                                    {categories.map((category, index) => (
                                        <div
                                            key={index}
                                            className="text-gray-700 hover:text-blue-600 font-medium cursor-pointer transition-colors py-2 border-b border-gray-290 last:border-0"
                                        >
                                            {category}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}