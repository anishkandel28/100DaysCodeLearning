//how arrays are made behind the scene
let arr=["anish", 1, 3,4,5]
console.log(arr)
console.log(typeof(arr)) //output is object

// let's breakdown, how a is object

arr[-3]=2;
console.log(typeof(arr))
console.log(arr)// will add '-3':2 on output

arr={
    0:"anish",
    1:1,
    2:3,
    3:4,
    4:5
}

// Array.isArray([])=> true

// Array.isArray({})=>false

