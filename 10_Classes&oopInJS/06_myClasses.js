// //  ES6

class User {
  constructor(username, email, passward) {
    this.username = username;
    this.email = email;
    this.passward = passward;
  }

  encryptPassward() {
    return `${this.passward}abc`;
  }
  changeUsername() {
    return `${this.username.toUpperCase()}`;
  }
}

const chai = new User("chai", "chai@gmail.com", "1234");
console.log(chai.encryptPassward());
console.log(chai.changeUsername());

// // behind the scene

function user(username, email, passward) {
  this.username = username;
  this.email = email;
  this.passward = passward;
}

user.prototype.encryptPassward = function () {
  return `${this.passward}abc`;
};
user.prototype.changeUsername = function () {
  return `${this.username.toUpperCase()}`;
};

const tea = new user("tea", "tea@gmail.com", "1234");
console.log(tea.encryptPassward());
console.log(tea.changeUsername());
