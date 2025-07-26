import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-lg py-4 border-b border-gray-200">
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-green-700">
          <Link to="/">BazaarLink</Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <Link to="/features" className="hover:text-green-600 transition duration-300 ease-in-out">Features</Link>
          <Link to="/how-it-works" className="hover:text-green-600 transition duration-300 ease-in-out">How it Works</Link>
          <Link to="/pricing" className="hover:text-green-600 transition duration-300 ease-in-out">Pricing</Link>
          <Link to="/contact" className="hover:text-green-600 transition duration-300 ease-in-out">Contact</Link>
        </div>
        
        {/* Desktop Action Button */}
        <div className="hidden md:flex space-x-4">
          <Link
            to="/get-started"
            className="bg-green-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-700 transition duration-300 ease-in-out"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Content (conditionally rendered) */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg py-4">
          <div className="flex flex-col items-center space-y-4 font-medium text-gray-700">
            <Link to="/features" onClick={toggleMenu} className="hover:text-green-600">Features</Link>
            <Link to="/how-it-works" onClick={toggleMenu} className="hover:text-green-600">How it Works</Link>
            <Link to="/pricing" onClick={toggleMenu} className="hover:text-green-600">Pricing</Link>
            <Link to="/contact" onClick={toggleMenu} className="hover:text-green-600">Contact</Link>
            <Link to="/get-started" onClick={toggleMenu} className="hover:text-green-600">Get Started</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;