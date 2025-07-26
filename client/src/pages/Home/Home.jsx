// src/pages/Home/Home.jsx

import React from 'react';
import Navbar from '../../components/layout/Navbar.jsx';
import Footer from '../../components/layout/Footer.jsx';
import HeroSection from './HeroSection.jsx';
import StatsSection from './StatsSection.jsx';
import FeaturesSection from './FeaturesSection.jsx'; // Corrected: Import from same directory
import HowItWorksSection from './HowItWorksSection.jsx';
import CallToAction from './CallToAction.jsx';

const Home = () => {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <StatsSection />
        <FeaturesSection />
        <HowItWorksSection />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
};

export default Home;