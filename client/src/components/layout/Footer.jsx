import React from 'react';
import { Link } from 'react-router-dom';

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

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><Link to="/features" className="hover:text-green-400">Features</Link></li>
            <li><Link to="/how-it-works" className="hover:text-green-400">How It Works</Link></li>
            <li><Link to="/pricing" className="hover:text-green-400">Pricing</Link></li>
            <li><Link to="/contact" className="hover:text-green-400">Contact</Link></li>
          </ul>
        </div>
        
        {/* For Vendors & Suppliers - Linked to Dashboards */}
        <div>
          <h4 className="font-semibold text-lg mb-4">For Users</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><Link to="/vendor-dashboard" className="hover:text-green-400">Vendor Dashboard</Link></li>
            <li><Link to="/supplier-dashboard" className="hover:text-green-400">Supplier Dashboard</Link></li>
            <li><Link to="/price-trends" className="hover:text-green-400">Price Trends</Link></li>
            <li><Link to="/reviews" className="hover:text-green-400">Reviews</Link></li>
          </ul>
        </div>

        {/* Legal & Support */}
        <div>
          <h4 className="font-semibold text-lg mb-4">Legal & Support</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            {/* These links require new pages and routes to be created */}
            <li><Link to="#" className="hover:text-green-400">Privacy Policy</Link></li>
            <li><Link to="#" className="hover:text-green-400">Terms of Service</Link></li>
            <li><Link to="/contact" className="hover:text-green-400">Contact Us</Link></li>
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