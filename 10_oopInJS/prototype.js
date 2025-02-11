// let myName = "shelli     ";
// let myBro = "Ashu     ";

// console.log(myName.truelength);

let myHeros = ["Rm", "jin", "suga", "j - hope", "jimin", "jk", "v"];

let heroPower = {
  Rm: "Books",
  jin: "wwhandsome",
  suga: "marryme",

  getSugaPower: function () {
    console.log(`Suga power is ${this.suga}`);
  },
};

Object.prototype.shelli = function () {
  console.log(`shelli is present in all objects`);
};

Array.prototype.heyShelli = function () {
  console.log(`Shelli says hello`);
};

// heroPower.shelli();
// myHeros.shelli();
// myHeros.heyShelli();
// heroPower.heyShelli();

// inheritance

const User = {
  name: "chai",
  email: "chai@google.com",
};

const Teacher = {
  makeVideo: true,
};

const TeacherSupport = {
  isAvailable: false,
};

const TASupport = {
  makeAssignment: "JS Assignment",
  fullTime: true,
  __proto__: TeacherSupport,
};

Teacher.__proto__ = User;

//  modern syntax

Object.setPrototypeOf(TeacherSupport, Teacher);

let anotherUsername = "Chaiaurcode     ";

String.prototype.trueLength = function () {
  console.log(`${this}`);

  console.log(`True length is : ${this.trim().length}`);
};

anotherUsername.trueLength();
"shelli".trueLength();
"iceTea".trueLength();
