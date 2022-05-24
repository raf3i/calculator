let a = 6;
let b = 3;

operate(subtract);

function operate(func) {
  console.log(func(a, b));
}

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}
