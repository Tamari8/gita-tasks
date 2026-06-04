// 1)დაწერე ფუქნცია რომელიც გაფილტრავს ლუწებზე და იპოვი მათ საშუალოს[1, 2, 3, 4, 5, 6];
function evenAverage(array) {
  const evens = array.filter((num) => num % 2 === 0);
  if (evens.length === 0) return 0;

  const sum = evens.reduce((acc, curr) => acc + curr, 0);
  return sum / evens.length;
}

console.log(evenAverage([1, 2, 3, 4, 5, 6]));
// 2)დაწერე ფუნქცია, რომელიც დათვლის სიტყვების რაოდენობას წინადადებაში.
let sentence = "I love JavaScript";

function countWords(str) {
  return str.trim().split(/\s+/).length;
}

console.log(countWords(sentence));
// 3) დაწერე ფუნქიცა რომელიც დააბრუნებს true თუ რიცხვი მარტივია თუ არადა false.
function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

console.log(isPrime(7));
console.log(isPrime(10));
// 4)
let words = ["dog", "elephant", "cat", "hippopotamus"];

function findLongestWord(arr) {
  return arr.reduce(
    (longest, current) => (current.length > longest.length ? current : longest),
    "",
  );
}

console.log(findLongestWord(words));
// იპოვე ყველაზე გრძელი ისტყვა
// 5)დააბრუნე ისეთი რიცხვი რომელიც მეორდება უფრო მეტჯერ
let arr = [3, 5, 3, 2, 5, 5, 3, 5];

function mostFrequent(array) {
  let counts = {};
  let maxCount = 0;
  let mostFrequentNum = array[0];

  for (let num of array) {
    counts[num] = (counts[num] || 0) + 1;
    if (counts[num] > maxCount) {
      maxCount = counts[num];
      mostFrequentNum = num;
    }
  }
  return mostFrequentNum;
}

console.log(mostFrequent(arr));
// 6)დაწერე ფუქნცია რომელიც დაითვლის რამდენი ლუწი და რამდენი კენტი რიცხვია
let nums1 = [1, 2, 3, 4, 5, 6, 7, 8];

function countEvenOdd(array) {
  let result = { even: 0, odd: 0 };
  for (let num of array) {
    if (num % 2 === 0) {
      result.even++;
    } else {
      result.odd++;
    }
  }
  return result;
}

console.log(countEvenOdd(nums1));
// 7) დაწერე ფუქნცია როემლიც დააბრუენბს ყველაზე პატარა რიცხვს
let nums2 = [10, 2, 33, 5, 7];

function findMin(array) {
  return Math.min(...array);
}

console.log(findMin(nums2));
