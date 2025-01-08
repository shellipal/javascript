// var c = 300;
let a = 300;
if (true) {
  let a = 10;
  const b = 20;
  //   console.log("INNER: ", a);
}

// for (let i = 0; i < array.length; i++) {
//   const element = array[i];
// }

// console.log(a);
// console.log(b);
// console.log(c);

function one() {
  const username = "shelli";

  function two() {
    const website = "youtube";
    console.log(username);
  }
  //   console.log(website);

  two();
}

// one();

if (true) {
  const username = "shelli";
  if (username === "shelli") {
    const website = " youtube";
    // console.log(username + website);
  }
  //   console.log(website);
}

// console.log(username);

// ++++++++++++++++ interesting ++++++++++++++++++++

console.log(addOne(5));

function addOne(num) {
  //right declaration
  return num + 1;
}

console.log(addTwo(5));
const addTwo = function (num) {
  //hosting
  return num + 2;
};
