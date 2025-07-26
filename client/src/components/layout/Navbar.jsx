// client/src/components/layout/Navbar.jsx

import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg py-4 border-b border-gray-200"> {/* Added shadow-lg and border-b */}
      <div className="container mx-auto px-6 flex justify-between items-center"> {/* Increased horizontal padding to px-6 */}
        <div className="text-2xl font-bold text-green-700"> {/* Changed to green-700 for more vibrancy */}
          <Link to="/">BazaarLink</Link>
        </div>
        <div className="hidden md:flex space-x-8 text-gray-700 font-medium"> {/* Increased space-x to 8 */}
          <Link to="/features" className="hover:text-green-600 transition duration-300 ease-in-out">Features</Link>
          <Link to="/how-it-works" className="hover:text-green-600 transition duration-300 ease-in-out">How it Works</Link>
          <Link to="/pricing" className="hover:text-green-600 transition duration-300 ease-in-out">Pricing</Link>
          <Link to="/contact" className="hover:text-green-600 transition duration-300 ease-in-out">Contact</Link>
        </div>
        <div className="hidden md:flex space-x-4">
          <Link
            to="/get-started"
            className="bg-green-600 text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-green-700 transition duration-300 ease-in-out transform hover:scale-105" // Darker green, more padding, scale effect
          >
            Get Started
          </Link>
        </div>
        <div className="md:hidden">
          {/* Mobile menu icon (you might implement actual mobile menu logic later) */}
          <button className="text-gray-700 focus:outline-none">
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
