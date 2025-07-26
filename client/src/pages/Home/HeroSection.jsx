import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../assets/img1_hack.jpg';

const HeroSection = () => {
  return (
    <section className="bg-white py-12 md:py-20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
            Connect Street Vendors with Trusted Suppliers
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-600">
            Join India's largest marketplace for raw materials. Get better prices, reliable delivery, and quality ingredients for your street food business.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
            <Link
              to="/login?role=vendor"
              className="bg-green-500 text-white font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-green-600 transition duration-300"
            >
              Vendor Login
            </Link>
            <Link
              to="/login?role=supplier"
              className="bg-white text-green-500 font-semibold py-3 px-8 rounded-lg border border-green-500 hover:bg-green-50 transition duration-300"
            >
              Supplier Login
            </Link>
          </div>
          {/* Stats section on mobile, hidden for desktop as per UI */}
          <div className="mt-8 md:hidden text-gray-700 font-semibold text-center">
            <div className="flex justify-around items-center mt-4">
              <div>
                <p className="text-2xl font-bold">10,000+</p>
                <p className="text-sm">Vendors</p>
              </div>
              <div>
                <p className="text-2xl font-bold">500+</p>
                <p className="text-sm">Suppliers</p>
              </div>
              <div>
                <p className="text-2xl font-bold">50+</p>
                <p className="text-sm">Cities</p>
              </div>
            </div>
            <div className="flex justify-around items-center mt-6">
              <div>
                <p className="text-2xl font-bold">247</p>
                <p className="text-sm">Live orders</p>
              </div>
              <div>
                <p className="text-2xl font-bold">₹2.3L</p>
                <p className="text-sm">Saved this month</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Image/Illustration */}
        <div className="md:w-1/2 flex justify-center md:justify-end mt-8 md:mt-0">
          <img
            src={img1_hack}
            alt="Street food vendor market scene"
            className="w-full max-w-lg rounded-lg shadow-xl"
           />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;