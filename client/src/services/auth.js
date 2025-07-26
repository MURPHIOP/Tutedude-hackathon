// src/services/auth.js

// Mock API functions for demonstration
const mockApi = {
  // Login Functions
  loginVendor: (credentials) => {
    // This would be your actual API call to log in a vendor
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (credentials.email === 'vendor@example.com' && credentials.password === 'password123') {
          resolve({ token: 'vendor-token-123', user: { role: 'vendor', name: 'Vendor User' } });
        } else {
          reject(new Error('Invalid vendor credentials'));
        }
      }, 500);
    });
  },
  loginSupplier: (credentials) => {
    // This would be your actual API call to log in a supplier
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (credentials.email === 'supplier@example.com' && credentials.password === 'password123') {
          resolve({ token: 'supplier-token-456', user: { role: 'supplier', name: 'Supplier User' } });
        } else {
          reject(new Error('Invalid supplier credentials'));
        }
      }, 500);
    });
  },

  // Signup Functions
  registerVendor: (userData) => {
    // This would be your actual API call to register a new vendor
    console.log('Registering new vendor:', userData);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (userData.email.includes('@')) {
          resolve({ token: 'new-vendor-token', user: { ...userData, role: 'vendor' } });
        } else {
          reject(new Error('Invalid email for vendor signup'));
        }
      }, 500);
    });
  },
  registerSupplier: (userData) => {
    // This would be your actual API call to register a new supplier
    console.log('Registering new supplier:', userData);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (userData.email.includes('@')) {
          resolve({ token: 'new-supplier-token', user: { ...userData, role: 'supplier' } });
        } else {
          reject(new Error('Invalid email for supplier signup'));
        }
      }, 500);
    });
  },
  
  // Existing mock functions
  loginUser: (credentials) => {
    // A generic login function if you need one
    return mockApi.loginVendor(credentials); // Default to vendor login for this example
  },
  registerUser: (userData) => {
    // A generic register function if you need one
    return mockApi.registerVendor(userData); // Default to vendor register for this example
  },
  getCurrentUser: () => {
    // This would fetch a user from local storage or an API token
    return new Promise((resolve) => setTimeout(() => resolve(null), 500));
  },
  logoutUser: () => {
    return new Promise((resolve) => setTimeout(() => resolve(), 500));
  }
};

// Export all the authentication functions
export const loginVendor = mockApi.loginVendor;
export const loginSupplier = mockApi.loginSupplier;
export const registerVendor = mockApi.registerVendor;
export const registerSupplier = mockApi.registerSupplier;
export const loginUser = mockApi.loginUser;
export const registerUser = mockApi.registerUser;
export const getCurrentUser = mockApi.getCurrentUser;
export const logoutUser = mockApi.logoutUser;