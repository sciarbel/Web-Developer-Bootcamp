// Ex 1
var nums = [45, 64, 77, 34];
nums.forEach(function (num) {
  console.log(num);
});


// Ex 2
// myForEach(nums, function (num) {
//   console.log(num);
// });


// Ex 3
function myForEach(arr, func) {
  for (var i = 0; i < arr.length; i++) {
    func(arr[i]);
  }
}

var colors = ["red", "orange", "yellow"];

myForEach(colors, console.log);