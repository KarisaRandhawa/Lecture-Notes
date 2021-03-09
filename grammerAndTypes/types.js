/*
Types
*/

/* 
    BOOLEANS
    -Are ONLY True or False values
    -Booleans are like light switches
*/

let on = true;
console.log(on);

let off = false;
console.log(off);

/*
NULL
-Null is like an empty bucket, it has the capacity to be filled, but it currently is not.
*/

let emptyBucket = null;
emptyBucket = "water";
console.log(emptyBucket);

/*
UNDEFINED
-Currently has no value assigned
-Acts as the means (plastic/metal) to create the bucket
 */

let metal; // correct way to assign undefined
//variable
//let metal = undefined;

console.log(metal)

/* NULL vs. UNDEFINED
****************************
-Null is like an empty bucket, the bucket is there, but theres nothing in it.

-Undefined - is like the materials we will use to create the bucket.

- We can also think of these two variables as pizza boxes. Null is like the empty pizza box, just waiting for pizza.
- Undefined is like the unassembled box */

let emptyBox = null;
let unassembledBox;

/*
NUMBERS
- In Javscript numbers are literally just numbers
- You can add, subtract, multiply, and divide 
- You can use decimals
*/
let degrees = 90;
console.log(degrees)

// will console.log() as 999999999999999
let precise = 999999999999999
console.log(precise)

// will console.log() as 10000000000000000
let rounded = 9999999999999999
console.log(rounded)

// will console.log() as 0.30000000000000004
let notQuite = 0.2 + 0.1
console.log(notQuite)


// Function to convert a string  to numbers IF that string is a number.
let a = Number("123")
console.log(a);

/*
 STRINGS
 - A string is value in between n a set of quotes or back ticks.
 - A string can be ddenoted by '', " ", ` `
 - 'string' === "string" === `string`
 */

 let stringOne = "double quotes";
 let stringTwo = 'single quotes';
 console.log(stringOne, stringTwo);

 //Numbers vs Strings

 //Adding numbers
 let addition = 1050 + 100;
 console.log(addition)
 //Adding strings
 let concatenation = '1050' + 100
 console.log(concatenation);

console.log(typeof addition);
console.log( typeof concatenation);

/*
OBJECT
- Can be indentify by {}
- Objects stores 2 things, a key and a value
- We can access these values, by digging into the object with dot notation(object.value)
*/

// We want to create an app like spotify
// We want to take in an artists name, amount of albums
// they've produced, all members are still alive?

let artist = {
    //key  //value
    name: 'Queen',
    album: '15',
    allMembersAlive : false
}
console.log(artist);
// Example of Dot notation
console.log(artist.allMembersAlive);

console.log(typeof artist.name);

//how to add to object
artist.songName = 'I want it all';
console.log(artist);

//how to change an object value
artist.songName = 'Bohemian Rhapsody';
console.log(artist);

/*
ARRAYS

let list = ['item1', 'item2', 'item3' ]
              (0)      (1)      (2)

- arrays are indentify by []
- You can access a value byu digging into the the array with array[0] 
*/

let burritos = ['large', '4', 'true'];

console.log(burritos);
//console.log() as an object because, the numbers associate with array are 'keys' and the list items are values

console.log(typeof burritos);

// ADDITION Vs CONCATENATION
/*
-addition is adding numbers together
-concatentation is adding strings together
*/

// let add = 100 + 100;
// console.log(add);

// let concat = 'Karisa' + 'Randhawa';
// console.log(concat);

// let stillConcat = '1050' = 100;
// console.log(stillConcat);



//*********CHALLENGE*************
/*
    Set 7 (or 8) variables:
    -firstName
    -lastName
    -houseNumber
    -aptNumber (if applicable)
    -street
    -city
    -state
    -zipcode
    Set each variable to its respective type.
    console.log your whole address (with a space between variables).
    If you get done early, try to change the whole address to use 'string interpolation'
*/

let firstName = 'Karisa';
let lastName = 'Randhawa';
let houseNumber = 1748;
let street = 'Long Lake Drive';
let city = 'Greenwood';
let state = 'Indiana';
let zipcode = '46143';

console.log(firstName, lastName, ':', houseNumber, street, city, ',', state, ',', zipcode);

// string interpolation
console.log(`${firstName}, ${lastName}, ${houseNumber} ${street}, ${city}, ${state} ${zipcode}`);


