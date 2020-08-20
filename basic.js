// BASIC LEVEL 

// QUESTION #1 
// How will you access the third position of the following array?
let arr = [5, 10, 15];
console.log(arr[2]);

// QUESTION #2
// How will you access the second element, degree from the following object?
let obj = { 
    name: "Maimoona", 
    degree: "MBBS",
}
console.log(obj['degree']);

// QUESTION #3
// How will you access all elements of the following array using loops?
let array= [1, 2, 3, 4, 5, 6, 7]
array.forEach(element => {
    console.log(element);
});

// QUESTION #4
// How will you access all elements of the following object using loops?
let obj2 = {
     name: "Maimoona",
     degree: "MBBS", 
     age: 25 
}
for (const prop in obj2){
     console.log(prop + " : "+ obj2[prop]); 
}



// =========== BASIC LEVEL END ================================
