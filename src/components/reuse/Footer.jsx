import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <>
            <section className="relative w-full h-[400px] md:h-[450px] overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: 'url(https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1600)',
                    }}
                >
                    <div className="absolute inset-0 bg-[#1e3a8a]/80"></div>
                </div>

                <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                        Ready to Work, Let's Chat
                    </h2>
                    <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl leading-relaxed">
                        Our team of experts is ready to collaborate with you every step of<br className="hidden md:block" />
                        the way, from initial consultation to implementation.
                    </p>
                    <Link to="/contact" className="bg-blue-700 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center gap-2">
                        CONTACT US TODAY!
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M7 7h10v10" />
                                    </svg>
                    </Link>
                </div>
            </section>

            {/* Main Footer Section */}
            <footer className="w-full bg-[#020842] text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-5">
                    <svg className="w-full h-full" viewBox="0 0 1200 600">
                        <path d="M50,50 L150,50 L150,150 M300,100 L400,100 L400,200 M600,50 L700,50 L700,150 M900,100 L1000,100 L1000,200"
                            stroke="currentColor" strokeWidth="2" fill="none" />
                    </svg>
                </div>

                <div className="relative border-b border-white/10 py-8">
                    <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <div>
                                <p className="text-sm text-white/70">Write to us</p>
                                <a href="mailto:info@devspots.de" className="text-lg font-semibold hover:text-blue-400 transition">
                                    info@devspots.de
                                </a>
                            </div>
                        </div>

                        {/* Phone */}
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                            </div>
                            <div>
                                <p className="text-sm text-white/70">Call Us (Germany)</p>
                                <a href="tel:+4915565673467" className="text-lg font-semibold hover:text-blue-400 transition">
                                    +49 15565 673467
                                </a>
                            </div>
                        </div>

                        {/* Location */}
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </div>
                            <div>
                                <p className="text-sm text-white/70">Our Office</p>
                                <p className="text-lg font-semibold">Enzer 99, 31655 Stadthagen</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main Footer Content */}
                <div className="relative max-w-7xl mx-auto px-6 md:px-8 lg:px-12 py-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                        <div>
                            <h3 className="text-xl font-bold mb-6">Newsletter</h3>
                            <p className="text-white/70 mb-6 leading-relaxed">
                                Sign up to DevSpots weekly newsletter to get the latest updates.
                            </p>
                            <div className="flex gap-2 mb-6">
                                <div className="flex-1 relative">
                                    <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    <input
                                        type="email"
                                        placeholder="Enter your email"
                                        className="w-full bg-white/10 border border-white/20 rounded-lg px-10 py-3 text-white placeholder:text-white/50 focus:outline-none focus:border-blue-500 transition"
                                    />
                                </div>
                                <button className=" hover:bg-white px-4 py-3 rounded-lg transition">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                    </svg>
                                </button>
                            </div>
                            <div className="flex gap-3">
                                <a href="#" className="text-[13px] px-5 py-2 border border-white/30 rounded-full hover:bg-white/10 transition text-sm font-medium">
                                    FACEBOOK
                                </a>
                                <a href="#" className="text-[13px] px-5 py-2 border border-white/30 rounded-full hover:bg-white/10 transition text-sm font-medium">
                                    TWITTER
                                </a>
                            </div>
                            <div className="mt-3">
                                <a href="#" className="text-[13px] px-5 py-2 border border-white/30 rounded-full hover:bg-white/10 transition text-sm font-medium inline-block">
                                    LINKEDIN
                                </a>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-6">Services</h3>
                            <ul className="space-y-3">
                                <li><a href="/services/web-development" className="text-white/80 hover:text-blue-400 transition">Web Development</a></li>
                                <li><a href="/services/app-development" className="text-white/80 hover:text-blue-400 transition">App Development</a></li>
                                <li><a href="/services/custom-software-development" className="text-white/80 hover:text-blue-400 transition">Custom Software Development</a></li>
                                <li><a href="/services/ux-ui-design" className="text-white/80 hover:text-blue-400 transition">UX/UI Design</a></li>
                                <li><a href="/services/gen-ai" className="text-white/80 hover:text-blue-400 transition">Gen AI</a></li>
                                <li><a href="/services/data-analytics" className="text-white/80 hover:text-blue-400 transition">Data Analytics</a></li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold mb-6">Information</h3>
                            <ul className="space-y-3">
                                <li><a href="/about" className="text-white/80 hover:text-blue-400 transition">About DevSpots</a></li>
                                <li><a href="/portfolio" className="text-white/80 hover:text-blue-400 transition">Our Portfolio</a></li>
                                <li><a href="/contact" className="text-white/80 hover:text-blue-400 transition">Contact Us</a></li>
                                <li><a href="/service" className="text-white/80 hover:text-blue-400 transition">Our Services</a></li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
                            <ul className="space-y-3">
                                <li><a href="/portfolio" className="text-white/80 hover:text-blue-400 transition">Portfolio</a></li>
                                <li><a href="/service" className="text-white/80 hover:text-blue-400 transition">All Services</a></li>
                                <li><a href="/blog" className="text-white/80 hover:text-blue-400 transition">Read Blogs</a></li>
                                <li><a href="/contact" className="text-white/80 hover:text-blue-400 transition">Get Support</a></li>
                                <li><a href="/about" className="text-white/80 hover:text-blue-400 transition">Imprint</a></li>
                                <li><a href="/about" className="text-white/80 hover:text-blue-400 transition">Privacy Policy</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

            </footer>
        </>
    );
}