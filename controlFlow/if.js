/*
FALSY VALUE
-A fasley value is a value that is considered false when encountered in a boolean
    1. false
    2. 0
    3. " ", ' ', ` ` 
    4. null
    5. undefined
    6. NaN (not a number)

- This means that when JavaScript is expecting a boolean and it is given one of the values above, it will alway evaluate to "fasly".
*/

let isOn = true;
if(isOn) {

    console.log("The light is on");
}

isOn = false;
if(!isOn){
    console.log("The light is off");
}


let weather = 55;
if(weather < 70){

    console.log("Wear a jacket!");

}
