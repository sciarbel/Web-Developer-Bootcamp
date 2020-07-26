// Ex 1
// function printReverse(arr) {
//   arr.reverse();
//   arr.forEach(function(item) {
//     console.log(item);
//   });
// }

function printReverse(arr) {
  for (i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
  }
}


// Ex 2
function isUniform(arr) {
  var frst = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] !== frst) {
      return false;
    } else {
      return true;
    }
  }
}

// function isUniform(arr) {
//   var first = arr[0];
//   arr.forEach(function(item) {
//     if (item !== arr[0]) {
//       console.log(false);
//     } else {
//       console.log(true);
//     }
//   });
// }


// Ex 3
function sumArray(arr) {
  var total = 0;
  arr.forEach(function (item) {
    total += item;
  });
  return total;
}


// Ex 4
function max(arr) {
  var max = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
    }
  }
  console.log(max);
}