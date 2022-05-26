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
  // Limit number length to 11 digits
  if (display.length >= 11) return;

  let value = e.target.dataset.value

  // Prevent additional 0 inputs
  if (display == "0" && value == "0") return;
  else if (display == "0") {
    display = "";
    begin = true;
  }

  // Display number without 0 if 0 was pressed first
  // if (display == "0" && value != "0") display = "";

  // Prevent repeating decimal inputs
  if (value == "." && decimal === true) return;
  if (value == ".") decimal = true;

  // Display 0 before the decimal if decimal button is pressed first
  if (value == "." && begin === true) {
    value = "0.";
  }

  console.log(value);
  display += value;
  answer.innerHTML = display;
  begin = false;
}));

// Clear button
const clear = document.querySelector(".clear");
clear.addEventListener("click", clearDisplay);

// Operator buttons' functionality
let firstValue;
let secondValue;
let operator;
let equationDisplay;
addition.addEventListener("click", e => {
  // Prevent empty input before click
  if (display === "") return;

  operator = add;
  firstValue = display;
  equationDisplay = firstValue + " " + e.target.innerHTML + " ";
  equation.innerHTML = equationDisplay;
  firstValue = parseInt(firstValue);
  clearDisplay();
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

let result;
let equalPressed = false;
equalButton.addEventListener("click", () => {
  // Prevent empty input before click
  if (display === "") return;

  // Prevent multiple equal clicks
  if (equalPressed) return;
  equalPressed = true;

  // Get second value
  secondValue = parseInt(display);

  // Update display with second value
  equationDisplay += secondValue.toString() + " ";
  equation.innerHTML = equationDisplay;

  // Perform operation
  result = operate(operator, firstValue, secondValue);
  
  // Update display with equation result
  equationDisplay += "= " + result.toString();
  equation.innerHTML = equationDisplay;

  console.log(result);

  clearDisplay();

  display = result;
});

// Operator functions
function operate(func, a, b) {
  return func(a, b);
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

// Other functions
function clearDisplay() {
  display = "";
  answer.innerHTML = display;
  decimal = false;
  begin = true;
}
