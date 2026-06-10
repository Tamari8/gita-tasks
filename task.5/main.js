// 1. დაწერე ფუნქცია , რომელიც არგუმენტად იღებს sec-ს და ითვლის უკუსვლით იქმადე სანამ 0-მდე არ მივა

function countdown(sec) {
  const timer = setInterval(() => {
    console.log(sec);
    if (sec <= 0) {
      clearInterval(timer);
    }
    sec--;
  }, 1000);
}
countdown(5);
// 2. დაწერე ფუქნცია ფუქნციას გადააწოდე რიცხვი  და ასევე ლოგე რენდომული რიცხვი იქამდე სანამ ეს გადაცემული და რენდომ რიცხვი არ. დაემთხვევა ერთმამენთს
function randomNumber(n) {
  let interval = setInterval(() => {
    let random = Math.floor(Math.random() * 10) + 1;
    console.log(random);
    if (n === random) {
      console.log("numbers are same");
      clearInterval(interval);
    }
  }, 1000);
}

// 3.და წერე ფუქნცია რომელიც მიიღებს n და callback-ს როცა n > 27-ზე გაუშვი ეს callback-ი რომელიც დააკონსოლებს რომ ეს ნამდვილად მეტია 27-ზე სხვა შემთხვევაში დააკონსოლე რომ n ნაკლებია
function checkNumber(n, callback) {
  if (n > 27) {
    callback();
  } else {
    console.log(`${n} is smaller than 27`);
  }
}

checkNumber(15, () => {
  console.log("this number is bigger than 27");
});
// 4.დაწერე ფუქნცია რომელიც პარამეტრად მიიღებს API და დააბრუნებს ამ API-ში მყოფ  4 - users. https://jsonplaceholder.typicode.com/users დაწერე ორივენაირად than/catch & async/await
async function fetchAPI(API) {
  let res = await fetch(API);
  let data = await res.json();
  let fourUsers = data.slice(0, 4);
  return fourUsers;
  console.log(data);
}
fetchAPI("https://jsonplaceholder.typicode.com/users").then((users) =>
  console.log(users),
);
function fetchAPIwithThen(API) {
  return fetch(API)
    .then((res) => res.json())
    .then((data) => {
      return data.slice(0, 4);
    })
    .catch((error) => {
      console.log("error");
    });
}
fetchAPIwithThen("https://jsonplaceholder.typicode.com/users").then((users) =>
  console.log(users),
);
// 5)დააწყვილე reduce-თი ცალკე ვისი ასაკიც მეტია 10 ზე და ვისი ასაკიც ნაკლებია 20
let people = [
  { name: "Nika", age: 15 },
  { name: "Mariam", age: 30 },
  { name: "Luka", age: 18 },
];
let groupedPeople = people.reduce(
  (acc, person) => {
    if (person.age > 10) {
      acc.olderThan10.push(person);
    }
    if (person.age < 20) {
      acc.youngerThan20.push(person);
    }
    return acc;
  },
  { olderThan10: [], youngerThan20: [] },
);
console.log(groupedPeople);

// 6. დაწერე ფუნქცია რომელიც მიიღებს ორ რიცხვს და callback-ს. თუ პირველი მეტია მეორეზე გაუშვი callback და დაუბეჭდე "მეტია", სხვა შემთხვევაში "ნაკლები ან ტოლია".
const checkNumbers = (num1, num2, callback) => {
  if (num1 > num2) {
    console.log("1st number is greater then second");
    callback();
  } else {
    console.log("first number is less than or equal to second");
  }
};
checkNumbers(10, 5, () => {});

// 7.დაწერე reduce, რომელიც დააჯგუფებს - ცალკე 20-ზე მეტ ფასიან რიცხვებს და
// ცალკე 20-ზე ნაკლები ან ტოლი ფასიანი ნივთები
let products = [
  { name: "Mouse", price: 15 },
  { name: "Keyboard", price: 45 },
  { name: "USB Cable", price: 7 },
  { name: "Headphones", price: 29.9 },
  { name: "Webcam", price: 52 },
];

let groupedProducts = products.reduce(
  (acc, product) => {
    if (product.price > 20) {
      acc.expensive.push(product);
    } else {
      acc.cheap.push(product);
    }
    return acc;
  },
  { expensive: [], cheap: [] },
);

console.log(groupedProducts);
