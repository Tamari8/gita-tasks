"use strict";
//  1) გაქვს ლეპტოპების მასივი, იპოვე ყველაზე ძვირი და გამოიტანე კონსოლში
const laptops = [
  { model: "Dell XPS 13", price: 1800 },
  { model: "MacBook Pro 14", price: 2499 },
  { model: "Lenovo ThinkPad X1", price: 2100 },
  { model: "Asus Zephyrus G14", price: 1999 },
];
laptops.sort((a, b) => b.price - a.price);
const mostExpensive = laptops[0];
console.log(mostExpensive);
// 2)შექმენი ობიექტი, რომელსაც ექნება width, height და getArea() მეთოდი, რომელიც დააბრუნებს ფართობს.
const rectangle = {
  width: 10,
  height: 5,
  getArea: function () {
    return this.width * this.height;
  },
};
console.log(rectangle.getArea());
// 3)დაბეჭდე მხოლოდ იმ სტუდენტების სახელები, რომელთაც passed === true.
const students = [
  { name: "Giorgi", score: 85, passed: true },
  { name: "Nika", score: 50, passed: false },
  { name: "Mariam", score: 92, passed: true },
  { name: "Luka", score: 60, passed: false },
];
students.forEach((student) => {
  if (student.passed === true) {
    console.log(student.name);
  }
});
// 4)გაფილტრე ისეთი პროდუქტები, რომლებიც 10$-ზე იაფია და დააბრუნე მხოლოდ მათი სათაურების მასივი.
const products = [
  { title: "Pencil", price: 2 },
  { title: "Notebook", price: 5 },
  { title: "Backpack", price: 35 },
  { title: "Ruler", price: 3 },
  { title: "Calculator", price: 40 },
];
const cheapProductsList = products
  .filter((product) => product.price < 10)
  .map((product) => product.title);
console.log(cheapProductsList);
// 5)დაალაგე ზრდადობით rating-ის მიხედვით
const movies = [
  { title: "Inception", rating: 9 },
  { title: "Avatar", rating: 7.5 },
  { title: "Joker", rating: 8.2 },
  { title: "Tenet", rating: 6.9 },
];
movies.sort((a, b) => a.rating - b.rating);
console.log(movies);
// 6)იპოვე ყველაზე იაფი ტელეფონი და გამოიტანე მხოლოდ მისი model
const phones = [
  { model: "iPhone 15", price: 1200 },
  { model: "Samsung Galaxy S24", price: 950 },
  { model: "Xiaomi Redmi 13", price: 250 },
  { model: "Pixel 8", price: 800 },
];
const cheapPhone = phones.reduce((acc, current) => {
  return acc.price < current.price ? acc : current;
});
console.log(cheapPhone.model);
// 7)დაბეჭდე 300- გვერდიანზე მეტი
const books = [
  { title: "Harry Potter", pages: 500 },
  { title: "The Little Prince", pages: 120 },
  { title: "Lord of the Rings", pages: 700 },
  { title: "Animal Farm", pages: 250 },
];
books.forEach((book) => {
  if (book.pages > 300) {
    console.log(book.title);
  }
});

// 8)დაალაგე ზრდადობით და შეკრიბე ფასი
const phones1 = [
  { model: "iPhone 15", price: 1200 },
  { model: "Samsung Galaxy S24", price: 950 },
  { model: "Xiaomi Redmi 13", price: 250 },
  { model: "Pixel 8", price: 800 },
];
const total = phones1
  .sort((a, b) => a.price - b.price)
  .reduce((sum, phone) => sum + phone.price, 0);
console.log(total);
