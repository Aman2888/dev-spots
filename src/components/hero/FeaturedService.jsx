import React from 'react';
import { Link } from 'react-router-dom';

const services = [
    {
        detail: 'web-development',
        title: 'Web Development',
        tags: ['Frontend', 'Backend'],
        image: 'https://media.istockphoto.com/id/1503858430/vector/website-software-development-concept-web-design-site-and-mobile-app-on-laptop-testing-on.jpg?s=612x612&w=0&k=20&c=k8ckKsgOrPPxohAA_ywg2VXZzdCPptEbOlleRV8Kb7c=',
        size: 'large',
    },
    {
        detail: 'app-development',
        title: 'App Development',
        tags: ['iOS', 'Android'],
        image: 'https://ncube.com/wp-content/uploads/2022/08/Custom-Software-Application-Development.jpg',
        size: 'large',
    },
    {
        detail: 'custom-software-development',
        title: 'Custom Software Development',
        tags: ['Enterprise', 'Solutions'],
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnchDsc4T_inxvznqYgd2_HV1L_3qfH3z_ww&s',
        size: 'small',
    },
    {
        detail: 'ux-ui-design',
        title: 'UX/UI Design',
        tags: ['Design', 'Prototyping'],
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCR2VtMXJJDGdwE-WNkSYNqyByqo3ICu42xw&s',
        size: 'small',
    },
    {
        detail: 'quality-assurance',
        title: 'Quality Assurance',
        tags: ['Testing', 'QA'],
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlj8avKmhfhpvHQCsy3Y3Ce6IRwdUqyPSW6g&s',
        size: 'small',
    },
];

export default function FeaturedService() {
    const largeCards = services.filter(s => s.size === 'large');
    const smallCards = services.filter(s => s.size === 'small');


    return (
        <section className="py-20 px-6 bg-white">
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className="text-center mb-16">
                    <div className="mb-4">
                        <span className="text-gray-700 text-base font-medium">Our </span>
                        <span className="bg-[#F44380] text-white px-2 py-[1px] rounded font-semibold text-base">
                            Specialization
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-[#020842]">
                        Featured Services
                    </h2>
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

                {/* Bottom 3 Small Cards */}
                <div className="grid md:grid-cols-3 gap-8">
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
    );
}