//how to copy refrence value

let a=[1, 2, 3, 4, 5];
let b=[...a] // this is called spread operator "..."
// b.pop()
console.log(b)

let students=['anish', "shree", "kandel", "dego"]
let studentsName=[...students] // spread operator => to copy refrence value
console.log(studentsName)


//let's try to copy obj value

let studentObj={
    name:"Anish",
    class:"masters",
    subject:"MIT",
    myFunc:function() {
        console.log("I am a hero")
        
    }
}

let studentQual={...studentObj}

console.log(studentQual)