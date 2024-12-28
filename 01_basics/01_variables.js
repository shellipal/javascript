const accountId = 144553;
let accountEmail = "shelli@google.com";
var accountPassword = "12345";
accountCity = "Ghaziabad";
let accountState;

// accountId = 2;  //not allowed

accountEmail = "sp@google.com";
accountPassword = "54321";
accountCity = "Delhi";

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([
  accountId,
  accountEmail,
  accountPassword,
  accountCity,
  accountState,
]);
