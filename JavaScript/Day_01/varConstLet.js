const accountId=123234;
const accountFirstname="Anish"
const accountMiddlename="Shree"
const accountLastname="Kandel"
let accountEmail="anish@gmail.com"
var accountPassword=112323
let accountState; // for state value i.e. variable decalred but value not defined
/*
don't use var coz, issue in  scopes i.e. block scope and functional scope
*/
accountAddress="Kathmandu"

// accountId=123344 //not allowed
accountEmail="kandel@gmailcom";
accountPassword=23273723

console.log(accountEmail)
console.table([accountId,accountFirstname, accountMiddlename, accountLastname, accountPassword, accountEmail, accountAddress, accountState])
