/*
MORNING CHALLENGE 
************
    - Create a function that takes in strings
    - In the function, translate a phrase into pig latin and print it to the console.
​
    - If able to do so, return the value into another variable and print that variable
​
    What is Pig Latin?
        * If the word begins with a consonant, remove the consonant to the first vowel, place it at 
    the end of the word, and add an 'ay' to the end (i.e. Pig Latin => IgPay Atinlay)
​
​
        * If the word begins with a vowel, simply add an 'ay' at the end of the word
*/

let sampleString = 'pig latin'
let sampleString2 = 'pig latin pig latin'
​
function pigLatin(strings) {
​
    let wordsArray = strings.split(' ')
    // console.log(wordsArray)
    wordsArray.forEach( (word, index ) => {
        let lettersArray = word.split('')
        // console.log(lettersArray)
​
    while(lettersArray[0] !== 'a' && lettersArray[0] !== 'e' && lettersArray[0] !== 'i' && 
    lettersArray[0] !== 'o' && lettersArray[0] !== 'u') {
        lettersArray.push(lettersArray[0])
        lettersArray.shift()
        // console.log(lettersArray)
    }
​
    lettersArray.push('ay')
    // console.log(lettersArray)
    wordsArray[index] = lettersArray.join('')
    // console.log(wordsArray)
​
    });
    
    return wordsArray.join(' ')
}
​
let pigString = pigLatin(sampleString);
console.log(pigString)
​




