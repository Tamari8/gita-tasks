import { useState } from 'react';
import ProductCard from './ProductCard';
import './App.css';

function App() {
  
  const [cartCount, setCartCount] = useState(0);

  
  const products = [
    { id: 1, title: 'iPhone 17 Pro Max', price: 1200, category: 'Electronics' },
    { id: 2, title: 'Solar Panel 400W', price: 250, category: 'Electronics' },
    { id: 3, title: 'Ballarini Frying Pan', price: 65, category: 'Kitchenware' },
    { id: 4, title: 'Cat Food 7kg', price: 40, category: 'Pet Supplies' }
  ];

  const handleAddToCart = () => {
    setCartCount(prevCount => prevCount + 1);
  };

  return (
    <div className="app-container">
    
      <h2 className="cart-header">კალათა: {cartCount} ნივთი</h2>
      
      <div className="products-grid">
        {products.map(product => (
          <ProductCard
            key={product.id} 
            product={product} 
            onAddToCart={handleAddToCart} 
          />
        ))}
      </div>
    </div>
  );
}

export default App;