//Objects
// when we talk more than one value, it is called array
//when we talk all about that a value , called object

// for eg

//my gadgets =array
//my teachers=array
//my friends=array

//my gadgets which is mobile=object
//my teacher who teachers programming= object
//my freinds who are taller= object

//when we have to hold or describe properities of ones, in a key value pair

let a={} //blank object


//filled object

let gadgets={
    brand:"POCO",
    type:"mobile",
    build:"MI",
    price:45000,
    color:'blue',
    autoChrage:false,
    playGame:function(){ //this is method // 
    //inside the object, the properties have value as function, we call method

    }
}

//brand, price, color, build are properties (props)
//let's access the value

console.log(gadgets.color)


//let's update properties
gadgets.color="red"
console.log(gadgets.color)


//how to delete object's prop

delete gadgets.autoChrage
console.log(gadgets)
//delete key autoCharge on object gadgets


