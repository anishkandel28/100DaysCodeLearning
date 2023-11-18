// //-hoisting
// variables k banaunu vanda agadi we can use them
//hoisting- variable and functions are hoisted which means there declaration is moved on the top of the code


let a=12;

let b;/// this is declaration
b=12;// this is initialization


// so let's see hoisting how works
// as declaraion moves on top

var c;// the value of c is undefined

console.log(c) // output will be undefined in js

c=12;

//NOTE: undefined and not defined are different
//undefined means yesko existence xa but value nai thaxaina, like we don't the value
//not defined menas not have any existence in the code 

console.log(b)/// b is not defined

///
let db;
console.log(db);
db="anish";

// we get undefined, that's hoisting
