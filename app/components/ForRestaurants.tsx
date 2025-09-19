"use client";
import { motion } from "framer-motion";
import { Store, Palette, TrendingUp, Users, Bell, CreditCard } from "lucide-react";

export default function ForRestaurants() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-emerald-100/60 to-blue-100/40 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-tr from-orange-100/50 to-emerald-100/30 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left: Dashboard Mockup */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative group">
              {/* Dashboard Frame */}
              <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
                {/* Dashboard Header */}
                <div className="bg-gradient-to-r from-emerald-500 to-blue-500 px-6 py-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                        <Store className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold">Bella Vista Dashboard</h3>
                        <p className="text-white/80 text-sm">Restaurant Analytics</p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <div className="w-3 h-3 bg-white/30 rounded-full"></div>
                      <div className="w-3 h-3 bg-white/30 rounded-full"></div>
                      <div className="w-3 h-3 bg-white/30 rounded-full"></div>
                    </div>
                  </div>
                </div>

                {/* Dashboard Content */}
                <div className="p-6 space-y-6">
                  {/* Stats Cards */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-emerald-50 rounded-xl p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <TrendingUp className="w-4 h-4 text-emerald-600" />
                        <span className="text-sm font-medium text-emerald-700">Orders Today</span>
                      </div>
                      <p className="text-2xl font-bold text-emerald-900">127</p>
                      <p className="text-xs text-emerald-600">+12% from yesterday</p>
                    </div>
                    
                    <div className="bg-blue-50 rounded-xl p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Users className="w-4 h-4 text-blue-600" />
                        <span className="text-sm font-medium text-blue-700">New Diners</span>
                      </div>
                      <p className="text-2xl font-bold text-blue-900">34</p>
                      <p className="text-xs text-blue-600">via recommendations</p>
                    </div>
                  </div>

                  {/* Most Loved Dishes */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Your Most-Loved Dishes</h4>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-red-500 rounded-lg"></div>
                          <div>
                            <p className="font-medium text-sm">Truffle Pasta</p>
                            <p className="text-xs text-gray-600">4.8 ⭐ • 89 reviews</p>
                          </div>
                        </div>
                        <span className="text-sm font-medium text-emerald-600">Hot</span>
                      </div>
                      
                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg"></div>
                          <div>
                            <p className="font-medium text-sm">Wagyu Steak</p>
                            <p className="text-xs text-gray-600">4.9 ⭐ • 67 reviews</p>
                          </div>
                        </div>
                        <span className="text-sm font-medium text-blue-600">Trending</span>
                      </div>
                    </div>
                  </div>

                  {/* Customization Preview */}
                  <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-3">
                      <Palette className="w-4 h-4 text-purple-600" />
                      <span className="text-sm font-medium text-purple-700">Page Customization</span>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      <div className="h-16 bg-gradient-to-br from-purple-400 to-pink-400 rounded-lg"></div>
                      <div className="h-16 bg-gradient-to-br from-emerald-400 to-blue-400 rounded-lg"></div>
                      <div className="h-16 bg-gradient-to-br from-orange-400 to-red-400 rounded-lg"></div>
                    </div>
                    <p className="text-xs text-purple-600 mt-2">Choose your restaurant's vibe</p>
                  </div>
                </div>
              </div>
              
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-blue-500/10 to-purple-500/10 rounded-2xl blur-2xl opacity-0 group-hover:opacity-60 transition-all duration-500"></div>
            </div>
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
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium mb-4">
                <Store className="w-4 h-4 mr-2" />
                For Restaurants
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Your restaurant, your vibe — fully in your control.
              </h2>
            </div>

            {/* Feature Points */}
            <div className="space-y-6">
              {/* Feature 1 */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="flex items-start gap-4 group"
              >
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Palette className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-gray-700 leading-relaxed">
                    <strong>Customize your page design</strong> to showcase your food & atmosphere.
                  </p>
                </div>
              </motion.div>

              {/* Feature 2 */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex items-start gap-4 group"
              >
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <TrendingUp className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-gray-700 leading-relaxed">
                    <strong>Highlight your most-loved dishes</strong> and see what's trending with diners.
                  </p>
                </div>
              </motion.div>

              {/* Feature 3 */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="flex items-start gap-4 group"
              >
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-gray-700 leading-relaxed">
                    <strong>Understand diner tastes</strong> with insights powered by MIRCH's recommendation engine.
                  </p>
                </div>
              </motion.div>

              {/* Feature 4 */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="flex items-start gap-4 group"
              >
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Bell className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-gray-700 leading-relaxed">
                    <strong>Build loyalty</strong> through rewards, push notifications, and seamless ordering.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* CTA */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="pt-4"
            >
              <button className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl">
                Get Early Access
                <Store className="w-4 h-4" />
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}