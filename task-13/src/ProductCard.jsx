function ProductCard({ product, onAddToCart }) {
 
  const isElectronics = product.category === 'Electronics';

  return (
    <div className={`card ${isElectronics ? 'electronics-card' : ''}`}>
      <h3>{product.title}</h3>
      <p>ფასი: ${product.price}</p>
      <p>კატეგორია: {product.category}</p>
      <button onClick={onAddToCart} className="add-btn">
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;