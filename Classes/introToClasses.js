/**
 - Javascript classes were introduced in ES%, and is a new way to write JS's previous prototype-based inheritence,  which is a way of creating an object that acts as a blueprint.
 - classes act as a blueprint for creating objects that share methods and properties.
 - Classes consist of the class name, curly braces, and any properties or methods we include within the curly braces.
 - Classes can be written as class expression or class declarations
 - class declarations do not get hoisted


 class Automobile {
     //methods and properties go here
 }


 let vehicle = class {
    //methods and properties go here
 }

 - The constructor method is a special method that helps create and initialized an object created from a class. It works in tandem with the new keyword.

- The constructor needs to be included for us to create new objects or instances of our class. This allows us to set up propeerties as well as pass in values for those properties when creating the new instances.

- Each class can only have ONE constructor

       (1)
class Cookie {
                      (2)
    constructor(type, icing, shape) {
         (3)      (4)
        this.t = type;
        this.i = icing;
        this.s = shape;
    }
}

1 - we have a class named 'Cookie'
2 - The constructor method takes in three parameters of type, icing, and shape. Since the constructor method is invoked when we call upon the class, we need to supply the aruguments.
3 - We are assigning keys/properties for each new instance of our Cookie class.
4 - We are assigning those keys/properties the values that we pass in as agruments.
*/

class Cookie {
  constructor(type, icing, shape) {
    this.t = type;
    this.i = icing;
    this.s = shape;
  }
}

let chocolateChip = new Cookie("chocolate chip", false, "circle");
console.log(chocolateChip);
//accessing the properties individually
console.log(chocolateChip.t);

class Automobile {
  start() {
    console.log("Hello");
  }
  stop() {
    // methods that do something
    console.log("Bye");
  }
}

let newCar = new Automobile();
console.log(newCar);
newCar.start();

/*
Bronze:
Build an Automobile class that takes in a make and a model in the constructor. Bind those two parameters to the class's properties with matching names. 
???
Silver:
Add two methods to the Automobile class: start() and stop(). Each method should print out a message to the console that the engine has started or stopped. Include the vehicle's make and model in the output.
???
Gold:
Use the new keyword to create a new instance of the Automobile class and assign the new instance to a variable. Run both methods.
*/

//Bronze
class Automobile2 {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }
  //Silver
  start() {
    console.log(`The ${this.make} ${this.model}'s engine started`);
  }
  stop() {
    console.log(`The ${this.make} ${this.model}'s engine stopped`);
  }
}
//Gold
let hondaCivic = new Automobile2("Honda", "Civic");
console.log(hondaCivic);
hondaCivic.start();
hondaCivic.start();


/*
-The extends keyword is used in class declarations/expressions to create a new class as a child of another class.
-Each new class we create that extends from the parent class not only inherits the properties and methods from the parent class, but it also can have it's own methods and properties.
*/

//Parent
class Animal {
    constructor(name) {
        this.name = name;
    }
    eat() {
        console.log(`${this.name} eats their food`);
    }
}

//Sub Class
// the 'super' method gives us access to the parent classes properties and methods
class Dog extends Animal {
    constructor(name, breed){
        super(name);
        this.breed = breed;
    }

    play() {
console.log(`${this.name} fetches the ball!`);
    }
}
let Georgie = new Dog("Georgie", "Bearded Collie");
Georgie.eat();
Georgie.play();