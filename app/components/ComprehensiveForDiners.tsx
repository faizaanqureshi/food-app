"use client";
import { motion } from "framer-motion";
import { Users, MapPin, Star, Smartphone, CreditCard, Filter, Utensils, Heart, Zap, Shield, Brain, Gift } from "lucide-react";
import Image from "next/image";

export default function ComprehensiveForDiners() {
  const features = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Taste-Based Discovery",
      description: "Find restaurants and dishes based on your unique taste profile and people with similar preferences",
      color: "purple"
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Dish-Level Ratings",
      description: "See ratings and reviews for every single dish, not just the restaurant",
      color: "yellow"
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "NFC Table Ordering",
      description: "Scan NFC tags at restaurant tables to instantly access menus and order",
      color: "blue"
    },
    {
      icon: <CreditCard className="w-6 h-6" />,
      title: "Split & Pay Seamlessly",
      description: "Split bills with your table and pay directly through the app",
      color: "green"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Restaurant Loyalty",
      description: "Collect loyalty points and rewards from your favorite restaurants",
      color: "pink"
    },
    {
      icon: <Filter className="w-6 h-6" />,
      title: "Advanced Filters",
      description: "Filter by halal, kosher, allergies, dietary restrictions, and more",
      color: "orange"
    }
  ];

  return (
    <section id="for-diners" className="py-16 sm:py-20 lg:py-24 bg-black relative overflow-hidden">
      {/* Cool Section Divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-400/40 via-pink-400/40 to-transparent z-50"></div>
      
      {/* Additional spacing */}
      <div className="pt-8"></div>
      
      {/* Dark Background with Texture Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-950 to-black"></div>
      
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 opacity-[0.03] bg-gradient-to-br from-white/10 via-transparent to-white/5"></div>
      
      {/* Floating gradient orbs for restaurant ambience */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-full blur-3xl"></div>
      <div className="absolute top-40 right-16 w-80 h-80 bg-gradient-to-r from-pink-500/8 to-purple-700/8 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-72 h-72 bg-gradient-to-r from-emerald-500/6 to-blue-600/6 rounded-full blur-3xl"></div>
      <div className="absolute bottom-40 right-8 w-56 h-56 bg-gradient-to-r from-indigo-600/8 to-purple-500/8 rounded-full blur-3xl"></div>
      
      {/* Accent lines for restaurant atmosphere */}
      <div className="absolute top-32 left-8 w-2 h-20 bg-gradient-to-b from-purple-400/40 to-transparent blur-sm"></div>
      <div className="absolute top-64 right-12 w-2 h-24 bg-gradient-to-b from-pink-400/40 to-transparent blur-sm"></div>
      <div className="absolute bottom-32 left-16 w-2 h-16 bg-gradient-to-b from-emerald-400/40 to-transparent blur-sm"></div>
      <div className="absolute bottom-48 right-20 w-2 h-18 bg-gradient-to-b from-blue-400/30 to-transparent blur-sm"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center px-4 sm:px-6 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/90 text-xs sm:text-sm font-light mb-4 sm:mb-6 tracking-wide">
            <Users className="w-3 h-3 sm:w-4 sm:h-4 mr-2 sm:mr-3 text-white/70" />
            For Food Lovers
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light text-white leading-tight mb-4 sm:mb-6 lg:mb-8 tracking-tight px-2 sm:px-0">
            Discover Food You'll Actually Love
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed mb-6 sm:mb-8 lg:mb-12 font-light px-2 sm:px-0">
            Stop guessing what to order. MIRCH learns your taste, connects you with like-minded diners, and shows you exactly which dishes are worth trying.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center mb-12 sm:mb-16 lg:mb-20">
          
          {/* Left: The Journey */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6 sm:space-y-8 px-2 sm:px-0"
          >
            <div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-light text-white mb-4 sm:mb-6 tracking-tight">
                How It Works: Your Personalized Dining Journey
              </h3>
            </div>

            {/* Journey Steps */}
            <div className="space-y-4 sm:space-y-6">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 sm:gap-4 group"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-all duration-300">
                  <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-white/80" />
                </div>
                <div>
                  <h4 className="font-medium text-white mb-1 sm:mb-2 text-sm sm:text-base">Tell Us Your Taste</h4>
                  <p className="text-white/90 leading-relaxed text-sm sm:text-base">Rate dishes, set preferences, and dietary restrictions so our AI learns your unique flavor profile and discovers hidden gems you'll love.</p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 sm:gap-4 group"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-all duration-300">
                  <Users className="w-4 h-4 sm:w-5 sm:h-5 text-white/80" />
                </div>
                <div>
                  <h4 className="font-medium text-white mb-1 sm:mb-2 text-sm sm:text-base">Connect with Similar Diners</h4>
                  <p className="text-white/90 leading-relaxed text-sm sm:text-base">Find people with similar taste profiles and see authentic reviews from diners who share your palate and preferences.</p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 sm:gap-4 group"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-all duration-300">
                  <Brain className="w-4 h-4 sm:w-5 sm:h-5 text-white/80" />
                </div>
                <div>
                  <h4 className="font-medium text-white mb-1 sm:mb-2 text-sm sm:text-base">Get Smart Recommendations</h4>
                  <p className="text-white/90 leading-relaxed text-sm sm:text-base">Get specific dish recommendations at nearby restaurants with real-time availability, pricing, and cuisine suggestions aligned with your taste.</p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 sm:gap-4 group"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-all duration-300">
                  <Gift className="w-4 h-4 sm:w-5 sm:h-5 text-white/80" />
                </div>
                <div>
                  <h4 className="font-medium text-white mb-1 sm:mb-2 text-sm sm:text-base">Dine & Earn</h4>
                  <p className="text-white/90 leading-relaxed text-sm sm:text-base">Split bills seamlessly with friends, earn points across all restaurants, and unlock exclusive deals and member-only experiences.</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right: App Mockup */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative group cursor-pointer">
              {/* Phone Frame - Dark Theme */}
              <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-[3rem] p-4 shadow-2xl mx-auto max-w-sm ring-1 ring-white/10 transition-all duration-700 ease-out group-hover:scale-[1.02] group-hover:shadow-3xl">
                {/* Side buttons */}
                <div className="absolute -left-1 top-24 w-1 h-14 bg-gray-700 rounded-full"></div>
                <div className="absolute -right-1 top-32 w-1 h-16 bg-gray-700 rounded-full"></div>
                <div className="relative bg-gray-900 rounded-[2.5rem] overflow-hidden border border-gray-700">
                  
                  {/* App Content - Dark */}
                  <div className="p-6 space-y-6 bg-gradient-to-b from-gray-900 to-black">
                    {/* Header */}
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-lg font-light text-white tracking-tight">Welcome back, Faizaan</h3>
                        <p className="text-sm text-gray-500 font-light">Discover your perfect dining experience</p>
                      </div>
                      <div className="w-10 h-10 rounded-full overflow-hidden">
                        <Image 
                          src="/faizaan.jpeg" 
                          alt="Faizaan's Avatar" 
                          width={40} 
                          height={40} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    
                    {/* Taste Match - Dark Card */}
                    <div className="bg-gradient-to-r from-purple-900/40 to-pink-900/40 rounded-xl p-4 border border-purple-500/20">
                      <div className="flex items-center gap-2 mb-3">
                        <Heart className="w-5 h-5 text-purple-400" />
                        <span className="text-sm font-light text-purple-300 tracking-wide">Curated for Your Taste</span>
                      </div>
                      
                      <div className="bg-gray-800/60 backdrop-blur-sm rounded-lg p-3 mb-3 border border-gray-700/50">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-lg shadow-lg overflow-hidden">
                            <Image 
                              src="/truffle-risotto.png" 
                              alt="Truffle Risotto" 
                              width={48} 
                              height={48} 
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="flex-1">
                            <p className="font-medium text-sm text-white tracking-tight">Truffle Risotto</p>
                            <p className="text-xs text-gray-500 font-light">Bella Vista • 0.3 mi</p>
                            <div className="flex items-center gap-1 mt-1">
                              <Star className="w-3 h-3 text-yellow-400 fill-current" />
                              <span className="text-xs font-medium text-white">4.9</span>
                              <span className="text-xs text-gray-400">• 127 reviews</span>
                            </div>
                          </div>
                        </div>
                        <div className="mt-2 text-xs text-purple-300 bg-purple-900/30 rounded-full px-3 py-1 inline-block border border-purple-500/20 font-light tracking-wide">
                          92% taste match
                        </div>
                      </div>
                      
                      <div className="flex gap-2">
                        <button className="flex-1 bg-gradient-to-r from-purple-600/80 to-purple-700/80 hover:from-purple-600 hover:to-purple-700 text-white text-xs py-2.5 rounded-xl font-light tracking-wide transition-all backdrop-blur-sm">
                          Order Now
                        </button>
                        <button className="px-3 bg-white/5 border border-white/10 text-purple-400 text-xs py-2.5 rounded-xl hover:bg-white/10 transition-all backdrop-blur-sm">
                          <Heart className="w-3 h-3" />
                        </button>
                      </div>
                    </div>

                    {/* Filters - Dark */}
                    <div>
                      <p className="text-sm font-light mb-3 text-gray-400 tracking-wide">Active Preferences</p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-green-900/30 text-green-300 text-xs rounded-full border border-green-500/20 font-light tracking-wide">Halal</span>
                        <span className="px-3 py-1 bg-orange-900/30 text-orange-300 text-xs rounded-full border border-orange-500/20 font-light tracking-wide">Gluten-Free</span>
                        <span className="px-3 py-1 bg-blue-900/30 text-blue-300 text-xs rounded-full border border-blue-500/20 font-light tracking-wide">&lt; 2 miles</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Subtle gradient glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-pink-500/5 to-purple-600/5 rounded-[3rem] blur-xl opacity-0 group-hover:opacity-60 transition-all duration-600"></div>
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
            Everything You Need for Perfect Dining
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

        {/* NFC Demo Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-blue-600/20 via-purple-700/20 to-indigo-600/20 backdrop-blur-md rounded-3xl p-10 lg:p-16 text-white border border-white/10 relative overflow-hidden"
        >
          {/* Elegant background overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/3 opacity-50"></div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 bg-white/15 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/20">
                  <Zap className="w-7 h-7 text-white/90" />
                </div>
                <h3 className="text-2xl lg:text-3xl font-extralight tracking-wide">Instant Table Ordering</h3>
              </div>
              <p className="text-white/80 text-lg leading-relaxed mb-8 font-light">
                Just sit down and tap your phone on the NFC tag at your table. Instantly access the menu, see dish ratings from people like you, and order without waiting for a server.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-1.5 h-1.5 bg-white/60 rounded-full"></div>
                  <span className="text-white/70 font-light">No app download required for first use</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-1.5 h-1.5 bg-white/60 rounded-full"></div>
                  <span className="text-white/70 font-light">Split bills automatically with your table</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-1.5 h-1.5 bg-white/60 rounded-full"></div>
                  <span className="text-white/70 font-light">Earn loyalty points with every order</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/8 backdrop-blur-md rounded-3xl p-8 border border-white/15 relative overflow-hidden">
                {/* Subtle inner glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-50 rounded-3xl"></div>
                
                <div className="relative z-10">
                  <div className="text-center mb-6">
                    <div className="w-18 h-18 bg-white/15 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 border border-white/20">
                      <Smartphone className="w-9 h-9 text-white/90" />
                    </div>
                    <p className="text-sm text-white/60 font-light tracking-wide">Tap phone on NFC tag</p>
                  </div>
                  <div className="space-y-3">
                    <div className="bg-white/8 backdrop-blur-sm rounded-xl p-4 text-center border border-white/10">
                      <p className="text-sm font-light text-white/80">Menu loads instantly</p>
                    </div>
                    <div className="bg-white/8 backdrop-blur-sm rounded-xl p-4 text-center border border-white/10">
                      <p className="text-sm font-light text-white/80">See personalized recommendations</p>
                    </div>
                    <div className="bg-white/8 backdrop-blur-sm rounded-xl p-4 text-center border border-white/10">
                      <p className="text-sm font-light text-white/80">Order & pay seamlessly</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
