class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`username : ${this.username}`);
  }

  static createId() {
    return `123`;
  }
}

const shelli = new User("shelli");
// console.log(shelli.createId());

class Teacher extends User {
  constructor(username, email) {
    super(username);
    this.email = email;
  }
}

const Android = new Teacher("samsung", "android@gmail.com");
console.log(Android.createId());
