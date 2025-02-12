function setUsername(username) {
  // complex DB calls
  this.username = username;
  console.log("called");
}

function createUser(username, email, passward) {
  setUsername.call(this, username);

  this.email = email;
  this.passward = passward;
}

const chai = new createUser("chai", "chai@fb.com", "1234");
console.log(chai);
