// DOM Elements
const cartBtn = document.getElementById("cart-btn");
const cartDropdown = document.getElementById("cart-dropdown");
const menuToggle = document.getElementById("menu-toggle");
const menuClose = document.getElementById("menu-close");
const navLinks = document.getElementById("nav-links");
const overlay = document.getElementById("overlay");

const minusBtn = document.getElementById("minus-btn");
const plusBtn = document.getElementById("plus-btn");
const quantityNum = document.getElementById("quantity-num");

const mainProductImg = document.getElementById("main-product-img");
const thumbs = document.querySelectorAll(".thumb");

let currentQuantity = 3;

// Toggle Cart Dropdown
cartBtn.addEventListener("click", () => {
  cartDropdown.classList.toggle("active");
});

// Mobile Menu Toggle
menuToggle.addEventListener("click", () => {
  navLinks.classList.add("active");
  overlay.classList.add("active");
});

menuClose.addEventListener("click", () => {
  navLinks.classList.remove("active");
  overlay.classList.remove("active");
});

overlay.addEventListener("click", () => {
  navLinks.classList.remove("active");
  overlay.classList.remove("active");
  cartDropdown.classList.remove("active");
});

// Quantity Counter Logic
plusBtn.addEventListener("click", () => {
  currentQuantity++;
  quantityNum.textContent = currentQuantity;
});

minusBtn.addEventListener("click", () => {
  if (currentQuantity > 0) {
    currentQuantity--;
    quantityNum.textContent = currentQuantity;
  }
});

// Gallery Thumbnails Switching Logic
thumbs.forEach((thumb) => {
  thumb.addEventListener("click", function () {
    thumbs.forEach((t) => t.classList.remove("active"));
    this.classList.add("active");

    const index = this.getAttribute("data-index");
    mainProductImg.src = `images/image-product-${index}.jpg`;
  });
});
