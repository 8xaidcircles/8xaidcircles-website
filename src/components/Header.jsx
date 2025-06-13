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
      <nav className="container mx-auto px-2 sm:px-4 py-2 sm:py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-1 sm:space-x-2">
            <img 
              src={Logo}
              alt="8X Aid Circles"
              className="h-6 sm:h-8 w-auto"
            />
            <span className="text-base sm:text-lg md:text-xl text-gray-800">
              8X Aid Circles
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-4 lg:space-x-8">
            <Link to="/" className="text-sm lg:text-base text-gray-600 hover:text-gray-900 transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-sm lg:text-base text-gray-600 hover:text-gray-900 transition-colors">
              About
            </Link>
            <Link to="/brand" className="text-sm lg:text-base text-gray-600 hover:text-gray-900 transition-colors">
              Brand
            </Link>
            <Link to="/news" className="text-sm lg:text-base text-gray-600 hover:text-gray-900 transition-colors">
              News
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-gray-600 hover:text-gray-900 focus:outline-none"
            onClick={toggleMenu}
          >
            <svg 
              className="w-6 h-6" 
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
              to="/" 
              className="text-sm text-gray-600 hover:text-gray-900 transition-colors px-2 py-1"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="text-sm text-gray-600 hover:text-gray-900 transition-colors px-2 py-1"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/brand" 
              className="text-sm text-gray-600 hover:text-gray-900 transition-colors px-2 py-1"
              onClick={() => setIsMenuOpen(false)}
            >
              Brand
            </Link>
            <Link 
              to="/news" 
              className="text-sm text-gray-600 hover:text-gray-900 transition-colors px-2 py-1"
              onClick={() => setIsMenuOpen(false)}
            >
              News
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
