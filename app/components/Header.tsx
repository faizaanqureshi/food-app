import Image from "next/image";

export default function Header() {
  return (
    <header className="w-full py-3 sm:py-4 px-4 sm:px-6 flex items-center bg-transparent backdrop-blur-sm">
      <div className="flex items-center">
        <Image
          src="/mirch-logo-transparent.png"
          alt="MIRCH"
          width={120}
          height={40}
          className="h-6 sm:h-8 w-auto"
          priority
        />
      </div>
      <nav className="hidden sm:flex space-x-2 flex-1 justify-center">
        <div className="flex space-x-1 bg-white/10 backdrop-blur-md rounded-full px-3 sm:px-4 py-1.5 sm:py-2 border border-white/20 shadow-lg">
          <a href="#for-diners" className="text-white/80 hover:text-white transition-colors px-2 sm:px-3 py-1 rounded-full hover:bg-white/20 font-medium text-xs sm:text-sm">
            Discover
          </a>
          <a href="#for-diners" className="text-white/80 hover:text-white transition-colors px-2 sm:px-3 py-1 rounded-full hover:bg-white/20 font-medium text-xs sm:text-sm">
            For Diners
          </a>
          <a href="#for-restaurants" className="text-white/80 hover:text-white transition-colors px-2 sm:px-3 py-1 rounded-full hover:bg-white/20 font-medium text-xs sm:text-sm">
            For Restaurants
          </a>
        </div>
      </nav>
      <div className="w-8 sm:w-16"></div>
    </header>
  );
}
