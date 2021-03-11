// Functions Expressions are functions stored within variables (thtas why they dont get hoisted)
// Function expressions DO NOT get hoisted
/*
      (1)
    let hey = function hi() {
        console.log("HI");
    }

    1 - The variable 'hey' is now a representative of the function 'hi()'
 */


    let hey = function hi() {
    console.log("HI");
}

hey() // this is invoking the function