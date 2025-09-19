"use client";
import Image from "next/image";
import { WavyBackground } from "../ui/wavy-background";
import EmailForm from "./EmailForm";
import Header from "./Header";

export default function Hero() {
  return (
    <div className="relative min-h-screen">
      {/* Header positioned at absolute top of page */}
      <div className="absolute top-0 left-0 right-0 z-20">
        <Header />
      </div>

      <WavyBackground 
        className="max-w-7xl mx-auto min-h-screen"
        colors={["#7c3aed", "#a855f7", "#c084fc"]}
        waveWidth={120}
        waveOpacity={0.4}
        speed="slow"
        blur={15}
        backgroundFill="#000000"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20 flex items-center min-h-screen">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full">
          {/* Text Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <div className="relative">
              {/* Clean text */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-white leading-tight mb-6 sm:mb-8">
                The All-in-One Dining App
              </h1>
            </div>
            
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-8 sm:mb-12 leading-relaxed px-4 sm:px-0">
              Discover, Order, Pay & Earn Rewards — All in One Dining App.
            </p>
            
              <div className="flex flex-col gap-4 items-center lg:items-start px-4 sm:px-0">
                <EmailForm 
                  source="hero"
                  className="w-full"
                />
              <a href="#for-restaurants" className="text-white/80 hover:text-white transition-colors font-medium underline underline-offset-4 decoration-2 decoration-white/50 hover:decoration-white text-sm sm:text-base">
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
              
              {/* Subtle gradient glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-pink-500/5 to-purple-600/5 rounded-[3rem] blur-xl opacity-0 group-hover:opacity-60 transition-all duration-600"></div>
            </div>
          </div>
        </div>
      </div>
      </WavyBackground>
    </div>
  );
}
