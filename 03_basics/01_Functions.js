function sayMyName() {
  console.log("S");
  console.log("h");
  console.log("e");
  console.log("l");
  console.log("l");
  console.log("i");
}

// sayMyName();

// add two no. in js..................

// function addTwoNumbers(number1, number2) {
//   //parameters
//   console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2) {
  //   let result = number1 + number2;
  //   console.log("shelli");
  //   return result;
  return number1 + number2;
}

const result = addTwoNumbers(2, 6); //arguments

// console.log("Result: ", result);

function loginUserMessage(username = "Sam") {
  if (!username) {
    //username === undefined
    console.log("Please enter a username");
    return;
  }
  return `${username} just logged in`;
}

// console.log(loginUserMessage("Shelli"));
// console.log(loginUserMessage("shelli"));

function calculateCartprice(val1, val2, ...num1) {
  //rest operator
  return num1;
}

// console.log(calculateCartprice(200, 400, 500, 2000));

const user = {
  username: "Shelli",
  prices: 199,
};

function handleObject(anyobject) {
  console.log(
    `Username is ${anyobject.username} and prices is ${anyobject.price}`
  );
}

// handleObject(user);
handleObject({
  username: "Sam",
  price: 399,
});

const myNewArray = [200, 400, 100, 600];

function returnSecondValue(getArray) {
  return getArray[1];
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));
