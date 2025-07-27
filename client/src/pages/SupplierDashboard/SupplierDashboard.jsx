import React from 'react';
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

const SupplierDashboard = () => {
  return (
    <>
      {/* Dashboard Stats */}
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

      {/* Best Sellers Near You */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Best Sellers Near You</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bestSellers.map((seller, idx) => (
            <div key={idx} className="border p-4 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-800">{seller.name}</h3>
              <p className="text-gray-500 text-sm">📍 {seller.location}</p>
              <p className="text-yellow-500 text-sm mb-2">⭐ {seller.rating} / 5</p>

              <div className="mt-2">
                <h4 className="text-sm font-bold text-gray-700 mb-1">Vegetables Available:</h4>
                <ul className="list-disc list-inside text-sm text-gray-600">
                  {seller.vegetables.map((veg, index) => (
                    <li key={index}>
                      {veg.name} - <span className="font-semibold">{veg.price}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SupplierDashboard;
