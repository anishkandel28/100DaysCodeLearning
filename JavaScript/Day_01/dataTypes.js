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
//we will get NaN

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


let someNumber="33"
let stringNumbers=Number(someNumber)
console.log(stringNumbers)




////************************************Operations ******************************************/
let value=3
let negValue=-value
console.log(negValue)

let str1="the"
let str2="dego"
let str3 =str1+str2
console.log(str3)

console.log("1" +2);
console.log(1 + "2")
console.log ("1" +2 +2)
console.log(1 + 2+"2")

console.log((3+4) *5 %3);

console.log (true);

let voteCounter=100
voteCounter++

console.log(voteCounter)
// console.log(counterVoter)


//************ Comparison Orperators */
console.log(2>1);
console.log(2>=1);
console.log(2<1);
console.log(2==1)
console.log(2!=1)

console.log("2">1);//false
console.log("02">1)//false

console.log(null>0)
console.log(null==0)
console.log(null>=0)//true //null gets zero on equality check

console.log(undefined==0);
console.log(undefined<0);


//===
console.log("2"==2)
console.log("2"===2)


//******************************************* Summary*********************** */
//primitive
//7 types: string, number, boolean, null, undefined, symbol, BigInt

const scores=100
const scoresValue=100.3

const isLoggedInn=false
const outsideTemp=null// it's empty value
let userEmail; //undefined value

const id =Symbol('123')
const anotherID=Symbol('123')

console.log(id===anotherID)

console.log(typeof(anotherID))
const bigNumber=2434242343252325n //big int

console.log(typeof (bigNumber))


//Refrence (non primitive)

//Array, objects, functions 

//array
const names=['dego', 'ted', "coinbloc"];


//obj
let myObj={
    name:"dego",
    age:123,
    address:'nepal',

}

console.log(typeof(myObj))

//func

const myFunc= function(){
    console.log("hello world")
} // storing funcion on variable my FUnc
console.log(typeof(myFunc))