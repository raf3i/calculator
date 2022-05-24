const answer = document.querySelector(".answer");
const numbers = document.querySelectorAll(".number");
let display = "";
numbers.forEach(number => number.addEventListener("click", e => {
  if (display.length >= 11) return;
  let value =e.target.dataset.value
  console.log(value);
  display += value;
  answer.innerHTML = display;
}));

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
