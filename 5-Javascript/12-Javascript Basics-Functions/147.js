function capitalize(str) {
  if (typeof str === "number") {
    return "That's not a string"
  }
  return str.charAt(0).toUpperCase() + str.slice(1);
}

var capital = capitalize("paris");