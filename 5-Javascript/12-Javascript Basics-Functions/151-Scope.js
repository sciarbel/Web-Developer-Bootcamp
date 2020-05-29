// A função, depois de chamada, acessa a variável e muda seu conteúdo :
var y = 5;

function doMath() {
  y = 100;
  console.log(y);
}


// A função cria uma nova variável dentro do seu escopo , não alterando a variável do escopo parente:
var x = "hello world";

function doSomething() {
  var x = "hi there";
  console.log(x);
}