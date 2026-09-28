import React from 'react';

export default function Gallery({
  products,
  currentIndex,
  setCurrentIndex,
  onOpenLightbox,
  onPrev,
  onNext,
}) {
  return (
    <div className="w-full max-w-[445px] mx-auto flex flex-col gap-8">
      {/* Main Image Container */}
      <div className="relative w-full overflow-hidden sm:rounded-2xl">
        <img
          src={products[currentIndex].main}
          alt={`Sneaker view ${currentIndex + 1}`}
          onClick={() => {
            // Open lightbox only on screens larger than mobile
            if (window.innerWidth >= 768) {
              onOpenLightbox();
            }
          }}
          className="w-full h-[300px] sm:h-[400px] md:h-[445px] object-cover cursor-pointer md:hover:opacity-95 transition-all"
        />

        {/* Mobile Navigation Buttons */}
        <button
          type="button"
          onClick={onPrev}
          className="md:hidden absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:text-orange-500 transition-colors focus:outline-none"
          aria-label="Previous image"
        >
          <img src="/images/icon-previous.svg" alt="Previous" className="w-2.5 h-2.5 -ml-0.5" />
        </button>

        <button
          type="button"
          onClick={onNext}
          className="md:hidden absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:text-orange-500 transition-colors focus:outline-none"
          aria-label="Next image"
        >
          <img src="/images/icon-next.svg" alt="Next" className="w-2.5 h-2.5 ml-0.5" />
        </button>
      </div>

      {/* Desktop Thumbnails */}
      <div className="hidden md:flex justify-between items-center gap-6">
        {products.map((product, idx) => {
          const isActive = idx === currentIndex;
          return (
            <button
              key={product.id}
              type="button"
              onClick={() => setCurrentIndex(idx)}
              className={`relative rounded-xl overflow-hidden focus:outline-none transition-all ${
                isActive
                  ? 'ring-2 ring-orange-500 ring-offset-2'
                  : 'hover:opacity-75'
              }`}
            >
              <img
                src={product.thumb}
                alt={`Thumbnail ${idx + 1}`}
                className="w-[88px] h-[88px] object-cover"
              />
              {/* Active translucent white overlay */}
              {isActive && (
                <div className="absolute inset-0 bg-white/60 pointer-events-none" />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
