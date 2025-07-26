// src/services/auth.js

const mockApi = {
  login: (credentials) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (credentials.username === 'testvendor' && credentials.password === 'password') {
          const mockUser = { id: 'testvendor', name: 'Rajesh', role: 'vendor', token: 'mock-vendor-token' };
          resolve(mockUser);
        } else if (credentials.username === 'testsupplier' && credentials.password === 'password') {
          const mockUser = { id: 'testsupplier', name: 'Sharma Vegetable!', role: 'supplier', token: 'mock-supplier-token' };
          resolve(mockUser);
        }
        else {
          reject(new Error("Invalid username or password."));
        }
      }, 500);
    });
  },
  register: (userData) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (userData.username) {
          const newUser = { ...userData, id: userData.username, token: 'mock-new-user-token' };
          resolve(newUser);
        } else {
          reject(new Error("Registration failed. Please provide a username."));
        }
      }, 500);
    });
  },
};

export const loginUser = async (credentials) => {
  try {
    const user = await mockApi.login(credentials);
    localStorage.setItem('user', JSON.stringify(user));
    return user;
  } catch (err) {
    // Return a structured error object for consistent handling in context/components
    return { error: err.message || "Failed to log in. Please try again." };
  }
};

export const logoutUser = () => {
  localStorage.removeItem('user');
};

export const registerUser = async (userData) => {
  try {
    const user = await mockApi.register(userData);
    localStorage.setItem('user', JSON.stringify(user)); // Auto-login after registration
    return user;
  } catch (err) {
    return { error: err.message || "Failed to register. Please try again." };
  }
};

export const getCurrentUser = () => {
  const user = localStorage.getItem('user');
  return user ? JSON.parse(user) : null;
};