//  if
const isUserloggedIn = true;
const temperature = 15;

// if (temperature === 25) {
//   console.log("less then 20");
// } else {
//   console.log("temperature is greater then 20");
// }

// console.log("Execute");

// < , >,<=,>=,==,!=,===,!==

// const score = 200;

// if (score > 100) {
//   let power = "fly";
//   console.log(`User power: ${power}`);
// }

// console.log(`User power: ${power}`);

// const balance = 1000;

// if (balance > 500) console.log("test"), console.log("test2");

// if (balance < 500) {
//   console.log("less then 500");
// } else if (balance < 750) {
//   console.log("less then 750");
// } else if (balance < 900) {
//   console.log("less then 900");
// } else {
//   console.log("less then 1200");
// }

const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if (userLoggedIn && debitCard) {
  console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
  console.log("User logged in");
}
