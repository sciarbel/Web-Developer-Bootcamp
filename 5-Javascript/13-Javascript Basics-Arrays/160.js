var colors = ["red", "orange", "yellow", "green"];

// Ex-1
// for (var i = 0; i < colors.length; i++) {
//   console.log(colors[i]);
// }


// Ex-2
// colors.forEach(function (color) {
//   console.log(colors);
// });


// Ex-3
// "test" is just a placeholder for the function
// colors.forEach(function (test) {
//   console.log(test);
// });


// Ex-4
// function printColor(color) {
//   console.log("Your color is " + color);
// }

// colors.forEach(printColor);

// Ex-5 - While loop
var count = 0;
while (count < colors.length) {
  console.log(colors[count]);
  count++;
}