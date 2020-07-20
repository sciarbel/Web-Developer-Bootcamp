// Ex 1
// function isEven(num) {
//   if (num % 2 === 0) {
//     return true;
//   }
//   return false;
// }

function isEven(num) {
  return num % 2 === 0;
}

// Ex 2
function factorial(num) {
  var result = 1;
  for (var i = 2; i <= num; i++) {
    result *= i;
  }
  return result;
} 

// function factorial(num) {
//   if (num === 0) {
//     return 1;
//   }
//   var result = num;
//   for (var i = num - 1; i >= 1; i--) {
//     result *= i;
//   }
//   return result;
// }


// Ex 3
function kebabToSnake(str) {
  return str.replace(/-/g, "_");
}