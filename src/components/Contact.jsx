import { useState } from 'react';

export default function ContactPage() {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        website: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    };

    return (
        <>
            {/* Hero Section */}
            <div className="pt-32 pb-20 px-6 bg-[#020842]">
                <div className="max-w-7xl mx-auto text-center">
                    <div className="mb-6">
                        <span className='text-base text-white'>Contact </span>
                        <span className="bg-[#F44380] text-white px-2 py-[1px] rounded font-semibold text-base">
                            Us
                        </span>
                    </div>
                    <h1 className="text-5xl md:text-6xl lg:text-5xl font-bold text-white mb-6">
                        Contact Us
                    </h1>
                </div>
            </div>

            {/* Contact Info Cards Section */}
            <div className="bg-[#E3F2FF] py-16 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {/* Location Card */}
                        <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                            <div className="flex justify-center mb-6">
                                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center">
                                    <svg className="w-10 h-10 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                                    </svg>
                                </div>
                            </div>
                            <h3 className="text-[#020842] text-xl font-bold text-center mb-4">
                                Location
                            </h3>
                            <p className="text-gray-700 text-center leading-relaxed">
                                Enzer 99, 31655 Stadthagen
                            </p>
                        </div>

                        {/* Contact Card */}
                        <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                            <div className="flex justify-center mb-6">
                                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center">
                                    <svg className="w-10 h-10 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                                    </svg>
                                </div>
                            </div>
                            <h3 className="text-[#020842] text-xl font-bold text-center mb-4">
                                Contact
                            </h3>
                            <p className="text-gray-700 text-center leading-relaxed">
                                +49 155 65673467<br />
                                +49 176 47380688
                            </p>
                        </div>

                        {/* Email Card */}
                        <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                            <div className="flex justify-center mb-6">
                                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center">
                                    <svg className="w-10 h-10 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                                    </svg>
                                </div>
                            </div>
                            <h3 className="text-[#020842] text-xl font-bold text-center mb-4">
                                Email
                            </h3>
                            <p className="text-gray-700 text-center leading-relaxed">
                                info@devspots.de<br />
                                sale@devspots.de
                            </p>
                        </div>

                        {/* Visit Between Card */}
                        <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                            <div className="flex justify-center mb-6">
                                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center">
                                    <svg className="w-10 h-10 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
                                    </svg>
                                </div>
                            </div>
                            <h3 className="text-[#020842] text-xl font-bold text-center mb-4">
                                Visit Between
                            </h3>
                            <p className="text-gray-700 text-center leading-relaxed">
                                Mon - Sat: 8.00-5.00<br />
                                Sunday: Closed
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Form and Map Section */}
            <div className="bg-[#E3F2FF] pb-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-8 items-start">
                        {/* Contact Form */}
                        <div className=" p-8 md:p-10 ">
                            <h2 className="text-3xl md:text-4xl font-bold text-[#020842] mb-3">
                                Send Us A Message
                            </h2>
                            <p className="text-gray-600 mb-8">
                                Give us a chance to serve and bring magic to your brand.
                            </p>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* Full Name and Email Row */}
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-bold text-[#020842] mb-2">
                                            Full Name
                                        </label>
                                        <input
                                            type="text"
                                            name="fullName"
                                            value={formData.fullName}
                                            onChange={handleChange}
                                            placeholder="John Doe"
                                            className="w-full px-4 py-3 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all text-gray-700"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-bold text-[#020842] mb-2">
                                            Your Email
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="example@domain.com"
                                            className="w-full px-4 py-3 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all text-gray-700"
                                        />
                                    </div>
                                </div>

                                {/* Website */}
                                <div>
                                    <label className="block text-sm font-bold text-[#020842] mb-2">
                                        Your Website
                                    </label>
                                    <input
                                        type="text"
                                        name="website"
                                        value={formData.website}
                                        onChange={handleChange}
                                        placeholder="https://yourwebsite.com (optional)"
                                        className="w-full px-4 py-3 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all text-gray-700"
                                    />
                                </div>

                                {/* Message */}
                                <div>
                                    <label className="block text-sm font-bold text-[#020842] mb-2">
                                        Message
                                    </label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows="6"
                                        placeholder="How can we help you?"
                                        className="w-full px-4 py-3 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all resize-none text-gray-700"
                                    ></textarea>
                                </div>

                                {/* Buttons */}
                                <div className="flex flex-col sm:flex-row gap-4">


                                    <button
                                        type="submit"
                                        className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-full font-bold transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
                                    >
                                        SEND MESSAGE
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </button>
                                </div>
                            </form>
                        </div>

                        {/* Map */}
                        <div className="bg-white rounded-3xl overflow-hidden shadow-lg h-full min-h-[600px]">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2435.8547!2d9.2067!3d52.3231!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47ba5f5e8f8f8f8f%3A0x8f8f8f8f8f8f8f8!2sEnzer%2099%2C%2031655%20Stadthagen%2C%20Germany!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                                width="100%"
                                height="100%"
                                style={{ border: 0, minHeight: '600px' }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Location Map"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}