//Execution Context

// its means when we run function, it will make it's own imaginary container, which includes three things
// 1) variables
// 2) functions inside that parent function
// 3) lexical environment of that function

// this container which is imaginary which we called excecution context

//when an function run, the first thing made is execution Context ( an imaginary box) that includes three things
// 1) var 2) func 3) Lexical environment

function abcd(){
    var a=12; // when we use variable b in this function anywhere, it can't run,coz function can use it's own body another function but can't use of body of it's child function of it.
    function def(){
        var b=12; // var b scope has only upto function def not to function abcd so that can't use in abc function
    }
}

//LEXICAL ENVIRONMENT
// okay so, when we run this function "abcd" , an imaginary box made which contains
// variable a, function def and lexical environment which tells that which fucntion can be accessed and which not, called also scope
// it's holds it's scope and scope chain