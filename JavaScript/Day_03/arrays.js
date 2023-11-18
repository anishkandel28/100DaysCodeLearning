/// ARRAYS

//when we have to store more than one values


let a=[1,2,3,4,5 ]; // index 0,1,2,3,4
//array=group of values


//push pop shift unshift

//push== to add extra member in array
let  arrPush=[1,2,3,4,5,6,7]
arrPush.push(8)
console.log("push()  " + arrPush)

let arrUnshift=[1,2,3,4,5,6, 7]
arrUnshift.unshift(0)
console.log( "unshift()  " + arrUnshift)

//unshift=when we have to add value in array from first


let  arrPop=[1,2,3,4,5,6,7]
arrPop.pop(2)
console.log( "pop()  " + arrPop);
//pop= to  remove a number in array 

let arrShift=[1,2,3,4,4,5]
arrShift.shift()
console.log("Shift  " + arrShift)
//shift= when we have to remove value in array of first
//opp of unshift



let arrSplice=[1,2,3,4,5,6]
arrSplice.splice(2, 4)
arrSplice.splice(3, 1)
console.log("Slice  " + arrSplice)

//when we have to remove between value by index upto where
