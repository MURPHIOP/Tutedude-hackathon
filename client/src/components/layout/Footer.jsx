// client/src/components/layout/Footer.jsx

import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand Info */}
        <div>
          <h3 className="text-2xl font-bold text-green-400 mb-4">BazaarLink</h3>
          <p className="text-gray-400 text-sm">
            Connecting street vendors with trusted suppliers across India. Building a stronger food ecosystem together.
          </p>
        </div>

        {/* For Vendors */}
        <div>
          <h4 className="font-semibold text-lg mb-4">For Vendors</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><Link to="/find-suppliers" className="hover:text-green-400">Find Suppliers</Link></li>
            <li><Link to="/group-orders" className="hover:text-green-400">Group Orders</Link></li>
            <li><Link to="/price-tracking" className="hover:text-green-400">Price Tracking</Link></li>
            <li><Link to="/vendor-support" className="hover:text-green-400">Vendor Support</Link></li>
          </ul>
        </div>

        {/* For Suppliers */}
        <div>
          <h4 className="font-semibold text-lg mb-4">For Suppliers</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><Link to="/list-products" className="hover:text-green-400">List Products</Link></li>
            <li><Link to="/manage-orders" className="hover:text-green-400">Manage Orders</Link></li>
            <li><Link to="/analytics" className="hover:text-green-400">Analytics</Link></li>
            <li><Link to="/supplier-support" className="hover:text-green-400">Supplier Support</Link></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="font-semibold text-lg mb-4">Support</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><Link to="/help-center" className="hover:text-green-400">Help Center</Link></li>
            <li><Link to="/contact-us" className="hover:text-green-400">Contact Us</Link></li>
            <li><Link to="/privacy-policy" className="hover:text-green-400">Privacy Policy</Link></li>
            <li><Link to="/terms-of-service" className="hover:text-green-400">Terms of Service</Link></li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto px-4 text-center text-gray-500 text-sm mt-8 pt-6 border-t border-gray-700">
        © 2024 BazaarLink. All rights reserved. Made with ❤️ for Indian street vendors.
      </div>
    </footer>
  );
};

export default Footer;