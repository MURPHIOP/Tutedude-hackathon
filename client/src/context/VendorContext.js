import React, { createContext, useContext, useState, useEffect } from 'react';
import { useAuth } from './AuthContext';

// Mock Vendor Service Functions (replace with real API calls from services/vendor.js)
const vendorService = {
  getVendorData: async (vendorId) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (vendorId === 'testvendor') {
          const mockData = {
            totalOrders: 5,
            groupOrders: 2,
            totalSpent: '₹9,580',
            recentGroupOrders: [
              { id: 'GO-101', title: 'Fresh vegetables', supplier: 'Sharma Veggies', members: ['vendor1', 'vendor2', 'vendor3'], status: 'Active' },
              { id: 'GO-102', title: 'Daily spices', supplier: 'Patel Masala', members: ['vendor4', 'vendor5'], status: 'Delivered' },
            ],
            recommendedSuppliers: [
              { id: 1, name: 'Sharma Vegetables', rating: 4.5, location: 'Dadar, Mumbai', delivery: 'Free delivery, 2-3 days' },
              { id: 2, name: 'Patel Brothers', rating: 4.8, location: 'Borivali, Mumbai', delivery: 'Next-day delivery' },
              { id: 3, name: 'Spice World', rating: 4.2, location: 'Andheri, Mumbai', delivery: 'Same-day delivery' },
            ],
            priceTrends: {
              vegetables: '15%',
              spices: '10%',
              oil: '8%',
              savings: '+₹2.3K'
            },
            products: [
              { id: 1, name: 'Tomatoes', currentPrice: '₹30/kg', marketPrice: '₹35/kg' },
              { id: 2, name: 'Potatoes', currentPrice: '₹18/kg', marketPrice: '₹20/kg' },
            ]
          };
          resolve(mockData);
        } else {
          reject(new Error("Vendor data not found."));
        }
      }, 500);
    });
  },

  joinGroupOrder: async (orderId) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ success: true, message: `Joined group order ${orderId} successfully.` });
      }, 300);
    });
  },

  createGroupOrder: async (orderData) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ success: true, message: `Group order for "${orderData.name}" created.` });
      }, 300);
    });
  },
};

const VendorContext = createContext(null);

export const useVendor = () => {
  const context = useContext(VendorContext);
  if (!context) {
    throw new Error('useVendor must be used within a VendorProvider');
  }
  return context;
};

export const VendorProvider = ({ children }) => {
  const { currentUser, isAuthenticated, isVendor, loading: authLoading } = useAuth();
  const [vendorData, setVendorData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVendorInfo = async () => {
      if (isAuthenticated && isVendor && currentUser) {
        setLoading(true);
        setError(null);
        try {
          const data = await vendorService.getVendorData(currentUser.id);
          setVendorData(data);
        } catch (err) {
          console.error("Failed to fetch vendor data:", err);
          setError(err.message || "Failed to load vendor data. Please try again.");
          setVendorData(null);
        } finally {
          setLoading(false);
        }
      } else {
        setVendorData(null);
        setLoading(false);
      }
    };

    if (!authLoading) { // Only fetch if authentication state is ready
      fetchVendorInfo();
    }
  }, [isAuthenticated, isVendor, currentUser, authLoading]);

  const refreshData = async () => {
    if (isAuthenticated && isVendor && currentUser) {
      setLoading(true);
      setError(null);
      try {
        const data = await vendorService.getVendorData(currentUser.id);
        setVendorData(data);
      } catch (err) {
        console.error("Failed to refresh vendor data:", err);
        setError(err.message || "Failed to refresh data. Please try again.");
      } finally {
        setLoading(false);
      }
    }
  };

  const value = {
    vendorData,
    loading,
    error,
    refreshData,
    joinGroupOrder: vendorService.joinGroupOrder,
    createGroupOrder: vendorService.createGroupOrder,
  };

  if (authLoading) {
    return <div>Loading authentication...</div>;
  }

  // Prevent rendering children if authenticated user is not a vendor
  if (isAuthenticated && !isVendor) {
    return <div>Access Denied: You are not authorized to view vendor content.</div>;
  }

  return (
    <VendorContext.Provider value={value}>
      {children}
    </VendorContext.Provider>
  );
};