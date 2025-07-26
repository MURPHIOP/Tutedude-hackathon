import React from 'react';
import { Link } from 'react-router-dom';

const CallToAction = () => {
  return (
    <section className="bg-green-600 text-white py-12 md:py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Transform Your Business?
        </h2>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          Join thousands of vendors and suppliers who are already saving money and time with BazaarLink.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/signup?role=vendor"
            className="bg-white text-green-600 font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-gray-100 transition duration-300"
          >
            Start as Vendor
          </Link>
          <Link
            to="/signup?role=supplier"
            className="bg-green-700 text-white font-semibold py-3 px-8 rounded-lg border border-green-700 hover:bg-green-800 transition duration-300"
          >
            Join as Supplier
          </Link>
        </div>
        <p className="mt-6 text-sm opacity-90">
          Free to join • No setup fees • Start saving immediately
        </p>
      </div>
    </section>
  );
};

export default CallToAction;