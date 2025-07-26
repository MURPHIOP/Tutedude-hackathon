// src/pages/Signup/GetStarted.jsx

import React from 'react';
import { Link } from 'react-router-dom';

const GetStarted = () => {
  return (
    <main className="py-12 md:py-20 flex items-center justify-center min-h-[70vh]">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
          Ready to Get Started?
        </h1>
        <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
          Choose your role to log in and start connecting.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8">
          <Link
            to="/vendor-login"
            className="w-full sm:w-auto bg-green-600 text-white font-bold py-3 px-8 rounded-lg shadow-md hover:bg-green-700 transition-colors"
          >
            Vendor Login
          </Link>
          <Link
            to="/supplier-login"
            className="w-full sm:w-auto bg-gray-800 text-white font-bold py-3 px-8 rounded-lg shadow-md hover:bg-gray-900 transition-colors"
          >
            Supplier Login
          </Link>
        </div>
      </div>
    </main>
  );
};

export default GetStarted;