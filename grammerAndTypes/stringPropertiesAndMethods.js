/*
    PROPERTIES
-Properties are qualities associated with data type.
-strings only have one singular property for us to access, that being the lenght property
*/

let myName = 'Karisa Randhawa';
console.log(myName.length);

//METHODS
/*
-Methods are tools  that can help us manipulate date
- property vs .method()
- methods are functions associated with data types.
*/

let myNameIs = "Karisa";
console.log(myNameIs.toUpperCase()); // this method captialize strings

let home = 'My home is Greenwood';
console.log(home.includes('Greenwood')); // this method searches (true/false) for a specific string key word.


//CHALLENGE
//Challenge: Use google, find MDN documentation for Strings, research and use the split method to get an array back from this string

let sent = "This sentence will be split into individual parts";
console.log(sent.split(" "))
 //or

 let splitString = sent.split(" ");
 console.log(splitString);