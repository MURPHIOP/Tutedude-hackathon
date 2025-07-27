import React from 'react';
import { Link } from 'react-router-dom';

const VendorDashboard = () => {
  const recentGroupOrders = [
    { id: 'GR-101', item: 'Fresh Produce', price: '₹5,000', vendors: 5, status: 'Active' },
    { id: 'GR-102', item: 'Cooking Oil', price: '₹8,500', vendors: 3, status: 'Shipped' },
    { id: 'GR-103', item: 'Spices Mix', price: '₹2,100', vendors: 8, status: 'Completed' },
  ];

  const recommendedSuppliers = [
    { name: 'Sharma Vegetables', rating: 4.8, location: 'Pune Market' },
    { name: 'Patel Brothers', rating: 4.5, location: 'Mumbai' },
    { name: 'Spice World', rating: 4.9, location: 'Delhi' },
  ];
  
  const getStatusClasses = (status) => {
    switch (status) {
      case 'Active':
        return 'bg-blue-100 text-blue-800';
      case 'Shipped':
        return 'bg-yellow-100 text-yellow-800';
      case 'Completed':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Metrics Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Metric Card 1 */}
        <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-200 transition-transform transform hover:scale-105 duration-300">
          <p className="text-gray-500 text-sm font-medium">Active Orders</p>
          <p className="text-4xl font-bold text-gray-900 mt-2">5</p>
          <p className="text-sm text-green-600 mt-1 flex items-center">
            <span className="inline-block w-2 h-2 mr-1 bg-green-500 rounded-full animate-pulse"></span>
            +2 since last week
          </p>
        </div>
        {/* Metric Card 2 */}
        <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-200 transition-transform transform hover:scale-105 duration-300">
          <p className="text-gray-500 text-sm font-medium">Group Orders</p>
          <p className="text-4xl font-bold text-gray-900 mt-2">2</p>
          <p className="text-sm text-red-600 mt-1 flex items-center">
            <span className="inline-block w-2 h-2 mr-1 bg-red-500 rounded-full"></span>
            1 pending
          </p>
        </div>
        {/* Metric Card 3 */}
        <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-200 transition-transform transform hover:scale-105 duration-300">
          <p className="text-gray-500 text-sm font-medium">Amount Saved</p>
          <p className="text-4xl font-bold text-green-600 mt-2">₹5,580</p>
          <p className="text-sm text-green-600 mt-1">in last month</p>
        </div>
        {/* Metric Card 4 */}
        <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-200 transition-transform transform hover:scale-105 duration-300">
          <p className="text-gray-500 text-sm font-medium">Community Score</p>
          <p className="text-4xl font-bold text-gray-900 mt-2">8.5</p>
          <p className="text-sm text-green-600 mt-1">Good standing</p>
        </div>
      </div>

      {/* Recent Group Orders Section */}
      <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-200">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Recent Group Orders</h2>
          <Link to="/group-orders" className="text-green-600 font-semibold hover:underline transition-colors">
            View All
          </Link>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Order ID</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Item</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Price</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Vendors</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-right text-xs font-semibold text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {recentGroupOrders.map(order => (
                <tr key={order.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{order.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{order.item}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{order.price}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{order.vendors}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusClasses(order.status)}`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <Link to={`/group-orders/${order.id}`} className="text-green-600 hover:text-green-800 transition-colors">
                      View
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
      {/* Recommended Suppliers Section */}
      <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-200">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Recommended Suppliers</h2>
          <Link to="/find-suppliers" className="text-green-600 font-semibold hover:underline transition-colors">
            View All
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recommendedSuppliers.map(supplier => (
            <div 
              key={supplier.name} 
              className="flex items-center space-x-4 p-5 border border-gray-200 rounded-xl bg-gray-50 hover:shadow-lg transition-all duration-300 cursor-pointer"
            >
              <img 
                src="https://via.placeholder.com/60" 
                alt={supplier.name} 
                className="rounded-full w-14 h-14 object-cover border-2 border-gray-200" 
              />
              <div>
                <h3 className="text-lg font-semibold text-gray-900">{supplier.name}</h3>
                <p className="text-sm text-gray-500 flex items-center mt-1">
                  <span className="text-yellow-400 mr-1">★</span>
                  {supplier.rating} stars - {supplier.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VendorDashboard;