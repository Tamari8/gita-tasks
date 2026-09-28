import React, { useRef, useEffect } from 'react';

export default function CartDropdown({
  isOpen,
  onClose,
  cartCount,
  onDelete,
}) {
  const dropdownRef = useRef(null);

  // Close when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        !event.target.closest('button[aria-label="Shopping Cart"]')
      ) {
        onClose();
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const itemPrice = 125.0;
  const totalPrice = (itemPrice * cartCount).toFixed(2);

  return (
    <div
      ref={dropdownRef}
      className="fixed left-2 right-2 top-20 md:absolute md:top-24 md:left-auto md:right-6 lg:right-12 md:w-[360px] bg-white rounded-xl shadow-2xl z-40 border border-gray-100 overflow-hidden"
    >
      <div className="p-6 border-b border-gray-200">
        <h3 className="font-bold text-navy-900 text-base">Cart</h3>
      </div>

      <div className="p-6 min-h-[180px] flex items-center justify-center">
        {cartCount === 0 ? (
          <p className="font-bold text-slate-500 py-10">Your cart is empty.</p>
        ) : (
          <div className="w-full flex flex-col gap-6">
            <div className="flex items-center justify-between gap-4">
              <img
                src="/images/image-product-1-thumbnail.jpg"
                alt="Product thumbnail"
                className="w-12 h-12 rounded-lg object-cover"
              />
              <div className="flex-1 text-sm text-slate-500 leading-relaxed">
                <p className="truncate">Fall Limited Edition Sneakers</p>
                <p>
                  ${itemPrice.toFixed(2)} x {cartCount}{' '}
                  <span className="font-bold text-navy-900 ml-1">
                    ${totalPrice}
                  </span>
                </p>
              </div>
              <button
                type="button"
                onClick={onDelete}
                className="p-1 text-slate-400 hover:text-navy-900 focus:outline-none transition-colors"
                aria-label="Remove item from cart"
              >
                <img
                  src="/images/icon-delete.svg"
                  alt="Delete"
                  className="w-3.5 h-4 hover:brightness-50"
                />
              </button>
            </div>

            <button
              type="button"
              className="w-full bg-orange-500 hover:bg-orange-600 transition-colors text-white font-bold py-4 rounded-xl shadow-md shadow-orange-500/25 focus:outline-none"
            >
              Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
