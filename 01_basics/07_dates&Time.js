//  Dates ++++++++++++++

let myDate = new Date();
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2025, 0, 25);
//console.log(myCreatedDate.toDateString());

//let myCreatedDate = new Date(2025, 5, 26, 5, 3);
//console.log(myCreatedDate.toLocaleString());

// let myCreatedDate = new Date("2025-01-03");
// console.log(myCreatedDate.toDateString());

let myCreatedDate = new Date("01-03-2025");
// console.log(myCreatedDate.toLocaleString());

// ++++++++++++++++++++ Time ++++++++++++++++++++++

let myTimeStamp = Date.now();
//console.log(myTimeStamp);
//console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now() / 1000));

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());

// `${newDate.getDay()}`;

newDate.toLocaleString("default", {
  weekday: "long",
});
