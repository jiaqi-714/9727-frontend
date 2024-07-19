import React from 'react'; // Make sure to import React
import NavBar from './components/Navbar'; // Ensure correct spelling and case sensitivity
import ProductGrid from './components/ProductGrid'; // Ensure correct spelling and case sensitivity
import Carousel from './components/Carousel';
function App() {
  return (
    <div className="App">
      <NavBar /> 
      <ProductGrid />
      <Carousel />
    </div>
  );
}

export default App;
