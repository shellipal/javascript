function multipleBy5(num) {
  //   this.num = num;
  return num * 5;
}

multipleBy5.power = 2;

console.log(multipleBy5(5));
console.log(multipleBy5.power);
console.log(multipleBy5.prototype);

function createUser(username, score) {
  this.username = username;
  this.score = score;
}

createUser.prototype.increment = function () {
  this.score++;
};
createUser.prototype.printMe = function () {
  console.log(`price is ${this.score}`);
};

const Chai = new createUser("chai", 25);
const tea = new createUser("tea", 250);

Chai.printMe();


/*

Here's what happens behinds the scenes when the new keywords is used:-

-A new object is created-

-A prototype is linked-

-The constructor is called-

-The new object is returned- 

*/