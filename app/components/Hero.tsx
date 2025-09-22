"use client";
import { WavyBackground } from "../ui/wavy-background";
import EmailForm from "./EmailForm";
import Header from "./Header";

export default function Hero() {
  // Deterministic PRNG (mulberry32) to avoid SSR/CSR hydration mismatches
  const createPRNG = (seed: number) => {
    return () => {
      seed |= 0;
      seed = (seed + 0x6D2B79F5) | 0;
      let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
      t ^= t + Math.imul(t ^ (t >>> 7), 61 | t);
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  };

  const randInRange = (rng: () => number, min: number, max: number) =>
    min + rng() * (max - min);

  // Precompute particle data deterministically so server and client match
  const whiteParticles = Array.from({ length: 20 }, (_, i) => {
    const rng = createPRNG(1000 + i);
    return {
      left: `${randInRange(rng, 0, 100).toFixed(6)}%`,
      top: `${randInRange(rng, 0, 100).toFixed(6)}%`,
      drift: randInRange(rng, 8, 14).toFixed(6),
      pulse: randInRange(rng, 4, 8).toFixed(6),
      delay: `${randInRange(rng, 0, 10).toFixed(6)}s`,
    };
  });

  const purpleParticles = Array.from({ length: 12 }, (_, i) => {
    const rng = createPRNG(2000 + i);
    return {
      left: `${randInRange(rng, 0, 100).toFixed(6)}%`,
      top: `${randInRange(rng, 0, 100).toFixed(6)}%`,
      sway: randInRange(rng, 10, 18).toFixed(6),
      pulse: randInRange(rng, 6, 10).toFixed(6),
      delay: `${randInRange(rng, 0, 12).toFixed(6)}s`,
    };
  });

  const pinkParticles = Array.from({ length: 8 }, (_, i) => {
    const rng = createPRNG(3000 + i);
    return {
      left: `${randInRange(rng, 0, 100).toFixed(6)}%`,
      top: `${randInRange(rng, 0, 100).toFixed(6)}%`,
      float: randInRange(rng, 12, 22).toFixed(6),
      pulse: randInRange(rng, 8, 14).toFixed(6),
      delay: `${randInRange(rng, 0, 15).toFixed(6)}s`,
    };
  });
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
        {/* Elegant floating particles */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
          <style jsx>{`
            @keyframes subtle-drift {
              0%, 100% {
                transform: translateX(0px) translateY(0px);
              }
              25% {
                transform: translateX(8px) translateY(-6px);
              }
              50% {
                transform: translateX(-6px) translateY(8px);
              }
              75% {
                transform: translateX(5px) translateY(3px);
              }
            }
            
            @keyframes gentle-sway {
              0%, 100% {
                transform: translateX(0px) translateY(0px);
              }
              33% {
                transform: translateX(-4px) translateY(6px);
              }
              66% {
                transform: translateX(6px) translateY(-4px);
              }
            }
            
            @keyframes whisper-float {
              0%, 100% {
                transform: translateX(0px) translateY(0px);
              }
              50% {
                transform: translateX(3px) translateY(-8px);
              }
            }
          `}</style>
          
          {/* Subtle white particles (deterministic) */}
          {whiteParticles.map((p, i) => (
            <div
              key={i}
              className={`absolute animate-pulse ${i >= 12 ? 'hidden sm:block' : ''}`}
              style={{
                left: p.left,
                top: p.top,
                animation: `subtle-drift ${p.drift}s ease-in-out infinite, pulse ${p.pulse}s ease-in-out infinite`,
                animationDelay: p.delay
              }}
            >
              <div 
                className="w-1 h-1 bg-white/12 rounded-full blur-[0.5px]"
              />
            </div>
          ))}
          
          {/* Elegant purple particles (deterministic) */}
          {purpleParticles.map((p, i) => (
            <div
              key={`purple-${i}`}
              className={`absolute ${i >= 8 ? 'hidden sm:block' : ''}`}
              style={{
                left: p.left,
                top: p.top,
                animation: `gentle-sway ${p.sway}s ease-in-out infinite, pulse ${p.pulse}s ease-in-out infinite`,
                animationDelay: p.delay
              }}
            >
              <div 
                className="w-1.5 h-1.5 bg-purple-400/18 rounded-full blur-[1px]"
              />
            </div>
          ))}
          
          {/* Refined pink accents (deterministic) */}
          {pinkParticles.map((p, i) => (
            <div
              key={`pink-${i}`}
              className={`absolute ${i >= 5 ? 'hidden sm:block' : ''}`}
              style={{
                left: p.left,
                top: p.top,
                animation: `whisper-float ${p.float}s ease-in-out infinite, pulse ${p.pulse}s ease-in-out infinite`,
                animationDelay: p.delay
              }}
            >
              <div 
                className="w-2 h-2 bg-pink-300/14 rounded-full blur-[1px]"
              />
            </div>
          ))}
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-28 sm:pt-20 flex items-center min-h-screen">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
          {/* Hero Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              {/* Main Headline */}
              <h1 className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extralight text-white leading-[1.1] tracking-tight">
                Dining
                <span className="block font-light bg-gradient-to-r from-purple-300 via-pink-300 to-purple-400 bg-clip-text text-transparent mt-2 relative">
                  Reimagined
                  <span className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-600 blur-sm opacity-40 -z-10"></span>
                </span>
              </h1>
              
              {/* Elegant Subtitle */}
              <div className="space-y-3 max-w-4xl mx-auto">
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/70 font-light leading-relaxed">
                  Experience seamless dining from discovery to payment.
                </p>
                <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white font-light leading-relaxed">
                  One app. Every restaurant. Infinite possibilities.
                </p>
              </div>
            </div>
            
            {/* CTA Section */}
            <div className="flex flex-col gap-6 items-center pt-4">
              <EmailForm 
                source="hero"
                buttonText="Get Early Access"
                className="w-full max-w-md"
              />
              <a href="#for-restaurants" className="text-white/70 hover:text-white/90 transition-colors font-light underline underline-offset-4 decoration-1 decoration-white/40 hover:decoration-white/70 text-base">
                Restaurant partner? Discover more
              </a>
            </div>
          </div>
        </div>
      </div>
      </WavyBackground>
    </div>
  );
}
