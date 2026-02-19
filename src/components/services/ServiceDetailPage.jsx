import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { servicesData } from './ServiceData';

export default function ServiceDetailPage() {
    const { serviceDetail } = useParams();
    const navigate = useNavigate();
    const [openStep, setOpenStep] = useState(0);
    const [activeTech, setActiveTech] = useState('Web Platform');

    const service = servicesData[serviceDetail];

    if (!service) {
        return (
            <div className="min-h-screen bg-[#E3F2FF] flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-[#020842] mb-4">Service Not Found</h2>
                    <button onClick={() => navigate('/')} className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700">Go Home</button>
                </div>
            </div>
        );
    }

    const techTabs = Object.keys(service.techCategories);

    return (
        <div className="min-h-screen">
            <div className="bg-gradient-to-br from-[#020842] via-[#0a1454] to-[#020842] pt-32 pb-20 px-6">
                <div className="max-w-7xl mx-auto text-center">
                    <div className="mb-6">
                        <span className='text-base text-white'>Services </span>
                        <span className="bg-[#F44380] text-white px-2 py-[1px] rounded font-semibold text-base">Details</span>
                    </div>
                    <h1 className="text-5xl md:text-6xl lg:text-5xl font-bold text-white mb-6">{service.title}</h1>
                </div>
            </div>

            <div className="bg-[#E3F2FF] py-16 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className=" rounded-3xl overflow-hidden shadow-2xl mb-12 h-96 md:h-[480px]">
                        <img src={service.image} alt={service.title} className="w-full h-full object-fill" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-[#020842] mb-6">{service.title}</h2>
                    <p className="text-gray-800 text-lg leading-relaxed mb-6">{service.description}</p>
                    <p className="text-gray-800 text-lg leading-relaxed">{service.description2}</p>
                </div>
            </div>

            <div className="bg-[#E3F2FF] py-16 px-6">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#020842] mb-3">Key Features</h2>
                    <p className="text-gray-600 mb-8 text-lg">Our {service.title} offering includes the following comprehensive features and capabilities:</p>
                    <div className="space-y-4">
                        {service.keyFeatures.map((feature, index) => (
                            <div key={index} className="flex items-center gap-4">
                                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                                    <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" /></svg>
                                </div>
                                <span className="text-gray-800 text-lg">{feature}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="bg-[#E3F2FF] py-16 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 items-start">
                        <div>
                            <p className="text-blue-600 font-semibold text-sm tracking-widest uppercase flex items-center gap-2 mb-4">
                                WORKING PROCESS
                                <span className="w-8 h-0.5 bg-blue-600 inline-block" />
                                <span className="w-2 h-2 bg-blue-600 rounded-full inline-block" />
                            </p>
                            <h2 className="text-4xl md:text-5xl font-bold text-[#020842] mb-10">Our Approach</h2>
                            <div className="space-y-2">
                                {service.approachSteps.map((step, index) => (
                                    <div key={index} className="border-b border-gray-200 last:border-0">
                                        <button onClick={() => setOpenStep(openStep === index ? -1 : index)} className="w-full flex justify-between items-center py-5 text-left">
                                            <span className="font-semibold text-[#020842] text-lg">0{index + 1}. {step.title}</span>
                                            <span className="text-2xl text-blue-600 font-bold">{openStep === index ? '−' : '+'}</span>
                                        </button>
                                        {openStep === index && (
                                            <div className="pb-5">
                                                <div className="bg-blue-200 rounded-xl p-5">
                                                    <p className="text-gray-700 leading-relaxed">{step.desc}</p>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="flex flex-col items-center justify-center gap-0 pt-8">
                            {service.approachSteps.map((step, index) => (
                                <div
                                    key={index}
                                    onClick={() => setOpenStep(index)}
                                    className={`cursor-pointer w-full min-h-36 max-w-md py-5 flex items-center justify-center rounded-[60%_50%_60%_50%] border-2 
                                        text-xl font-semibold transition-all duration-300 -mt-9 first:mt-0 shadow-md ${openStep === index
                                            ? 'bg-blue-600 border-blue-600 text-white shadow-xl scale-105 z-10 relative'
                                            : 'bg-transparent border-[#020842] text-[#020842]'
                                        }`}
                                >
                                    {step.title}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-[#E3F2FF] py-16 px-6">
                <div className="max-w-7xl mx-auto">
                    <p className="text-blue-600 font-semibold text-sm tracking-widest uppercase flex items-center gap-2 justify-center mb-4">
                        OUR TECHNOLOGIES
                        <span className="w-8 h-0.5 bg-blue-600 inline-block" />
                        <span className="w-2 h-2 bg-blue-600 rounded-full inline-block" />
                    </p>
                    <h2 className="text-4xl md:text-5xl font-bold text-[#020842] text-center mb-10">We Use Technologies</h2>
                    <div className="flex flex-wrap justify-center gap-2 mb-12 bg-gray-100 rounded-full p-1.5 max-w-3xl mx-auto">
                        {techTabs.map((tab) => (
                            <button key={tab} onClick={() => setActiveTech(tab)} className={`px-5 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 ${activeTech === tab ? 'bg-white text-[#020842] shadow-md' : 'text-gray-600 hover:text-[#020842]'}`}>{tab}</button>
                        ))}
                    </div>
                    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8">
                        {(service.techCategories[activeTech] || []).map((tech, index) => (
                            <div key={index} className="flex flex-col items-center gap-3 group">
                                <div className="w-20 h-20 bg-white shadow-md rounded-2xl flex items-center justify-center group-hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1" style={{ clipPath: 'polygon(25% 5%, 75% 5%, 100% 50%, 75% 95%, 25% 95%, 0% 50%)' }}>
                                    <img src={tech.icon} alt={tech.name} className="w-10 h-10 object-contain" onError={(e) => { e.target.style.display = 'none'; }} />
                                </div>
                                <span className="text-[#020842] font-medium text-sm text-center">{tech.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="bg-[#E3F2FF] py-16 px-6">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#020842] mb-6">Service Categories</h2>
                    <div className="flex flex-wrap gap-3 mb-16">
                        {service.keyFeatures.slice(0, 2).map((feature, index) => (
                            <span key={index} className={`px-5 py-2 rounded-lg font-semibold text-white text-sm ${index % 2 === 0 ? 'bg-blue-600' : 'bg-gradient-to-r from-pink-500 to-red-500'}`}>
                                {feature.split(' ').slice(0, 2).join(' ')}
                            </span>
                        ))}
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-[#020842] mb-4">Our Approach</h2>
                    <p className="text-gray-700 text-lg leading-relaxed mb-16 max-w-4xl">
                        We follow a structured and proven methodology to deliver exceptional results. Our approach combines technical expertise with business acumen to ensure successful project outcomes.
                    </p>
                    <h2 className="text-3xl md:text-4xl font-bold text-[#020842] mb-8">Why Choose Our {service.title}?</h2>
                    <div className="grid md:grid-cols-2 gap-x-16 gap-y-5">
                        {[
                            'Expert team with years of industry experience',
                            'Dedicated support and maintenance',
                            'Proven track record of successful projects',
                            'Competitive pricing and flexible engagement models',
                            'Agile and transparent development process',
                            'Focus on quality and timely delivery',
                        ].map((item, index) => (
                            <div key={index} className="flex items-center gap-4">
                                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                                    <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" /></svg>
                                </div>
                                <span className="text-gray-800 text-lg">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </div>
    );
}