import React, { useState, useEffect, useRef } from 'react';

const projects = [
  {
    id: 3,
    title: "College ROI",
    subtitle: "Calculator for U.S Students",
    bottomTitle: "College Choice 101",
    bottomSub: "Web App (React)",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600",
    imgStyle: "rounded-sm shadow-2xl shadow-black/18",
  },
  {
    id: 4,
    title: "Karzaun",
    subtitle: "Social Media CRM app",
    bottomTitle: "Karzoun Chat App",
    bottomSub: "Mobile App (Flutter)",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400",
    imgStyle: "rounded-none shadow-2xl shadow-black/20",
  },
  {
    id: 5,
    title: "Manthar",
    subtitle: "E-Ticketing Application",
    bottomTitle: "Manthar",
    bottomSub: "Mobile App (Flutter)",
    image: "https://images.unsplash.com/photo-1569025690938-a00729c9e1f9?w=400",
    imgStyle: "rounded-sm shadow-2xl shadow-black/20",
  },
  {
    id: 6,
    title: "Tour Ease",
    subtitle: "Tour and hotel booking app",
    bottomTitle: "Tour Ease",
    bottomSub: "Mobile App (Flutter)",
    image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=400",
    imgStyle: "rounded-sm shadow-2xl shadow-black/20",
  },
  {
    id: 7,
    title: "Sanaidee",
    subtitle: "E-Commerce Platform",
    bottomTitle: "Sanaidee",
    bottomSub: "Web App (Next.js)",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400",
    imgStyle: "rounded-sm shadow-2xl shadow-black/18",
  },
];

function useVisibleCount() {
  const [count, setCount] = useState(3);
  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      if (w < 640) setCount(1);
      else if (w < 1024) setCount(2);
      else setCount(3);
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);
  return count;
}

function CarouselSlider({ projects }) {
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef(null);
  const VISIBLE = useVisibleCount();
  const total = projects.length;

  const startInterval = () => {
    intervalRef.current = setInterval(() => {
      goNext();
    }, 3000);
  };

  const stopInterval = () => clearInterval(intervalRef.current);

  useEffect(() => {
    startInterval();
    return () => stopInterval();
  }, [current]);

  const goNext = () => {
    stopInterval();
    setCurrent((prev) => (prev + 1) % total);
  };

  const visibleProjects = Array.from({ length: VISIBLE }, (_, i) =>
    projects[(current + i) % total]
  );

  return (
    <div className="relative">
      <style>{`
        @keyframes slideIn {
          from {
            opacity: 0.2;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .card-slide {
          animation: slideIn 0.3s ease forwards;
        }
      `}</style>

      <div className="flex gap-5 flex-1 min-h-[520px]">
        {visibleProjects.map((project, idx) => (
          <a
            key={`${project.id}-${idx}`}
            href={`/portfolio/${project.id}`}
            className={`
              card-slide group flex-1 rounded-3xl overflow-hidden 
              ${project.bg} flex flex-col shadow-lg hover:shadow-2xl 
              transition-all duration-300 hover:-translate-y-1
              text-decoration-none
            `}
          >
            {/* Top text */}
            <div className="px-7 pt-7 text-center">
              <h3 className="text-2xl font-bold text-[#020842] leading-tight">
                {project.title}
                <br />
                <span className="text-lg font-semibold text-gray-700">
                  {project.subtitle}
                </span>
              </h3>
            </div>

            {/* Image */}
            <div className="flex-1 flex items-center justify-center px-3 min-h-[240px]">
              <img
                src={project.image}
                alt={project.title}
                className={`w-full h-[390px] object-cover ${project.imgStyle}`}
              />
            </div>

            {/* Bottom bar */}
            <div className="bg-white px-7 py-4 flex items-center justify-between border-t border-gray-100/95">
              <div>
                <p className="text-lg font-bold text-[#020842]">
                  {project.bottomTitle}
                </p>
                <p className="text-sm text-gray-500">{project.bottomSub}</p>
              </div>

              <div className="flex items-center gap-1.5 font-bold text-[#020842] text-[15px] group-hover:text-blue-700 transition-colors">
                EXPLORE
                <svg
                  width="18"
                  height="18"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  className="group-hover:translate-x-1 transition-transform"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 17L17 7M7 7h10v10"
                  />
                </svg>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default function OurRecentWork() {
  return (
    <section className="py-20 bg-white overflow-hidden">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="mb-4">
              <span className="bg-[#F44380] text-white px-2.5 py-0.5 rounded font-semibold text-base mr-2 inline-block">
                Crafting
              </span>
              <span className="text-gray-700 text-base font-medium">
                Success With Project
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-semibold text-[#020842] mb-4">
              Our Recent Best Works
            </h2>
            <p className="text-gray-700 text-lg font-medium leading-relaxed">
              Our recent projects highlight our expertise in delivering tailored solutions that meet the unique needs and objectives of our clients, custom software.
            </p>
          </div>

          <a
            href="/portfolio"
            className="bg-blue-700 text-white px-8 py-4 rounded-full font-bold text-base flex items-center gap-2 hover:bg-blue-800 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 whitespace-nowrap"
          >
            ALL WORKS
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M7 7h10v10" />
            </svg>
          </a>
        </div>
      </div>

      <CarouselSlider projects={projects} />
    </section>
  );
}