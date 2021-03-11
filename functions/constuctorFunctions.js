// CONSTRUCTION FUNCTIONS
//************************ 
// Notes 
// - Constructor functions can be thought of as a resusable skeleton object
// - we can add to the constructor the same way we add to objects - dot notation
// - It is good practice to capitalize your constructor  functionss
// - a constructor function is like a blueprint for an object
//OPtions 1

let artist1 = {
    name: 'Queen',
    albums: 15,
    allMembersAlive: false,
}

let artist2 = {
    name: 'Fleetwood Mac',
    albums: 18,
    allMembersAlive: false,
}

let artist3 = {
    name: 'Stevie Wonder',
    albums: 11,
    allMembersAlive: true,
}
// (1)     (2)              (3)
function Artist(name, albums, allMembersAlive){
//  (4)  (5)    (6)
    this.name = name ;
    this.albums = albums;
    this.allMembersAlive = allMembersAlive;
}
//           (7)   (8)
let artist = new Artist('Lizzo', 3, true);
console.log(artist);

/*
 1 - the function keyword
 2 - CAPITALIZED function name
 3 - The parameters : These will be the value of the object once this function is in use.
 4 - The 'this' keyword. 'this' gives us the ability to refer back to whatever called, or whatever activates it. In this case, 'this' will refer to our Artist being created.
 5 - The key of our new object that is being created
 6 - Is referring back to the parameter that is being passed to the function
 7&8 - The  new keyword calling our Artist function, crrating a new 'Artist. with values passed in as parameters.
 */

//EXAMPLE

function Car(make, model, miles, hasBeenCrashed) {
    this.make = make;
    this.model = model;
    this.miles = moles;
    this.hasBeenCrashed = hasBeenCrashed; 
    
}
let car = new Car('Honda', 'Accord', 200000, true)
console.log(car);

