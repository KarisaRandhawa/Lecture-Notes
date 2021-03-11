/*
 * Stores our varibale/function declaration but does not assign values. Anything that needs hoisted is hoisted here.
    -second pass: assigns the values to our variables and executed any hoisted source code.
 */

// console.log(myName);
// let myName = "Karisa"; // will not read because the console is on top.

b();

function b() {
    console.log("I have been hoisted!"); //console reads because its a function.
    
}