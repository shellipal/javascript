class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`USERNAME is ${this.username}`);
  }
}

class Teacher extends User {
  constructor(username, email, passward) {
    super(username);
    this.email = email;
    this.passward = passward;
  }

  addCourse() {
    console.log(`A new course was added by ${this.username}`);
  }
}

const chai = new Teacher("shelli", "shelli@google.com", "1234");
chai.logMe();

const masalaChai = new User("masalaChai");
masalaChai.logMe();

console.log(chai instanceof User);
console.log(chai instanceof Teacher);
