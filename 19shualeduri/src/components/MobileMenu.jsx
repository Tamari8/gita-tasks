import React, { useEffect } from 'react';

export default function MobileMenu({ isOpen, onClose }) {
  const navLinks = ['Collections', 'Men', 'Women', 'About', 'Contact'];

  // Lock scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 md:hidden">
      {/* Dark overlay backdrop */}
      <div
        className="fixed inset-0 bg-black/75 transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div className="relative w-64 max-w-[75%] h-full bg-white p-6 shadow-2xl flex flex-col gap-8 z-10 animate-in slide-in-from-left duration-200">
        <button
          type="button"
          onClick={onClose}
          className="p-1 w-fit focus:outline-none hover:opacity-70 transition-opacity"
          aria-label="Close menu"
        >
          <img src="/images/icon-close.svg" alt="Close" className="w-3.5 h-3.5" />
        </button>

        <nav className="flex flex-col gap-5">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={onClose}
              className="text-lg font-bold text-navy-900 hover:text-orange-500 transition-colors"
            >
              {link}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
}
