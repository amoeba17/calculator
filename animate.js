//import {operate, isOperator} from './calculator.js';

const display = document.getElementById('display');
const buttons = document.querySelectorAll('.button');

let currentNumber = 0, lastNumber = 0, operator;

function updateCurrentNumber() {
    currentNumber = display.textContent;
    // maybe: lastNumber = 0;
}

function buttonClick(clickEvent) {
    // retrieve the button from the DOM
    const button = clickEvent.target;
    // animate the button
    button.classList.add('pressed');
    // get the mathmetical symbol represented by the button from its text value
    const symbol = button.textContent;

    if (button.classList.contains('number')) { // the user is inputting a number
        if (currentNumber == 0) {
            display.textContent = '';
        }
        // append the number symbol to the display
        display.textContent += symbol;
        // store the displayed number as the current number
        updateCurrentNumber();
    } else if (button.classList.contains('operator')){ // the user is starting an operation
        lastNumber = currentNumber;
        operator = symbol;
        display.textContent = operator;
        currentNumber = 0;
    } else { // the user is doing something special
        if (symbol == '=') {
            if (operator == undefined) {
                lastNumber = currentNumber;
                display.textContent = currentNumber;
            } else {
                display.textContent = operate(currentNumber, lastNumber, operator);
                updateCurrentNumber();
            }
        } else if (symbol == 'CLR') {
            display.textContent = '';
            updateCurrentNumber();
        } else if (symbol == '(-)') {
            currentNumber = -currentNumber;
            display.textContent = currentNumber;
        } else if (symbol == '%') {
            currentNumber = currentNumber / 100;
            display.textContent = currentNumber;
        }
    }
}

/*
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
            default:
                break;
        }
    }
    keyButton.click();
}
*/

buttons.forEach(button => {
    button.addEventListener('transitionend', () => {
        button.classList.remove('pressed');
    });
    button.addEventListener('click', buttonClick);
});

//document.addEventListener('keydown', keyDown);
