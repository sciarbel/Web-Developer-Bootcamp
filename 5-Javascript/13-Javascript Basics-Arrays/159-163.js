// Class 159  
var todos = [];

var input = prompt("What would you like to do?");
while (input !== "quit") {
  if (input === "list") {
    listTodos();
  } else if (input === "new") {
    newTodo();
  } else if (input === "delete") {
    deleteTodo();
  }
  input = prompt("What would you like to do?");
}
console.log("OK, exit list");


function listTodos() {
  // todo, index: placeholders. The first gives the array item, and the second gives the index.
  todos.forEach(function (todo, index) {
    console.log(index + ": " + todo);
  });
}

function newTodo() {
  var newtodo = prompt("Add a todo");
  todos.push(newtodo);
  console.log("Added Todo");
}

function deleteTodo() {
  var index = prompt("Which action do you want to delete? Type index");
  // splice: 1st placeholder gives the position, and the second, how many itens after.
  todos.splice(index, 1);
  console.log("Todo Deleted");
}