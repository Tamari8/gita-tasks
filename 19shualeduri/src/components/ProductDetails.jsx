import React from 'react';

export default function ProductDetails({
  quantity,
  setQuantity,
  onAddToCart,
}) {
  const handleDecrease = () => {
    if (quantity > 0) {
      setQuantity((prev) => prev - 1);
    }
  };

  const handleIncrease = () => {
    setQuantity((prev) => prev + 1);
  };

  return (
    <div className="w-full max-w-[445px] mx-auto flex flex-col justify-center px-6 md:px-0">
      {/* Subheading */}
      <span className="text-orange-500 font-bold uppercase tracking-widest text-xs md:text-sm">
        Sneaker Company
      </span>

      {/* Product Title */}
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy-900 mt-3 md:mt-4 leading-tight">
        Fall Limited Edition Sneakers
      </h1>

      {/* Description */}
      <p className="text-slate-500 text-sm md:text-base mt-4 md:mt-7 leading-relaxed">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they&apos;ll withstand everything
        the weather can offer.
      </p>

      {/* Pricing Section */}
      <div className="flex items-center justify-between md:flex-col md:items-start gap-2 mt-6 md:mt-7">
        <div className="flex items-center gap-4">
          <span className="text-3xl font-bold text-navy-900">$125.00</span>
          <span className="bg-orange-100 text-orange-500 font-bold px-2.5 py-0.5 rounded-md text-sm">
            50%
          </span>
        </div>
        <span className="line-through text-slate-300 font-bold text-base">
          $250.00
        </span>
      </div>

      {/* Purchase Controls */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center gap-4 mt-6 md:mt-8">
        {/* Quantity Counter */}
        <div className="flex items-center justify-between bg-slate-100 rounded-xl px-4 py-3.5 md:w-36">
          <button
            type="button"
            onClick={handleDecrease}
            className="p-1 focus:outline-none hover:opacity-60 transition-opacity"
            aria-label="Decrease quantity"
          >
            <img src="/images/icon-minus.svg" alt="Minus" className="w-3" />
          </button>

          <span className="font-bold text-navy-900 text-base select-none">
            {quantity}
          </span>

          <button
            type="button"
            onClick={handleIncrease}
            className="p-1 focus:outline-none hover:opacity-60 transition-opacity"
            aria-label="Increase quantity"
          >
            <img src="/images/icon-plus.svg" alt="Plus" className="w-3" />
          </button>
        </div>

        {/* Add to Cart Button */}
        <button
          type="button"
          onClick={onAddToCart}
          className="flex-1 bg-orange-500 hover:bg-orange-600 transition-all text-white font-bold py-3.5 px-6 rounded-xl flex items-center justify-center gap-4 shadow-lg shadow-orange-500/30 active:scale-[0.98] focus:outline-none"
        >
          {/* Cart Icon SVG in white */}
          <svg
            className="w-4 h-4 fill-white"
            viewBox="0 0 22 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1.084l2.55 14.18a2.688 2.688 0 0 0 2.645 2.236h11.649a.896.896 0 1 0 0-1.792H7.176a.896.896 0 0 1-.882-.746l-.248-1.378h12.524a2.688 2.688 0 0 0 2.64-2.186l1.58-7.9a.896.896 0 0 0-.865-1.071ZM17.92 14.336H6.772l-1.376-7.643h13.782l-1.258 7.643Z"
              fillRule="nonzero"
            />
            <circle cx="7" cy="18" r="2" />
            <circle cx="17" cy="18" r="2" />
          </svg>
          <span>Add to cart</span>
        </button>
      </div>
    </div>
  );
}
