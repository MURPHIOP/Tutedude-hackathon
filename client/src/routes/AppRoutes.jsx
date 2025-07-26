// src/routes/AppRoutes.jsx

import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from '../components/layout/Navbar.jsx';
import Footer from '../components/layout/Footer.jsx';
import Home from '../pages/Home/Home.jsx';
import Features from '../pages/Features/Features.jsx';
import Login from '../pages/Login/Login.jsx';
import Signup from '../pages/Signup/Signup.jsx';
import VendorDashboard from '../pages/VendorDashboard/VendorDashboard.jsx';
import SupplierDashboard from '../pages/SupplierDashboard/SupplierDashboard.jsx';
import Reviews from '../pages/Reviews/Reviews.jsx';
import PriceTrends from '../pages/PriceTrends/PriceTrends.jsx';

// Import the new pages
import HowItWorks from '../pages/HowItWorks/HowItWorks.jsx';
import Pricing from '../pages/Pricing/Pricing.jsx';
import Contact from '../pages/Contact/Contact.jsx';

const AppRoutes = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Home />} />
      <Route path="/features" element={<Features />} />
      <Route path="/how-it-works" element={<HowItWorks />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      {/* Authenticated Routes (placeholders for now) */}
      <Route path="/vendor-dashboard" element={<VendorDashboard />} />
      <Route path="/supplier-dashboard" element={<SupplierDashboard />} />
      <Route path="/reviews" element={<Reviews />} />
      <Route path="/price-trends" element={<PriceTrends />} />
    </Routes>
  );
};

export default AppRoutes;