// src/pages/VendorDashboard/VendorDashboard.jsx

import React from 'react';
import { Link } from 'react-router-dom';

const VendorDashboard = () => {
  const recentGroupOrders = [
    { id: 'GR-101', item: 'Fresh Produce', price: '₹5,000', vendors: 5, status: 'Active' },
    { id: 'GR-102', item: 'Cooking Oil', price: '₹8,500', vendors: 3, status: 'Shipped' },
  ];

  const recommendedSuppliers = [
    { name: 'Sharma Vegetables', rating: 4.8, location: 'Pune Market' },
    { name: 'Patel Brothers', rating: 4.5, location: 'Mumbai' },
    { name: 'Spice World', rating: 4.9, location: 'Delhi' },
  ];

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="text-gray-500 text-sm">Active Orders</p>
          <p className="text-3xl font-bold text-gray-800 mt-1">5</p>
          <p className="text-sm text-green-500 mt-2">+2 since last week</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="text-gray-500 text-sm">Group Orders</p>
          <p className="text-3xl font-bold text-gray-800 mt-1">2</p>
          <p className="text-sm text-red-500 mt-2">1 pending</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="text-gray-500 text-sm">Amount Saved</p>
          <p className="text-3xl font-bold text-gray-800 mt-1">₹5,580</p>
          <p className="text-sm text-green-500 mt-2">in last month</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="text-gray-500 text-sm">Community Score</p>
          <p className="text-3xl font-bold text-gray-800 mt-1">8.5</p>
          <p className="text-sm text-green-500 mt-2">Good standing</p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-gray-800">Recent Group Orders</h2>
          <Link to="/group-orders" className="text-green-600 hover:underline">View All</Link>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Order ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Item</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Vendors</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {recentGroupOrders.map(order => (
                <tr key={order.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{order.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.item}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.price}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.vendors}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      order.status === 'Active' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'
                    }`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <Link to={`/group-orders/${order.id}`} className="text-green-600 hover:text-green-900">View</Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-gray-800">Recommended Suppliers</h2>
          <Link to="/find-suppliers" className="text-green-600 hover:underline">View All</Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recommendedSuppliers.map(supplier => (
            <div key={supplier.name} className="flex items-center space-x-4 p-4 border rounded-lg hover:shadow-lg transition-shadow">
              <img src="https://via.placeholder.com/60" alt={supplier.name} className="rounded-full w-14 h-14" />
              <div>
                <h3 className="text-lg font-semibold text-gray-800">{supplier.name}</h3>
                <p className="text-sm text-gray-500">
                  Rating: {supplier.rating} stars - {supplier.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default VendorDashboard;