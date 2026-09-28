import React from 'react';

export default function Navbar({
  cartCount,
  isCartOpen,
  setIsCartOpen,
  onOpenMobileMenu,
}) {
  const navLinks = ['Collections', 'Men', 'Women', 'About', 'Contact'];

  return (
    <header className="relative w-full max-w-6xl mx-auto px-4 md:px-8">
      <div className="flex items-center justify-between h-16 md:h-28 border-b border-gray-200">
        {/* Left: Mobile Menu Button, Logo & Desktop Navigation */}
        <div className="flex items-center gap-4 md:gap-12 h-full">
          <button
            type="button"
            onClick={onOpenMobileMenu}
            className="md:hidden p-1 hover:opacity-75 transition-opacity focus:outline-none"
            aria-label="Open mobile menu"
          >
            <img src="/images/icon-menu.svg" alt="Menu" className="w-4 h-4" />
          </button>

          <a href="#" className="flex items-center focus:outline-none">
            <img src="/images/logo.svg" alt="Sneakers" className="h-5 md:h-6 -mt-1" />
          </a>

          <nav className="hidden md:flex items-center gap-8 h-full">
            {navLinks.map((link, index) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className={`h-full flex items-center text-slate-500 hover:text-navy-900 border-b-4 border-transparent hover:border-orange-500 transition-all text-sm font-medium ${
                  index === 2 ? 'text-navy-900 border-orange-500' : ''
                }`}
              >
                {link}
              </a>
            ))}
          </nav>
        </div>

        {/* Right: Cart Button & Avatar */}
        <div className="flex items-center gap-6 md:gap-10">
          <div className="relative">
            <button
              type="button"
              onClick={() => setIsCartOpen(!isCartOpen)}
              className="relative p-1 hover:opacity-75 transition-opacity focus:outline-none cursor-pointer"
              aria-label="Shopping Cart"
            >
              <img src="/images/icon-cart.svg" alt="Cart" className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-2 bg-orange-500 text-white font-bold text-[10px] px-2 py-0.5 rounded-full leading-tight">
                  {cartCount}
                </span>
              )}
            </button>
          </div>

          <button
            type="button"
            className="rounded-full border-2 border-transparent hover:border-orange-500 focus:border-orange-500 transition-all focus:outline-none cursor-pointer"
            aria-label="User Profile"
          >
            <img
              src="/images/image-avatar.png"
              alt="User Avatar"
              className="w-7 h-7 md:w-12 md:h-12 rounded-full"
            />
          </button>
        </div>
      </div>
    </header>
  );
}
