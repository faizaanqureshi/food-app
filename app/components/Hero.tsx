"use client";
import Image from "next/image";
import { WavyBackground } from "../ui/wavy-background";

export default function Hero() {
  return (
    <WavyBackground 
      className="max-w-7xl mx-auto"
      colors={["#7c3aed", "#a855f7", "#c084fc"]}
      waveWidth={120}
      waveOpacity={0.4}
      speed="slow"
      blur={15}
      backgroundFill="#000000"
    >

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <div className="relative">
              {/* Clean text */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-white leading-tight mb-6 sm:mb-8">
                Find the Dish Everyone's
                <br className="hidden sm:block" />
                <span className="sm:hidden"> </span>
                Talking About
              </h1>
            </div>
            
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-8 sm:mb-12 leading-relaxed px-4 sm:px-0">
              Mirch gives you dish-level reviews, exclusive deals, and a feed that makes discovering your next favorite bite feel like a party.
            </p>
            
            <div className="flex flex-col gap-4 items-center lg:items-start px-4 sm:px-0">
              <div className="flex flex-col sm:flex-row gap-3 w-full max-w-md">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-full border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 focus:outline-none text-gray-900 placeholder-gray-500 shadow-sm text-sm sm:text-base"
                />
                <button className="bg-gradient-to-r from-purple-800 to-purple-900 hover:from-purple-900 hover:to-indigo-900 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap text-sm sm:text-base">
                  Join waitlist
                </button>
              </div>
              <a href="#" className="text-white/80 hover:text-white transition-colors font-medium underline underline-offset-4 decoration-2 decoration-white/50 hover:decoration-white text-sm sm:text-base">
                Restaurant owner? Learn more
              </a>
            </div>
          </div>

          {/* App Mockup Image - Hidden on Mobile */}
          <div className="hidden lg:flex justify-center order-1 lg:order-2 mb-8 lg:mb-0">
            <div className="relative group cursor-pointer">
              <Image
                src="/foodie-mockup.png"
                alt="Mirch app interface showing Bella Vista restaurant with featured dishes including Lobster Risotto and Wagyu Steak"
                width={300}
                height={600}
                className="w-80 lg:w-96 h-auto drop-shadow-2xl transition-all duration-700 ease-out group-hover:scale-[1.02] group-hover:drop-shadow-3xl"
                priority
              />
              
              {/* Elegant ring effects */}
              <div className="absolute inset-0 rounded-[3rem] border border-purple-300/30 opacity-0 group-hover:opacity-100 transition-all duration-1000 group-hover:scale-105"></div>
              <div className="absolute inset-0 rounded-[3rem] border border-purple-400/20 opacity-0 group-hover:opacity-100 transition-all duration-1200 delay-200 group-hover:scale-110"></div>
              <div className="absolute inset-0 rounded-[3rem] border border-purple-500/10 opacity-0 group-hover:opacity-100 transition-all duration-1400 delay-400 group-hover:scale-115"></div>
              
              {/* Subtle gradient glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-purple-600/10 rounded-[3rem] blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-800"></div>
            </div>
          </div>
        </div>
      </div>
    </WavyBackground>
  );
}
