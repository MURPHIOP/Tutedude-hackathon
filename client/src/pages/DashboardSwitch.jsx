// src/pages/DashboardSwitch.jsx

import React from 'react';
import { useAuth } from '../context/AuthContext';
import VendorDashboard from './VendorDashboard/VendorDashboard';
import SupplierDashboard from './SupplierDashboard/SupplierDashboard';

const DashboardSwitch = () => {
  const { user } = useAuth();

  if (!user) {
    return <p>Access Denied: Please log in.</p>;
  }

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