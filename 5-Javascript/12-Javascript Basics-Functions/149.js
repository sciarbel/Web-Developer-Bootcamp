// Ex 1 - isEven

// v1
// function isEven(num) {
//   if (num % 2 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// }

// v2
// function isEven(num) {
//   return num % 2 === 0;
// }


// EX 2 - factorial

// function factorial(num) {
//   var result = 1;
//   for (var i = 1; i <= num; i++) {
//     result = result *= i; //result *1;
//   }
//   return result;
// }


// Ex 3 kebabToSnake

function kebabToSnake(str) {
  var newStr = str.replace(/-/g, "_");
  return newStr;
}
kebabToSnake(str);
// g flag in regular expressions is a global search, meaning it will match all occurrences