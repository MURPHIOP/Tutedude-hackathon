import React from 'react';

const StatsSection = () => {
  return (
    <section className="bg-gray-50 py-12 md:py-16 hidden md:block"> {/* Hidden on mobile, shown on desktop */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 text-center">
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center justify-center">
            <p className="text-4xl font-bold text-green-600">10,000+</p>
            <p className="mt-2 text-lg text-gray-700">Vendors</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center justify-center">
            <p className="text-4xl font-bold text-green-600">500+</p>
            <p className="mt-2 text-lg text-gray-700">Suppliers</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center justify-center">
            <p className="text-4xl font-bold text-green-600">50+</p>
            <p className="mt-2 text-lg text-gray-700">Cities</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center justify-center">
            <p className="text-4xl font-bold text-green-600">247</p>
            <p className="mt-2 text-lg text-gray-700">Live orders</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center justify-center">
            <p className="text-4xl font-bold text-green-600">₹2.3L</p>
            <p className="mt-2 text-lg text-gray-700">Saved this month</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;