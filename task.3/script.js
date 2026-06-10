// 1) გაამრავლე თითოეული ელემენტი 3-ზე.
// Input: [1,2,3] - Output: [3,6,9]
const numbers = [1, 2, 3];
const multiplied = numbers.map((num) => num * 3);
console.log(multiplied);
// 2)გაფილტრე ისეთი რიცხვები რომლებიც იყოფა უნაშთოდ 3-ზე
const nums1 = [1, 2, 3, 4, 5, 6, 10, 12, 15, 20, 21];
const result1 = nums1.filter((num) => num % (3 === 0));
console.log(result1);
// 3)დააბრუნე ყველა დადებითი რიცხვის ჯამი
const nums2 = [-20, -15, -10, -5, 0, 5, 10, 15, 20];
const positiveSum = nums2
  .filter((num) => num > 0)
  .reduce((acc, curr) => acc + curr, 0);
console.log(positiveSum);

// 4)მოცემული სტრინგების მასივიდან წაშალე თითოეული სტრინგის ბოლო სიმბოლო
let namesArr = ["giorgi", "nika", "mariami"];
const slicedNames = namesArr.map((name) => name.slice(0, -1));
console.log(slicedNames);
// 5)გაამრავლე ყველა ელემენტი მასივში 2-ზე და შემდეგ ამოიღე რიცხვები, რომლებიც იყოფა 3-ზე
const nums3 = [1, 3, 4, 6, 9];
const result3 = nums3.map((num) => num * 2).filter((num) => num % 3 === 0);
console.log(result3);
// 6) დაალაგე რიცხვები ზრდადობით
let numsArr1 = [1, -1, -2, -10, 111, 3, 2, 5];
numsArr1.sort((a, b) => a - b);
console.log(numsArr1);
// 7)გაამრავლე ყველა ელემენტი 2-ზე და დატოვე მხოლოდ ისინი, რომლებიც 5-ზე მეტია.
const filteredResult = numsArr1.map((num) => num * 2).filter((num) => num > 5);
console.log(filteredResult);
// 8)
let arr = [1, 1, 1, 1, 2, 2, 3, 3, 3];
// დააბრუნე let unque = [1,2,3]
let unique = [...new Set(arr)];
console.log(unique);
// 9), დააბრუნეთ ორი ყველაზე მცირე რიცხვის ჯამს
let arr1 = [-1, 20, 90, 4, 5, 111];
const sumOfTwoSmallest = arr1
  .sort((a, b) => a - b)
  .slice(0, 2)
  .reduce((acc, curr) => acc + curr, 0);
console.log(sumOfTwoSmallest);
