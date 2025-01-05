//  singleton.........
// Object.create

//  object literals

const mysym = Symbol("key");

const JsUser = {
  name: "Shelli",
  full_name: "Shelli Pal",
  [mysym]: "mykey1",
  age: 19,
  location: "Ghaziabad",
  email: "shelli@google.com",
  isLoggedIn: false,
  lastLoginDays: ["monday", "saturday"],
};

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full_name"]);
// console.log(JsUser[mysym]);

JsUser.email = "shelli@pal.com";
// Object.freeze(JsUser);
JsUser.email = "Ashish@pal.com";
// console.log(JsUser);

JsUser.greeting = function () {
  console.log("Hello Js user");
};

JsUser.greetingTwo = function () {
  console.log(`Hello Js user,${this.name}`);
};

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
