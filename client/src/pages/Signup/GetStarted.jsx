// src/pages/Signup/GetStarted.jsx

import React from 'react';
import { Link } from 'react-router-dom';

const GetStarted = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-md text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Get Started</h2>
        <p className="text-lg text-gray-600 mb-8">
          Join our platform by signing up as either a vendor or a supplier.
        </p>
        <div className="flex flex-col space-y-4">
          <Link
            to="/vendor-signup"
            className="w-full bg-indigo-600 text-white font-bold py-3 px-6 rounded-lg shadow-md hover:bg-indigo-700 transition-colors"
          >
            Sign up as a Vendor
          </Link>
          <Link
            to="/supplier-signup"
            className="w-full bg-green-600 text-white font-bold py-3 px-6 rounded-lg shadow-md hover:bg-green-700 transition-colors"
          >
            Sign up as a Supplier
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;