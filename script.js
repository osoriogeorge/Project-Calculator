function add(nbr1, nbr2) {
  return parseFloat(nbr1) + parseFloat(nbr2);
}

function subtract(nbr1, nbr2) {
  return parseFloat(nbr1) - parseFloat(nbr2);
}

function multiply(nbr1, nbr2) {
  return parseFloat(nbr1) * parseFloat(nbr2);
}

function divide(nbr1, nbr2) {
  if (nbr2 !== 0) {
    return parseFloat(nbr1) / parseFloat(nbr2);
  } else {
    return "Cannot divide by zero";
  }
}

let display = document.getElementById("display");
let currentInput = "";
let operator = "";
let nbr1 = "";
let nbr2 = "";
let operatorSet = false;

function appendNumber(number) {
  if (currentInput !== "" || number !== "0") {
    currentInput += number;
    display.value += number;
    console.log(currentInput);
  }
  operatorSet = false;
}

function setOperator(op) {
  if (!operatorSet) {
    if (currentInput !== "") {
      if (operator !== "") {
        operate();
      } else if (nbr1 === "") {
        nbr1 = currentInput;
      }
      operator = op;
      display.value += " " + op + " ";
      currentInput = "";
      operatorSet = true;
      console.log(operator);
    } else {
      alert("Please, enter a number first.");
    }
  } else {
    alert("You cannot add two consecutive operators.");
  }
}

function clearDisplay() {
  display.value = "";
  currentInput = "";
  nbr1 = "";
  nbr2 = "";
  operator = "";
}

function operate() {
  if (nbr1 !== "" && currentInput !== "") {
    nbr2 = currentInput;
    let result;

    switch (operator) {
      case "+":
        result = add(nbr1, nbr2);
        break;
      case "-":
        result = subtract(nbr1, nbr2);
        break;
      case "*":
        result = multiply(nbr1, nbr2);
        break;
      case "/":
        result = divide(nbr1, nbr2);
        break;
      default:
        result = "Invalid operator";
    }
    display.value = result;
    currentInput = result.toString();
    nbr1 = result;
    operator = "";
    operatorSet = false;
    console.log(result);
    return result;
  } else if (currentInput === "" && operator !== "") {
    alert("Please, enter a number before using another operator.");
  }
}
