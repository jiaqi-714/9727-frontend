import React from 'react'; // Make sure to import React
import NavBar from './components/Navbar'; // Ensure correct spelling and case sensitivity
import ProductGrid from './components/ProductGrid'; // Ensure correct spelling and case sensitivity
import Carousel from './components/Carousel';
import { RecommendationProvider } from './components/RecommendationContext';
function App() {
  return (
    <RecommendationProvider>
      <NavBar /> 
      <ProductGrid />
      <Carousel />
    </RecommendationProvider>
  );
}

export default App;
