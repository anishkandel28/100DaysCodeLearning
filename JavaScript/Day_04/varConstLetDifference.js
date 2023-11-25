// VAR LET AND CONST DIFFERENCE



// JS have two version

// 1) ES5 (old version)  =>only we had var  (only var)
// 2) ES6 (new version)=> we have let and const (only let & const)

// we can use both version together E65 and ES6

// 3) var is function scoped=> means var can be used in it's parents function at anywhere

function abcd (){
    for (var i=1; i<12; i++){
        console.log(i);// here we are expecting output is 1 to 11
    }
    console.log(i)
    // it will be run too as var is function scoped will send the output =12 
    //but let will not allow as it is brace scoped
}
abcd() // calling abcd function here




//4) Let is braces scoped

//let's take upper example here

function abcde () {
    for (let i=1; i<12; i++){
        console.log (i); // so here output will be 1 to 11
    } // let can only use in {}, so if we use outside of the braces, it will not allow
    //console.log(i); // it will give error and not will give output
}
abcde()

//4)
// VAR adds itself to the window objects

//let's know about window obj, what's that
//  JS langauge hasnot so many things or let's say features itself 
// but all those stuff cane be used by JS, wether they are not parts of JS but 
// we can find them at on particular object which is called WINDOW (box of features given by browser to use with JS), all those feature are available on browser,

//EXAMPLE OF WINDOW OBJECT => ALERT, PROMPT, CONSOLE, DOCUMENT, FECTH, SETTIMEINTERVAL, PRINT, SCROLL, SETTIMEINTERVAL

//Shortcut to open console on browser=> CTRAL+SHIFT+J

//On console of browser, type Window and enter, we will get those WINDOW OBJECT


var a=12;


//a will be added on window, so we say VARIABLES adds itself to the window objects


//let & const doesn't adds

let b=12;

//we will not see b adding on window objects












//let's summarize the difference
//1) var is old js  // let const are new js

//2) var is function scoped (function scoped means =>pura function ma anywhere can be used) /// let const are braces scoped => only used on braces {}

//3) var adds itself to the window object   /// let const doesn't add in window object

