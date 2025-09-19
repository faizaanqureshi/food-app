"use client";
import { useEffect, useRef } from "react";

export default function ValuePillars() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const items = entry.target.querySelectorAll('.journey-item');
            items.forEach((item, index) => {
              setTimeout(() => {
                item.classList.add('animate-fade-up');
              }, index * 150);
            });
            
            // Animate the flow line
            const flowLine = entry.target.querySelector('.flow-line');
            if (flowLine) {
              setTimeout(() => {
                flowLine.classList.add('animate-draw-line');
              }, 600);
            }
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-orange-200/30 to-pink-200/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-pink-200/20 to-purple-200/20 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-900 mb-6 tracking-tight">
            What MIRCH Does
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-4">
            The complete dining journey, reimagined for the modern diner
          </p>
          <p className="text-base text-gray-500 max-w-2xl mx-auto leading-relaxed">
            ✨ From discovering dishes to dining smarter — MIRCH is your dining companion, every step of the way.
          </p>
        </div>

        {/* Journey Flow */}
        <div className="relative">
          {/* Connecting Flow Line */}
          <div className="hidden lg:block absolute top-20 left-0 right-0 h-px overflow-hidden">
            <div className="flow-line w-full h-px bg-gradient-to-r from-purple-300 via-blue-300 via-pink-300 to-green-300 opacity-0 transform scale-x-0 origin-left transition-all duration-2000 ease-out"></div>
          </div>
          
          {/* Flow Arrows */}
          <div className="hidden lg:block absolute top-16 left-1/4 transform -translate-x-1/2">
            <svg className="w-6 h-6 text-purple-400 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
          <div className="hidden lg:block absolute top-16 left-2/4 transform -translate-x-1/2">
            <svg className="w-6 h-6 text-blue-400 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
          <div className="hidden lg:block absolute top-16 left-3/4 transform -translate-x-1/2">
            <svg className="w-6 h-6 text-pink-400 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>

          {/* Four Journey Steps */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {/* Discover */}
            <div className="journey-item opacity-0 group">
              <div className="bg-white rounded-3xl p-8 shadow-lg border border-purple-100 group-hover:shadow-2xl group-hover:border-purple-200 transition-all duration-300 group-hover:-translate-y-2 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                    <svg className="w-8 h-8 text-white group-hover:drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Discover</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Find the perfect dish for your diet, mood, and taste
                  </p>
                </div>
              </div>
            </div>

            {/* Dine */}
            <div className="journey-item opacity-0 group">
              <div className="bg-white rounded-3xl p-8 shadow-lg border border-blue-100 group-hover:shadow-2xl group-hover:border-blue-200 transition-all duration-300 group-hover:-translate-y-2 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                    <svg className="w-8 h-8 text-white group-hover:drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Dine</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Order seamlessly at the table, no waiting, no hassle
                  </p>
                </div>
              </div>
            </div>

            {/* Delight */}
            <div className="journey-item opacity-0 group">
              <div className="bg-white rounded-3xl p-8 shadow-lg border border-pink-100 group-hover:shadow-2xl group-hover:border-pink-200 transition-all duration-300 group-hover:-translate-y-2 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                    <svg className="w-8 h-8 text-white group-hover:drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Delight</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Get rewarded every time you eat — loyalty made simple
                  </p>
                </div>
              </div>
            </div>

            {/* Decide Smarter */}
            <div className="journey-item opacity-0 group">
              <div className="bg-white rounded-3xl p-8 shadow-lg border border-green-100 group-hover:shadow-2xl group-hover:border-green-200 transition-all duration-300 group-hover:-translate-y-2 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                    <svg className="w-8 h-8 text-white group-hover:drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Decide Smarter</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Trust dish-level reviews and real dining intel, not guesswork
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


