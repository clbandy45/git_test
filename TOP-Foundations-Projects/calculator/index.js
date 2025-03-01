//JAVASCRIPT FOR WEBPAGE CALCULATOR//

//BASIC FUNCTIONS -- add, subtract, multiply, divide, power, factorial//
const add = function(a,b) {
    return a + b;
}

const subtract = function(a,b) {
return a - b;
}

const multiply = function(a,b) {
    return a * b;
}

const divide = function(a,b) {
    if (b == 0) {
        return "err";
    }
    return a / b;
}

const power = function(a,b) {
    return a ** b;
}

const factorial = function(a) {
    if (a == 0) {
    return 1;
    } else {
    return a * factorial(a-1);
    }
}

//CONSTANTS FOR BASIC OPERATIONS
let valueOne = 0;
let valueTwo = 0;
let operand = '';
let operateFunction = 0;


//OPERATION FUNCTION TO CALL BASIC FUNCTIONS BASED ON OPERAND
const operate = function(valueOne, valueTwo, operand) {
    if (operand === '+') {
        return add(valueOne,valueTwo);
    } else if (operand === '-') {
        return subtract(valueOne,valueTwo);
    } else if (operand === '*') {
        return multiply(valueOne,valueTwo);
    } else if (operand === '/') {
        return divide(valueOne,valueTwo);
    } else if (operand === '^') {
        return power(valueOne,valueTwo);
    }  
}

//constants for all the click functions
const numerals = document.querySelectorAll(".numeral");
const screen = document.getElementById("display-output");
const clear = document.getElementById("clear");
const clearAll = document.getElementById("clear-all");
const decimal = document.getElementById("decimal");
const oper = document.querySelectorAll(".operand");
const equals = document.getElementById("equals");
const heldDisplay = document.getElementById("held-value");
const heldOperand = document.getElementById("held-operand");

//click functions
numerals.forEach(element => {
    element.addEventListener("click", () => {
        if (isNaN(screen.textContent)) {
            screen.textContent = '';
        }
        screen.textContent += element.textContent;
        if (screen.textContent.includes(".")){
            decimal.disabled = true;
        } else {
            decimal.disabled = false;
        }
    });
});

clear.addEventListener("click",() => {
    screen.textContent = '';
    decimal.disabled = false;
});

oper.forEach(element => {
    element.addEventListener("click", () => {
        if (isNaN(screen.textContent)) {
            screen.textContent = '';
        }
        valueOne = Number(screen.textContent);
        operand = element.textContent;
        screen.textContent = '';
        heldDisplay.textContent = valueOne;
        heldOperand.textContent = operand;
    })
})

equals.addEventListener("click", () => {
    valueTwo = Number(screen.textContent);
    operateFunction = operate(valueOne,valueTwo, operand);
    screen.textContent = operateFunction;
    valueOne = valueTwo;
    operand = '';
    heldDisplay.textContent = valueOne;
    heldOperand.textContent = operand;
})
    
clearAll.addEventListener("click",() => {
    screen.textContent = '';
    valueOne = 0;
    valueTwo = 0;
    operand = ' ';
    heldDisplay.textContent = valueOne;
    heldOperand.textContent = operand;
});

