// Ex 1
var colors = ["red", "orange", "yellow", "green"];

for (var i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}


// Ex 2 - forEach()
// array.forEach(anonymouysFunction(placeholder) {functionArgument});
// - pass an anonymous function for each array element
  
colors.forEach(function(color) {
  console.log(color);
});

colors.forEach(function(arrItem) {
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