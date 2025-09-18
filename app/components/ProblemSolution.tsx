"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";

export default function ProblemSolution() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const items = entry.target.querySelectorAll('.fade-item');
            items.forEach((item, index) => {
              setTimeout(() => {
                item.classList.add('animate-fade-up');
              }, index * 60);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-12 sm:py-16 lg:py-20 bg-black relative overflow-hidden">
      {/* Clean section divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-400/40 via-pink-400/40 to-transparent z-50"></div>
      
      {/* Additional spacing */}
      <div className="pt-8"></div>
      
      {/* Enhanced background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black"></div>
      
      {/* Floating gradient orbs */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-full blur-3xl"></div>
      <div className="absolute top-40 right-16 w-80 h-80 bg-gradient-to-r from-pink-500/8 to-purple-700/8 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-72 h-72 bg-gradient-to-r from-emerald-500/6 to-blue-600/6 rounded-full blur-3xl"></div>
      <div className="absolute bottom-40 right-8 w-56 h-56 bg-gradient-to-r from-indigo-600/8 to-purple-500/8 rounded-full blur-3xl"></div>
      
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 opacity-[0.03] bg-gradient-to-br from-white/5 via-transparent to-white/3"></div>
      
      {/* Accent lines */}
      <div className="absolute top-32 left-8 w-2 h-20 bg-gradient-to-b from-purple-400/40 to-transparent blur-sm"></div>
      <div className="absolute top-64 right-12 w-2 h-24 bg-gradient-to-b from-pink-400/40 to-transparent blur-sm"></div>
      <div className="absolute bottom-32 left-16 w-2 h-16 bg-gradient-to-b from-emerald-400/40 to-transparent blur-sm"></div>
      <div className="absolute bottom-48 right-20 w-2 h-18 bg-gradient-to-b from-blue-400/30 to-transparent blur-sm"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-20">
        {/* Desktop Timeline */}
        <div className="absolute left-1/2 top-40 sm:top-48 lg:top-60 bottom-8 w-px bg-gradient-to-b from-purple-400/30 via-pink-400/30 to-green-400/30 hidden lg:block transform -translate-x-1/2"></div>
        

        {/* Main Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20 relative z-30">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light bg-gradient-to-r from-white via-white/95 to-purple-200 bg-clip-text text-transparent mb-6 sm:mb-8 lg:mb-10 tracking-tight px-4 sm:px-0">
            The Complete Dining Journey
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-white/70 max-w-[60ch] mx-auto mb-8 sm:mb-12 lg:mb-16 leading-relaxed px-4 sm:px-0">
            From finding the right restaurant to ordering the perfect dish — MIRCH transforms every step of your dining experience
          </p>
        </div>

        {/* Problem-Solution Grid */}
        <div className="grid grid-cols-1 gap-y-8 sm:gap-y-12 lg:grid-cols-2 lg:gap-x-16 xl:gap-x-20 lg:gap-y-16 relative z-30">
          
          {/* Item 1: Finding Safe Places - Problem */}
          <div className="group fade-item opacity-0 relative">
            {/* Radial glow background */}
            <div className="absolute -inset-8 bg-gradient-radial from-rose-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full blur-xl"></div>
            
            <div className="flex items-start relative px-4 sm:px-0">
              <svg className="w-8 h-8 text-rose-400 mr-4 sm:mr-6 group-hover:scale-110 transition-all duration-300 drop-shadow-lg group-hover:drop-shadow-[0_0_20px_rgba(244,63,94,0.4)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              <div className="flex-1">
                <div className="mb-2">
                  <h3 className="text-lg sm:text-xl font-semibold text-white tracking-tight group-hover:underline group-hover:decoration-rose-400 group-hover:underline-offset-4 transition-all duration-300">Finding Safe Places</h3>
                </div>
                <div className="mb-3">
                  <span className="bg-rose-500/12 text-rose-300 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium ring-1 ring-rose-500/25 h-5 sm:h-6 inline-flex items-center">PROBLEM</span>
                </div>
                <p className="text-white/70 leading-[1.4] text-sm sm:text-[15px]">
                  "Where can I eat with my restrictions?" becomes an exhausting research project through unreliable reviews and vague menu descriptions.
                </p>
              </div>
            </div>
          </div>

          {/* Item 2: Smart Discovery - Solution */}
          <div className="group fade-item opacity-0 relative">
            {/* Radial glow background */}
            <div className="absolute -inset-8 bg-gradient-radial from-emerald-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full blur-xl"></div>
            
            <div className="flex items-start relative px-4 sm:px-0">
              <svg className="w-8 h-8 text-emerald-400 mr-4 sm:mr-6 group-hover:scale-110 transition-all duration-300 drop-shadow-lg group-hover:drop-shadow-[0_0_20px_rgba(52,211,153,0.4)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <div className="flex-1">
                <div className="mb-2">
                  <h3 className="text-lg sm:text-xl font-semibold text-white tracking-tight group-hover:underline group-hover:decoration-emerald-400 group-hover:underline-offset-4 transition-all duration-300">Smart Discovery</h3>
                </div>
                <div className="mb-3">
                  <span className="bg-emerald-500/12 text-emerald-300 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium ring-1 ring-emerald-500/25 h-5 sm:h-6 inline-flex items-center">
                    <Image src="/mirch-text.png" alt="MIRCH" width={40} height={16} className="h-2 sm:h-3 w-auto" />
                  </span>
                </div>
                <p className="text-white/70 leading-[1.4] text-sm sm:text-[15px]">
                  Find restaurants that actually serve dishes you can eat, with detailed dietary tags and real reviews from people with similar needs.
                </p>
              </div>
            </div>
          </div>

          {/* Mobile Divider 1 */}
          <div className="lg:hidden col-span-full flex items-center justify-center my-8">
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-purple-400/40 to-transparent"></div>
            <div className="mx-4 w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-pink-400/40 to-transparent"></div>
          </div>

          {/* Item 3: Menu Roulette - Problem */}
          <div className="group fade-item opacity-0 relative">
            {/* Radial glow background */}
            <div className="absolute -inset-8 bg-gradient-radial from-rose-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full blur-xl"></div>
            
            <div className="flex items-start relative px-4 sm:px-0">
              <svg className="w-8 h-8 text-rose-400 mr-4 sm:mr-6 group-hover:scale-110 transition-all duration-300 drop-shadow-lg group-hover:drop-shadow-[0_0_20px_rgba(244,63,94,0.4)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>
              <div>
                <div className="mb-2">
                  <h3 className="text-xl font-semibold text-white tracking-tight group-hover:underline group-hover:decoration-rose-400 group-hover:underline-offset-4 transition-all duration-300">Menu Roulette</h3>
                </div>
                <div className="mb-3">
                  <span className="bg-rose-500/12 text-rose-300 px-3 py-1 rounded-full text-sm font-medium ring-1 ring-rose-500/25 h-6 inline-flex items-center">PROBLEM</span>
                </div>
                <p className="text-white/70 leading-[1.4] text-[15px]">
                  You know the restaurant is good, but which pasta is amazing and which disappointed the last 50 people? The menu won't tell you.
                </p>
              </div>
            </div>
          </div>

          {/* Item 4: Dish-Level Intel - Solution */}
          <div className="group fade-item opacity-0 relative">
            {/* Radial glow background */}
            <div className="absolute -inset-8 bg-gradient-radial from-emerald-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full blur-xl"></div>
            
            <div className="flex items-start relative px-4 sm:px-0">
              <svg className="w-8 h-8 text-emerald-400 mr-4 sm:mr-6 group-hover:scale-110 transition-all duration-300 drop-shadow-lg group-hover:drop-shadow-[0_0_20px_rgba(52,211,153,0.4)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <div>
                <div className="mb-2">
                  <h3 className="text-xl font-semibold text-white tracking-tight group-hover:underline group-hover:decoration-emerald-400 group-hover:underline-offset-4 transition-all duration-300">Dish-Level Intel</h3>
                </div>
                <div className="mb-3">
                  <span className="bg-emerald-500/12 text-emerald-300 px-3 py-1 rounded-full text-sm font-medium ring-1 ring-emerald-500/25 h-6 inline-flex items-center">
                    <Image src="/mirch-text.png" alt="MIRCH" width={40} height={16} className="h-3 w-auto" />
                  </span>
                </div>
                <p className="text-white/70 leading-[1.4] text-[15px]">
                  See exactly which dishes are worth ordering with ratings, photos, and reviews for every single item on the menu.
                </p>
              </div>
            </div>
          </div>

          {/* Mobile Divider 2 */}
          <div className="lg:hidden col-span-full flex items-center justify-center my-8">
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-rose-400/40 to-transparent"></div>
            <div className="mx-4 w-2 h-2 bg-gradient-to-r from-rose-400 to-pink-400 rounded-full"></div>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-pink-400/40 to-transparent"></div>
          </div>

          {/* Item 5: App Juggling - Problem */}
          <div className="group fade-item opacity-0 relative">
            {/* Radial glow background */}
            <div className="absolute -inset-8 bg-gradient-radial from-rose-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full blur-xl"></div>
            
            <div className="flex items-start relative px-4 sm:px-0">
              <svg className="w-8 h-8 text-rose-400 mr-4 sm:mr-6 group-hover:scale-110 transition-all duration-300 drop-shadow-lg group-hover:drop-shadow-[0_0_20px_rgba(244,63,94,0.4)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <div className="mb-2">
                  <h3 className="text-xl font-semibold text-white tracking-tight group-hover:underline group-hover:decoration-rose-400 group-hover:underline-offset-4 transition-all duration-300">App Juggling</h3>
                </div>
                <div className="mb-3">
                  <span className="bg-rose-500/12 text-rose-300 px-3 py-1 rounded-full text-sm font-medium ring-1 ring-rose-500/25 h-6 inline-flex items-center">PROBLEM</span>
                </div>
                <p className="text-white/70 leading-[1.4] text-[15px]">
                  Multiple apps, long waits, confusing interfaces. Getting food shouldn't require switching between three platforms and hoping for the best.
                </p>
              </div>
            </div>
          </div>

          {/* Item 6: One-Tap Ordering - Solution */}
          <div className="group fade-item opacity-0 relative">
            {/* Radial glow background */}
            <div className="absolute -inset-8 bg-gradient-radial from-emerald-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full blur-xl"></div>
            
            <div className="flex items-start relative px-4 sm:px-0">
              <svg className="w-8 h-8 text-emerald-400 mr-4 sm:mr-6 group-hover:scale-110 transition-all duration-300 drop-shadow-lg group-hover:drop-shadow-[0_0_20px_rgba(52,211,153,0.4)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              <div>
                <div className="mb-2">
                  <h3 className="text-xl font-semibold text-white tracking-tight group-hover:underline group-hover:decoration-emerald-400 group-hover:underline-offset-4 transition-all duration-300">One-Tap Ordering</h3>
                </div>
                <div className="mb-3">
                  <span className="bg-emerald-500/12 text-emerald-300 px-3 py-1 rounded-full text-sm font-medium ring-1 ring-emerald-500/25 h-6 inline-flex items-center">
                    <Image src="/mirch-text.png" alt="MIRCH" width={40} height={16} className="h-3 w-auto" />
                  </span>
                </div>
                <p className="text-white/70 leading-[1.4] text-[15px]">
                  Order directly through MIRCH while at the restaurant. Skip the wait, get exactly what you want, and pay instantly — all in one app.
                </p>
              </div>
            </div>
          </div>

          {/* Mobile Divider 2 */}
          <div className="lg:hidden col-span-full flex items-center justify-center my-8">
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-emerald-400/40 to-transparent"></div>
            <div className="mx-4 w-2 h-2 bg-gradient-to-r from-emerald-400 to-green-400 rounded-full"></div>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-green-400/40 to-transparent"></div>
          </div>

        </div>
      </div>
    </section>
  );
}