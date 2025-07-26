// src/pages/Features/Features.jsx

import React from 'react';
// Do not import Navbar or Footer here, as they are handled by the Layout component
import FeaturesSection from '../Home/FeaturesSection.jsx';

const Features = () => {
  return (
    <>
      <main className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-8">
            Our Powerful Features
          </h1>
          <p className="text-lg text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Discover how BazaarLink empowers street vendors and suppliers with innovative tools designed to streamline operations, reduce costs, and foster growth.
          </p>
        </div>
        <FeaturesSection />
      </main>
    </>
  );
};

export default Features;