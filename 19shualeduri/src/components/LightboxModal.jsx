import React, { useEffect } from 'react';

export default function LightboxModal({
  isOpen,
  onClose,
  products,
  currentIndex,
  setCurrentIndex,
  onPrev,
  onNext,
}) {
  // Lock body scroll when modal is open and handle Escape key
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e) => {
        if (e.key === 'Escape') onClose();
        if (e.key === 'ArrowLeft') onPrev();
        if (e.key === 'ArrowRight') onNext();
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = 'unset';
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [isOpen, onClose, onPrev, onNext]);

  if (!isOpen) return null;

  return (
    <div className="hidden md:flex fixed inset-0 z-50 items-center justify-center p-4">
      {/* Dark overlay backdrop */}
      <div
        className="fixed inset-0 bg-black/75 transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Container */}
      <div className="relative z-10 w-full max-w-[500px] flex flex-col gap-6">
        {/* Close Button at top right */}
        <div className="flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="group p-1 focus:outline-none"
            aria-label="Close lightbox"
          >
            <svg
              className="w-5 h-5 fill-slate-300 group-hover:fill-orange-500 transition-colors"
              viewBox="0 0 14 15"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
                fillRule="evenodd"
              />
            </svg>
          </button>
        </div>

        {/* Main Image with Navigation Arrows */}
        <div className="relative">
          <img
            src={products[currentIndex].main}
            alt={`Enlarged view ${currentIndex + 1}`}
            className="w-full h-[450px] object-cover rounded-2xl"
          />

          {/* Previous Arrow Button */}
          <button
            type="button"
            onClick={onPrev}
            className="group absolute -left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-105 focus:outline-none"
            aria-label="Previous image"
          >
            <svg
              className="w-3.5 h-3.5 stroke-[#1D2026] group-hover:stroke-orange-500 transition-colors"
              viewBox="0 0 12 18"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11 1 3 9l8 8"
                strokeWidth="3"
                fill="none"
                fillRule="evenodd"
              />
            </svg>
          </button>

          {/* Next Arrow Button */}
          <button
            type="button"
            onClick={onNext}
            className="group absolute -right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-105 focus:outline-none"
            aria-label="Next image"
          >
            <svg
              className="w-3.5 h-3.5 stroke-[#1D2026] group-hover:stroke-orange-500 transition-colors"
              viewBox="0 0 13 18"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m2 1 8 8-8 8"
                strokeWidth="3"
                fill="none"
                fillRule="evenodd"
              />
            </svg>
          </button>
        </div>

        {/* Thumbnail Selector */}
        <div className="flex justify-center gap-6 px-4">
          {products.map((product, idx) => {
            const isActive = idx === currentIndex;
            return (
              <button
                key={product.id}
                type="button"
                onClick={() => setCurrentIndex(idx)}
                className={`relative rounded-xl overflow-hidden focus:outline-none transition-all ${
                  isActive
                    ? 'ring-2 ring-orange-500 bg-white'
                    : 'hover:opacity-75'
                }`}
              >
                <img
                  src={product.thumb}
                  alt={`Thumbnail ${idx + 1}`}
                  className="w-[80px] h-[80px] object-cover"
                />
                {isActive && (
                  <div className="absolute inset-0 bg-white/60 pointer-events-none" />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
