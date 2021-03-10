/*
 FOR IN LOOPS
 -They are great for iterating over values in an object. Properties in object re what's  called enumerable.
 - For in loops iterate over an object's enumberable properties
*/

let student = {
    name:       "Peter",
    awesome:     true,
    degree:     "JavaScript",
    week1:       1
}

for (let item in student){
    console.log(item);
    console.log(student[item]);
    
}
 

let catArray = [ "tabby", "british shorthair", "burmese", "Mainecoon", "rag doll"];

for ( let cat in catArray){
    console.log(cat);
    console.log(catArray[cat]);
}

// Challenge: write a for in loop that capitalizes the first letter of a name, and lowercase the rest of the name.

let myName = "kArISa";
let capName;

for( let i in myName){
    if(i == 0){
        capName = myName[i].toUpperCase();
        console.log(capName);
    } else {
        capName = capName + myName[i].toLowerCase(); //or .toUpperCase to cap all the letters
    }
}

console.log(capName);
