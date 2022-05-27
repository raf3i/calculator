const equation = document.querySelector(".equation");
const answer = document.querySelector(".answer");
const numbers = document.querySelectorAll(".number");

const addition = document.querySelector("button[data-value=addition]");
const subtraction = document.querySelector("button[data-value=subtraction]");
const multiplication = document.querySelector("button[data-value=multiplication]");
const division = document.querySelector("button[data-value=division]");

const equalButton = document.querySelector("button[data-value=equal]");

let display = "";
let result = null;  // why did i create this variable - to take the result as a first value if it is not null
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
clear.addEventListener("click", () => {
  clearDisplay();
  clearEquation();
});

// Operator buttons' functionality
let firstValue;
let secondValue;
let operator;
let equationDisplay;
let equalPressed = false;
addition.addEventListener("click", e => {
  // Prevent empty input before click
  if (display === "" && result === null) return;

  // Check if user is starting new operation without clicking clear before hand (while answer still on screen)
  if (display !== "" && equalPressed) {
    result = null;
  }

  // Allow clicking equal button
  equalPressed = false;

  operator = add;
  if (display !== "" && result !== null) {
    firstValue = operate(operator, parseInt(result), parseInt(display));
    result = parseInt(firstValue);
  }
  else if (display !== "" && result === null) {
    firstValue = parseInt(display);
    result = firstValue;
  }
  else {
    firstValue = result;
  }
  // if (result === null) {
  //   firstValue = display
  // }
  // else firstValue = result;

  // Update equation display
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
//
function clearDisplay() {
  display = "";
  answer.innerHTML = display;
  decimal = false;
  begin = true;
}

function clearEquation() {
  equation.innerHTML = "88888888888888";
  firstValue = null;
  operator = null;
  secondValue = null;
  result = null;
  equalPressed = true;
}
