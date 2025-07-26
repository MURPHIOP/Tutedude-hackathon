// src/components/layout/Layout.jsx

import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';

const Layout = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen">
        <Outlet /> {/* This is where the child routes will be rendered */}
      </div>
      <Footer />
    </>
  );
};

export default Layout;