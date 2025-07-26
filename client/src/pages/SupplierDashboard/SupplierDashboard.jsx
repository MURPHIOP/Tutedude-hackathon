// src/pages/SupplierDashboard/SupplierDashboard.jsx

import React from 'react';
import { Link } from 'react-router-dom';

const SupplierDashboard = () => {
  const recentOrders = [
    { id: 'ORD-987', vendor: 'Amit Kirana', amount: '₹12,450', status: 'Pending' },
    { id: 'ORD-986', vendor: 'Pooja Tiffin', amount: '₹8,100', status: 'Delivered' },
    { id: 'ORD-985', vendor: 'Rajesh Sweets', amount: '₹1,500', status: 'Shipped' },
  ];

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="text-gray-500 text-sm">Active Orders</p>
          <p className="text-3xl font-bold text-gray-800 mt-1">45</p>
          <p className="text-sm text-green-500 mt-2">+10% since last month</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="text-gray-500 text-sm">Today's Sales</p>
          <p className="text-3xl font-bold text-gray-800 mt-1">₹25,450</p>
          <p className="text-sm text-red-500 mt-2">-5% since yesterday</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="text-gray-500 text-sm">New Inquiries</p>
          <p className="text-3xl font-bold text-gray-800 mt-1">12</p>
          <p className="text-sm text-green-500 mt-2">+2 since yesterday</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="text-gray-500 text-sm">Inventory Items</p>
          <p className="text-3xl font-bold text-gray-800 mt-1">21</p>
          <p className="text-sm text-gray-500 mt-2">Manage all inventory</p>
        </div>
      </div>

      {/* Recent Orders Section */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-gray-800">Recent Orders</h2>
          <Link to="/supplier-orders" className="text-green-600 hover:underline">View All</Link>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Order ID</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Vendor</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {recentOrders.map(order => (
                <tr key={order.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{order.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.vendor}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.amount}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      order.status === 'Delivered' ? 'bg-green-100 text-green-800' :
                      order.status === 'Shipped' ? 'bg-blue-100 text-blue-800' : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <Link to={`/supplier-orders/${order.id}`} className="text-green-600 hover:text-green-900">View</Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
      {/* Inventory Status */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Inventory Status</h2>
        <div className="flex justify-between items-center">
          <p className="text-gray-600">Your current inventory is well-stocked. Manage your products to avoid shortages.</p>
          <button className="bg-green-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-green-700 transition-colors">
            Manage Inventory
          </button>
        </div>
      </div>
    </>
  );
};

export default SupplierDashboard;