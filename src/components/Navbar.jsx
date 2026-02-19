import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleServices = () => {
    setIsServicesOpen(!isServicesOpen);
  };

  const navLinks = [
    { name: 'Home', to: '/' },
    { name: 'Portfolio', to: '/portfolio' },
    { name: 'Services', to: '#', isDropdown: true },
    { name: 'About Us', to: '/about' },
    { name: 'Blog', to: '/blog' },
    { name: 'Contact', to: '/contact' },
  ];

  const servicesItems = [
    { name: "Web Development", detail: "web-development" },
    { name: "App Development", detail: "app-development" },
    { name: "Custom Software Development", detail: "custom-software-development" },
    { name: "UX/UI Design", detail: "ux-ui-design" },
    { name: "Quality Assurance", detail: "quality-assurance" },
    { name: "Gen AI", detail: "gen-ai" },
    { name: "Data Analytics", detail: "data-analytics" },
    { name: "DevOps", detail: "devops" },
    { name: "Cloud Maintenance & Integration", detail: "cloud-maintenance-integration" },
    { name: "SaaS Solutions", detail: "saas-solutions" },
    { name: "E-commerce", detail: "e-commerce" },
    { name: "Staff Augmentation", detail: "staff-augmentation" },
  ];

  return (
    <nav
      className={`
        fixed left-0 right-0 z-40
        transition-all duration-400 ease-in-out
        ${isScrolled
          ? 'top-0 py-3 md:py-4 bg-white/100 backdrop-blur-sm shadow-lg rounded-none'
          : 'top-[50px] py-4 md:py-5 bg-white/100 backdrop-blur-md shadow-md rounded-t-[40px] rounded-b-none'
        }
      `}
    >
      <div className="w-full px-6 md:px-8 lg:px-12 flex items-center justify-between">
        {/* Logo */}
        <NavLink
          to="/"
          className={`
    font-bold
    ${isScrolled ? 'text-xl' : 'text-2xl'}
  `}
        >
          <span className="bg-blue-950 bg-clip-text text-transparent">
            DEV
          </span>
          <span className="bg-gradient-to-r from-[#F77A29] to-[#EE600F] bg-clip-text text-transparent">
            SPOTS
          </span>
        </NavLink>

        {/* Desktop Menu */}
        <div className="hidden md:flex flex-1 items-center justify-center space-x-6 lg:space-x-8 text-[#020842] font-medium">
          {navLinks.map((link) => (
            <div key={link.name} className="relative">
              {link.isDropdown ? (
                <div className="relative group ">
                  <button className="hover:text-blue-500 transition flex items-center gap-1 py-2">
                    {link.name} <span className="text-xs opacity-70">▾</span>
                  </button>

                  {/* Invisible bridge */}
                  <div className="absolute left-0 right-0 h-5 top-full hidden group-hover:block" />

                  <div
                    className="absolute left-0 right-0 hidden group-hover:block bg-white shadow-2xl mt-5 py-4 px-6 md:px-10 lg:px-12 w-screen border-t border-gray-100 z-50"
                    style={{ marginLeft: 'calc(-43vw + 50%)' }}
                  >
                    <div className="font-bold max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-x-8 gap-y-1 text-base">
                      {servicesItems.map((item) => (
                        <Link
                          key={item.detail}
                          to={`/services/${item.detail}`}
                          className="text-gray-700 hover:text-blue-500 hover:bg-teal-50/70 transition rounded-lg px-5 py-3 block"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    isActive
                      ? 'text-blue-500 font-semibold'
                      : 'hover:text-blue-500 transition'
                  }
                >
                  {link.name}
                </NavLink>
              )}
            </div>
          ))}
        </div>
        {/* BOOK A CONSULTATION */}
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `hidden md:flex md:items-center md:gap-2 font-medium rounded-full transition-all duration-300
    border-[1px] border-slate-300 text-[#020842]
    hover:bg-blue-600 hover:text-white hover:border-blue-600
    hover:shadow-xl hover:shadow-blue-500/30
    ${isScrolled ? 'px-6 py-2.5 text-sm' : 'px-7 py-3 text-base'}
    ${isActive ? 'bg-blue-600 text-white border-blue-600 shadow-xl' : ''}`
          }
        >
          BOOK A CONSULTATION
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M7 17L17 7M7 7h10v10"
            />
          </svg>
        </NavLink>

        {/* Hamburger - Mobile */}
        <button
          className="md:hidden text-gray-800 focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg border-t border-gray-200 max-h-[80vh] overflow-y-auto">
          <div className="px-6 py-5 space-y-4">
            {navLinks.map((link) => (
              <div key={link.name}>
                {link.isDropdown ? (
                  <>
                    <button
                      className="w-full text-left text-gray-800 font-medium hover:text-blue-500 transition flex justify-between items-center"
                      onClick={toggleServices}
                    >
                      {link.name}
                      <span>{isServicesOpen ? '▲' : '▼'}</span>
                    </button>

                    {isServicesOpen && (
                      <div className="mt-3 pl-4 grid grid-cols-1 gap-1 border-l-2 border-teal-100">
                        {servicesItems.map((item) => (
                          <Link
                            key={item.detail}
                            to={`/services/${item.detail}`}
                            className="text-gray-600 hover:text-blue-500 transition text-sm py-2 block"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <NavLink
                    to={link.to}
                    className={({ isActive }) =>
                      `block ${isActive ? 'text-blue-500 font-semibold' : 'text-gray-800 hover:text-blue-500 transition'}`
                    }
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </NavLink>
                )}
              </div>
            ))}

            {/* Mobile Consultation Button */}
            <NavLink
              to="/contact"
              className="text-white block w-full mt-6 bg-blue-700 font-medium rounded-full py-3 text-center hover:shadow-lg hover:shadow-teal-500/30 transition-all"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              BOOK A CONSULTATION →
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
}