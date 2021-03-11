/*
 -Function Paramenters are placed holders for data that we pass into the function when invoking the function

                (1)   
    function hi(name) {
        console.log(`Hi ${name}`);
                           (2)
    }
         (3)
    hi("Karisa")

    1 - The parameter(s) that the function is accepted or holding
    2 - Using string interpolation, we ncan refer to the parameter given tothe function
    3 - This is where we define what the parameter's value will be
 */

    function karisa(ticket) {
        console.log(`I exchanged my ticket for a ${ticket}`);                      
    }
         
    karisa("pepperoni pizza");

//CHALLENGE
/*
- Write a function that takes two parameters:
        - one parameter is for a first name,
        - the other parameter is for a last name;
        - have them come together in a variable inside the function.
        - console.log 'Hello, my name is <your name>'
        - call (or invoke) your function
*/

function challenge(firstName, lastName){
    let yourName = "";
    yourName += firstName + " " + lastName;
    console.log("Hello, my name is " + yourName);
}


myName("Karisa", "Randhawa");