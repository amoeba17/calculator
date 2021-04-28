import {operate, isOperator} from './calculator.js';

const display = document.getElementById('display');
const buttons = document.querySelectorAll('.button');

let a = 0, b = 0, operator = '+';

function buttonClick(clickEvent) {
    const button = clickEvent.target;
    button.classList.add('pressed');
    const symbol = button.textContent;
    if (button.classList.contains('operator')) {
        if (symbol == 'CLR') {
            display.textContent = '';
        } else if (symbol == '=') {
            b = Number(display.textContent);
            a = operate(a, b, operator);
            display.textContent = a;
        } else if (symbol == '%') {
            a = Number(display.textContent) / 100;
            operator = symbol;
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
        if (symbol == '(-)') {
            a = -Number(display.textContent);
            display.textContent = a;
        } else {
            display.textContent += symbol;
        }
    }
}

function keyDown(keyEvent) {
    console.log(keyEvent);
    const key = keyEvent.key;
    let keyButton;
    buttons.forEach(button => {
        if (key == button.textContent){
            keyButton = button;
        }
    });
    if (keyButton == undefined) {
        switch (key) {
            case 'Enter':
                keyButton = document.getElementById('equals-button');
                break;
            case 'Backspace':
                keyButton = document.getElementById('clear-button');
                break;
        }
    }
    keyButton.click();
}

buttons.forEach(button => {
    button.addEventListener('transitionend', () => {
        button.classList.remove('pressed');
    });
    button.addEventListener('click', buttonClick);
});

document.addEventListener('keydown', keyDown);