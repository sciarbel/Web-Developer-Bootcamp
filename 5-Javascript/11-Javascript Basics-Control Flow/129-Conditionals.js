var age = Number(prompt("What is your age?"));

if (age < 18) {
  console.log("Sorry, you are not old enough to enter the venue");
} else if (age < 21) {
  console.log("You can enter, but alcohol consumption is off limits");
} else {
  console.log("Enjoy my friend! Ahoy!");
}