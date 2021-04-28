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
    let result = 1;
    const operation = (e >= 0) ? multiply : divide;
    e = Math.abs(e);
    for (let i = 0; i < e; i++) {
        result *= b;
    }
    return result;
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
        case '^':
            return pow(a, b);
        default:
            return NaN;
    }
}

function isOperator(char) {
    return char == '+' || char == '-' || char == '*' || char == '/' || char == '^';
}

export {operate, isOperator};