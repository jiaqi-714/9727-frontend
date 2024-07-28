import React, { createContext, useState, useEffect } from 'react';

export const RecommendationContext = createContext();

export const RecommendationProvider = ({ children }) => {
  const [recommendations, setRecommendations] = useState([]);
  const [error, setError] = useState(null);

  const customerId = '0000423b00ade91418cceaf3b26c6af3dd342b51fd051eec9c12fb36984420fa'; // Default customer ID
	const baseUrl = 'http://127.0.0.1:5000'

  useEffect(() => {
    fetch(baseUrl + `/api/items?customer_id=${customerId}`)
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
  }, [customerId]);

  return (
    <RecommendationContext.Provider value={{ recommendations, error }}>
      {children}
      {error && <div>Error: {error.message}</div>}
    </RecommendationContext.Provider>
  );
};
