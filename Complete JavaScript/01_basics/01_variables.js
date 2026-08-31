const accountId = 9050 
let accountEmail = "ansh@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur" 
let accountState; // we didn't assign any value to this variable , so output will be undefined

// accountId = 2  // not allowed

accountEmail="ansh56@gmail.com"
accountPassword="21212132"
accountCity="Bengaluru" 

console.log(accountId) ;

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])  