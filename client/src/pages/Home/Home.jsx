// src/pages/Home/Home.jsx

import React from 'react';

// Import layout components - FIX these paths
import Navbar from '../../components/layout/Navbar.jsx'; // <--- ADD .jsx
import Footer from '../../components/layout/Footer.jsx'; // <--- ADD .jsx

// Import sections specific to the homepage
import HeroSection from './HeroSection.jsx';
import StatsSection from './StatsSection.jsx';
import FeaturesSection from './FeaturesSection.jsx';
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