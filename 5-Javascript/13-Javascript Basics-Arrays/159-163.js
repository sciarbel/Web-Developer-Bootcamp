// Class 159  
var todos = [];
  input = prompt("What would you like to do?");
  while (input !== "quit") {
    if (input === "list") {
      console.log(todos);
    } else if (input === "new") {
      var newtodo = prompt("Add a todo");
      todos.push(newtodo);
    }
    input = prompt("What would you like to do?");
  }
  console.log("OK, exit list");


  // Class 163