console.log("ex 1");

var num = -10;
while (num <= 19) {
  console.log(num);
  num++;
}

console.log("ex 2");

var num = 10;
while (num <= 40) {
  if (num % 2 === 0) {
    console.log(num);
  }
  num++;
}

console.log("ex 3");

var num = 300;
while (num <= 333) {
  if (num % 2 !== 0) {
    console.log(num);
  }
  num++;
}

console.log("ex 4");

var num = 5;
while (num <= 50) {
  if (num % 3 === 0 && num % 5 === 0) {
    console.log(num);
  }
  num++;
}