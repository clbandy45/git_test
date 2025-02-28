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
let operand;
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
const decimal = document.getElementById("decimal");
const oper = document.querySelectorAll(".operand");
const equals = document.getElementById("equals");

//click functions
numerals.forEach(element => {
    element.addEventListener("click", () => {
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
        valueOne = screen.textContent;
        console.log(valueOne);
        operand = "'" + element.textContent + "'";
        console.log(operand);
        screen.textContent = '';
    })
})

equals.addEventListener("click", () => {
    valueTwo = screen.textContent;
    console.log(valueTwo);
    operateFunction = operate(valueOne, valueTwo, operand);
    console.log(operate());
    console.log(operateFunction);
})
    
