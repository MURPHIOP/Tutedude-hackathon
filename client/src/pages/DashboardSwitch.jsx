// src/pages/DashboardSwitch.jsx

import React from 'react';
import { useAuth } from '../context/AuthContext';
import VendorDashboard from './VendorDashboard/VendorDashboard';
import SupplierDashboard from './SupplierDashboard/SupplierDashboard';

const DashboardSwitch = () => {
  const { user } = useAuth(); // Assuming 'user' object has a 'role' property

  if (!user) {
    // Optional: Redirect to login or show an error
    return <p>Access Denied: Please log in.</p>;
  }

  // Conditionally render the correct dashboard based on the user's role
  switch (user.role) {
    case 'vendor':
      return <VendorDashboard />;
    case 'supplier':
      return <SupplierDashboard />;
    default:
      return <p>Dashboard not found for this user role.</p>;
  }
};

export default DashboardSwitch;