import React, { useState } from 'react';
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <img 
            className="h-8 w-auto" 
            src="https://static.wixstatic.com/media/2d6f7a_aae02a50020e41f19251f6f862ddffbb~mv2.png" 
            alt="8X Aid Circles"
          />
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2 rounded-md text-gray-600 hover:text-purple-600 hover:bg-gray-100 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg 
              className="h-6 w-6" 
              fill="none" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-600 hover:text-purple-600 transition-colors duration-200">Home</Link>
            <Link to="/about" className="text-gray-600 hover:text-purple-600 transition-colors duration-200">About</Link>
            <Link to="/news" className="text-gray-600 hover:text-purple-600 transition-colors duration-200">News</Link>
            <Link to="/brand" className="text-gray-600 hover:text-purple-600 transition-colors duration-200">Brand</Link>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} mt-4`}>
          <div className="flex flex-col space-y-4 pb-4">
            <Link to="/" className="text-gray-600 hover:text-purple-600 transition-colors duration-200">Home</Link>
            <Link to="/about" className="text-gray-600 hover:text-purple-600 transition-colors duration-200">About</Link>
            <Link to="/news" className="text-gray-600 hover:text-purple-600 transition-colors duration-200">News</Link>
            <Link to="/brand" className="text-gray-600 hover:text-purple-600 transition-colors duration-200">Brand</Link>
          </div>
        </div>
      </nav>

      {/* Under Construction Notice */}
      <div className="bg-yellow-100 text-yellow-800 text-sm text-center py-2">
        ※ 本サイトは構築中です / Under Construction
      </div>
    </header>
  );
};

export default Header;
