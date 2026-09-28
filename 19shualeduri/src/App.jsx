import React, { useState } from 'react';
import Navbar from './components/Navbar';
import MobileMenu from './components/MobileMenu';
import CartDropdown from './components/CartDropdown';
import Gallery from './components/Gallery';
import LightboxModal from './components/LightboxModal';
import ProductDetails from './components/ProductDetails';

const PRODUCTS = [
  {
    id: 1,
    main: '/images/image-product-1.jpg',
    thumb: '/images/image-product-1-thumbnail.jpg',
  },
  {
    id: 2,
    main: '/images/image-product-2.jpg',
    thumb: '/images/image-product-2-thumbnail.jpg',
  },
  {
    id: 3,
    main: '/images/image-product-3.jpg',
    thumb: '/images/image-product-3-thumbnail.jpg',
  },
  {
    id: 4,
    main: '/images/image-product-4.jpg',
    thumb: '/images/image-product-4-thumbnail.jpg',
  },
];

export default function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [cartCount, setCartCount] = useState(0);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + PRODUCTS.length) % PRODUCTS.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % PRODUCTS.length);
  };

  const handleAddToCart = () => {
    if (quantity > 0) {
      setCartCount((prev) => prev + quantity);
      setIsCartOpen(true);
    }
  };

  const handleDeleteCart = () => {
    setCartCount(0);
  };

  return (
    <div className="min-h-screen bg-white text-navy-900 pb-16">
      {/* Navigation Bar */}
      <Navbar
        cartCount={cartCount}
        isCartOpen={isCartOpen}
        setIsCartOpen={setIsCartOpen}
        onOpenMobileMenu={() => setIsMobileMenuOpen(true)}
      />

      {/* Cart Dropdown */}
      <CartDropdown
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartCount={cartCount}
        onDelete={handleDeleteCart}
      />

      {/* Mobile Drawer Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />

      {/* Main Product Container */}
      <main className="max-w-6xl mx-auto px-0 md:px-8 mt-0 md:mt-16 lg:mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-24 items-center">
          {/* Gallery Section */}
          <Gallery
            products={PRODUCTS}
            currentIndex={currentIndex}
            setCurrentIndex={setCurrentIndex}
            onOpenLightbox={() => setIsLightboxOpen(true)}
            onPrev={handlePrev}
            onNext={handleNext}
          />

          {/* Product Info Section */}
          <ProductDetails
            quantity={quantity}
            setQuantity={setQuantity}
            onAddToCart={handleAddToCart}
          />
        </div>
      </main>

      {/* Desktop Lightbox Modal */}
      <LightboxModal
        isOpen={isLightboxOpen}
        onClose={() => setIsLightboxOpen(false)}
        products={PRODUCTS}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </div>
  );
}
