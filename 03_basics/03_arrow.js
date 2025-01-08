const user = {
  username: "shelli",
  price: 999,

  welcomeMessage: function () {
    console.log(`${this.username} , welcome to our website`);
    // console.log(this);
  },
};

// user.welcomeMessage();
// user.username = "sam";
// user.welcomeMessage();

// console.log(this);

// function chai() {
//   let username = "shelli";
//   console.log(this.username);
// }

// chai();

// const chai = function () {
//   let username = "shelli";
//   console.log(this.username);
// };

const chai = () => {
  let username = "shelli";
  console.log(this);
};

// chai();

// const addTwo = (num1, num2) => {
//   return num1 + num2;
// };
// const addTwo = (num1, num2) => num1 + num2;

// const addTwo = (num1, num2) => ( num1 + num2 );

const addTwo = (num1, num2) => ({
  username: "shelli",
});

console.log(addTwo(2, 3));

const myArray = [2, 5, 3, 7, 8];

// myArray.forEach(() => ())
