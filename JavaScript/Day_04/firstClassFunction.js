//first Class Func
// when we use the functions as a value

let a= function(){}; // we are saving function that is a vale of variable a


function abcd(b){
 console.log(b)
 b();
}

abcd(function(){console.log("hey, this is firstclass function")})