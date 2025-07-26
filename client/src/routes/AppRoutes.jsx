// src/routes/AppRoutes.jsx

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from '../components/layout/Layout.jsx';

// Import all your page components
import Home from '../pages/Home/Home.jsx';
import Features from '../pages/Features/Features.jsx';
import HowItWorks from '../pages/HowItWorks/HowItWorks.jsx';
import Pricing from '../pages/Pricing/Pricing.jsx';
import Contact from '../pages/Contact/Contact.jsx';

// New Signup Page
import GetStarted from '../pages/Signup/GetStarted.jsx';

// Specific Login & Signup Pages
import VendorLogin from '../pages/Login/VendorLogin.jsx';
import SupplierLogin from '../pages/Login/SupplierLogin.jsx';
import VendorSignup from '../pages/Signup/VendorSignup.jsx';
import SupplierSignup from '../pages/Signup/SupplierSignup.jsx';

// Authenticated Pages
import VendorDashboard from '../pages/VendorDashboard/VendorDashboard.jsx';
import SupplierDashboard from '../pages/SupplierDashboard/SupplierDashboard.jsx';
import Reviews from '../pages/Reviews/Reviews.jsx';
import PriceTrends from '../pages/PriceTrends/PriceTrends.jsx';

const AppRoutes = () => {
  return (
    <Routes>
      {/* Public Routes with Navbar and Footer */}
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="features" element={<Features />} />
        <Route path="how-it-works" element={<HowItWorks />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="contact" element={<Contact />} />
        <Route path="get-started" element={<GetStarted />} /> {/* This is the new route */}
        <Route path="vendor-login" element={<VendorLogin />} />
        <Route path="supplier-login" element={<SupplierLogin />} />
        <Route path="vendor-signup" element={<VendorSignup />} />
        <Route path="supplier-signup" element={<SupplierSignup />} />
      </Route>

      {/* Authenticated Routes */}
      <Route path="/vendor-dashboard" element={<VendorDashboard />} />
      <Route path="/supplier-dashboard" element={<SupplierDashboard />} />
      <Route path="/reviews" element={<Reviews />} />
      <Route path="/price-trends" element={<PriceTrends />} />

      {/* A catch-all route for 404 pages */}
      <Route path="*" element={<div>404 Page Not Found</div>} />
    </Routes>
  );
};

export default AppRoutes;