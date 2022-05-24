const answer = document.querySelector(".answer");
const numbers = document.querySelectorAll(".number");

let display = "";
let decimal = false;
numbers.forEach(number => number.addEventListener("click", e => {
  // Limit number length to 11
  if (display.length >= 11) return;

  let value = e.target.dataset.value

  // Make sure not to repeat decimal
  if (value == "." && decimal === true) return;
  else if (value == ".") decimal = true;

  console.log(value);
  display += value;
  answer.innerHTML = display;
}));

// Clear button
const clear = document.querySelector(".clear");
clear.addEventListener("click", () => {
  display = "";
  answer.innerHTML = 0;
  decimal = false;
});

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
