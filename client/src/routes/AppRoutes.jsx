// src/routes/AppRoutes.jsx

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/Home'; // <--- CHANGE THIS LINE

// Import other page components as you create them
// import Login from '../pages/Login/Login';
// import Signup from '../pages/Signup/Signup';
// import VendorDashboard from '../pages/VendorDashboard/VendorDashboard';
// import SupplierDashboard from '../pages/SupplierDashboard/SupplierDashboard';
// import Reviews from '../pages/Reviews/Reviews';
// import PriceTrends from '../pages/PriceTrends/PriceTrends';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* Example routes for future pages */}
      {/* <Route path="/login" element={<Login />} /> */}
      {/* <Route path="/signup" element={<Signup />} /> */}
      {/* <Route path="/vendor-dashboard" element={<VendorDashboard />} /> */}
      {/* <Route path="/supplier-dashboard" element={<SupplierDashboard />} /> */}
      {/* <Route path="/reviews" element={<Reviews />} /> */}
      {/* <Route path="/price-trends" element={<PriceTrends />} /> */}
    </Routes>
  );
};

export default AppRoutes;