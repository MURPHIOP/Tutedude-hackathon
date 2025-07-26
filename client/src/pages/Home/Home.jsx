// src/pages/Home/Home.jsx

import React from 'react';
// Do not import Navbar or Footer here

import HeroSection from './HeroSection.jsx';
import StatsSection from './StatsSection.jsx';
import FeaturesSection from './FeaturesSection.jsx';
import HowItWorksSection from './HowItWorksSection.jsx';
import CallToAction from './CallToAction.jsx';

const Home = () => {
  return (
    <>
      <main>
        <HeroSection />
        <StatsSection />
        <FeaturesSection />
        <HowItWorksSection />
        <CallToAction />
      </main>
    </>
  );
};

export default Home;