//  Primitive

// 7-types : String, Number, Boolearn, null, undefined, Symbol, BigInt.

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

// const id = Symbol("123");
// const anotherId = Symbol("123");

// console.log(id === anotherId);

// const bigNumber = 987654321987654321n;

// Reference (Non Primitive)

//  Array, Objects, Functions.

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
  name: "Shelli",
  age: 20,
};

const myFunction = function () {
  console.log("Hello world");
};

console.log(typeof BigInt);

// Number => number
// String => string
// Boolean => boolean
// null => object
// undefined => undefined
// Symbol => symbol
// BigInt => bigint
//...................
// Arrays => object
// Function => function
// object => object

// ++++++++++++++++++ MEMORY +++++++++++++++++++++++++++++++++++++++

// Stack (Primitive) , Heap (Non-Primitive)

let myYoutubeName = "shellipaldotcom";

let anotherName = myYoutubeName;
anotherName = "shelli";

console.log(myYoutubeName);
console.log(anotherName);

let userOne = {
  email: "user@google.com",
  upi: "user@ybl",
};

let userTwo = userOne;
userTwo.email = "shelli@google.com";

console.log(userOne.email);
console.log(userTwo.email);
