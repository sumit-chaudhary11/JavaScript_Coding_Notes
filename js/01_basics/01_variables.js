const accountId = 728643;
let accountName = "Sumit";
var accountEmail="sumit@example.com";
accountCity = "New Delhi";

/*
Prefer not to use var bcz of the issue in
the scope of the variable like block scope and functional scope.
*/

console.table({accountId, accountName, accountEmail, accountCity});