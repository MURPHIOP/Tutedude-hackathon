import React, { createContext, useContext, useState, useEffect } from 'react';
import { getCurrentUser, loginUser, logoutUser, registerUser } from '../services/auth';

const AuthContext = createContext(null);

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // State to hold authentication errors

  useEffect(() => {
    const checkAuthStatus = () => {
      try {
        setLoading(true);
        const user = getCurrentUser(); // Get user from local storage
        setCurrentUser(user);
      } catch (err) {
        // This catch block handles unexpected errors during local storage access
        console.error("Error retrieving user from local storage:", err);
        setError("An unexpected error occurred during session check.");
        setCurrentUser(null);
      } finally {
        setLoading(false);
      }
    };
    checkAuthStatus();
  }, []);

  const login = async (credentials) => {
    setError(null); // Clear previous errors before a new attempt
    const response = await loginUser(credentials);
    if (response && response.error) {
      setError(response.error);
      return { success: false, message: response.error };
    }
    setCurrentUser(response);
    return { success: true };
  };

  const register = async (userData) => {
    setError(null); // Clear previous errors
    const response = await registerUser(userData);
    if (response && response.error) {
      setError(response.error);
      return { success: false, message: response.error };
    }
    setCurrentUser(response);
    return { success: true };
  };

  const logout = () => {
    logoutUser();
    setCurrentUser(null);
    setError(null); // Clear any errors on logout
  };

  const value = {
    currentUser,
    loading,
    error, // Expose error state
    isAuthenticated: !!currentUser,
    isVendor: currentUser?.role === 'vendor',
    isSupplier: currentUser?.role === 'supplier',
    login,
    register,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children} {/* Only render children once loading is complete */}
    </AuthContext.Provider>
  );
};