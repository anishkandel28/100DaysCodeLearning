"use strict" // treat all js code as newer version

// alert("My name is dego") // we are using nodejs, not broswer

let name="dego"
let age=20
let isLoggedIn=true
let serverRespone=false


//number=> 2 to power of 53 //
//bigint
//string=>""
//boolean=> true or false
//null=> standAlone value, representation of empty value,  not undefined but it's empty
//undefined=> when value is not assigned , it's type
//symbol=>uniqueness


//OBJECT

console.log(typeof undefined);// undefined
console.log(typeof null) //object




//dataTypesConversion & confusions

let score=33
let stringConversion=String(score)

console.log(stringConversion)
console.log(typeof(stringConversion))

let stringNumber="33ac"

let numberConversion=Number(stringNumber)
console.log(numberConversion)
console.log(typeof(numberConversion))

let isLoggedin=1;
let booleanConversion=Boolean(isLoggedIn)
console.log(booleanConversion)
console.log(typeof(booleanConversion))

let example=null
let valueInExample=Number(example)

let example2=undefined
let valueInExample2=Number(example2)

console.log(valueInExample)
console.log(valueInExample2)


//"33"=> 33
//"33abc"=> Nan type is number
//true=>1 ; false=>0
//1=> true; 0=>false

//convert in boolean
//""=>false
//"anish"=> true


let someNumber=33
let stringNumbers=Number(someNumber)
console.log(stringNumbers)
