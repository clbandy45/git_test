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
//

//CONSTANTS FOR BASIC OPERATIONS
    let valueOne = 0;
    let valueTwo = 0;
    let operand = '';
    let operateFunction = 0;
//


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
//

//GLOBAL CONSTANTS AND VARIABLES//
    const numerals = document.querySelectorAll(".numeral");
    const screen = document.getElementById("display-output");
    const clear = document.getElementById("clear");
    const clearAll = document.getElementById("clear-all");
    const decimal = document.getElementById("decimal");
    const oper = document.querySelectorAll(".operand");
    const equals = document.getElementById("equals");
    const backspace = document.getElementById("backspace");
    let lastclicked = null;

    const numOne = document.getElementById("one");
    const numTwo = document.getElementById("two");
    const numThree = document.getElementById("three");
    const numFour = document.getElementById("four");
    const numFive = document.getElementById("five");
    const numSix = document.getElementById("six");
    const numSeven = document.getElementById("seven");
    const numEight = document.getElementById("eight");
    const numNine = document.getElementById("nine");
    const numZero = document.getElementById("zero");

    const btnPlus = document.getElementById("plus");
    const btnMinus = document.getElementById("minus");
    const btnMultiply = document.getElementById("multiply");
    const btnDivide = document.getElementById("divide");
    const btnPower = document.getElementById("power");
//

//WHEN A NUMBER IS CLICKED//
    numerals.forEach(element => {
        element.addEventListener("click", () => {

            //clear the screen if err or equals was last pressed
            if (isNaN(screen.textContent) || lastclicked == 'equals') {
                screen.textContent = '';
            }

            //add to screen
            screen.textContent += element.textContent;
            
            //disable the decimal if one exists
            if (screen.textContent.includes(".")){
                decimal.disabled = true;
            } else {
                decimal.disabled = false;
            }

            //update last clicked to numeral
            lastclicked = 'numeral';
        });

        //color elements for mouse up and down
        element.addEventListener("mousedown", () => {
            element.style.backgroundColor = 'lightgreen';
        });    
        element.addEventListener("mouseup", () => {
            element.style.backgroundColor = 'lightgray';
        });
    });
//

//CLEAR OUT CURRENT DISPLAY//
    //clear the screen and re-enable decimal if it was disabled
    clear.addEventListener("click",() => {
        screen.textContent = '';
        decimal.disabled = false;
    });

    //coloring for up and down on clear button
    clear.addEventListener("mousedown", () => {
        clear.style.backgroundColor = 'lightgreen';
    });    
    clear.addEventListener("mouseup", () => {
        clear.style.backgroundColor = 'lightgray';
    });
//

//WHEN AN OPERAND IS CLICKED//
    oper.forEach(element => {
        element.addEventListener("click", () => {
            //clear screen if NaN
            if (isNaN(screen.textContent)) {
                screen.textContent = '';
            }
            //clear operand if operand was last pushed
            if (lastclicked == 'operand') {
                operand = '';
            }
            //if numeral was last pushed, continue like normal calculator
            if (lastclicked == 'numeral'){
                valueOne = Number(screen.textContent);
                screen.textContent = '';
            }

            //if equals was last pushed, set what's on the screen to valueOne
            if (lastclicked == 'equals'){
                valueOne = Number(screen.textContent);
                screen.textContent = '';
                valueTwo = 0;               
            }

            //assign the operand and update last clicked
            operand = element.textContent;
            lastclicked = 'operand';
        });

        //styling for mouseup and down
        element.addEventListener("mousedown", () => {
            element.style.backgroundColor = 'lightsalmon';
        });    
        element.addEventListener("mouseup", () => {
            element.style.backgroundColor = 'lightgray';
        });
    });
//

//WHEN EQUALS IS CLICKED//
    equals.addEventListener("click", () => {
        //clear screen if NaN
        if (isNaN(screen.textContent)) {
            screen.textContent = ''; 
        }

        //what to run if the last button pressed was equals, sets screen to valueOne, keeps operand, keeps valueTwo        
        if (lastclicked == 'equals') {
            valueOne = Number(screen.textContent);
            operateFunction = operate(valueOne,valueTwo, operand);
            //if there is a decimal at all, it rounds to 5 places else it displays the whole number
            let decimals = operateFunction.toFixed(5);
            let decimalCheck = String(decimals);
            let decimalOnly = decimalCheck.split('.')[1];
            let decimalRenum = Number(decimalOnly);
            if (decimalRenum > 0) {
                screen.textContent = decimals;
            } else {
                screen.textContent = operateFunction;
            }
        } else {
            //assign the screen to value two and evaluate the function
            valueTwo = Number(screen.textContent);
            operateFunction = operate(valueOne,valueTwo, operand);

            //if result of operation is not a number, screen is errored, else it calculates
            if (isNaN(operateFunction)) {
                screen.textContent = 'err';
            } else {
                //if there is a decimal at all, it rounds to 5 places else it displays the whole number
                let decimals = operateFunction.toFixed(5);
                let decimalCheck = String(decimals);
                let decimalOnly = decimalCheck.split('.')[1];
                let decimalRenum = Number(decimalOnly);
                if (decimalRenum > 0) {
                    screen.textContent = decimals;
                } else {
                    screen.textContent = operateFunction;
                }
            }
            //update last clicked
            lastclicked = 'equals';
        }
    });

    //styling for mouse up and down
    equals.addEventListener("mousedown", () => {
        equals.style.backgroundColor = 'lightgreen';
    });    
    equals.addEventListener("mouseup", () => {
        equals.style.backgroundColor = 'lightgray';
    });
//

//CLEAR ALL WITH CE, ESSENTIALLY SETS PAGES TO AS IF IT WAS REFRESHED//
    clearAll.addEventListener("click",() => {
        screen.textContent = '';
        valueOne = 0;
        valueTwo = 0;
        operand = '';
        lastclicked = null;
    });
    clearAll.addEventListener("mousedown", () => {
        clearAll.style.backgroundColor = 'lightgreen';
    });    
    clearAll.addEventListener("mouseup", () => {
        clearAll.style.backgroundColor = 'lightgray';
    });
//

//BACKSPACE ONE CHARACTER//
    backspace.addEventListener("click", () => {
        screen.textContent = screen.textContent.slice(0,-1);
    });
    backspace.addEventListener("mousedown", () => {
        backspace.style.backgroundColor = 'lightgreen';
    });    
    backspace.addEventListener("mouseup", () => {
        backspace.style.backgroundColor = 'lightgray';
    });
//

//listen to every click to enable-disable the equals button to avoid errors from smacking it
document.addEventListener("click", () => {
    if (lastclicked === null) {
        equals.disabled = true;
    } else {
        equals.disabled = false;
    }
})

//start the equals button off disable so it can't just be smacked
equals.disabled = true;

document.addEventListener("keyup", (key) => {
    console.log(key.key);
    if (key.key === '=') {
        equals.click();
    }
    if (key.key === 'Enter') {
        equals.click();
    }

    if (key.key === '1') {
        numOne.click();
    }

    if (key.key === '2') {
        numTwo.click();
    }

    if (key.key === '3') {
        numThree.click();
    }

    if (key.key === '4') {
        numFour.click();
    }

    if (key.key === '5') {
        numFive.click();
    }

    if (key.key === '6') {
        numSix.click();
    }

    if (key.key === '7') {
        numSeven.click();
    }

    if (key.key === '8') {
        numEight.click();
    }

    if (key.key === '9') {
        numNine.click();
    }

    if (key.key === '0') {
        numZero.click();
    }

    if (key.key === '.') {
        decimal.click();
    }

    if (key.key === 'Escape') {
        clear.click();
    }

    if (key.key === '+') {
        btnPlus.click();
    }

    if (key.key === '-') {
        btnMinus.click();
    }

    if (key.key === '*') {
        btnMultiply.click();
    }

    if (key.key === '/') {
        btnDivide.click();
    }

    if (key.key === '^') {
        btnPower.click();
    }

    if (key.key === 'Backspace') {
        backspace.click();
    }
});