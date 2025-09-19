export default function HowItWorks() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gray-50 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-900 mb-6 tracking-tight">
            How It Works: Your Personalized Dining Journey
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Experience a revolutionary approach to dining that learns your preferences, connects you with like-minded food lovers, and rewards every meal. Here's how we're transforming the way you discover, order, and enjoy great food.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Step 1 */}
          <div className="text-center group">
            <div className="relative mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-3xl flex items-center justify-center mx-auto shadow-xl group-hover:shadow-2xl group-hover:scale-105 transition-all duration-300">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg">
                <span className="text-purple-600 font-bold text-lg">1</span>
              </div>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Tell Us Your Taste</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Rate dishes, set preferences, and we'll learn your flavor profile.
            </p>
            <div className="text-sm text-gray-500 space-y-2">
              <div className="flex items-center justify-center gap-2">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                <span>AI-powered taste matching learns your preferences over time</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                <span>Dietary restrictions and allergies automatically filtered</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                <span>Discover hidden gems that match your unique palate</span>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="text-center group">
            <div className="relative mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl flex items-center justify-center mx-auto shadow-xl group-hover:shadow-2xl group-hover:scale-105 transition-all duration-300">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg">
                <span className="text-blue-600 font-bold text-lg">2</span>
              </div>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Connect with Similar Diners</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              See what people with your taste buds love.
            </p>
            <div className="text-sm text-gray-500 space-y-2">
              <div className="flex items-center justify-center gap-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span>Find diners with similar taste profiles and preferences</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span>See real reviews from people who share your palate</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span>Get personalized recommendations from your taste community</span>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="text-center group">
            <div className="relative mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-3xl flex items-center justify-center mx-auto shadow-xl group-hover:shadow-2xl group-hover:scale-105 transition-all duration-300">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg">
                <span className="text-green-600 font-bold text-lg">3</span>
              </div>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Get Smart Recommendations</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Dish-level picks at restaurants nearby.
            </p>
            <div className="text-sm text-gray-500 space-y-2">
              <div className="flex items-center justify-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>Specific dish recommendations, not just restaurant suggestions</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>Real-time availability and pricing for recommended dishes</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>Discover new cuisines that align with your taste profile</span>
              </div>
            </div>
          </div>

          {/* Step 4 */}
          <div className="text-center group">
            <div className="relative mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-3xl flex items-center justify-center mx-auto shadow-xl group-hover:shadow-2xl group-hover:scale-105 transition-all duration-300">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                </svg>
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg">
                <span className="text-orange-600 font-bold text-lg">4</span>
              </div>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Dine & Earn</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Split bills, collect rewards, and unlock loyalty perks.
            </p>
            <div className="text-sm text-gray-500 space-y-2">
              <div className="flex items-center justify-center gap-2">
                <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                <span>Seamless bill splitting with friends and family</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                <span>Earn points on every purchase across all restaurants</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                <span>Unlock exclusive deals and member-only experiences</span>
              </div>
            </div>
          </div>
        </div>

        {/* Connecting Lines */}
        <div className="hidden lg:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-6xl">
          <div className="relative h-px bg-gradient-to-r from-purple-200 via-blue-200 via-green-200 to-orange-200 opacity-30"></div>
        </div>
      </div>
    </section>
  );
}


