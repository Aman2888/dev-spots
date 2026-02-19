import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';

import Navbar from './components/Navbar';
import Hero from './components/hero/Hero';
import Contact from './components/Contact';
import Footer from './components/reuse/Footer';
import BlogPage from './components/Blog';
import AboutPage from './components/About';
import PortfolioPage from './components/portfolio/Portfolio';
import PortfolioDetailPage from './components/portfolio/Portfoliodetailpage';
import ServiceDetailPage from './components/services/ServiceDetailPage';
import ServicesPage from './components/services/OurService';
import LanguageSelector from './components/LanguageSelector';

// Sticky Floating Buttons
function FloatingButtons() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <>
      {/* Book a Meeting */}
      <a
        href="/contact"
        style={{
          position: 'fixed', bottom: '40px', left: '20px', zIndex: 9999,
          display: 'flex', alignItems: 'center', gap: '8px',
          backgroundColor: '#f97316', color: 'white', fontWeight: '600',
          fontSize: '14px', padding: '12px 20px', borderRadius: '50px',
          textDecoration: 'none',
          transition: 'transform 0.2s, box-shadow 0.2s', whiteSpace: 'nowrap',
        }}
        onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 28px rgba(249,115,22,0.6)'; }}
        onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(249,115,22,0.5)'; }}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" />
        </svg>
        Book a Meeting
      </a>

      {/* WhatsApp */}
      <a
        href="https://wa.me/yourphonenumber"
        target="_blank" rel="noopener noreferrer"
        style={{
          position: 'fixed', bottom: '100px', right: '20px', zIndex: 9999,
          width: '52px', height: '52px', backgroundColor: '#25D366',
          borderRadius: '50%', display: 'flex', alignItems: 'center',
          justifyContent: 'center',
          transition: 'transform 0.2s, box-shadow 0.2s',
        }}
        onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px) scale(1.05)'; e.currentTarget.style.boxShadow = '0 8px 28px rgba(37,211,102,0.6)'; }}
        onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0) scale(1)'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(37,211,102,0.5)'; }}
      >
        <svg width="28" height="28" viewBox="0 0 32 32" fill="white">
          <path d="M16 2C8.268 2 2 8.268 2 16c0 2.494.65 4.835 1.787 6.865L2 30l7.335-1.762A13.932 13.932 0 0016 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm0 25.6a11.546 11.546 0 01-5.89-1.608l-.422-.25-4.354 1.046 1.073-4.24-.275-.434A11.546 11.546 0 014.4 16C4.4 9.59 9.59 4.4 16 4.4S27.6 9.59 27.6 16 22.41 27.6 16 27.6zm6.33-8.66c-.347-.173-2.054-1.013-2.374-1.13-.32-.116-.552-.173-.785.173-.232.347-.9 1.13-1.103 1.36-.203.232-.405.26-.752.087-.347-.173-1.464-.54-2.788-1.72-1.031-.918-1.727-2.052-1.929-2.398-.203-.347-.022-.534.152-.707.156-.155.347-.405.52-.607.173-.203.232-.347.347-.579.116-.232.058-.434-.029-.607-.087-.173-.785-1.89-1.075-2.588-.283-.68-.57-.587-.785-.598l-.667-.011c-.232 0-.607.087-.924.434-.318.347-1.21 1.183-1.21 2.885s1.239 3.346 1.412 3.578c.173.232 2.437 3.72 5.904 5.217.825.356 1.47.569 1.972.728.828.263 1.582.226 2.178.137.664-.099 2.054-.84 2.344-1.65.29-.81.29-1.505.203-1.65-.087-.145-.318-.232-.666-.405z" />
        </svg>
      </a>

      {/* Scroll to top  */}
      <button
        onClick={scrollToTop}
        style={{
          position: 'fixed', bottom: '40px', right: '20px', zIndex: 9999,
          width: '44px', height: '44px', backgroundColor: 'white',
          border: '2px solid #e5e7eb', borderRadius: '50%',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          cursor: 'pointer',
          transition: 'transform 0.2s, box-shadow 0.2s',
        }}
        onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.18)'; }}
        onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 14px rgba(0,0,0,0.12)'; }}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#374151" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="18 15 12 9 6 15" />
        </svg>
      </button>
    </>
  );
}

//  Main Layout 
function MainLayout() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-white" />

      {/* Top animated gradient banner */}
      <div
        style={{
          position: 'relative',
          top: 0, left: 0, right: 0,
          zIndex: 50,
          background: 'linear-gradient(90deg, #3b82f6, #ca8a04, #f97316, #f43f5e, #ef4444, #a855f7, #3b82f6)',
          backgroundSize: '300% 100%',
          animation: 'gradientSlide 8s linear infinite',
          color: 'white',
          padding: '8px 16px 8px 24px',
          fontSize: '14px',
          fontWeight: '500',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <style>{`
          @keyframes gradientSlide {
            0%   { background-position: 0% 50%; }
            100% { background-position: 300% 50%; }
          }
        `}</style>

        <span style={{ letterSpacing: '0.025em' }}>
          Welcome to <strong>Devspots</strong> IT Company
          <a
            href="/contact"
            style={{ marginLeft: '8px', textDecoration: 'underline', fontWeight: '600', color: 'white', whiteSpace: 'nowrap' }}
          >
            Let's Talk →
          </a>
        </span>

        {/* Language Selector */}
        <LanguageSelector />
      </div>

      {/* Navbar */}
      <Navbar />

      <main className="pt-32 md:pt-20 lg:pt-16">
        <Outlet />
      </main>

      <Footer />

      {/* Bottom gradient banner */}
      <div
        style={{
          background: 'linear-gradient(90deg, #7c3aed, #ec4899, #f43f5e, #f97316, #7c3aed, #ec4899)',
          backgroundSize: '300% 100%',
          animation: 'gradientSlide 8s linear infinite',
          color: 'white',
          textAlign: 'center',
          padding: '12px 16px',
          fontSize: '14px',
          fontWeight: '500',
        }}
      >
        <p>© 2025 <strong>Devspots</strong> - All Rights Reserved</p>
      </div>

      {/* Sticky Floating Buttons */}
      <FloatingButtons />
    </div>
  );
}

// App 
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Hero />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services/:serviceDetail" element={<ServiceDetailPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/portfolio/:projectId" element={<PortfolioDetailPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/service" element={<ServicesPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;