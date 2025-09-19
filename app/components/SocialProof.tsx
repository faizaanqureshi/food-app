export default function SocialProof() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-900 mb-6 tracking-tight">
            Be the First to Experience
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A smarter way to dine is coming. Join the waitlist to get early access.
          </p>
        </div>

        {/* Mock Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 shadow-sm">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-purple-500 rounded-full flex items-center justify-center mr-3">
                <span className="text-white font-semibold text-sm">A</span>
              </div>
              <div>
                <div className="font-semibold text-gray-900">Alex Chen</div>
                <div className="text-gray-500 text-sm">Food Enthusiast</div>
              </div>
            </div>
            <p className="text-gray-700 italic leading-relaxed">
              "Finally, an app that tells me which dish to order! No more menu roulette."
            </p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 shadow-sm">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-pink-400 to-pink-500 rounded-full flex items-center justify-center mr-3">
                <span className="text-white font-semibold text-sm">S</span>
              </div>
              <div>
                <div className="font-semibold text-gray-900">Sarah Miller</div>
                <div className="text-gray-500 text-sm">Vegan Diner</div>
              </div>
            </div>
            <p className="text-gray-700 italic leading-relaxed">
              "Love that I can filter by dietary restrictions and see actual dish reviews."
            </p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 shadow-sm">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full flex items-center justify-center mr-3">
                <span className="text-white font-semibold text-sm">M</span>
              </div>
              <div>
                <div className="font-semibold text-gray-900">Mike Rodriguez</div>
                <div className="text-gray-500 text-sm">Restaurant Owner</div>
              </div>
            </div>
            <p className="text-gray-700 italic leading-relaxed">
              "This will change how customers discover our best dishes. Can't wait!"
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-purple-600 mb-2">500+</div>
            <div className="text-gray-600 text-sm">Restaurants Interested</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-600 mb-2">2.5K</div>
            <div className="text-gray-600 text-sm">Waitlist Signups</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-green-600 mb-2">15+</div>
            <div className="text-gray-600 text-sm">Cities Launching</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-pink-600 mb-2">Q2</div>
            <div className="text-gray-600 text-sm">2025 Launch</div>
          </div>
        </div>
      </div>
    </section>
  );
}


