// 1) function block(){
//     for(let i = 1 ;i <10000000000;i++){}
// }

// console.log("one")
// block()
// console.log("two")

// იპოვე გამოსავალი როგორ შეიძლება გაეშვას ჯერ  console.log("one") console.log("two") შემდეგ ფუნქცია
// აუცილებელია გამოიყენო ფრომისი
function block() {
  return new Promise((resolve) => {
    setTimeout(() => {
      for (let i = 1; i < 1000000000; i++) {}
      console.log("function block is ended");
      resolve();
    }, 0);
  });
}

console.log("one");
block();
console.log("two");
// 2)ორი პრომისი შექმენი (ერთმა დაარესოლვოს, ერთმა დაარეჯექთოს) და ორივე შემთხვევა დაამუშავე then/catch-ით  ცალცალკეც და “ჯგუფურადაც”  - ჯგუფურად Allsetteld გამოიყენე.

const promiseResolve = new Promise((resolve) => {
  resolve("წარმატებით შესრულდა!");
});

const promiseReject = new Promise((_, reject) => {
  reject("დაფიქსირდა შეცდომა!");
});

promiseResolve
  .then((data) => console.log("ცალკე (Resolve):", data))
  .catch((err) => console.error(err));

promiseReject
  .then((data) => console.log(data))
  .catch((err) => console.error("ცალკე (Reject):", err));

Promise.allSettled([promiseResolve, promiseReject]).then((results) => {
  console.log("ჯგუფური (allSettled):", results);

  results.forEach((result, index) => {
    if (result.status === "fulfilled") {
      console.log(`ფრომისი #${index + 1} წარმატებულია:`, result.value);
    } else {
      console.log(`ფრომისი #${index + 1} ჩავარდა:`, result.reason);
    }
  });
});
// 3)შექენი 4 პრომისი (ზოგი resolve, ზოგი reject). დააბრუნე მარტო პირველი დარესოლვებული
const p1 = new Promise((_, reject) =>
  setTimeout(() => reject("p1 ჩავარდა"), 100),
);
const p2 = new Promise((resolve) =>
  setTimeout(() => resolve("p2 იყო პირველი წარმატებული!"), 300),
);
const p3 = new Promise((resolve) =>
  setTimeout(() => resolve("p3 უფრო გვიან მორჩა"), 500),
);
const p4 = new Promise((_, reject) =>
  setTimeout(() => reject("p4 ჩავარდა"), 50),
);

Promise.any([p1, p2, p3, p4])
  .then((firstResolved) => {
    console.log("შედეგი:", firstResolved); // "p2 იყო პირველი წარმატებული!"
  })
  .catch((error) => {
    console.log("ყველა ფრომისი ჩავარდა:", error);
  });
// 4)შექმენი 4 ფრომისი  და რედიუსით დაითვალე რამდენია წარმატებული და რამდენი წარუმატებელი
const promises4 = [
  Promise.resolve("OK 1"),
  Promise.reject("Error 1"),
  Promise.resolve("OK 2"),
  Promise.reject("Error 2"),
];

Promise.allSettled(promises4).then((results) => {
  const stats = results.reduce(
    (acc, current) => {
      if (current.status === "fulfilled") {
        acc.fulfilledCount++;
      } else {
        acc.rejectedCount++;
      }
      return acc;
    },
    { fulfilledCount: 0, rejectedCount: 0 },
  );

  console.log("სტატისტიკა:", stats);
});
// 5) შექმენი 5 ფრომისი და გაფილტრე ეს ფრომისები დააბრუნე ამრტო წარუმატებლები
const promises5 = [
  Promise.resolve("წარმატება A"),
  Promise.reject("შეცდომა B"),
  Promise.resolve("წარმატება C"),
  Promise.reject("შეცდომა D"),
  Promise.reject("შეცდომა E"),
];

Promise.allSettled(promises5).then((results) => {
  const failedPromises = results.filter(
    (result) => result.status === "rejected",
  );

  console.log("მხოლოდ წარუმატებლები:", failedPromises);
});
// 6)api1 = https://jsonplaceholder.typicode.com/users
// api2 = https://jsonplaceholder.typicode.com/posts
const api1 = "https://jsonplaceholder.typicode.com/users";
const api2 = "https://jsonplaceholder.typicode.com/posts";

Promise.all([fetch(api1), fetch(api2)])
    .then(responses => Promise.all(responses.map(res => res.json())))
    .then(([users, posts]) => {
        console.log(users);
        console.log(posts);
    })
    .catch(error => console.error(error));