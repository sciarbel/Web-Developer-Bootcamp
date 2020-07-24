// Ex 1
var colors = ["red", "orange", "yellow", "green"];

for (var i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}


// Ex 2 - forEach()
// array.forEach(anonymouysFunction(placeholder) {functionArgument});
// - pass an anonymous function for each array element
// there are 2 methods:
/*[1,2,3].forEach(function(element, index, array) {
  console.log(element, index, array);
});
Or you can pass in a pre-written, named function.

function logNums(element, index, array) {
  console.log(element, index, array);
} 
[1, 2, 3].forEach(logNums);*/


colors.forEach(function (color) {
  console.log(color);
});

colors.forEach(function (arrItem) {
  console.log(`test ${arrItem}`);
});


// Ex 3 - forEach() + defined funtion
function printColor(color) {
  console.log("*****");
  console.log(color);
  console.log("*****");
}

colors.forEach(printColor);


// Ex 4 - while
var count = 0;
while (count < colors.length) {
  console.log(`with 'while loop' ${colors[count]}`);
  count++;
}