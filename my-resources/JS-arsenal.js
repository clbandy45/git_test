//Lines that have been commented out are for testing purposes//

//FILTER AN ARRAY: BETWEEN TWO VALUES: WITHOUT ALTERING THE ARRAY//
//#region
    // let arr = [5, 3, 8, 1];
    // console.log(arr);

    function filteredRange(array, x, y) {
        const min = Math.min(x,y);
        const max = Math.max(x,y);

        return array.filter(item =>(item >= min && item <= max));
    }

    // console.log(filteredRange(arr,1,4));
    // console.log(arr);
//#endregion

//TEST FOR IF YEAR IS A LEAP YEAR//
//#region
    const leapYears = function(year) {
        if ((year/400)%1 === 0){
            return true;
        } else if ((year/100)%1 === 0) {
            return false;
        } else if ((year/4)%1 === 0) {
            return true;
        } else {
            return false;
        }
    };
//#endregion

//REMOVE FROM AN ARRAY: ALL INSTANCES OF A SPECIFIC VALUE;//
//#region
    const removeFromArray = function(arr, ...rems) {
    let result = Array.from(arr);

    for (const rem of rems) {
        for (let i = 0; i < result.length; i++) {
            const index = result.indexOf(rem);
            if (index > -1){
                result.splice(index,1);
            }
        }
    }
    return result;
    };
//#endregion

//CONVERT A STRING WITH DELIMITER TO CAMELCASE
//#region
    let word = '';
    function camelize(word) {
        let splitArr = word.split('-');
        for (let i = 1; i < splitArr.length; i++){
            splitArr[i] = splitArr[i][0].toUpperCase() + splitArr[i].substr(1);
        }
        return camelized = splitArr.join('');
    };

    //console.log(camelize("big-booty-test"));
//#endregion

//REPEAT A STRING A SPECIFIED NUMBER OF TIMES//
//#region
    const repeatString = function(str,rpt) {
    let result = "";
    
    if (rpt < 0) {
        result = "ERROR"; //to keep negatives out
    } else {
        for (let i = 0; i < rpt; i++) {
            result += str;
        }
    }
    
    return result;
    };
//#endregion

//REVERSE A STRING//
//#region
    const reverseString = function(str) {
        const result = str.split('').reverse().join('');
        return result;
    };
//#endregion

//MATH SUM BETWEEN TWO POSITIVE NUMBERS//
//#region
const sumAll = function(x,y) {
    let result = 0;
    let max = Math.max(x,y);
    let min = Math.min(x,y);

    if ((x || y) < 0 || (x || y) % 1 !== 0 || typeof x !== "number" || typeof y !== "number"){
        return 'ERROR'; //error out for decimals, non numbers, negatives
    } else {
        for (let i = min; i <= max; i++) {
            result += i;
        }
        return result;
    }
};
//#endregion

//TEMPERATURE COVNERSION F TO C AND C TO F//
//#region
    const convertToCelsius = function(f) {
        const celsius = Math.round(((f-32)*(5/9))*10)/10;
        return celsius;
    };

    const convertToFahrenheit = function(c) {
        const farenheit = Math.round((c*(9/5)+32)*10)/10;
        return farenheit;
    };
//#endregion

//ARRANGE AN ARRAY IN ASCENDING OR DESCENDING ORDER//
//#region
    //set to descending currently 
    //let arr = [5, 2, 1, -10, 8];
    // onsole.log(arr);
    function compareNumeric(a, b) {
        if (a > b) return -1;
        if (a == b) return 0;
        if (a < b) return 1;
        }
    arr.sort(compareNumeric);
    //console.log(arr);
//#endregion

//BASIC CALCULATOR FUNCTIONS//
//#region 
    const add = function(a,b) {
        return a + b;
    };
  
    const subtract = function(a,b) {
        return a - b;
    };
  
    const sum = function(arr) {
        let totalSum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0); 
        return totalSum;
    };
  
    const multiply = function(arr) {
        let totalMultiply = arr.reduce((accumulator, currentValue) => accumulator * currentValue, 1); 
        return totalMultiply;
    };
  
    const power = function(a,b) {
        return a ** b;
    };
  
    const factorial = function(a) {
        if (a == 0) {
            return 1;
        } else {
            return a * factorial(a-1);
        }
    };
//#endregion

//CHECK IF PALINDROMES//
//#region
//works on sentences, words, with or without punctuation, and with or without numbers
    const palindromes = function (palindrome) {
        const alphaNumerical = 'abcdefghijklmnopqrstuvwxyz0123456789'; //for filter
        const cleaned = palindrome.toLowerCase().split('').filter(char => alphaNumerical.includes(char)).join('');
        const reversed = cleaned.split('').reverse().join('');

        return cleaned === reversed;
    };
//#endregion