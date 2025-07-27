// src/routes/AppRoutes.jsx

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from '../components/layout/Layout.jsx';

// Page Components
import Home from '../pages/Home/Home.jsx';
import Features from '../pages/Features/Features.jsx';
import HowItWorks from '../pages/HowItWorks/HowItWorks.jsx';
import Pricing from '../pages/Pricing/Pricing.jsx';
import Contact from '../pages/Contact/Contact.jsx';
import GetStarted from '../pages/Signup/GetStarted.jsx';
import VendorLogin from '../pages/Login/VendorLogin.jsx';
import SupplierLogin from '../pages/Login/SupplierLogin.jsx';
import VendorSignup from '../pages/Signup/VendorSignup.jsx';
import SupplierSignup from '../pages/Signup/SupplierSignup.jsx';

// Dashboard Components
import DashboardLayout from '../components/dashboard/DashboardLayout.jsx';
import DashboardSwitch from '../pages/DashboardSwitch.jsx';
import Reviews from '../pages/Reviews/Reviews.jsx';
import PriceTrends from '../pages/PriceTrends/PriceTrends.jsx';
import SupplierDashboard from '../pages/SupplierDashboard/SupplierDashboard.jsx';
import VendorDashboard from '../pages/VendorDashboard/VendorDashboard.jsx';

const AppRoutes = () => {
  return (
    <Routes>
      {/* Public Routes with Layout */}
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="features" element={<Features />} />
        <Route path="how-it-works" element={<HowItWorks />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="contact" element={<Contact />} />
        <Route path="get-started" element={<GetStarted />} />
        <Route path="vendor-login" element={<VendorLogin />} />
        <Route path="supplier-login" element={<SupplierLogin />} />
        <Route path="vendor-signup" element={<VendorSignup />} />
        <Route path="supplier-signup" element={<SupplierSignup />} />
      </Route>

      {/* Dashboard Routes */}
      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route index element={<DashboardSwitch />} />
        <Route path="reviews" element={<Reviews />} />
        <Route path="price-trends" element={<PriceTrends />} />
        <Route path="vendor-dashboard" element={<VendorDashboard />} />
        <Route path="supplier-dashboard" element={<SupplierDashboard />} />
      </Route>

      {/* Catch-All */}
      <Route path="*" element={<div>404 Page Not Found</div>} />
    </Routes>
  );
};

export default AppRoutes;
