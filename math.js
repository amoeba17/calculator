/* 
Defines the mathematical operations necessary for the calculator app. 
*/

// operation functions
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a + b;
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
function operate(a, operator, b) {
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