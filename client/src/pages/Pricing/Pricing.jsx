// src/pages/Pricing/Pricing.jsx

import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for proper routing
// Do not import Navbar or Footer here

const Pricing = () => {
  const pricingPlans = [
    {
      name: 'Basic Vendor',
      price: 'Free',
      features: [
        'Access to basic supplier listings',
        'Unlimited product Browse',
        'Standard order placement',
        'Community support',
      ],
      buttonText: 'Start Free',
      path: '/vendor-signup', // Added path for routing
      isPrimary: false,
    },
    {
      name: 'Premium Vendor',
      price: '₹199/month',
      features: [
        'All Basic features',
        'Access to premium suppliers',
        'Group ordering functionality',
        'Real-time price tracking',
        'Priority customer support',
        'Basic analytics',
      ],
      buttonText: 'Go Premium',
      path: '/vendor-signup', // Added path for routing
      isPrimary: true,
    },
    {
      name: 'Supplier Pro',
      price: '₹499/month',
      features: [
        'Unlimited product listings',
        'Order management dashboard',
        'Advanced analytics & reports',
        'Verified supplier badge',
        'Dedicated account manager',
        'Priority vendor matching',
      ],
      buttonText: 'Become a Supplier',
      path: '/supplier-signup', // Added path for routing
      isPrimary: false,
    },
  ];

  return (
    <main className="py-12 md:py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8">
          Simple & Transparent Pricing
        </h1>
        <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
          Choose a plan that fits your business needs. No hidden fees, just straightforward pricing designed to help you grow.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white rounded-lg shadow-lg p-8 flex flex-col ${
                plan.isPrimary ? 'border-4 border-green-500' : 'border border-gray-200'
              }`}
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-4">{plan.name}</h2>
              <p className="text-4xl font-extrabold text-green-600 mb-6">
                {plan.price}
              </p>
              <ul className="text-gray-700 text-left space-y-3 flex-grow mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center">
                    <svg
                      className="w-5 h-5 text-green-500 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                to={plan.path} // Use the path for routing
                className={`mt-auto w-full py-3 rounded-lg font-semibold transition duration-300 ${
                  plan.isPrimary
                    ? 'bg-green-600 text-white hover:bg-green-700 shadow-md'
                    : 'bg-gray-100 text-green-600 border border-green-600 hover:bg-green-50'
                }`}
              >
                {plan.buttonText}
              </Link>
            </div>
          ))}
        </div>

        <p className="mt-12 text-gray-600 text-sm">
          * All prices are in Indian Rupees (₹) and exclude applicable taxes.
        </p>
      </div>
    </main>
  );
};

export default Pricing;