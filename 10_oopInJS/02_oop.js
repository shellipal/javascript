const user = {
  username: "Shelli",
  LoginCount: 5,
  SignedIn: true,

  getUserDetails: function () {
    console.log("Got user details");
  },
};

console.log(user.username);
console.log(user.getUserDetails());
