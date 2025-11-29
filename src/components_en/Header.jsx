import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.svg';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm shadow-sm">
      <nav className="container mx-auto max-w-12xl px-2 sm:px-4 md:px-6 3xl:px-8 4xl:px-16 py-2 sm:py-4 md:py-5 3xl:py-6 4xl:py-8">
        <div className="flex justify-between items-center">
          <Link to="/en" className="flex items-center space-x-1 sm:space-x-2 md:space-x-3 3xl:space-x-4">
            <img 
              src={Logo}
              alt="8X Aid Circles"
              className="h-6 sm:h-8 md:h-9 lg:h-10 xl:h-11 2xl:h-12 3xl:h-12 4xl:h-16 5xl:h-20 w-auto"
            />
            <span className="text-base sm:text-lg md:text-xl lg:text-xl xl:text-2xl 2xl:text-2xl 3xl:text-2xl 4xl:text-3xl 5xl:text-4xl text-gray-800 font-medium">
              8X Aid Circles
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-6 xl:space-x-8 2xl:space-x-10 3xl:space-x-12 4xl:space-x-16">
            <Link to="/en" className="text-sm md:text-base lg:text-base xl:text-lg 2xl:text-lg 3xl:text-lg 4xl:text-xl 5xl:text-2xl text-gray-600 hover:text-gray-900 transition-colors">
              Home
            </Link>
            <Link to="/en/about" className="text-sm md:text-base lg:text-base xl:text-lg 2xl:text-lg 3xl:text-lg 4xl:text-xl 5xl:text-2xl text-gray-600 hover:text-gray-900 transition-colors">
              About
            </Link>
            <Link to="/en/brand" className="text-sm md:text-base lg:text-base xl:text-lg 2xl:text-lg 3xl:text-lg 4xl:text-xl 5xl:text-2xl text-gray-600 hover:text-gray-900 transition-colors">
              Brand
            </Link>
            <Link to="/en/news" className="text-sm md:text-base lg:text-base xl:text-lg 2xl:text-lg 3xl:text-lg 4xl:text-xl 5xl:text-2xl text-gray-600 hover:text-gray-900 transition-colors">
              News
            </Link>

            {/* Language Switcher */}
            <div className="flex items-center space-x-1 ml-4 border-l pl-4 border-gray-300">
              <Link 
                to="/" 
                className="text-sm md:text-base lg:text-base xl:text-lg 2xl:text-lg 3xl:text-lg 4xl:text-xl 5xl:text-2xl text-gray-600 hover:text-gray-900 transition-colors"
              >
                JP
              </Link>
              <span className="text-gray-400">|</span>
              <Link 
                to="/en" 
                className="text-sm md:text-base lg:text-base xl:text-lg 2xl:text-lg 3xl:text-lg 4xl:text-xl 5xl:text-2xl text-gray-900 font-semibold"
              >
                EN
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-gray-600 hover:text-gray-900 focus:outline-none"
            onClick={toggleMenu}
          >
            <svg 
              className="w-6 h-6 sm:w-7 sm:h-7" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} mt-2 pb-2`}>
          <div className="flex flex-col space-y-2">
            <Link 
              to="/en" 
              className="text-sm sm:text-base text-gray-600 hover:text-gray-900 transition-colors px-2 py-1"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/en/about" 
              className="text-sm sm:text-base text-gray-600 hover:text-gray-900 transition-colors px-2 py-1"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/en/brand" 
              className="text-sm sm:text-base text-gray-600 hover:text-gray-900 transition-colors px-2 py-1"
              onClick={() => setIsMenuOpen(false)}
            >
              Brand
            </Link>
            <Link 
              to="/en/news" 
              className="text-sm sm:text-base text-gray-600 hover:text-gray-900 transition-colors px-2 py-1"
              onClick={() => setIsMenuOpen(false)}
            >
              News
            </Link>

            {/* Language Switcher (Mobile) */}
            <div className="flex items-center space-x-2 px-2 py-1 mt-2 border-t border-gray-200 pt-3">
              <Link 
                to="/" 
                className="text-sm sm:text-base text-gray-600 hover:text-gray-900 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                JP
              </Link>
              <span className="text-gray-400">|</span>
              <Link 
                to="/en" 
                className="text-sm sm:text-base text-gray-900 font-semibold"
                onClick={() => setIsMenuOpen(false)}
              >
                EN
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

