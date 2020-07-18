// Ex 1
for (var i = -10; i <= 19; i++) {
  console.log(i);
}

// Ex 2
for (var i = 10; i <= 40; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// Ex 3
for (var i = 300; i <= 333; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}

// Ex 4
for (var i = 5; i <= 50; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(i);
  }
}

var str = "hello there";
for (var n = 0; n < str.length; n++) {
  console.log(str[n]);
}