// const user = {
//   username: "Shelli",
//   LoginCount: 5,
//   SignedIn: true,

//   getUserDetails: function () {
//     // console.log("Got user details");
//     // console.log(`username : ${this.username}`);
//     console.log(this);
//   },
// };

// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);

// .......................................

// const promiseOne = new Promise();
// const date = new Date();

function user(username, LoginCount, isLoggedIn) {
  (this.username = username), (this.LoginCount = LoginCount);
  this.isLoggedIn = isLoggedIn;

  this.greeting = function () {
    console.log(`Welcome ${this.username}`);
  };

  return this;
}

const userOne = new user("shelli", 10, true);
const userTwo = new user("Ashish", 11, false);
console.log(userOne.constructor);
// console.log(userTwo);

// .......new works..............
// step1 -> new object created
// step2 -> packed all arguments
// step3 -> all arguments injected to this keywards
// step4 -> get in the function
