// src/components/dashboard/DashboardLayout.jsx

import React from 'react';
import { Outlet, NavLink, Link } from 'react-router-dom';

const Sidebar = () => {
  const navLinks = [
    { to: '/supplier-dashboard', text: 'Dashboard' },
    { to: '/reviews', text: 'Reviews' },
    { to: '/price-trends', text: 'Price Trends' },
  ];

  return (
    <aside className="bg-white w-64 p-4 shadow-lg flex-shrink-0">
      <div className="flex items-center space-x-2 mb-6">
        <span className="text-2xl font-bold text-green-600">StreetSource</span>
      </div>
      <nav>
        <ul className="space-y-2">
          {navLinks.map(link => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  isActive
                    ? 'flex items-center p-3 rounded-lg text-white bg-green-600 font-semibold'
                    : 'flex items-center p-3 rounded-lg text-gray-700 hover:bg-gray-200'
                }
              >
                {link.text}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <div className="mt-8">
        <Link
          to="/"
          className="bg-gray-800 text-white p-3 rounded-lg w-full text-center block font-semibold hover:bg-gray-900"
        >
          Logout
        </Link>
      </div>
    </aside>
  );
};

const DashboardLayout = () => {
  return (
    <div className="flex bg-gray-100 min-h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <header className="bg-white shadow-sm p-4 sticky top-0 z-10">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-800">
              Welcome back, Sharma Vegetable!
            </h1>
            <div className="flex items-center space-x-4">
              <input
                type="text"
                placeholder="Search..."
                className="p-2 border rounded-md"
              />
              <img
                src="https://via.placeholder.com/40"
                alt="User Avatar"
                className="w-10 h-10 rounded-full"
              />
            </div>
          </div>
        </header>
        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;