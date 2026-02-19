import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export default function PortfolioDetailPage() {
  const { projectId } = useParams();
  const navigate = useNavigate();

  const allProjects = {
    '1': {
      title: 'Sanaidee Admin',
      subtitle: 'Courier Management System',
      heroImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200',
      gradient: 'from-green-200/40 via-yellow-200/40 to-orange-200/40',
      heroTitle: ['Sanaidee', 'Courier', 'Delivery', 'App', 'Dashboard'],
      description: [
        'Sanaidee Admin is built to handle large-scale courier business operations. The system provides a centralized platform for managing users, vendors, service providers, consumers, and delivery partners — ensuring transparency, automation, and efficiency throughout the delivery process.',
        'Developed using React.js and Laravel, Sanaidee Admin provides real-time dashboards, detailed analytics, and verification modules for vehicles and drivers. The system supports automated order assignment, route optimization, and multi-role authentication, allowing for flexible and secure operations.'
      ],
      services: 'Web Application Development',
      client: 'Sanaidee Logistics',
      location: 'Riyadh, Saudi Arabia',
      completedDate: '15-08-2024',
      keyFeatures: [
        'User and Role Management (Admin, Vendor, Driver, Customer)',
        'Vendor and Service Provider Management',
        'Secure Authentication with Multi-role Access',
        'Order Assignment and Delivery Management',
        'Order Tracking and Real-time Status Updates',
        'Vehicle and Driver Verification System',
        'Dynamic Reporting and Analytics Dashboard',
        'Notification and Alert System'
      ],
      technologies: ['React.js', 'Laravel', 'MySQL', 'REST API', 'Redux', 'Tailwind CSS'],
      solution: 'Our solution ensures that every aspect of the courier workflow — from vendor onboarding to order delivery — is handled within a single system. By combining React\'s speed and Laravel\'s reliability, Sanaidee Admin enhances productivity, reduces manual effort, and ensures transparent communication among all stakeholders.',
      outcome: 'The platform successfully streamlined courier operations, reducing manual processing time by 60% and improving delivery tracking accuracy. The multi-vendor system now handles over 5,000 daily orders with real-time updates and automated assignments.'
    },
    '2': {
      title: 'Soulcast',
      subtitle: 'AI Cloning Application',
      heroImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200',
      gradient: 'from-blue-200/40 via-purple-200/40 to-pink-200/40',
      heroTitle: ['Soulcast', 'AI Cloning', 'Application'],
      description: [
        'Soulcast is an innovative AI-powered platform that enables users to create digital clones and interactive content using advanced machine learning algorithms. The platform leverages cutting-edge AI technology to deliver personalized, engaging experiences.',
        'Built with React.js and Python, Soulcast integrates state-of-the-art AI models for voice cloning, video generation, and interactive content creation. The system provides real-time processing, cloud storage integration, and seamless user experience across devices.'
      ],
      services: 'AI Platform Development',
      client: 'Soulcast Technologies',
      location: 'San Francisco, USA',
      completedDate: '22-09-2024',
      keyFeatures: [
        'AI-Powered Voice Cloning',
        'Video Content Generation',
        'Real-time Processing Engine',
        'Cloud Storage Integration',
        'Multi-device Synchronization',
        'Advanced Analytics Dashboard',
        'Content Management System',
        'User Authentication & Authorization'
      ],
      technologies: ['React.js', 'Python', 'TensorFlow', 'AWS', 'MongoDB', 'WebRTC'],
      solution: 'We developed a comprehensive AI platform that combines multiple machine learning models to deliver high-quality content generation. The system uses advanced algorithms for voice synthesis and video processing while maintaining user privacy and data security.',
      outcome: 'The platform achieved 95% accuracy in voice cloning and processed over 10,000 content pieces in the first month. User engagement increased by 80%, with average session times exceeding 15 minutes.'
    },
    '3': {
      title: 'College Choice 101',
      subtitle: 'ROI Calculator for U.S Students',
      heroImage: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200',
      gradient: 'from-cyan-200/40 via-blue-200/40 to-teal-200/40',
      heroTitle: ['College', 'Choice 101', 'ROI Calculator'],
      description: [
        'College Choice 101 is a comprehensive financial planning tool designed to help U.S. students understand their financial scenario after graduation. The platform provides detailed ROI calculations based on college costs, expected salaries, and loan terms.',
        'Developed using modern web technologies, the platform offers interactive calculators, comparison tools, and personalized recommendations to help students make informed decisions about their education investments.'
      ],
      services: 'Education Technology Platform',
      client: 'Education First',
      location: 'Boston, USA',
      completedDate: '10-07-2024',
      keyFeatures: [
        'ROI Calculator with Multiple Variables',
        'College Comparison Tools',
        'Loan Payment Estimators',
        'Career Salary Projections',
        'Interactive Financial Scenarios',
        'Data Visualization Dashboard',
        'Export Reports to PDF',
        'Mobile-Responsive Design'
      ],
      technologies: ['React.js', 'Node.js', 'PostgreSQL', 'Chart.js', 'Express.js', 'Material-UI'],
      solution: 'Our platform simplifies complex financial calculations and presents data in an easy-to-understand format. Students can compare multiple colleges, adjust variables in real-time, and visualize their financial future through interactive charts.',
      outcome: 'Over 50,000 students used the platform in the first three months, with 85% reporting better understanding of their college investment. The tool helped families save an average of $15,000 through informed decision-making.'
    },
    '4': {
      title: 'Karzoun Chat App',
      subtitle: 'Social Media CRM Application',
      heroImage: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200',
      gradient: 'from-blue-200/40 via-indigo-200/40 to-purple-200/40',
      heroTitle: ['Karzoun', 'Social Media', 'CRM App'],
      description: [
        'Karzoun Chat App is a comprehensive CRM solution designed for social media management. The platform integrates multiple messaging channels into a single interface, enabling businesses to manage customer communications efficiently.',
        'Built with React Native and Node.js, Karzoun provides real-time messaging, automated responses, analytics, and team collaboration features. The system supports multiple social media platforms and offers advanced filtering and search capabilities.'
      ],
      services: 'Mobile App Development & CRM',
      client: 'Karzoun Digital',
      location: 'Dubai, UAE',
      completedDate: '05-06-2024',
      keyFeatures: [
        'Multi-Channel Messaging Integration',
        'Real-time Chat Synchronization',
        'Automated Response System',
        'Team Collaboration Tools',
        'Advanced Analytics & Reporting',
        'Contact Management System',
        'Message Templates & Quick Replies',
        'Push Notifications & Alerts'
      ],
      technologies: ['React Native', 'Node.js', 'Socket.io', 'MongoDB', 'Redis', 'AWS'],
      solution: 'We created a unified platform that brings together all social media conversations in one place. The system uses intelligent routing to assign conversations to the right team members and provides automation tools to handle common queries.',
      outcome: 'Businesses using Karzoun reduced response times by 70% and improved customer satisfaction scores by 45%. The platform now handles over 100,000 conversations daily across multiple channels.'
    },
    '5': {
      title: 'Manthar',
      subtitle: 'E-Ticketing Application',
      heroImage: 'https://images.unsplash.com/photo-1569025690938-a00729c9e1f9?w=1200',
      gradient: 'from-yellow-200/40 via-orange-200/40 to-amber-200/40',
      heroTitle: ['Manthar', 'E-Ticketing', 'Application'],
      description: [
        'Manthar is a modern e-ticketing solution for public transportation systems. The platform enables passengers to book, manage, and use digital tickets seamlessly across multiple transport modes.',
        'Developed with Flutter and Laravel, Manthar offers QR code-based ticketing, real-time seat availability, route planning, and integrated payment systems. The platform ensures secure transactions and provides a smooth user experience.'
      ],
      services: 'Mobile App Development',
      client: 'Transport Authority',
      location: 'Islamabad, Pakistan',
      completedDate: '18-05-2024',
      keyFeatures: [
        'Digital Ticket Booking & Management',
        'QR Code Generation & Scanning',
        'Real-time Seat Availability',
        'Multiple Payment Options',
        'Route Planning & Navigation',
        'Ticket History & Analytics',
        'Push Notifications for Updates',
        'Offline Ticket Access'
      ],
      technologies: ['Flutter', 'Laravel', 'MySQL', 'Stripe API', 'Firebase', 'Google Maps API'],
      solution: 'Our e-ticketing system eliminates the need for physical tickets and reduces queuing times. The platform integrates with existing transport systems and provides real-time updates on schedules and availability.',
      outcome: 'The platform processed over 200,000 digital tickets in the first month, reducing paper waste by 90%. Passenger satisfaction increased by 65% due to convenience and reduced waiting times.'
    },
    '6': {
      title: 'Tour Ease',
      subtitle: 'Tour and Hotel Booking Application',
      heroImage: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1200',
      gradient: 'from-green-200/40 via-emerald-200/40 to-teal-200/40',
      heroTitle: ['Tour Ease', 'Tour & Hotel', 'Booking App'],
      description: [
        'Tour Ease is a comprehensive travel booking platform that combines tour packages and hotel reservations in one seamless application. Users can explore destinations, compare prices, and book complete travel experiences.',
        'Built with React Native and Node.js, Tour Ease offers real-time availability, secure payments, interactive maps, and personalized recommendations based on user preferences and travel history.'
      ],
      services: 'Mobile App Development',
      client: 'Travel Solutions Inc',
      location: 'London, UK',
      completedDate: '30-04-2024',
      keyFeatures: [
        'Integrated Tour & Hotel Booking',
        'Real-time Availability & Pricing',
        'Interactive Maps & Navigation',
        'Personalized Recommendations',
        'Secure Payment Processing',
        'Booking Management Dashboard',
        'Reviews & Ratings System',
        'Multi-language Support'
      ],
      technologies: ['React Native', 'Node.js', 'MongoDB', 'Stripe', 'Google Maps API', 'AWS S3'],
      solution: 'We created an all-in-one travel solution that simplifies the booking process. The platform integrates with multiple hotel and tour providers, offering users the best deals and experiences tailored to their preferences.',
      outcome: 'Tour Ease facilitated over 5,000 bookings in the first quarter, with a 92% customer satisfaction rate. The platform generated $2M in revenue and reduced booking time by 60% compared to traditional methods.'
    }
  };

  // Get the specific project details
  const projectDetails = allProjects[projectId];

  // If project not found, show error or redirect
  if (!projectDetails) {
    return (
      <div className="min-h-screen bg-[#E3F2FF] flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-[#020842] mb-4">Project Not Found</h2>
          <button
            onClick={() => navigate('/portfolio')}
            className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700"
          >
            Back to Portfolio
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#E3F2FF]">
      {/* Hero Section - Dark Blue */}
      <div className="bg-gradient-to-br from-[#020842] via-[#0a1454] to-[#020842] pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="mb-6">
              <span className='text-base text-white'>Portfolio </span>
              <span className="bg-[#F44380] text-white px-2 py-[1px] rounded font-semibold text-base">
                Details
              </span>
            </div>
           <h1 className="text-5xl md:text-6xl lg:text-5xl font-bold text-white mb-6">
              {projectDetails.title} – {projectDetails.subtitle}
            </h1>
          </div>
        </div>
      </div>

      {/* Hero Image Section */}
      <div className={`bg-gradient-to-br ${projectDetails.gradient} py-16 px-6`}>
        <div className="max-w-7xl mx-auto">
          <div className="items-center">
            <div className="relative w-full overflow-hidden rounded-2xl shadow-2xl">
              <div className="aspect-[4/3] md:aspect-[16/9] lg:aspect-[24/10]"> 
                <img
                  src={projectDetails.heroImage}
                  alt={projectDetails.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl lg:text-5xl font-bold text-[#020842] leading-tight">
                {projectDetails.heroTitle.map((line, index) => (
                  <React.Fragment key={index}>
                    {line}
                    {index < projectDetails.heroTitle.length - 1}
                  </React.Fragment>
                ))}
              </h2>
            </div>

          </div>
        </div>
      </div>

      {/* Project Description */}
      <div className="bg-[#E3F2FF] py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#020842] mb-8">
            {projectDetails.title} – {projectDetails.subtitle}
          </h2>

          <div className="space-y-6 text-gray-800 text-lg leading-relaxed">
            {projectDetails.description.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          {/* Project Info Grid */}
          <div className="grid md:grid-cols-4 gap-8 mt-12">
            <div>
              <h3 className="text-sm font-bold text-[#020842] mb-2">SERVICES:</h3>
              <p className="text-gray-800">{projectDetails.services}</p>
            </div>
            <div>
              <h3 className="text-sm font-bold text-[#020842] mb-2">CLIENT:</h3>
              <p className="text-gray-800">{projectDetails.client}</p>
            </div>
            <div>
              <h3 className="text-sm font-bold text-[#020842] mb-2">LOCATION:</h3>
              <p className="text-gray-800">{projectDetails.location}</p>
            </div>
            <div>
              <h3 className="text-sm font-bold text-[#020842] mb-2">COMPLETED DATE:</h3>
              <p className="text-gray-800">{projectDetails.completedDate}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Key Features */}
      <div className="bg-[#E3F2FF] py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#020842] mb-4">
            Key Features
          </h2>
          <p className="text-gray-600 mb-8">portfolioSingle.featuresDescription</p>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-4">
            {projectDetails.keyFeatures.map((feature, index) => (
              <div key={index} className="flex items-start gap-3">
                <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                </svg>
                <span className="text-gray-800 text-lg">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Technologies Used */}
      <div className="bg-[#E3F2FF] py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#020842] mb-8">
            Technologies Used
          </h2>

          <div className="flex flex-wrap gap-4">
            {projectDetails.technologies.map((tech, index) => (
              <span
                key={index}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-bold text-lg hover:bg-blue-700 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Solution & Results */}
      <div className="bg-[#E3F2FF] py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#020842] mb-6">
            Solution & Results
          </h2>
          <p className="text-gray-800 text-lg leading-relaxed mb-12">
            {projectDetails.solution}
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-[#020842] mb-6">
            Project Outcome
          </h2>
          <p className="text-gray-800 text-lg leading-relaxed">
            {projectDetails.outcome}
          </p>
        </div>
      </div>

    </div>
  );
}