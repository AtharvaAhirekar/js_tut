const accountId = 14453
let accountemail = "atharva@gmail.com"
var accountpassword = "1234"
accountcity = "Mumbai" // Not a Good Practice 
let accountstate ;

// accountId = 2  // To change const is Not Allowed 
console.log(accountId);

accountemail = "ahirekar@gmail.com"
accountpassword = "1212"
accountcity = "Pune"

console.table([accountId ,accountemail , accountpassword , accountcity , accountstate])

/* 
Prefer Not to use "VAR" because of the issue in block scope and functional scope
*/