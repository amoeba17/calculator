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

// operate functions
function operate(a, b, operator) {
    switch(operator) {
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case '*':
            return multiply(a, b);
        case '/':
            return divide(a, b);
        default:
            return NaN;
    }
}

function isOperator(char) {
    return char == '+' || char == '-' || char == '*' || char == '/';
}

function operateDisplayText(displayText) {
    let operator, operatorIndex;
    for (let i = 0; i < displayText.length; i++) {
        if (isOperator(displayText[i])) {
            operator = displayText[i];
            operatorIndex = i;
            break;
        }
    }
    let a = Number(displayText.substring(0, operatorIndex));
    let b = Number(displayText.substring(operatorIndex+1));
    return operate(a, b, operator);
}

export {operate, isOperator};