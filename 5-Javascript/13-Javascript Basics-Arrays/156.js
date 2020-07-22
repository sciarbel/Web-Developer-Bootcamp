// Ex 1 - push() and pop()
var colors = ["red", "yellow", "green"];

colors.push("blue");

var col = colors.pop();


// Ex 2 - unshift() and shift()
colors.unshift("infrared");

var col = colors.shift();


// Ex 3 - indexOf()
var friends = ["Charlie", "Liz", "David", "Mattias"];

friends.indexOf("Mattias");

friends.indexOf("John"); /*returns a negative number, showing that the data is not present inside the array */


// Ex 4 - slice()
var fruits = ["banana", "orange", "lemon", "apple", "mango"];

var citrus = fruits.slice(1, 3);
// this does not alter the original fruits array

var nums = [1, 2, 3];
var otherNums = nums.slice();
// used to copy an entire array

var nums = [1, 2, 3, "a", "b", "c", 445, 34];

var letters = nums.slice(3, 6);