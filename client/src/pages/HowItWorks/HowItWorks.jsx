// src/pages/HowItWorks/HowItWorks.jsx

import React from 'react';
import Navbar from '../../components/layout/Navbar.jsx';
import Footer from '../../components/layout/Footer.jsx';
import HowItWorksSection from '../Home/HowItWorksSection.jsx'; // Reusing the section from Home

const HowItWorks = () => {
  return (
    <>
      <Navbar />
      <main className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-8">
            How BazaarLink Works
          </h1>
          <p className="text-lg text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Our platform simplifies the process of connecting street vendors with reliable suppliers. Here's a step-by-step guide on how to get started and make the most of BazaarLink.
          </p>
        </div>
        {/* Reusing the HowItWorksSection component from the Home page */}
        <HowItWorksSection />
      </main>
      <Footer />
    </>
  );
};

export default HowItWorks;
