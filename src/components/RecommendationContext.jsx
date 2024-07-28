import React, { createContext, useState, useEffect, useContext } from 'react';
import { AuthContext } from './AuthContext'; // Adjust path as necessary

export const RecommendationContext = createContext();

export const RecommendationProvider = ({ children }) => {
  const [recommendations, setRecommendations] = useState([]);
  const [error, setError] = useState(null);
  const { userId } = useContext(AuthContext); // Using AuthContext

  const baseUrl = 'http://127.0.0.1:5000';

  useEffect(() => {
    if (!userId) return; // Do not fetch if there is no user ID

    fetch(`${baseUrl}/api/items?customer_id=${userId}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => setRecommendations(data))
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
        setError(error);
      });
  }, [userId]); // Dependency on userId

  return (
    <RecommendationContext.Provider value={{ recommendations, error }}>
      {children}
      {error && <div>Error: {error.message}</div>}
    </RecommendationContext.Provider>
  );
};



// 0000423b00ade91418cceaf3b26c6af3dd342b51fd051eec9c12fb36984420fa