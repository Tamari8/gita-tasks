//1) შექმენი ცარიელი მასივი და შეავსე მასში რიცხვები 5-დან 15-მდე
let arr = [];
for (let i = 5; i <= 15; i++) {
  arr.push(i);
}
console.log(arr);

//2) დაბეჭდე მასივის ელემენტები უკუღმა
let arr1 = [1, 2, 3, 4, 5];
console.log(arr1.reverse());

//3) იპოვე მასივში მინიმალური რიცხვი
let arr2 = [100, 2, 3, 9];
let minNumber = Math.min(...arr2);
console.log(minNumber);
//4) ამოიღე შუა 3 ელემენტი slice-ით.
let arr3 = [1, 2, 3, 4, 5, 6, 7];
let middleThree = arr3.slice(2, 5);
console.log(middleThree);
//5) გააერთიანე ორი მასივი
let arr4 = [1, 2];
let arr5 = [3, 4];
let combined = arr4.concat(arr5);
console.log(combined);
//6) წაშალე დუბლირებული ელემენტები
let arr6 = [1, 2, 3, 4, 5, 6, 6, 7, 7];
let newArr = [...new Set(arr6)];
console.log(newArr);
//7) გაყავი მასივი ორ ცალკე მასივად (ლუწი და კენტი). მინიშნება: გამოიყენე % 2 === 0
let arr7 = [1, 2, 3, 4, 5, 6, 7];
let evenNumbers = arr7.filter((num) => num % 2 === 0);
let oddNumbers = arr7.filter((num) => num % 2 === 1);
console.log(`ლუწი: ${evenNumbers}, კენტი: ${oddNumbers}`);
//8) დაითვალე დადებითი რიცხვების რაოდენობა და უარყოფითი რიცხვების ჯამი.
let arr8 = [1, 2, 3, 4, 5, 6, 7, -1, -2, -3, -4];
let positiveNumCount = arr8.filter((num) => num > 0).length;
console.log(positiveNumCount);
let negativeNum = arr8.filter((num) => num < 0);
let sumNegative = 0;
for (let i = 0; i < negativeNum.length; i++) {
  sumNegative += negativeNum[i];
}
console.log(sumNegative);

//9) დააბრუნე მასივის თითოეული ელემენტის ინვერსი (ანუ [1,-2] მაგივრად [-1,2]). მინიშნება: გამოიყენე push(-arr[i])
let inverted = [];
for (let i = 0; i < arr8.length; i++) {
  inverted.push(-arr8[i]);
}
console.log(inverted);
//10)
let arr10 = [1, [2, [3]], [4]];
let arr101 = arr10.flat(Infinity);
console.log(arr101);
// შენი მიზანია მიიღო [1,2,3,4]
//11)
let fruits = ["apple", "banana", "orange", "kiwi"];
//წაშალე "banana" მასივიდან splice()-ით
//"orange"-ის წინ დაამატე "mango"
//ბოლოს დაბეჭდე ახალი მასივი.
//splice-მ არ დაგაბნიოთ splice(საიდან დაიწოს,რამდენი წაშალოს,რითიჩაანაცვლოს)
fruits.splice(1, 1);
fruits.splice(1, 0, "mango");
console.log(fruits);
