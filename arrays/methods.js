let food = ["Pecan Pie", "Shrimp", "Quesadilla", "Cheese Cake", "Hotdog"];

for (foodItem of food){
    console.log(foodItem);
}
//to add array item
let foodPush = food.push("Pizza");
console.log(foodPush);
console.log("Push:", food);

//to delete an array item
food.splice(1, 1,);
console.log(food);

//to delete and replace at the same time
let foodSplice = food.splice(1, 1, "Banana"); // the 1st num is the one you want to delete & the 2nd num is where you want to place the replaced item.
console.log(foodSplice);
console.log(food);

//remove the last item from the array 

let foodPop = food.pop();
food.pop();
console.log(food);


//remove an item to array at the start of the array
let foodShift = food.shift();
console.log(foodShift);
console.log("Shift: ", food);

// this adds item at the beginning of the array
let foodUnShift = food.unshift("Popcorn", "Steak");
console.log(foodUnShift);
console.log("Unshift", food);
