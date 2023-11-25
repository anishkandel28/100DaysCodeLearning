// ForIn

// it is used to loop on object

let obj={
    name:"dego",
    age:24,
    city:"ktm"
}


for (let key in obj){ //key ko thaau ma j lekhey in hunxa,, obj is upper object where we defined as obj
    console.log(key)
    console.log(obj[key])
    console.log(key, obj[key])
    
}

let students={
    name:"Anish",
    roll_no:1,
    class:"masters",
    subject:"MIT"
}

for (let studentsKey in students){
    console.log(studentsKey)
    console.log(studentsKey, students[studentsKey])
}