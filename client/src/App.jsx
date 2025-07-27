// src/App.jsx

import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import AppRoutes from './routes/AppRoutes';

const AppContent = () => {
  const { loading } = useAuth();

  if (loading) {
    // Render a loading spinner or a message while authentication is being checked
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <p className="text-xl text-gray-700">Loading...</p>
      </div>
    );
  }

  // Once loading is complete, render the routes
  return <AppRoutes />;
};

export default function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}
