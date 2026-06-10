// ArrayTasks

//1)
let arr = [1, [2, 3, [4, 5]], 5, [2, [3, 6]]];
//დაალაგე ზრდადობით და ამოიღე უნიკალურები გამოიყენე ForLoop
let flatArr = arr.flat(Infinity);
let uniqueArr = [];
let flatArr = arr.flat(Infinity);
let uniqueArr = [];
for (let i = 0; i < uniqueArr.length; i++) {
  for (let j = 0; j < uniqueArr.length - 1; j++) {
    if (uniqueArr[j] > uniqueArr[j + 1]) {
      let temp = uniqueArr[j];
      uniqueArr[j] = uniqueArr[j + 1];
      uniqueArr[j + 1] = temp;
    }
  }
}

console.log(uniqueArr);
// 2)
let products = [
  { name: "Phone", price: 1200, rating: 4.5 },
  { name: "Laptop", price: 2500, rating: 4.8 },
  { name: "Book", price: 30, rating: 4.9 },
  { name: "TV", price: 800, rating: 4.0 },
];
let affordableProducts = products.filter((p) => p.price < 1000);
let bestProduct = affordableProducts.reduce((max, current) => {
  return current.rating > max.rating ? current : max;
});

console.log(bestProduct);
// იპოვე ყველაზე მაღალი rating-ის მქონე პროდუქტი, მაგრამ ისეთი, რომლის ფასიც < 1000.

// 3)
let sentence = "dog cat dog bird cat dog fish bird";
let words = sentence.split(" ");
let wordCounts = words.reduce((acc, word) => {
  acc[word] = (acc[word] || 0) + 1;
  return acc;
}, {});
console.log(wordCounts);
let mostFrequentWord = "";
let maxCount = 0;

for (let word in wordCounts) {
  if (wordCounts[word] > maxCount) {
    maxCount = wordCounts[word];
    mostFrequentWord = word;
  }
}

console.log(`ყველაზე ხშირია: "${mostFrequentWord}" (${maxCount}-ჯერ)`);
// რედიუსის დახმარებით დათვალე რომელი რამდენჯერ მეორდება და for ლუპის დახმარებით იპოვე მეტჯერგამეორებული

// ForLoop tasks

// 1)დაწერე ფუნქცია for loop-ის გამოყენებით, რომელიც დაითვლის რამდენჯერ გვხვდება კონკრეტული ასო მოცემულ სტრინგში.
function countLetter(str, letter) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i].toLowerCase() === letter.toLowerCase()) {
      count++;
    }
  }
  return count;
}

console.log(countLetter("Hello World", "l"));
// 2) დაწერე ფუნქცია, რომელიც შეამოწმებს არის თუ არა სტრინგი პალინდრომი (ეს სიტყვა თუ იკითხება ერთნაირად ესე იგი პალინდრომია.მაგალითად ana, abba,gig)
function isPalindrome(str) {
  let cleanedStr = str.toLowerCase();
  let len = cleanedStr.length;

  for (let i = 0; i < len / 2; i++) {
    if (cleanedStr[i] !== cleanedStr[len - 1 - i]) {
      return false;
    }
  }
  return true;
}

console.log(isPalindrome("ana"));
console.log(isPalindrome("hello"));

// 3)შექმენი ფუნქცია, რომელიც მიიღებს ორ რიცხვების მასივს, გააერთიანებს მათ, წაშლის დუბლიკატებს და დაითვლის ჯამს. გამოიყენე მასივის მეთოდები და ლოგიკური ოპერატორები საჭიროებისამებრ.
function mergeAndSum(arr1, arr2) {
  let combinedUnique = [...new Set([...arr1, ...arr2])];

  let sum = combinedUnique.reduce((acc, curr) => acc + curr, 0);

  return { uniqueArray: combinedUnique, totalSum: sum };
}

console.log(mergeAndSum([1, 2, 3], [3, 4, 5]));

//  4)შექმენი ფუნქცია ფაქტორიალის დასათვლელად.
function factorial(n) {
  if (n < 0) return "უარყოფითი რიცხვის ფაქტორიალი არ არსებობს";
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}

console.log(factorial(5));

// 5)Two Sum - მოძებნე მასივში ის წყვილები, რომელთა ჯამიც უდრის მოცემულ რიცხვს ანუ [1,2,3,4,5,6,-7,-8] ამ მასივს და -15 თუ გადავცემთ მან უნდა დააბრუნოს [6,7]
function twoSum(nums, target) {
  let pairs = [];

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        pairs.push([nums[i], nums[j]]);
      }
    }
  }
  return pairs;
}

console.log(twoSum([1, 2, 3, 4, 5, 6, -7, -8], -15));
