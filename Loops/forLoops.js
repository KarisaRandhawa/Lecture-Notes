/*
    LOOPS
    - Loops offer us a quick and easy way to do something repeatedly, or loop over something.
    - There are many kinds of loops, but they all roughtly do the same thing.
    - It  will repeat until a specified condition evaluates to true
        1. for statement
        2. do while statement
        3. while statement
        4. labeled statement
        5. break statement
        6. for in statement
        7. for of statement

Note: there is a danger of infinite loops. There are three main parts to lopp:
- initial expression (runs first, only once)
- condition
- increment expression
*/


for ( let i = 0; i < 10; i++){
    console.log(i)
}


// Challenge: using a for loop, count to 20, by 2's
for (let i = 0; i <= 20; i += 2){
    console.log(i);
}

// Challenge: using a for loop, count 10 to 0, going down 1
for (let i = 10; i >= 0; i-= 1 ){
    console.log(i);
}

// Challenge: using a for loop, count from 0, going down by 2's to -24.

for (let i = 0; i >= -24; i-= 2){
    console.log(i);
}

// Challenge: using a for loop, go through a name and dsiplay each letter individually.
 let friendName = "Karisa";
 let count = friendName.length
 for(let i = 0; i < count; i++ ){
     console.log(friendName[i]); //console.log(friendName.charAt[i])
 }
