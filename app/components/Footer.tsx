import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 sm:py-16 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-400/30 via-pink-400/30 to-transparent"></div>
      <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-full blur-2xl"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-r from-blue-500/8 to-purple-700/8 rounded-full blur-2xl"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-6">
              <Image
                src="/mirch-logo.png"
                alt="MIRCH"
                width={120}
                height={40}
                className="h-8 w-auto"
              />
            </div>
            <p className="text-white/70 leading-relaxed mb-6 max-w-md">
              The all-in-one dining app that transforms how you discover, order, and enjoy food. Coming soon to revolutionize your dining experience.
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Product</h4>
            <ul className="space-y-3">
              <li><a href="#for-diners" className="text-white/70 hover:text-white transition-colors text-sm">Features</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors text-sm">Pricing</a></li>
              <li><a href="#for-restaurants" className="text-white/70 hover:text-white transition-colors text-sm">For Restaurants</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 mt-12 pt-8 text-center">
          <div className="text-white/60 text-sm">
            © 2025 MIRCH. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}


