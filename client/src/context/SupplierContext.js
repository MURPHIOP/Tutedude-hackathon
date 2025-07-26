import React, { createContext, useContext, useState, useEffect } from 'react';
import { useAuth } from './AuthContext';

// Mock Supplier Service Functions (replace with real API calls from services/supplier.js)
const supplierService = {
  getSupplierData: async (supplierId) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (supplierId === 'testsupplier') {
          const mockData = {
            totalProducts: 12,
            totalRevenue: '₹28,450',
            activeOrders: 45,
            pendingReviews: 3,
            recentOrders: [
              { id: 'ORD-101', customerName: 'Rajesh', total: '₹1200', status: 'Shipped', deliveryDate: '26 Jul', details: 'View' },
              { id: 'ORD-102', customerName: 'Anjali Singh', total: '₹550', status: 'Delivered', deliveryDate: '25 Jul', details: 'View' },
              { id: 'ORD-103', customerName: 'Chaiwala', total: '₹180', status: 'Processing', deliveryDate: '26 Jul', details: 'View' },
              { id: 'ORD-104', customerName: 'Ram Lal', total: '₹1220', status: 'Delivered', deliveryDate: '24 Jul', details: 'View' },
            ],
            inventoryStatus: [
              { id: 1, name: 'Onions', status: 'Low Stock' },
              { id: 2, name: 'Potatoes', status: 'In Stock' },
            ],
            products: [
              { id: 1, name: 'Onions', price: '₹25/kg', stock: '10kg', status: 'Active' },
              { id: 2, name: 'Potatoes', price: '₹15/kg', stock: '50kg', status: 'Active' },
            ],
            analytics: {
              priceTrends: '15%',
              inventoryAlerts: 8,
              reviewsThisMonth: 21,
              revenueImpact: '+₹2.3K'
            },
            reviews: {
              averageRating: 4.8,
              totalReviews: 127,
              positiveReviews: 98,
              responseRate: '85%',
              ratingBreakdown: { 5: 86, 4: 27, 3: 7, 2: 3, 1: 1 }
            }
          };
          resolve(mockData);
        } else {
          reject(new Error("Supplier data not found."));
        }
      }, 500);
    });
  },

  updateOrderStatus: async (orderId, newStatus) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ success: true, message: `Order ${orderId} status updated to ${newStatus}.` });
      }, 300);
    });
  },

  addNewProduct: async (productData) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ success: true, message: `Product "${productData.name}" added successfully.` });
      }, 300);
    });
  },
};

const SupplierContext = createContext(null);

export const useSupplier = () => {
  const context = useContext(SupplierContext);
  if (!context) {
    throw new Error('useSupplier must be used within a SupplierProvider');
  }
  return context;
};

export const SupplierProvider = ({ children }) => {
  const { currentUser, isAuthenticated, isSupplier, loading: authLoading } = useAuth();
  const [supplierData, setSupplierData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSupplierInfo = async () => {
      if (isAuthenticated && isSupplier && currentUser) {
        setLoading(true);
        setError(null);
        try {
          const data = await supplierService.getSupplierData(currentUser.id);
          setSupplierData(data);
        } catch (err) {
          console.error("Failed to fetch supplier data:", err);
          setError(err.message || "Failed to load supplier data. Please try again.");
          setSupplierData(null);
        } finally {
          setLoading(false);
        }
      } else {
        setSupplierData(null);
        setLoading(false);
      }
    };

    if (!authLoading) {
      fetchSupplierInfo();
    }
  }, [isAuthenticated, isSupplier, currentUser, authLoading]);

  const refreshData = async () => {
    if (isAuthenticated && isSupplier && currentUser) {
      setLoading(true);
      setError(null);
      try {
        const data = await supplierService.getSupplierData(currentUser.id);
        setSupplierData(data);
      } catch (err) {
        console.error("Failed to refresh supplier data:", err);
        setError(err.message || "Failed to refresh data. Please try again.");
      } finally {
        setLoading(false);
      }
    }
  };

  const value = {
    supplierData,
    loading,
    error,
    refreshData,
    updateOrderStatus: supplierService.updateOrderStatus,
    addNewProduct: supplierService.addNewProduct,
  };

  if (authLoading) {
    return <div>Loading authentication...</div>;
  }

  if (isAuthenticated && !isSupplier) {
    return <div>Access Denied: You are not authorized to view supplier content.</div>;
  }

  return (
    <SupplierContext.Provider value={value}>
      {children}
    </SupplierContext.Provider>
  );
};