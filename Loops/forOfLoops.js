/* 
FOR OF LOOPS 
-Both "for of loops" and "for in loops" both do the same thing which nis loop over data structures. There is one key difference, what they iterate over.
    1. for in loops iterate over the enumerable properties in an object
    2. for of loops iterates over the values of an iterable object
*/

let catArray = [ "tabby", "british shorthair", "burmese", "Mainecoon", "rag doll"];

for(let cat of catArray){
    console.log(cat);
}

// Cannot use for of loops on objects without indicies
let student = {
    name:       "Peter",
    awesome:     true,
    degree:     "JavaScript",
    week1:       1
}

for(stud of student){
    console.log(stud);
}

// for of loops are best used on arrays
// for in loops are best used on object

