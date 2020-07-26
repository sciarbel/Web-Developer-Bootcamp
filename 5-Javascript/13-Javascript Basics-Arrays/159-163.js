// Class 159
/*var todos = [];

var input = prompt("What yould you like to do?");

while (input !== "quit") {
  if (input === "list") {
    console.log(todos);
  } else if (input === "new") {
    var newTodo = prompt("Enter new todo:");
    todos.push(newTodo);
  } 
  input = prompt("What would you like to do?");
}
console.log("Ok, quit app"); */


// Class 163 - with forEach()


var todos = [];

var input = prompt("What yould you like to do?");
while (input !== "quit") {
  if (input === "list") {
    listTodos();
  } else if (input === "new") {
    addTodo();
  } else if (input === "delete") {
    deleteTodo();
  }
  input = prompt("What would you like to do?");
}
console.log("Ok, quit app");


function listTodos() {
  todos.forEach(function (todo, index) {
    console.log(`${index}: ${todo}`);
  });
}

function addTodo() {
  var newTodo = prompt("Enter new todo:");
  todos.push(newTodo);
  console.log("Added todo");
}

function deleteTodo() {
  var index = prompt("Enter index of todo to delete");
    todos.splice(index, 1);
    console.log("Deleted todo");
}