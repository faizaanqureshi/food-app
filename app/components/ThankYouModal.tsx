"use client";
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart } from 'lucide-react';

interface ThankYouModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ThankYouModal({ isOpen, onClose }: ThankYouModalProps) {
  const [showConfetti, setShowConfetti] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isOpen) {
      setShowConfetti(true);
      const timer = setTimeout(() => setShowConfetti(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
      
      // Close modal when clicking navigation links
      const handleLinkClick = (e: MouseEvent) => {
        const target = e.target as HTMLElement;
        if (target.tagName === 'A' || target.closest('a')) {
          onClose();
        }
      };
      
      document.addEventListener('click', handleLinkClick);
      
      return () => {
        document.body.style.overflow = 'unset';
        document.documentElement.style.overflow = 'unset';
        document.removeEventListener('click', handleLinkClick);
      };
    }
  }, [isOpen, onClose]);

  if (!mounted) return null;

  const modalContent = (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed top-0 left-0 w-full h-full bg-black/60 backdrop-blur-xl"
            onClick={onClose}
            style={{ 
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100vw',
              height: '100vh',
              zIndex: 2147483647,
              pointerEvents: 'all'
            }}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed inset-0 flex items-center justify-center p-4"
            onClick={onClose}
            style={{ zIndex: 2147483647, pointerEvents: 'all' }}
          >
            <div className="relative bg-gradient-to-br from-black via-gray-900 to-black rounded-3xl p-8 max-w-md w-full mx-4 shadow-2xl border border-white/10 overflow-hidden" onClick={onClose}>
              {/* Animated Background Elements */}
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-500/5 via-pink-500/5 to-indigo-500/5"></div>
              <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-xl"></div>
              <div className="absolute bottom-10 left-10 w-24 h-24 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-xl"></div>
              
              {/* Confetti Effect */}
              {showConfetti && (
                <div className="absolute inset-0 pointer-events-none">
                  {[...Array(20)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ 
                        opacity: 0, 
                        scale: 0,
                        x: Math.random() * window.innerWidth,
                        y: window.innerHeight / 2
                      }}
                      animate={{ 
                        opacity: [0, 1, 0],
                        scale: [0, 1, 0],
                        y: [window.innerHeight / 2, window.innerHeight / 2 - 100],
                        rotate: [0, 360]
                      }}
                      transition={{ 
                        duration: 2,
                        delay: Math.random() * 0.5,
                        ease: "easeOut"
                      }}
                      className="absolute w-2 h-2 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full"
                    />
                  ))}
                </div>
              )}

              {/* Content */}
              <div className="relative z-10 text-center">

                {/* Title */}
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-3xl sm:text-4xl font-light text-white mb-4 leading-tight"
                >
                  You're In!
                </motion.h2>

                {/* Message */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-base sm:text-lg text-white/90 mb-6 leading-relaxed"
                >
                  Welcome to the future of dining. You're now part of something special.
                </motion.p>

                {/* Features */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="space-y-3 mb-8"
                >
                  <div className="flex items-center justify-center space-x-3 text-white/80">
                    <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                    <span className="text-sm font-light">Early access to exclusive features</span>
                  </div>
                  <div className="flex items-center justify-center space-x-3 text-white/80">
                    <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                    <span className="text-sm font-light">Special launch discounts</span>
                  </div>
                  <div className="flex items-center justify-center space-x-3 text-white/80">
                    <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                    <span className="text-sm font-light">Priority support & updates</span>
                  </div>
                </motion.div>

                {/* Action Button */}
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={onClose}
                  className="bg-gradient-to-r from-purple-800 to-purple-900 hover:from-purple-900 hover:to-indigo-900 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl flex items-center space-x-2 mx-auto"
                >
                  <span>Continue Exploring</span>
                  <Heart className="w-4 h-4 fill-current" />
                </motion.button>

                {/* Footer */}
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="text-white/60 text-xs mt-6 font-light"
                >
                  We'll be in touch soon with exciting updates!
                </motion.p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );

  return createPortal(modalContent, document.body);
}
