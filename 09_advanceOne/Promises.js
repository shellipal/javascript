// promise 1.......................

const PromiseOne = new Promise(function (resolve, reject) {
  // Do an asyns task...........
  // DB calls , cryptography , network
  setTimeout(function () {
    console.log("Async task is complete");
    resolve();
  }, 1000);
});

PromiseOne.then(function () {
  console.log("Promise consumed");
});

// promise 2...........................

new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async task 2 complete");
    resolve();
  }, 1000);
}).then(function () {
  console.log("Async 2 resolved");
});

const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ username: "Shelli", email: "shellipal5@gmail.com" });
  }, 1000);
});

// promise 3............................

promiseThree.then(function (user) {
  console.log(user);
});

const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false;
    if (!error) {
      resolve({ username: "Shelli", password: "1234" });
    } else {
      reject("ERROR : Something went wrong");
    }
  }, 1000);
});

// promise 4.....................................

promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(() => console.log("The promise is either resolved or rejected"));
