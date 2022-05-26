const equation = document.querySelector(".equation");
const answer = document.querySelector(".answer");
const numbers = document.querySelectorAll(".number");

const addition = document.querySelector("button[data-value=addition]");
const subtraction = document.querySelector("button[data-value=subtraction]");
const multiplication = document.querySelector("button[data-value=multiplication]");
const division = document.querySelector("button[data-value=division]");

const equalButton = document.querySelector("button[data-value=equal]");

let display = "";
let decimal = false;
let begin = true;
numbers.forEach(number => number.addEventListener("click", e => {
  // Limit number length to 11
  if (display.length >= 11) return;

  let value = e.target.dataset.value

  if (begin === true && value == 0) return;

  // Make sure not to repeat decimal
  if (value == "." && decimal === true) return;
  if (value == "." && begin === true) {
    value = "0.";
    decimal = true;
  }
  if (value == ".") decimal = true;

  console.log(value);
  display += value;
  answer.innerHTML = display;
  begin = false;
}));

// Clear button
const clear = document.querySelector(".clear");
clear.addEventListener("click", clearDisplay);

addition.addEventListener("click", e => {
  console.log(e.target);
});

subtraction.addEventListener("click", e => {
  console.log(e.target);
});

multiplication.addEventListener("click", e => {
  console.log(e.target);
});

division.addEventListener("click", e => {
  console.log(e.target);
});

equalButton.addEventListener("click", e => {
  console.log(e.target);
});

// operate(subtract);

// function operate(func) {
//   console.log(func(a, b));
// }

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

function clearDisplay() {
  display = "";
  answer.innerHTML = 0;
  decimal = false;
  begin = true;
}
