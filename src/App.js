import React from 'react'; // Make sure to import React
import NavBar from './components/Navbar'; // Ensure correct spelling and case sensitivity
import ProductGrid from './components/ProductGrid'; // Ensure correct spelling and case sensitivity
import Carousel from './components/Carousel';
import { RecommendationProvider } from './components/RecommendationContext';
import { AuthProvider } from './components/AuthContext';


function App() {
  return (
    <AuthProvider>
      <RecommendationProvider>
        <NavBar /> 
        <ProductGrid />
        <Carousel />
      </RecommendationProvider>
    </AuthProvider>
  );
}

export default App;
