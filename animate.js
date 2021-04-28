import {operate, isOperator} from './calculator.js';

const display = document.getElementById('display');

let a, b, operator;

function buttonClick(clickEvent) {
    const button = clickEvent.target;
    const symbol = button.textContent;
    if (button.classList.contains('operator')) {
        if (symbol == 'CLR') {
            display.textContent = '';
        } else if (symbol == '=') {
            b = Number(display.textContent);
            a = operate(a, b, operator);
            display.textContent = a;
        } else {
            a = Number(display.textContent);
            operator = symbol;
            display.textContent = operator;
        }
    } else {
        if (isOperator(display.textContent)) {
            display.textContent = '';
        }
        display.textContent += symbol;
    }
}

const buttons = document.querySelectorAll('.button');
buttons.forEach(button => {
    button.addEventListener('click', buttonClick);
});