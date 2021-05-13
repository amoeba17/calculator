/* 
Defines the mathematical operations necessary for the calculator app. 
*/

// operation functions
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
    if (b == 0) {
        return Infinity;
    } else if (b == Infinity) {
        return 0;
    } else {
        return a / b;
    }
}

function pow(b, e) {
    return Math.pow(b, e);
}

// operate functions
function operate(operator, a, b) {
    a = Number(a);
    b = Number(b);
    switch (operator) {
        case '':
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case '*':
            return multiply(a, b);
        case '/':
            return divide(a, b);
        case '^':
            return pow(a, b);
        default:
            return NaN;
    }
}

// check button text methods
function isDigit(char) {
    const digit = Number(char);
    if (digit >= 0 && digit <= 9) {
        return false;
    } else {
        return true;
    }
}

function isOperator(char) {
    return char == '+' || char == '-' || char == '*' || char == '/' || char == '^';
}

function isSpecial(char) {
    return char == 'CLR' || char == '=' || char == '%' || char == '(-)';
}


// DOM constants
const display = document.getElementById('display');
const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');
const specialButtons = document.querySelectorAll('.special');

// DOM functions
numberButtons.forEach(numberButton => {
    numberButton.addEventListener('click', numberClick);
});

operatorButtons.forEach(operatorButton => {
    operatorButton.addEventListener('click', operatorClick);
});

specialButtons.forEach(specialButton => {
    specialButton.addEventListener('click', specialClick);
});


// Calculator data
let storedValue = 0;
let currentValue = 0;
let operator = '';

// Calculator functions
function numberClick(clickEvent) {
    const digit = clickEvent.target.textContent;
    if (currentValue == 0) {
        display.textContent = digit;
    } else {
        display.textContent += digit;
    }
    currentValue = Number(display.textContent);
}

function operatorClick(clickEvent) {
    const operatorSymbol = clickEvent.target.textContent;
    display.textContent = operate(operator, storedValue, currentValue);
    operator = operatorSymbol;
    storedValue = Number(display.textContent);
    currentValue = 0;
}

function specialClick(clickEvent) {
    const specialSymbol = clickEvent.target.textContent;
    switch (specialSymbol) {
        case '=':
            display.textContent = operate(operator, storedValue, currentValue);
            currentValue = Number(display.textContent);
            storedValue = 0;
            operator = '';
            break;
        case 'CLR':
            display.textContent = '';
            storedValue = 0;
            currentValue = 0;
            operator = '';
            break;
        case '(-)':
            currentValue = -currentValue;
            display.textContent = currentValue;
            break;
        case '%':
            currentValue /= 100;
            display.textContent = currentValue;
            break;
    }
}





