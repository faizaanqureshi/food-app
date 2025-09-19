"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { Store, Palette, BarChart3, Users, Camera, Smartphone, CreditCard, Bell, Eye, TrendingUp, Heart, Settings, Zap, Gift } from "lucide-react";

export default function ComprehensiveForRestaurants() {
  const [selectedTheme, setSelectedTheme] = useState("fine");
  const [viewMode, setViewMode] = useState("dashboard"); // "dashboard" or "website"

  const getThemeStyles = (themeKey: string) => {
    switch(themeKey) {
      case "cozy":
        return {
          name: "Cozy Cafe",
          subtitle: "Warm & Welcoming", 
          description: "Earth tones, handwritten fonts, casual vibe",
          cardGradient: "bg-gradient-to-br from-orange-400 to-yellow-500",
          orbStyle: { backgroundImage: 'linear-gradient(to bottom right, rgba(249, 115, 22, 0.08), rgba(234, 179, 8, 0.1))' },
          accentStyle: { backgroundImage: 'linear-gradient(to bottom, rgba(251, 146, 60, 0.3), transparent)' },
          headerGradient: 'linear-gradient(to right, #f97316, #eab308, #fbbf24)',
          titleStyle: { 
            fontFamily: 'Kalam, cursive',
            color: '#fbbf24',
            textShadow: '0 3px 15px rgba(249, 115, 22, 0.6)',
            fontWeight: '400',
            transform: 'rotate(-0.5deg)'
          },
          subtitleStyle: {
            color: '#f59e0b',
            fontStyle: 'italic'
          }
        };
      case "fine":
        return {
          name: "Fine Dining",
          subtitle: "Elegant & Sophisticated",
          description: "Dark themes, serif fonts, luxury feel", 
          cardGradient: "bg-gradient-to-br from-gray-800 to-gray-900",
          orbStyle: { backgroundImage: 'linear-gradient(to bottom right, rgba(31, 41, 55, 0.1), rgba(17, 24, 39, 0.12))' },
          accentStyle: { backgroundImage: 'linear-gradient(to bottom, rgba(209, 213, 219, 0.3), transparent)' },
          headerGradient: 'linear-gradient(to right, #374151, #1f2937, #111827)',
          titleStyle: { 
            fontFamily: 'Playfair Display, serif',
            color: '#f8fafc',
            textShadow: '0 4px 20px rgba(0, 0, 0, 0.8)',
            letterSpacing: '0.08em',
            fontWeight: '300',
            textTransform: 'uppercase' as const
          },
          subtitleStyle: {
            color: '#e2e8f0',
            letterSpacing: '0.05em',
            textTransform: 'uppercase' as const,
            fontSize: '0.95em'
          }
        };
      case "casual":
        return {
          name: "Fast-Casual",
          subtitle: "Fresh & Energetic",
          description: "Bright colors, modern fonts, vibrant energy",
          cardGradient: "bg-gradient-to-br from-purple-500 to-pink-500", 
          orbStyle: { backgroundImage: 'linear-gradient(to bottom right, rgba(168, 85, 247, 0.1), rgba(236, 72, 153, 0.12))' },
          accentStyle: { backgroundImage: 'linear-gradient(to bottom, rgba(192, 132, 252, 0.3), transparent)' },
          headerGradient: 'linear-gradient(to right, #a855f7, #ec4899, #f97316)',
          titleStyle: { 
            fontFamily: 'Nunito, sans-serif',
            color: '#ff6bff',
            textShadow: '0 0 15px rgba(236, 72, 153, 0.6), 0 0 30px rgba(168, 85, 247, 0.3)',
            fontWeight: '800',
            transform: 'rotate(0.5deg) scale(1.02)',
            letterSpacing: '0.02em'
          },
          subtitleStyle: {
            color: '#f472b6',
            fontWeight: '600',
            textTransform: 'uppercase' as const,
            letterSpacing: '0.1em'
          }
        };
      default:
        return {
          name: "Cozy Cafe",
          subtitle: "Warm & Welcoming",
          description: "Earth tones, handwritten fonts, casual vibe",
          cardGradient: "bg-gradient-to-br from-orange-400 to-yellow-500",
          orbStyle: { backgroundImage: 'linear-gradient(to bottom right, rgba(249, 115, 22, 0.25), rgba(234, 179, 8, 0.3))' },
          accentStyle: { backgroundImage: 'linear-gradient(to bottom, rgba(251, 146, 60, 0.8), transparent)' },
          titleStyle: { 
            fontFamily: 'Georgia, serif',
            color: '#fed7aa',
            textShadow: '0 2px 10px rgba(249, 115, 22, 0.3)'
          },
          subtitleStyle: {
            color: '#fdba74'
          }
        };
    }
  };

  const themes = ["cozy", "fine", "casual"];

  const features = [
    {
      icon: <Palette className="w-6 h-6" />,
      title: "MySpace-Style Customization",
      description: "Complete creative control over your restaurant's page design, colors, fonts, and layout",
      color: "purple"
    },
    {
      icon: <Camera className="w-6 h-6" />,
      title: "Showcase Your Ambience",
      description: "Upload photos, videos, and create an immersive experience that shows your restaurant's vibe",
      color: "pink"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Deep Customer Insights",
      description: "Understand your diners' tastes, preferences, and dining patterns with advanced analytics",
      color: "blue"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Most Ordered Dishes",
      description: "See which dishes are trending, most loved, and driving the most revenue",
      color: "green"
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "NFC Table Integration",
      description: "Provide NFC tags at tables for instant menu access and seamless ordering",
      color: "orange"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Custom Loyalty Programs",
      description: "Create personalized rewards and loyalty programs that keep customers coming back",
      color: "red"
    }
  ];

  return (
    <section id="for-restaurants" className="py-16 sm:py-20 lg:py-24 bg-black relative overflow-hidden">
      {/* Clear Section Divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-400/40 via-blue-400/40 to-transparent z-50"></div>
      
      {/* Additional spacing */}
      <div className="pt-8"></div>
      
      {/* Dark Background with Texture Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-950 to-black"></div>
      
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 opacity-[0.03] bg-gradient-to-br from-white/10 via-transparent to-white/5"></div>
      
      {/* Floating gradient orbs for restaurant ambience - Dynamic with Wave Animation - Less prominent on mobile */}
      <div 
        className="absolute top-20 right-10 w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 rounded-full blur-3xl sm:blur-[4rem] lg:blur-3xl transition-all duration-1500 ease-out opacity-30 sm:opacity-60 lg:opacity-100"
        style={{
          ...getThemeStyles(selectedTheme).orbStyle,
          animation: 'theme-wave 1.5s ease-out, theme-glow 2s ease-in-out infinite'
        }}
      ></div>
      <div className="absolute bottom-20 left-10 w-40 h-40 sm:w-60 sm:h-60 lg:w-80 lg:h-80 bg-gradient-to-tr from-emerald-600/4 to-blue-600/3 sm:from-emerald-600/6 sm:to-blue-600/4 lg:from-emerald-600/8 lg:to-blue-600/6 rounded-full blur-3xl sm:blur-[4rem] lg:blur-3xl opacity-40 sm:opacity-70 lg:opacity-100"></div>
      <div 
        className="absolute top-40 left-16 w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 rounded-full blur-3xl sm:blur-[4rem] lg:blur-3xl transition-all duration-1500 ease-out opacity-25 sm:opacity-50 lg:opacity-100"
        style={{
          ...getThemeStyles(selectedTheme).orbStyle,
          animation: 'theme-wave 1.8s ease-out 0.2s, theme-glow 2.5s ease-in-out infinite'
        }}
      ></div>
      
      {/* Accent lines for restaurant atmosphere - Enhanced Dynamic */}
      <div 
        className="absolute top-32 right-8 w-2 h-20 blur-sm transition-all duration-1200 ease-out"
        style={{
          ...getThemeStyles(selectedTheme).accentStyle,
          animation: 'theme-wave 1.2s ease-out 0.3s'
        }}
      ></div>
      <div className="absolute top-64 left-12 w-2 h-24 bg-gradient-to-b from-blue-400/40 to-transparent blur-sm"></div>
      <div className="absolute bottom-32 right-16 w-2 h-16 bg-gradient-to-b from-orange-400/40 to-transparent blur-sm"></div>
      <div 
        className="absolute bottom-48 left-20 w-2 h-18 blur-sm transition-all duration-1200 ease-out"
        style={{
          ...getThemeStyles(selectedTheme).accentStyle,
          animation: 'theme-wave 1.4s ease-out 0.4s'
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-6 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/90 text-sm font-light mb-6 tracking-wide">
            <Store className="w-4 h-4 mr-3 text-white/70" />
            For Restaurant Owners
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 leading-tight mb-6 sm:mb-8 tracking-tight">
            Your Restaurant's Official Online Home
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed mb-8 sm:mb-12 font-light">
            Your MIRCH profile doubles as your restaurant's official website — customizable, discoverable, and always up to date.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          
          {/* Left: Mockup View with Toggle */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative order-2 lg:order-1"
          >
            {/* Toggle Controls */}
            <div className="flex justify-center mb-6">
              <div className="bg-white/10 backdrop-blur-md rounded-full p-1 border border-white/20">
                <button
                  onClick={() => setViewMode("dashboard")}
                  className={`px-4 py-2 rounded-full text-xs font-medium transition-all duration-300 ${
                    viewMode === "dashboard"
                      ? "bg-white/20 text-white shadow-lg"
                      : "text-white/60 hover:text-white/80"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <Settings className="w-3 h-3" />
                    Owner Dashboard
                  </div>
                </button>
                <button
                  onClick={() => setViewMode("website")}
                  className={`px-4 py-2 rounded-full text-xs font-medium transition-all duration-300 ${
                    viewMode === "website"
                      ? "bg-white/20 text-white shadow-lg"
                      : "text-white/60 hover:text-white/80"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <Eye className="w-3 h-3" />
                    Live Website
                  </div>
                </button>
              </div>
            </div>

            {/* Animated Views */}
            <AnimatePresence mode="wait">
              {viewMode === "dashboard" && (
                <motion.div 
                  key="dashboard"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="relative group"
                >
              <div className="bg-white/10 rounded-2xl p-2 backdrop-blur-xl border border-white/10 shadow-[0_15px_60px_-20px_rgba(0,0,0,0.4)]">
                <div className="rounded-xl overflow-hidden bg-gradient-to-b from-gray-900 to-black text-white">
                  {/* Dashboard Header */}
                  <div 
                    className="px-4 py-3 transition-all duration-1000"
                    style={{ backgroundImage: getThemeStyles(selectedTheme).headerGradient }}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center shadow-inner">
                          <Store className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-white font-semibold text-sm tracking-tight">Bella Vista Dashboard</h3>
                          <p className="text-white/85 text-xs">Complete Restaurant Control</p>
                        </div>
                      </div>
                      <div className="flex gap-1">
                        <div className="w-2 h-2 bg-red-300 rounded-full"></div>
                        <div className="w-2 h-2 bg-yellow-300 rounded-full"></div>
                        <div className="w-2 h-2 bg-green-300 rounded-full"></div>
                      </div>
                    </div>
                  </div>

                  {/* Dashboard Content */}
                  <div className="p-4 space-y-4">
                    {/* Stats Row */}
                    <div className="grid grid-cols-3 gap-4">
                      <div className="rounded-xl p-5 bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 hover:shadow-md transition">
                        <div className="w-8 h-8 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white/80 mb-2">
                          <TrendingUp className="w-4 h-4" />
                        </div>
                        <p className="text-2xl font-semibold tracking-tight text-white">247</p>
                        <p className="text-xs text-gray-400">Orders Today</p>
                      </div>
                      <div className="rounded-xl p-5 bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 hover:shadow-md transition">
                        <div className="w-8 h-8 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white/80 mb-2">
                          <Users className="w-4 h-4" />
                        </div>
                        <p className="text-2xl font-semibold tracking-tight text-white">89</p>
                        <p className="text-xs text-gray-400">New Diners</p>
                      </div>
                      <div className="rounded-xl p-5 bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 hover:shadow-md transition">
                        <div className="w-8 h-8 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white/80 mb-2">
                          <Heart className="w-4 h-4" />
                        </div>
                        <p className="text-2xl font-semibold tracking-tight text-white">4.8</p>
                        <p className="text-xs text-gray-400">Avg Rating</p>
                      </div>
                    </div>

                    {/* Customization Preview */}
                    <div className="rounded-xl p-5 bg-gradient-to-r from-purple-900/40 to-cyan-900/30 border border-purple-500/20">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2">
                          <div className="w-5 h-5 rounded bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                            <Palette className="w-3 h-3 text-white/80" />
                          </div>
                          <span className="text-sm font-medium text-fuchsia-200">Page Customization</span>
                        </div>
                        <button className="text-xs px-2 py-1 rounded bg-white/10 hover:bg-white/15 transition text-fuchsia-200 border border-white/15">Preview</button>
                      </div>
                      
                      {/* Mini Website Previews */}
                      <div className="grid grid-cols-2 gap-3 mb-4">
                        <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                          <div className="space-y-2">
                            <div className="h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                            <div className="h-1 bg-white/20 rounded w-3/4"></div>
                            <div className="h-1 bg-white/15 rounded w-1/2"></div>
                            <div className="flex gap-1 mt-2">
                              <div className="w-3 h-3 bg-purple-500 rounded"></div>
                              <div className="w-3 h-3 bg-pink-500 rounded"></div>
                            </div>
                          </div>
                          <p className="text-xs text-white/60 mt-2">Header Style</p>
                        </div>
                        
                        <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                          <div className="space-y-2">
                            <div className="flex gap-1">
                              <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                              <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                            </div>
                            <div className="h-1 bg-white/20 rounded"></div>
                            <div className="h-1 bg-white/15 rounded w-2/3"></div>
                            <div className="grid grid-cols-3 gap-1 mt-2">
                              <div className="h-2 bg-emerald-400/60 rounded"></div>
                              <div className="h-2 bg-blue-400/60 rounded"></div>
                              <div className="h-2 bg-orange-400/60 rounded"></div>
                            </div>
                          </div>
                          <p className="text-xs text-white/60 mt-2">Menu Layout</p>
                        </div>
                      </div>
                      
                      <p className="text-xs text-white/70">Live preview of your restaurant's vibe</p>
                    </div>

                    {/* Top Dishes */}
                    <div>
                      <h4 className="font-medium text-white mb-3 text-sm">Most Loved Dishes This Week</h4>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between p-3 rounded-lg bg-gray-800/60 border border-gray-700/50 shadow-sm hover:shadow-md transition">
                          <div className="flex items-center gap-3">
                            <div className="w-7 h-7 rounded-md shadow-lg overflow-hidden">
                              <Image 
                                src="/truffle-risotto.png" 
                                alt="Truffle Pasta" 
                                width={28} 
                                height={28} 
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div>
                              <p className="font-medium text-[13px] text-white">Truffle Pasta</p>
                              <p className="text-xs text-gray-400">4.9 ⭐ • 127 orders</p>
                            </div>
                          </div>
                          <span className="text-xs font-medium px-2 py-1 rounded-full bg-emerald-900/30 text-emerald-300 border border-emerald-500/30">+23%</span>
                        </div>
                        <div className="flex items-center justify-between p-3 rounded-lg bg-gray-800/60 border border-gray-700/50 shadow-sm hover:shadow-md transition">
                          <div className="flex items-center gap-3">
                            <div className="w-7 h-7 rounded-md shadow-lg overflow-hidden">
                              <Image 
                                src="/wagyu.png" 
                                alt="Wagyu Steak" 
                                width={28} 
                                height={28} 
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div>
                              <p className="font-medium text-[13px] text-white">Wagyu Steak</p>
                              <p className="text-xs text-gray-400">4.8 ⭐ • 89 orders</p>
                            </div>
                          </div>
                          <span className="text-xs font-medium px-2 py-1 rounded-full bg-sky-900/30 text-sky-300 border border-sky-500/30">+15%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-blue-500/10 to-purple-500/10 rounded-2xl blur-2xl opacity-0 group-hover:opacity-70 transition-all duration-500"></div>
                </motion.div>
              )}

              {viewMode === "website" && (
                <motion.div 
                  key="website"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="relative group"
                >
                  {/* Browser Window Frame */}
                  <div className="bg-white/10 rounded-2xl p-2 backdrop-blur-xl border border-white/10 shadow-[0_25px_100px_-20px_rgba(0,0,0,0.6)]">
                    {/* Browser Top Bar */}
                    <div className="flex items-center gap-2 px-3 py-2 bg-gray-800 rounded-t-xl">
                      <div className="flex gap-1.5">
                        <div className="w-2.5 h-2.5 bg-red-500 rounded-full"></div>
                        <div className="w-2.5 h-2.5 bg-yellow-500 rounded-full"></div>
                        <div className="w-2.5 h-2.5 bg-green-500 rounded-full"></div>
                      </div>
                      <div className="flex-1 bg-gray-700 rounded-md px-3 py-1 mx-4">
                        <span className="text-xs text-gray-300">bellavista.mirch.com</span>
                      </div>
                    </div>

                    {/* Website Content */}
                    <div 
                      className="rounded-b-xl overflow-hidden text-white relative transition-all duration-1000"
                      style={{
                        backgroundImage: selectedTheme === "cozy" 
                          ? 'linear-gradient(to bottom, #451a03, #7c2d12, #1c1917)'
                          : selectedTheme === "fine"
                          ? 'linear-gradient(to bottom, #111827, #1f2937, #000000)'
                          : 'linear-gradient(to bottom, #581c87, #7c3aed, #1e1b4b)'
                      }}
                    >
                      {/* Navigation Bar */}
                      <nav className="flex items-center justify-between px-4 py-3 bg-black/20 backdrop-blur-sm border-b border-white/10">
                        <div 
                          className="text-sm font-bold tracking-wide text-white transition-all duration-1000"
                          style={selectedTheme === "cozy" ? {
                            fontFamily: 'Kalam, cursive',
                            transform: 'rotate(-0.5deg)'
                          } : selectedTheme === "fine" ? {
                            fontFamily: 'Playfair Display, serif',
                            letterSpacing: '0.08em',
                            textTransform: 'uppercase' as const
                          } : {
                            fontFamily: 'Nunito, sans-serif',
                            fontWeight: '800'
                          }}
                        >
                          Bella Vista
                        </div>
                        <div className="hidden sm:flex items-center gap-4 text-xs text-white/80">
                          <span className="hover:text-white cursor-pointer">Menu</span>
                          <span className="hover:text-white cursor-pointer">Reservations</span>
                          <span className="hover:text-white cursor-pointer">Reviews</span>
                          <span className="hover:text-white cursor-pointer">Contact</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="flex items-center gap-1 text-xs">
                            <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></div>
                            <span className="text-emerald-400 font-medium">Open</span>
                          </div>
                          <div className="flex items-center gap-1 text-xs text-blue-400">
                            <Heart className="w-2.5 h-2.5 fill-current" />
                            <span>4.8</span>
                          </div>
                          <div className="text-xs text-purple-400 font-medium">Verified</div>
                        </div>
                      </nav>

                      {/* Hero Section with Background */}
                      <div 
                        className="relative h-32 overflow-hidden transition-all duration-1000"
                        style={{
                          backgroundImage: selectedTheme === "cozy" 
                            ? 'linear-gradient(to bottom right, #ea580c, #dc2626, #a16207)'
                            : selectedTheme === "fine"
                            ? 'linear-gradient(to bottom right, #374151, #1f2937, #111827)'
                            : 'linear-gradient(to bottom right, #a855f7, #ec4899, #7c3aed)'
                        }}
                      >
                        {/* Food Background Pattern */}
                        <div className="absolute inset-0 opacity-20">
                          <div className="absolute top-2 left-4 w-8 h-8 bg-yellow-400 rounded-full blur-sm"></div>
                          <div className="absolute top-6 right-6 w-6 h-6 bg-red-400 rounded-full blur-sm"></div>
                          <div className="absolute bottom-4 left-8 w-4 h-4 bg-orange-400 rounded-full blur-sm"></div>
                          <div className="absolute bottom-6 right-4 w-5 h-5 bg-pink-400 rounded-full blur-sm"></div>
                        </div>
                        
                        {/* Hero Content */}
                        <div className="relative z-10 flex items-center justify-center h-full px-4">
                          <div className="text-center">
                            <h1 
                              className="text-lg font-bold mb-1 text-white drop-shadow-lg transition-all duration-1000"
                              style={selectedTheme === "cozy" ? {
                                fontFamily: 'Kalam, cursive',
                                transform: 'rotate(-0.3deg)',
                                color: '#fbbf24'
                              } : selectedTheme === "fine" ? {
                                fontFamily: 'Playfair Display, serif',
                                letterSpacing: '0.05em',
                                textTransform: 'uppercase' as const,
                                fontWeight: '300'
                              } : {
                                fontFamily: 'Nunito, sans-serif',
                                fontWeight: '800',
                                color: '#ff6bff'
                              }}
                            >
                              Welcome to Bella Vista
                            </h1>
                            <p 
                              className="text-xs text-white/90 drop-shadow-md transition-all duration-1000"
                              style={selectedTheme === "cozy" ? {
                                fontStyle: 'italic',
                                color: '#f59e0b'
                              } : selectedTheme === "fine" ? {
                                letterSpacing: '0.03em',
                                textTransform: 'uppercase' as const,
                                fontSize: '0.7rem'
                              } : {
                                fontWeight: '600',
                                color: '#f472b6'
                              }}
                            >
                              Authentic Italian cuisine in the heart of downtown Toronto
                            </p>
                          </div>
                        </div>
                        
                        {/* Glassmorphism Overlay */}
                        <div className="absolute inset-0 bg-black/20 backdrop-blur-[1px]"></div>
                      </div>

                      {/* Featured Dishes Section */}
                      <div className="p-4 space-y-3">
                        <div className="flex items-center justify-between mb-3">
                          <h3 className="text-sm font-semibold text-white">Featured Dishes</h3>
                          <div className="flex items-center gap-1 text-xs text-blue-400">
                            <Users className="w-3 h-3" />
                            <span>Loved by MIRCH diners</span>
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-3">
                          {/* Truffle Pasta Card */}
                          <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden group hover:bg-white/10 transition-all duration-300">
                            <div className="h-16 relative overflow-hidden">
                              <Image 
                                src="/truffle-risotto.png" 
                                alt="Truffle Pasta" 
                                fill
                                className="object-cover"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                            </div>
                            <div className="p-2">
                              <div className="flex items-center justify-between mb-1">
                                <h4 className="text-xs font-medium text-white">Truffle Pasta</h4>
                                <div className="flex items-center gap-1">
                                  <TrendingUp className="w-2.5 h-2.5 text-green-400" />
                                  <span className="text-xs text-green-400">4.9</span>
                                </div>
                              </div>
                              <div className="flex items-center justify-between">
                                <span 
                                  className="text-xs font-semibold transition-colors duration-1000"
                                  style={{
                                    color: selectedTheme === "cozy" 
                                      ? '#f59e0b' 
                                      : selectedTheme === "fine"
                                      ? '#e5e7eb'
                                      : '#f472b6'
                                  }}
                                >
                                  {selectedTheme === "cozy" ? '24 coins' : selectedTheme === "fine" ? '$24' : '24 pts'}
                                </span>
                                <button 
                                  className="text-white text-xs px-2 py-1 rounded-md hover:shadow-lg transition-all duration-300 group-hover:scale-105"
                                  style={{
                                    backgroundImage: selectedTheme === "cozy" 
                                      ? 'linear-gradient(to right, #ea580c, #dc2626)'
                                      : selectedTheme === "fine"
                                      ? 'linear-gradient(to right, #374151, #1f2937)'
                                      : 'linear-gradient(to right, #a855f7, #ec4899)',
                                    boxShadow: selectedTheme === "cozy" 
                                      ? '0 4px 14px 0 rgba(234, 88, 12, 0.25)'
                                      : selectedTheme === "fine"
                                      ? '0 4px 14px 0 rgba(55, 65, 81, 0.25)'
                                      : '0 4px 14px 0 rgba(168, 85, 247, 0.25)'
                                  }}
                                >
                                  Order
                                </button>
                              </div>
                            </div>
                          </div>

                          {/* Wagyu Steak Card */}
                          <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden group hover:bg-white/10 transition-all duration-300">
                            <div className="h-16 relative overflow-hidden">
                              <Image 
                                src="/wagyu.png" 
                                alt="Wagyu Steak" 
                                fill
                                className="object-cover"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                            </div>
                            <div className="p-2">
                              <div className="flex items-center justify-between mb-1">
                                <h4 className="text-xs font-medium text-white">Wagyu Steak</h4>
                                <div className="flex items-center gap-1">
                                  <Heart className="w-2.5 h-2.5 text-red-400 fill-current" />
                                  <span className="text-xs text-red-400">4.8</span>
                                </div>
                              </div>
                              <div className="flex items-center justify-between">
                                <span 
                                  className="text-xs font-semibold transition-colors duration-1000"
                                  style={{
                                    color: selectedTheme === "cozy" 
                                      ? '#f59e0b' 
                                      : selectedTheme === "fine"
                                      ? '#e5e7eb'
                                      : '#f472b6'
                                  }}
                                >
                                  {selectedTheme === "cozy" ? '48 coins' : selectedTheme === "fine" ? '$48' : '48 pts'}
                                </span>
                                <button 
                                  className="text-white text-xs px-2 py-1 rounded-md hover:shadow-lg transition-all duration-300 group-hover:scale-105"
                                  style={{
                                    backgroundImage: selectedTheme === "cozy" 
                                      ? 'linear-gradient(to right, #ea580c, #dc2626)'
                                      : selectedTheme === "fine"
                                      ? 'linear-gradient(to right, #374151, #1f2937)'
                                      : 'linear-gradient(to right, #a855f7, #ec4899)',
                                    boxShadow: selectedTheme === "cozy" 
                                      ? '0 4px 14px 0 rgba(234, 88, 12, 0.25)'
                                      : selectedTheme === "fine"
                                      ? '0 4px 14px 0 rgba(55, 65, 81, 0.25)'
                                      : '0 4px 14px 0 rgba(168, 85, 247, 0.25)'
                                  }}
                                >
                                  Order
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* MIRCH Platform Features */}
                        <div className="bg-white/5 backdrop-blur-sm rounded-lg p-3 border border-purple-500/20 mb-3">
                          <div className="flex items-center gap-2 mb-2">
                            <div className="w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                              <Smartphone className="w-2 h-2 text-white" />
                            </div>
                            <span className="text-xs font-medium text-purple-300">MIRCH Platform Integration</span>
                          </div>
                          <div className="grid grid-cols-3 gap-2 text-xs">
                            <div className="text-center">
                              <div className="w-6 h-6 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-1">
                                <Users className="w-3 h-3 text-blue-400" />
                              </div>
                              <span className="text-white/70">Discoverable</span>
                            </div>
                            <div className="text-center">
                              <div className="w-6 h-6 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-1">
                                <TrendingUp className="w-3 h-3 text-yellow-400" />
                              </div>
                              <span className="text-white/70">Reviews</span>
                            </div>
                            <div className="text-center">
                              <div className="w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-1">
                                <Gift className="w-3 h-3 text-green-400" />
                              </div>
                              <span className="text-white/70">Loyalty</span>
                            </div>
                          </div>
                        </div>

                        {/* Bottom Actions */}
                        <div className="flex gap-2 pt-2">
                          <button 
                            className="flex-1 text-white text-xs py-2.5 rounded-lg font-medium hover:shadow-lg transition-all duration-300"
                            style={{
                              backgroundImage: selectedTheme === "cozy" 
                                ? 'linear-gradient(to right, #ea580c, #dc2626)'
                                : selectedTheme === "fine"
                                ? 'linear-gradient(to right, #374151, #1f2937)'
                                : 'linear-gradient(to right, #a855f7, #ec4899)',
                              boxShadow: selectedTheme === "cozy" 
                                ? '0 4px 14px 0 rgba(234, 88, 12, 0.25)'
                                : selectedTheme === "fine"
                                ? '0 4px 14px 0 rgba(55, 65, 81, 0.25)'
                                : '0 4px 14px 0 rgba(168, 85, 247, 0.25)'
                            }}
                          >
                            Full Menu
                          </button>
                          <button className="flex-1 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xs py-2.5 rounded-lg font-medium hover:bg-white/20 transition-all duration-300">
                            Reserve Table
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Glow Effect */}
                  <div 
                    className="absolute inset-0 rounded-2xl blur-2xl opacity-0 group-hover:opacity-70 transition-all duration-500"
                    style={{
                      backgroundImage: selectedTheme === "cozy" 
                        ? 'linear-gradient(to right, rgba(234, 88, 12, 0.1), rgba(220, 38, 38, 0.1), rgba(161, 98, 7, 0.1))'
                        : selectedTheme === "fine"
                        ? 'linear-gradient(to right, rgba(55, 65, 81, 0.1), rgba(31, 41, 55, 0.1), rgba(17, 24, 39, 0.1))'
                        : 'linear-gradient(to right, rgba(168, 85, 247, 0.1), rgba(236, 72, 153, 0.1), rgba(124, 58, 237, 0.1))'
                    }}
                  ></div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Right: Content */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8 order-1 lg:order-2"
          >
            <div>
              <h3 className="text-2xl sm:text-3xl font-light text-white mb-6 tracking-tight">
                Complete Control Over Your Digital Presence
              </h3>
            </div>

            {/* Key Benefits */}
            <div className="space-y-6">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-all duration-300">
                  <Zap className="w-5 h-5 text-white/80" />
                </div>
                <div>
                  <h4 className="font-medium text-white mb-2">Your Website, Instantly</h4>
                  <p className="text-white/90 leading-relaxed">No need for WordPress or extra hosting. Your MIRCH page is your official website with menu, hours, reservations, and online ordering.</p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-all duration-300">
                  <Palette className="w-5 h-5 text-white/80" />
                </div>
                <div>
                  <h4 className="font-medium text-white mb-2">Unlimited Customization</h4>
                  <p className="text-white/90 leading-relaxed">Design your restaurant page exactly how you want. Change colors, fonts, layouts, and showcase your unique personality - just like the old MySpace days, but better.</p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-all duration-300">
                  <Camera className="w-5 h-5 text-white/80" />
                </div>
                <div>
                  <h4 className="font-medium text-white mb-2">Showcase Your Ambience</h4>
                  <p className="text-white/90 leading-relaxed">Upload photos, videos, and create virtual tours. Let diners feel your restaurant's atmosphere before they even arrive. Show off your interior, your team, your story.</p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-all duration-300">
                  <BarChart3 className="w-5 h-5 text-white/80" />
                </div>
                <div>
                  <h4 className="font-medium text-white mb-2">Deep Customer Intelligence</h4>
                  <p className="text-white/90 leading-relaxed">Understand what your customers love, their dining patterns, peak hours, favorite dishes, and dietary preferences. Use this data to optimize your menu and service.</p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-all duration-300">
                  <Smartphone className="w-5 h-5 text-white/80" />
                </div>
                <div>
                  <h4 className="font-medium text-white mb-2">Seamless NFC Integration</h4>
                  <p className="text-white/90 leading-relaxed">We provide NFC tags for your tables. Customers just tap their phones to access your customized menu, see dish recommendations, and order instantly.</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Features Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl sm:text-3xl font-extralight text-white text-center mb-16 tracking-wide">
            Everything You Need to Succeed
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.12, ease: "easeOut" }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 hover:border-white/20 hover:bg-white/8 transition-all duration-500 group-hover:-translate-y-1 relative overflow-hidden">
                  {/* Subtle gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative z-10">
                    <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white/90 mb-6 group-hover:scale-105 group-hover:bg-white/15 transition-all duration-300">
                      {feature.icon}
                    </div>
                    <h4 className="font-light text-white mb-3 text-lg tracking-wide">{feature.title}</h4>
                    <p className="text-white/70 text-sm leading-relaxed font-light">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Customization Showcase */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="backdrop-blur-md rounded-3xl p-10 lg:p-16 text-white border border-white/10 relative overflow-hidden transition-all duration-1500 ease-out"
          style={{
            backgroundImage: selectedTheme === "cozy" 
              ? 'linear-gradient(to bottom right, rgba(249, 115, 22, 0.4), rgba(234, 179, 8, 0.3), rgba(251, 146, 60, 0.2))'
              : selectedTheme === "fine"
              ? 'linear-gradient(to bottom right, rgba(31, 41, 55, 0.6), rgba(17, 24, 39, 0.4), rgba(75, 85, 99, 0.3))'
              : 'linear-gradient(to bottom right, rgba(168, 85, 247, 0.5), rgba(236, 72, 153, 0.4), rgba(219, 39, 119, 0.3))',
            transform: selectedTheme === "casual" ? 'scale(1.03) rotate(0.5deg)' : selectedTheme === "cozy" ? 'scale(1.01) rotate(-0.2deg)' : 'scale(1)',
            filter: selectedTheme === "casual" 
              ? 'brightness(1.2) saturate(1.4) drop-shadow(0 0 30px rgba(168, 85, 247, 0.3))' 
              : selectedTheme === "cozy"
              ? 'brightness(1.1) saturate(1.2) drop-shadow(0 0 20px rgba(249, 115, 22, 0.2))'
              : 'brightness(1) saturate(1) drop-shadow(0 0 15px rgba(75, 85, 99, 0.1))',
            animation: selectedTheme === "casual" ? 'theme-glow 3s ease-in-out infinite' : 'none'
          }}
        >
          {/* Elegant background overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/3 opacity-50"></div>
          
          <div className="text-center mb-12 relative z-10">
            <h3 
              className="text-2xl lg:text-3xl mb-6 tracking-wide transition-all duration-1500 ease-out"
              style={{
                ...getThemeStyles(selectedTheme).titleStyle,
                animation: selectedTheme === "casual" ? 'theme-pulse 2s infinite' : 'none'
              }}
            >
              Express Your Restaurant's Personality
            </h3>
            <p 
              className="text-lg max-w-2xl mx-auto font-light transition-all duration-1200 ease-out"
              style={getThemeStyles(selectedTheme).subtitleStyle}
            >
              From cozy cafes to upscale dining - customize every aspect of your digital presence to match your brand
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
            {themes.map((themeKey) => {
              const theme = getThemeStyles(themeKey);
              return (
                <motion.div
                  key={themeKey}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    console.log('Theme clicked:', themeKey);
                    setSelectedTheme(themeKey);
                  }}
                  className={`bg-white/8 backdrop-blur-md rounded-3xl p-8 border cursor-pointer relative overflow-hidden transition-all duration-500 ${
                    selectedTheme === themeKey 
                      ? 'border-white/30 bg-white/12 ring-2 ring-white/20' 
                      : 'border-white/15 hover:border-white/25 hover:bg-white/10'
                  }`}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-50 rounded-3xl"></div>
                  <div className="relative z-10">
                    <div className={`w-full h-32 rounded-xl mb-6 flex items-center justify-center shadow-lg transition-all duration-500 relative overflow-hidden ${
                      selectedTheme === themeKey ? 'shadow-xl scale-105' : ''
                    }`}>
                      {themeKey === "cozy" ? (
                        <>
                          <Image 
                            src="/cozy-cafe.jpg" 
                            alt="Cozy Cafe Interior" 
                            fill
                            className="object-cover"
                          />
                          <div className="absolute inset-0 bg-black/60"></div>
                          <span className="text-white font-medium text-lg tracking-wide relative z-10 drop-shadow-lg" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.8)' }}>{theme.name}</span>
                        </>
                      ) : themeKey === "fine" ? (
                        <>
                          <Image 
                            src="/fine-dining.jpg" 
                            alt="Fine Dining Restaurant" 
                            fill
                            className="object-cover"
                          />
                          <div className="absolute inset-0 bg-black/65"></div>
                          <span className="text-white font-medium text-lg tracking-wide relative z-10 drop-shadow-lg" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.8)' }}>{theme.name}</span>
                        </>
                      ) : themeKey === "casual" ? (
                        <>
                          <Image 
                            src="/vibrant.png" 
                            alt="Vibrant Fast-Casual Restaurant" 
                            fill
                            className="object-cover"
                          />
                          <div className="absolute inset-0 bg-black/55"></div>
                          <span className="text-white font-medium text-lg tracking-wide relative z-10 drop-shadow-lg" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.8)' }}>{theme.name}</span>
                        </>
                      ) : (
                        <>
                          <div className={`absolute inset-0 ${theme.cardGradient}`}></div>
                          <span className="text-white font-light text-lg tracking-wide relative z-10">{theme.name}</span>
                        </>
                      )}
                    </div>
                    <h4 
                      className="mb-3 text-lg transition-all duration-500"
                      style={selectedTheme === themeKey ? {
                        ...theme.titleStyle,
                        fontSize: '1.125rem'
                      } : { color: 'white', fontWeight: '500' }}
                    >
                      {theme.subtitle}
                    </h4>
                    <p 
                      className="text-sm leading-relaxed transition-all duration-500"
                      style={selectedTheme === themeKey ? theme.subtitleStyle : { color: 'rgba(255,255,255,0.7)', fontWeight: '300' }}
                    >
                      {theme.description}
                    </p>
                    {selectedTheme === themeKey && (
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-3 text-xs text-white/50 font-light"
                      >
                        ✓ Active Theme
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>

        </motion.div>
      </div>
    </section>
  );
}
