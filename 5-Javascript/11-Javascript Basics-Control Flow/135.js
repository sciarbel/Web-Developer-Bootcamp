// Ex 1
var num = -10;
while (num <= 19) {
  console.log(num);
  num++;
}

// Ex 2
var numEven = 10;
while (numEven <= 40) {
  if (numEven % 2 === 0) {
    console.log(numEven);
  }
  numEven++;
}

// Ex 3
var numOdd = 300;
while (numOdd <= 333) {
  if (numOdd % 2 !== 0) {
    console.log(numOdd);
  }
  numOdd++;
}

// Ex 4
var numDiv = 5;
while (numDiv <= 50) {
  if (numDiv % 3 === 0 && numDiv % 5 === 0) {
    console.log(numDiv);
  }
  numDiv++;
}