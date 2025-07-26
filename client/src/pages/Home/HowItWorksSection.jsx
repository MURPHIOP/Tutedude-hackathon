// src/pages/Home/HowItWorksSection.jsx


import React from 'react';
import img2 from '../../assets/img2_hack.jpg'; // Adjust the path as necessary
const HowItWorksSection = () => {
  const steps = [
    {
      number: 1,
      title: 'Sign Up & Verify',
      description: 'Create your vendor or supplier account. Complete verification to access the platform and build trust with the community.',
    },
    {
      number: 2,
      title: 'Browse & Compare',
      description: 'Search for products, compare prices from multiple suppliers, read reviews, and check delivery options in your area.',
    },
    {
      number: 3,
      title: 'Order & Save',
      description: 'Place individual orders or join group orders for better prices. Track your delivery and make secure payments.',
    },
  ];

  return (
    <section className="bg-gray-100 py-12 md:py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-6">
          How BazaarLink Works
        </h2>
        <p className="text-lg text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Simple steps to get started and transform your sourcing experience
        </p>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left: Steps */}
          <div className="lg:w-1/2 grid grid-cols-1 gap-8">
            {steps.map((step) => (
              <div key={step.number} className="flex items-start gap-4 bg-white p-6 rounded-lg shadow-md">
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-green-500 text-white text-2xl font-bold rounded-full">
                  {step.number}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right: Image */}
          <div className="lg:w-1/2 flex justify-center lg:justify-end mt-8 lg:mt-0">
            <img
              src={img2} // Adjust the path as necessary
              alt="A smiling Indian street vendor holding a basket of fresh vegetables, illustrating the success of BazaarLink users"
              className="w-full max-w-md rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;