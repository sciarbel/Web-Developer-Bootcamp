// v3
var answer = prompt("Are we there yet?");

while (answer.indexOf("yes") === -1) {
  var answer = prompt("Are we there yet?");
}
alert("yay, we made it");

// v2
// var answer = prompt("Are we there yet?");

// while (answer !== "yes" && answer !== "yeah") {
//   var answer = prompt("Are we there yet?");
// }
// alert("yay, we made it");


// v1
// if (answer === "yes") {
//   alert("yay, we made it");
// } else {
//   var answer = prompt("Are we there yet?");
// }