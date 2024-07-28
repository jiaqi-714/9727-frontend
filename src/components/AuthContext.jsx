// src/components/AuthContext.js
import React, { createContext, useState } from 'react';

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  // Set the default user ID here
  const defaultUserId = '0000423b00ade91418cceaf3b26c6af3dd342b51fd051eec9c12fb36984420fa';
  const [userId, setUserId] = useState(defaultUserId);

  const login = (id) => {
    setUserId(id);
    console.log('Logged in with ID:', id); // Added log for clarity
  };

  const logout = () => {
    setUserId(null);
    console.log('Logged out'); // Added log for clarity
  };

  return (
    <AuthContext.Provider value={{ userId, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
