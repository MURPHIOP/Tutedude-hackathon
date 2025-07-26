// src/context/AuthContext.js
import { createContext, useContext, useState, useEffect } from 'react';
import { getCurrentUser } from '../services/auth';

// Create the context object
const AuthContext = createContext(null);

// Create the provider component
export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // This function will fetch the user from local storage or an API
    const fetchUser = async () => {
      try {
        const user = await getCurrentUser();
        setCurrentUser(user);
      } catch (error) {
        console.error('Failed to fetch current user:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, []);

  // Login function
  const login = (user) => {
    setCurrentUser(user);
    // You would also handle storing the token here
  };

  // Logout function
  const logout = () => {
    setCurrentUser(null);
    // You would also handle removing the token here
  };

  const value = {
    currentUser,
    loading,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

// Create the custom hook for components to use
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};