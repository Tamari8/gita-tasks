"use strict";
let fullName = "Lika Mamaladze";
let parts = fullName.split(" ");
let initials = parts[0][0] + "." + parts[1][0] + ".";
console.log(initials);
let email = "            EXAMPLE@MAIL.COM";
let trimmedLowerEmail = email.trim().toLowerCase();
console.log(trimmedLowerEmail);
console.log(trimmedLowerEmail.includes("@"));
let str = "luka";
let lastChar = str.charAt(str.length - 1);
let finalStr = str.slice(0, -1) + lastChar.toUpperCase();
console.log(finalStr);
for (let i = 1; i < 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("Foobar");
  } else if (i % 3 === 0) {
    console.log("Foo");
  } else if (i % 5 === 0) {
    console.log("bar");
  } else {
    console.log(i);
  }
}
let text = "JS is stupid but sometimes cool";
console.log(text.replace("stupid", "s****d"));
/*  თეორია
1. 3 ცვლადი :
var
let
const
2. ტიპები :
string
number
boolean(true/false)
null
undefined
BigInt
Symbol
Object
Arrays
3.სტრინგს მასივად აქცევს .split()
4.სტრინგი პრიმიტიულია და არის immutable
5.ვისწავლეთ
length აბრუნებს სტრინგის სიგრძეს.
charAt კონკრეტულ პოზიციაზე მდგომ სიმბოლოს აბრუნებს,
slice ამოჭრის სტრინგის ნაწილს
concat ერთმანეთს "აწებებს" სტრინგებს
trim აშორებს სფეისებს თავიდან და ბოლოდან
split სტრინგის დასაჭრელად და მასივად გადაქცევისთვის
replace/replaceAll სტრინგში კონკრეტული ნაწილის საპივნელად და შესაცვლელად replace პირველსავე შემხვედრს ცვლის,replaceAll ყველას.
indexOf პოულობს კონკრეტული სიმბოლოს პირველ ინდექსს.
includes პოულებს სტრინგი შეიცავს თუ არა კონკრეტულ სიმბოლოს
*/
