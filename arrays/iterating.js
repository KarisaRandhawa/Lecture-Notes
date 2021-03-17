let food = ["Pecan Pie", "Shrimp", "Quesadilla", "Cheese Cake", "Hotdog"];

// regular for loop
for ( let i = 0; i < food.length; i++ ) {
    console.log(food[i]);
}
//****OR***/
//for each loop call back the element one time in the array
food.forEach(foodItem => console.log(foodItem));
//But with the forEach method, we CANNOT return a value

//the index is used to access the numbers in the arrays
food.forEach((foodItem, index) => console.log(foodItem, index));

/*
CHALLENGE
************
​
    - (Go look at MDN docs to remind you):
    - Create an array containing movies
    - Use .forEach() to list your movies
    - Add another movie at the end
    - And replace one of your existing movies with another one
*/
 let movies = ["Parker", "The Transporter", "Homefront", "Crank", "Wild Card", "Redemption"];
 

movies.push("Death Race", "The Italian Job");
console.log(movies);

let moviesSplice = movies.splice(1, 1, "Blitz");
console.log(moviesSplice);
console.log(movies);
movies.forEach(favMovies => console.log(favMovies)); // show the list of all the movies


















