var num = (Number(prompt("Guess a number")));

if (num === 7) {
  alert("You guessed it right!");
} else if (num > 7) {
  alert("Too high!");
} else {
  alert("Too low!");
}