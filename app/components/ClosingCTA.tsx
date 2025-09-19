import EmailForm from "./EmailForm";

export default function ClosingCTA() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-500/20 via-transparent to-pink-500/20"></div>
      <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-r from-pink-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-r from-blue-400/15 to-purple-400/15 rounded-full blur-3xl"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white mb-6 tracking-tight">
          Ready to Transform Your Dining?
        </h2>
        <p className="text-lg sm:text-xl text-white/90 mb-12 leading-relaxed max-w-2xl mx-auto">
          Join thousands of food lovers and restaurant owners preparing for the future of dining.
        </p>

        {/* Final CTA */}
        <div className="flex justify-center max-w-md mx-auto">
          <EmailForm 
            source="closing-cta"
            placeholder="Enter your email"
            buttonText="Join Waitlist"
            className="w-full"
            inputClassName="px-6 py-4 border-white/30 bg-white/10 backdrop-blur-md focus:border-white/50 focus:ring-2 focus:ring-white/20 text-white placeholder-white/80 shadow-lg text-base"
            buttonClassName="bg-white hover:bg-gray-100 text-purple-700 px-8 py-4 font-semibold shadow-lg hover:shadow-xl"
          />
        </div>

        <p className="text-white/60 text-sm mt-6">
          No spam, just updates on our launch. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}


