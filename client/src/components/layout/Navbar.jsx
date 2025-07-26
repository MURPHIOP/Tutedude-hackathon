// client/src/components/layout/Navbar.jsx

import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-green-600">
          <Link to="/">BazaarLink</Link>
        </div>
        <div className="hidden md:flex space-x-6 text-gray-700 font-medium">
          <Link to="/features" className="hover:text-green-600 transition duration-200">Features</Link>
          <Link to="/how-it-works" className="hover:text-green-600 transition duration-200">How it Works</Link>
          <Link to="/pricing" className="hover:text-green-600 transition duration-200">Pricing</Link>
          <Link to="/contact" className="hover:text-green-600 transition duration-200">Contact</Link>
        </div>
        <div className="hidden md:flex space-x-4">
          <Link
            to="/get-started"
            className="bg-green-500 text-white px-5 py-2 rounded-lg font-semibold hover:bg-green-600 transition duration-300"
          >
            Get Started
          </Link>
        </div>
        <div className="md:hidden">
          {/* Mobile menu icon (you might implement actual mobile menu logic later) */}
          <button className="text-gray-700 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;