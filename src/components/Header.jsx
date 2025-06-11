import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.svg';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm shadow-sm">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src={Logo}
              alt="8X Aid Circles"
              className="h-8 w-auto"
            />
            <span className="text-1.5xl text-gray-800">
              8X Aid Circles
            </span>
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-600 hover:text-gray-900 transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-gray-600 hover:text-gray-900 transition-colors">
              About
            </Link>
            <Link to="/brand" className="text-gray-600 hover:text-gray-900 transition-colors">
              Brand
            </Link>
            <Link to="/news" className="text-gray-600 hover:text-gray-900 transition-colors">
              News
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
