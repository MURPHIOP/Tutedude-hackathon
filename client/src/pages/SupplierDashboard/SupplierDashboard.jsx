// src/pages/SupplierDashboard/SupplierDashboard.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import DashboardLayout from '../../components/dashboard/DashboardLayout.jsx'; // Make sure this path is correct

const SupplierDashboardContent = () => {
  const bestSellers = [
    {
      name: "Amit Kirana Store",
      location: "Delhi",
      rating: 4.5,
      vegetables: [
        { name: "Tomato", price: "₹30/kg" },
        { name: "Potato", price: "₹20/kg" },
        { name: "Onion", price: "₹28/kg" },
      ]
    },
    {
      name: "Fresh Veggies Mart",
      location: "Noida",
      rating: 4.2,
      vegetables: [
        { name: "Carrot", price: "₹40/kg" },
        { name: "Cabbage", price: "₹25/kg" },
        { name: "Capsicum", price: "₹50/kg" },
      ]
    },
    {
      name: "Green Cart",
      location: "Gurugram",
      rating: 4.8,
      vegetables: [
        { name: "Spinach", price: "₹15/bunch" },
        { name: "Cauliflower", price: "₹35/kg" },
      ]
    }
  ];

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Dashboard Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {/* Stat Card 1 */}
        <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-200 transition-transform transform hover:scale-105 duration-300">
          <p className="text-gray-500 text-sm font-medium">Active Orders</p>
          <p className="text-4xl font-bold text-gray-900 mt-2">45</p>
          <p className="text-sm text-green-600 mt-1 flex items-center">
            <span className="inline-block w-2 h-2 mr-1 bg-green-500 rounded-full animate-pulse"></span>
            +10% since last month
          </p>
        </div>
        {/* Stat Card 2 */}
        <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-200 transition-transform transform hover:scale-105 duration-300">
          <p className="text-gray-500 text-sm font-medium">Today's Sales</p>
          <p className="text-4xl font-bold text-gray-900 mt-2">₹25,450</p>
          <p className="text-sm text-red-600 mt-1 flex items-center">
            <span className="inline-block w-2 h-2 mr-1 bg-red-500 rounded-full"></span>
            -5% since yesterday
          </p>
        </div>
        {/* Stat Card 3 */}
        <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-200 transition-transform transform hover:scale-105 duration-300">
          <p className="text-gray-500 text-sm font-medium">New Inquiries</p>
          <p className="text-4xl font-bold text-gray-900 mt-2">12</p>
          <p className="text-sm text-green-600 mt-1">
            +2 since yesterday
          </p>
        </div>
        {/* Stat Card 4 */}
        <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-200 transition-transform transform hover:scale-105 duration-300">
          <p className="text-gray-500 text-sm font-medium">Inventory Items</p>
          <p className="text-4xl font-bold text-gray-900 mt-2">21</p>
          <p className="text-sm text-gray-600 mt-1">
            Manage all inventory
          </p>
        </div>
      </div>

      {/* Best Sellers Near You */}
      <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-200">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Best Sellers Near You</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bestSellers.map((seller, idx) => (
            <div
              key={idx}
              className="border border-gray-200 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 bg-gray-50 cursor-pointer"
            >
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-semibold text-gray-900">{seller.name}</h3>
                <span className="bg-yellow-100 text-yellow-700 text-sm font-bold px-3 py-1 rounded-full flex items-center">
                  <span className="text-yellow-400 mr-1">★</span> {seller.rating}
                </span>
              </div>
              <p className="text-gray-500 text-sm flex items-center mb-4">
                <span className="text-gray-400 mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </span>
                {seller.location}
              </p>

              <div className="mt-4">
                <h4 className="text-sm font-bold text-gray-700 mb-2">Vegetables Available:</h4>
                <ul className="space-y-1">
                  {seller.vegetables.map((veg, index) => (
                    <li key={index} className="flex justify-between text-sm text-gray-600 border-b border-gray-100 pb-1 last:border-b-0">
                      <span>{veg.name}</span>
                      <span className="font-semibold text-gray-800">{veg.price}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const SupplierDashboard = () => {
  return (
    <DashboardLayout>
      <SupplierDashboardContent />
    </DashboardLayout>
<<<<<<< HEAD
=======

>>>>>>> a332267 (SUPPLIER ERROR FIX)
  );
};

export default SupplierDashboard;