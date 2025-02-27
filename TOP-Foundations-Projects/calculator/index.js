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

console.log(operate(5,5,'+') + ' = 5+5');
console.log(operate(5,5,'-') + ' = 5-5');
console.log(operate(5,5,'*') + ' = 5*5');
console.log(operate(5,5,'/') + ' = 5/5');
console.log(operate(5,5,'^') + ' = 5^5');


    
