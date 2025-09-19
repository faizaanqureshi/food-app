"use client";
import { motion } from "framer-motion";
import { ArrowRight, Users, Utensils, Star, Filter } from "lucide-react";
import Image from "next/image";

export default function ForDiners() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-purple-100/60 to-pink-100/40 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-tr from-blue-100/50 to-purple-100/30 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left: Content */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-sm font-medium mb-4">
                <Users className="w-4 h-4 mr-2" />
                For Diners
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Discover food you'll love, powered by your taste.
              </h2>
            </div>

            {/* Flow Steps */}
            <div className="space-y-6">
              {/* Step 1 */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="flex items-start gap-4 group"
              >
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-semibold text-sm">1</span>
                </div>
                <div>
                  <p className="text-gray-700 leading-relaxed">
                    <strong>MIRCH learns what you like</strong> → recommends dishes with similar flavors.
                  </p>
                </div>
              </motion.div>

              {/* Step 2 */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex items-start gap-4 group"
              >
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-semibold text-sm">2</span>
                </div>
                <div>
                  <p className="text-gray-700 leading-relaxed">
                    <strong>Uses the tastes of people like you</strong> → surfaces hidden gems you'd never find.
                  </p>
                </div>
              </motion.div>

              {/* Step 3 */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="flex items-start gap-4 group"
              >
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-500 to-pink-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-semibold text-sm">3</span>
                </div>
                <div>
                  <p className="text-gray-700 leading-relaxed">
                    <strong>Dish-level reviews</strong>, halal & dietary filters, real dining intel.
                  </p>
                </div>
              </motion.div>

              {/* Step 4 */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="flex items-start gap-4 group"
              >
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-semibold text-sm">4</span>
                </div>
                <div>
                  <p className="text-gray-700 leading-relaxed">
                    <strong>Dine seamlessly</strong>: scan to order, split bills, earn rewards.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Flow Diagram */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
            >
              <div className="flex items-center justify-between text-center">
                <div className="flex-1">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-sm font-medium text-gray-900">You</p>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400 mx-3" />
                <div className="flex-1">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-sm font-medium text-gray-900">Similar Diners</p>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400 mx-3" />
                <div className="flex-1">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Utensils className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-sm font-medium text-gray-900">New Dishes You'll Love</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: App Mockup */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative group">
              {/* Phone Frame */}
              <div className="bg-gray-900 rounded-[3rem] p-3 shadow-2xl mx-auto max-w-sm">
                <div className="bg-white rounded-[2.5rem] overflow-hidden">
                  {/* Status Bar */}
                  <div className="bg-gray-50 px-6 py-2 flex justify-between items-center text-xs">
                    <span className="font-medium">9:41</span>
                    <div className="flex gap-1">
                      <div className="w-4 h-2 bg-green-500 rounded-sm"></div>
                      <div className="w-1 h-2 bg-gray-300 rounded-sm"></div>
                      <div className="w-6 h-2 bg-gray-300 rounded-sm"></div>
                    </div>
                  </div>
                  
                  {/* App Content */}
                  <div className="p-4 space-y-4">
                    {/* Header */}
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-bold">Recommended for You</h3>
                      <Filter className="w-5 h-5 text-gray-400" />
                    </div>
                    
                    {/* "People Like You Loved" Section */}
                    <div className="bg-purple-50 rounded-xl p-4">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center">
                          <Users className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-sm font-medium text-purple-700">People like you loved...</span>
                      </div>
                      
                      {/* Dish Cards */}
                      <div className="space-y-3">
                        <div className="bg-white rounded-lg p-3 flex items-center gap-3">
                          <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-500 rounded-lg"></div>
                          <div className="flex-1">
                            <p className="font-medium text-sm">Truffle Pasta</p>
                            <div className="flex items-center gap-1">
                              <Star className="w-3 h-3 text-yellow-400 fill-current" />
                              <span className="text-xs text-gray-600">4.8 • Bella Vista</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-white rounded-lg p-3 flex items-center gap-3">
                          <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg"></div>
                          <div className="flex-1">
                            <p className="font-medium text-sm">Salmon Teriyaki</p>
                            <div className="flex items-center gap-1">
                              <Star className="w-3 h-3 text-yellow-400 fill-current" />
                              <span className="text-xs text-gray-600">4.9 • Sakura Sushi</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-green-500/10 rounded-[3rem] blur-2xl opacity-0 group-hover:opacity-60 transition-all duration-500"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
