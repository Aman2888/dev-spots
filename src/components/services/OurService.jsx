import React from 'react';
import { Link } from 'react-router-dom';

const allServices = [
    { detail: 'web-development', title: 'Web Development', tags: ['Frontend', 'Backend'], image: 'https://media.istockphoto.com/id/1503858430/vector/website-software-development-concept-web-design-site-and-mobile-app-on-laptop-testing-on.jpg?s=612x612&w=0&k=20&c=k8ckKsgOrPPxohAA_ywg2VXZzdCPptEbOlleRV8Kb7c=', size: 'large' },
    { detail: 'app-development', title: 'App Development', tags: ['iOS', 'Android'], image: 'https://ncube.com/wp-content/uploads/2022/08/Custom-Software-Application-Development.jpg', size: 'large' },
    { detail: 'custom-software-development', title: 'Custom Software Development', tags: ['Enterprise', 'Solutions'], image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnchDsc4T_inxvznqYgd2_HV1L_3qfH3z_ww&s', size: 'small' },
    { detail: 'ux-ui-design', title: 'UX/UI Design', tags: ['Design', 'Prototyping'], image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCR2VtMXJJDGdwE-WNkSYNqyByqo3ICu42xw&s', size: 'small' },
    { detail: 'quality-assurance', title: 'Quality Assurance', tags: ['Testing', 'QA'], image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlj8avKmhfhpvHQCsy3Y3Ce6IRwdUqyPSW6g&s', size: 'small' },
    { detail: 'cloud-maintenance-integration', title: 'Cloud Maintenance & Integration', tags: ['Monitoring', 'Support'], image: 'https://conneximity.com/wp-content/uploads/2025/05/Cloud-Maintenance-Integration.webp', size: 'small' },
    { detail: 'saas-solutions', title: 'SaaS Solutions', tags: ['Multi-tenant', 'Subscription'], image: 'https://cdn.sanity.io/images/91rk3dzx/production/5853dfc6d4a64eac29f7c626d95b9797c8ac01df-1178x613.jpg', size: 'small' },
    { detail: 'e-commerce', title: 'E-commerce', tags: ['Shopify', 'WooCommerce'], image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuo97ekszdsC_ELxFej_JzssUNPqnUek6B0Q&s', size: 'small' },
    { detail: 'gen-ai', title: 'Gen AI', tags: ['LLM', 'Automation'], image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYqAKZmufTUmYsrG0JCnRdEWGDqv5YUdcM6w&s', size: 'small' },
    { detail: 'data-analytics', title: 'Data Analytics', tags: ['BI', 'Insights'], image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzJwllMIALciB8qE_9Vmsg7j2rEL369y0O1w&s', size: 'small' },
    { detail: 'devops', title: 'DevOps', tags: ['CI/CD', 'Docker'], image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIWdJb_AQ9xCdJS6I9VjY3tcr-M5KZG0iW-Q&s', size: 'small' },
    { detail: 'staff-augmentation', title: 'Staff Augmentation', tags: ['Remote', 'Teams'], image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwe-iF4fJLhWAbZ8daRm8X95Go69xMiNB6Tw&s', size: 'small' },
];

export default function ServicesPage() {
    const largeCards = allServices.filter(s => s.size === 'large');
    const smallCards = allServices.filter(s => s.size === 'small');

    return (
        <div className="min-h-screen">

            {/* Hero */}
            <div className="bg-gradient-to-br from-[#020842] via-[#0a1454] to-[#020842] pt-32 pb-20 px-6">
                <div className="max-w-7xl mx-auto text-center">
                    <div className="mb-6">
                        <span className='text-base text-white'>Our Main </span>
                        <span className="bg-[#F44380] text-white px-2 py-[1px] rounded font-semibold text-base">Services</span>
                    </div>
                    <h1 className="text-5xl md:text-6xl lg:text-5xl font-bold text-white mb-6">
                        Our Services</h1>
                </div>
            </div>

            {/* Tailored IT Solutions */}
            <div className="bg-[#E3F2FF] py-16 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="mb-4">
                                <span className='text-base text-black'>We Are </span>
                                <span className="bg-[#F44380] text-white px-2 py-[1px] rounded font-semibold text-base">IT Guidance</span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold text-[#020842] mb-6 leading-tight">Tailored IT Solutions for Your Success</h2>
                            <p className="text-gray-700 text-lg leading-relaxed mb-8">We understand that every business is unique, with its own set of challenges, goals, and aspirations. That's why we offer tailored IT solutions designed.</p>
                            <Link to="/contact" className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-bold text-base transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1">
                                TALK TO AN EXPERT
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" /></svg>
                            </Link>
                        </div>
                        <div className="flex justify-center">
                            <img src="https://craftedelitesolutions.com/wp-content/uploads/2024/07/CraftedElite-Solutions_Website-Icon-3.png" alt="IT Solutions" className="w-full max-w-lg h-auto"
                                onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800'; e.target.className = 'w-full max-w-lg h-80 object-cover rounded-3xl shadow-xl'; }} />
                        </div>
                    </div>
                </div>
            </div>

            {/* Featured Services */}
            <section className="py-20 px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <div className="mb-4">
                            <span className='text-base text-black'>Our </span>
                           <span className="bg-[#F44380] text-white px-2 py-[1px] rounded font-semibold text-base">Specialization</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-[#020842]">Featured Services</h2>
                    </div>

                    {/* Top 2 Large Cards */}
                    <div className="grid md:grid-cols-2 gap-8 mb-8">
                        {largeCards.map((service) => (
                            <Link key={service.detail} to={`/services/${service.detail}`} className="relative rounded-3xl overflow-hidden shadow-xl group h-[420px] block">
                                <img src={service.image} alt={service.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />

                                <div className="absolute bottom-2 left-2 right-2 rounded-[20px] backdrop-blur-md bg-black/40 px-6 py-5">
                                    <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                                    <div className="flex items-center justify-between">
                                        <div className="w-11 h-11 bg-white rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-pink-500 transition-colors duration-300">
                                            <svg className="w-5 h-5 text-pink-500 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
                                            </svg>
                                        </div>
                                        <div className="flex gap-2">
                                            {service.tags.map(tag => (
                                                <span key={tag} className="border border-white/50 text-pink-600 px-3 py-1.5 rounded-lg text-xs font-semibold bg-black/20">{tag}</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                    {/* Small Cards - 3 per row */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {smallCards.map((service) => (
                            <Link key={service.detail} to={`/services/${service.detail}`} className="relative rounded-3xl overflow-hidden shadow-xl group h-80 block">
                                <img src={service.image} alt={service.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />

                                <div className="absolute bottom-2 left-2 right-2 rounded-[20px] backdrop-blur-md bg-black/40 px-5 py-4">
                                    <h3 className="text-lg font-bold text-white mb-3 leading-tight">{service.title}</h3>
                                    <div className="flex items-center justify-between">
                                        <div className="w-9 h-9 bg-white rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-pink-500 transition-colors duration-300">
                                            <svg className="w-4 h-4 text-pink-500 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
                                            </svg>
                                        </div>
                                        <div className="flex gap-2 flex-wrap justify-end">
                                            {service.tags.map(tag => (
                                                <span key={tag} className="border border-white/50 text-pink-600 px-3 py-1.5 rounded-lg text-xs font-semibold bg-black/20">{tag}</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                </div>
            </section>


        </div>
    );
}