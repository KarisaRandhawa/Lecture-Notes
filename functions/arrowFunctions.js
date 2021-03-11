// Arror Functions
//*********************** 
// Syntax 

// decclaration     //name      //parameters & fat arror section    //fat arrow     //body of function
    let           phatArrow   =  (/* parameter1, parameter2, etc */)    =>          console.log('fat arrow');
    // calling upon the function
    phatArrow();

// CONCISE BODY ARROR FUNCTIONS...
// - return by default
// - run when they are called upon (phatArrow())
// - may only be one line long

let fish = () => console.log('Bobby and Jalen had fish for lunch today!');
fish();

//BLOCK BODY ARROR FUNCTIONS
// - These function DO NOT return by default, you must include a return statement
// - run when they are called upon
// - may consist of more than one line, given they are wrapped in { curly brackets}

let myName = (firstName, lastName) => {
    return `My name is ${firstName} ${lastName}`;
}

console.log(myName('Karisa', 'Randhawa'));


//Concise vs Block Function
// concise =>
// - returns implicity (no return statement needed)
// - must be contained into one line

let apples = x => console.log(`There are ${x} apples`);
apples(100);

// Block =>
// - does not contain an explicit return statement, we have to include it (return xyz)
// - can be more than one line as long as contained by curly braces

let apples1 = x => {
    console.log(`There are ${x} apples`);
}
apples1(1000)

// Note: more than one parameters will require parentheseis