// forEach


// forEach loop only run on array

let a=[1,2,3,56,6,76,56,45,6,7,8,9,10]

// when we have perform to each elements of that arraay, we use forEach loop

a.forEach(function(val){ 
    console.log(val+2)
})

//forEach never do changes on by default on our array, it's does change on it's temporary copy

