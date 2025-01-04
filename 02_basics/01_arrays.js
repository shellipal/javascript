//  array +++++++++............ part-1........... ++++++++

const myArr = [0, 1, 2, 3, 4, 5];
const myHeros = ["shaktiman", "naagraj"];

const myArr2 = new Array(1, 2, 3, 4);
// console.log(myArr[5]);

//  Array methods +++++++++++++

// myArr.push(6);
// myArr.push(7);
// myArr.pop();

// myArr.unshift(9);
// myArr.shift();

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join();

// console.log(myArr);
// console.log(newArr);

//  slice , splice.................

// console.log("A ", myArr);

const myn1 = myArr.slice(1, 3);

// console.log(myn1);
// console.log("B ", myArr);

const myn2 = myArr.splice(1, 3);
// console.log("C ", myArr);
// console.log(myn2);

// Array ++++++++++++++++++ ......... part-2 ..........

const BTS = ["kimNamjoon", "kimseokjin", "minyoongi", "junghoseok"];
const Blackpink = ["lalisa", "Rosie", "jennie", "jisoo"];

// BTS.push(Blackpink);

// console.log(BTS);
// console.log(BTS[4][2]);

// const allHeros = BTS.concat(Blackpink);
// console.log(allHeros);

const all_new_heros = [...BTS, ...Blackpink]; //spread operator written like this......
// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

const real_another_array = another_array.flat(Infinity);
console.log(real_another_array);

console.log(Array.isArray("Shelli"));
console.log(Array.from("Shelli"));
console.log(Array.from({ name: "Shelli" })); //intersting.......

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));
