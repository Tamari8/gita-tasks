// 1) შექმენი Triangle (სამკუთხედი) კლასი, რომელიც იღებს სამ გვერდს (a, b, c) და დაამატე მეთოდები: getPerimeter(), getArea() , isRightTriangle().
class Triangle {
  constructor(a, b, c) {
    if (a + b <= c || a + c <= b || b + c <= a) {
      throw new Error("მოცემული გვერდებით სამკუთხედი ვერ იარსებებს!");
    }
    this.a = a;
    this.b = b;
    this.c = c;
  }

  getPerimeter() {
    return this.a + this.b + this.c;
  }

  getArea() {
    const s = this.getPerimeter() / 2;
    return Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));
  }

  isRightTriangle() {
    const [x, y, z] = [this.a, this.b, this.c].sort((m, n) => m - n);

    return Math.abs(x * x + y * y - z * z) < 0.000001;
  }
}

const myTriangle = new Triangle(3, 4, 5);
console.log("პერიმეტრი:", myTriangle.getPerimeter());
console.log("ფართობი:", myTriangle.getArea());
console.log("მართკუთხაა?", myTriangle.isRightTriangle());
// 2) შექმენი Smartphone (სმარტფონი) კლასი property-ებით: brand, model, releaseYear. გააკეთე ექსტენშენი GamingPhone, რომელსაც დაემატება gpuScore და batteryCapacity, და დაამატე მეთოდი performanceIndex().
class Smartphone {
  constructor(brand, model, releaseYear) {
    this.brand = brand;
    this.model = model;
    this.releaseYear = releaseYear;
  }
}

class GamingPhone extends Smartphone {
  constructor(brand, model, releaseYear, gpuScore, batteryCapacity) {
    super(brand, model, releaseYear);
    this.gpuScore = gpuScore;
    this.batteryCapacity = batteryCapacity;
  }
  performanceIndex() {
    return this.gpuScore * 0.7 + this.batteryCapacity * 0.3;
  }
}

const ROGPhone = new GamingPhone("ASUS", "ROG Phone 8", 2024, 95, 5500);
console.log(
  `${ROGPhone.brand} ${ROGPhone.model}-ის წარმადობის ინდექსი:`,
  ROGPhone.performanceIndex(),
);

// 3)შექმენი CryptoWallet (კრიპტო საფულე) კლასი, მეთოდებით: deposit(), withdraw(), transfer(), getHistory(),
class CryptoWallet {
  constructor(address, initialBalance = 0) {
    this.address = address;
    this.balance = initialBalance;
    this.history = [];
  }

  deposit(amount) {
    if (amount <= 0) return "თანხა უნდა აღემატებოდეს 0-ს";
    this.balance += amount;
    this._addToHistory("deposit", amount, { from: "External Source" });
    return `ბალანსი შეივსო ${amount}-ით. მიმდინარე ბალანსი: ${this.balance}`;
  }
  withdraw(amount) {
    if (amount > this.balance) return "არასაკმარისი ბალანსი!";
    if (amount <= 0) return "არავალიდური თანხა";
    this.balance -= amount;
    this._addToHistory("withdraw", amount, { to: "External Address" });
    return `გატანილია ${amount}. მიმდინარე ბალანსი: ${this.balance}`;
  }

  transfer(amount, targetWallet) {
    if (amount > this.balance) return "არასაკმარისი ბალანსი ტრანსფერისთვის!";
    if (amount <= 0) return "არავალიდური თანხა";

    this.balance -= amount;
    this._addToHistory("transfer_out", amount, { to: targetWallet.address });

    targetWallet.balance += amount;
    targetWallet._addToHistory("transfer_in", amount, { from: this.address });

    return `გადაირიცხა ${amount} მისამართზე: ${targetWallet.address}`;
  }

  getHistory() {
    return this.history;
  }

  _addToHistory(type, amount, details = {}) {
    this.history.push({
      type,
      amount,
      timestamp: new Date().toISOString(),
      ...details,
    });
  }
}

const walletA = new CryptoWallet("0x123", 10);
const walletB = new CryptoWallet("0xABC", 2);

walletA.deposit(5);
walletA.transfer(3, walletB);
console.log("Wallet A ისტორია:", walletA.getHistory());
console.log("Wallet B ბალანსი:", walletB.balance); // 5

// 4)შექმენი Wishlist (სურვილების სია) კლასი, რომელიც ინახავს ნივთებს. მეთოდები: addItem(), deleteItem(id), updateItem()
class Wishlist {
  constructor() {
    this.items = [];
  }

  addItem(item) {
    if (!item.id || !item.name) return "ნივთს უნდა ჰქონდეს id და name!";
    this.items.push(item);
    return `${item.name} დაემატა სურვილების სიაში.`;
  }

  deleteItem(id) {
    const initialLength = this.items.length;
    this.items = this.items.filter((item) => item.id !== id);
    return this.items.length < initialLength
      ? "ნივთი წაიშალა."
      : "ნივთი ვერ მოიძებნა.";
  }

  updateItem(id, updatedProperties) {
    const item = this.items.find((item) => item.id === id);
    if (!item) return "ნივთი ვერ მოიძებნა განახლებისთვის.";

    Object.assign(item, updatedProperties, { id });
    return `ნივთი ID ${id} განახლდა.`;
  }
}

const myWishlist = new Wishlist();
myWishlist.addItem({ id: 101, name: "PlayStation 5", price: 500 });
myWishlist.updateItem(101, { price: 450 });
console.log(myWishlist.items);
myWishlist.deleteItem(101);

// 5)შექმენი Freelancer (ფრილანსერი) კლასი მეთოდით calculateEarnings(), რომელიც დათვლის შემოსავალს შესრულებული საათებისა და საათობრივი ტარიფის მიხედვით, დამატებით optional bonus-ს გადამეტებულ საათებზე (მაგ >160 სთ).
class Freelancer {
  constructor(name, hourlyRate) {
    this.name = name;
    this.hourlyRate = hourlyRate;
  }
  calculateEarnings(hoursWorked, overtimeBonusRate = 1.5) {
    const standardHoursLimit = 160;

    if (hoursWorked <= standardHoursLimit) {
      return hoursWorked * this.hourlyRate;
    } else {
      const standardEarnings = standardHoursLimit * this.hourlyRate;
      const overtimeHours = hoursWorked - standardHoursLimit;
      const overtimeEarnings =
        overtimeHours * (this.hourlyRate * overtimeBonusRate);

      return standardEarnings + overtimeEarnings;
    }
  }
}

const developer = new Freelancer("გიორგი", 30);
console.log("შემოსავალი (150 სთ):", developer.calculateEarnings(150));
console.log("შემოსავალი (170 სთ):", developer.calculateEarnings(170));
