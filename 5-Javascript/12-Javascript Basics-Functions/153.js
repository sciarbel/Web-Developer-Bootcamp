// Ex 1
function sing() {
  console.log("twinkle twinkle...");
  console.log("how I wonder...");
}

// setInterval(anotherFunction, interval - milisseconds);
setInterval(sing, 1000);

clearInterval(2); /*Stops the setInterval function*/


// Ex 2 - anonymous function
setInterval(function () {
  console.log("I am an anonynous function");
}, 2000);