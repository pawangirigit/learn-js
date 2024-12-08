const accountId = 1232245 
let accountEmail = "test@gmail.com"
var accountPassword = "12345"
acccountCity = "Varanasi"
let accountState;
// accountId = 2 // not allowed

accountEmail = "test1@gmail.com"
accountPassword = "312312"
acccountCity = "Lucknow"

console.log(accountId);

/*
Prefre not to use var
beacause of issue in block scope and fucntional scope
*/

console.table([accountId,accountEmail,accountPassword,acccountCity,accountState])
