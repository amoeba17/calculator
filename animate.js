import {operateDisplayText} from './calculator.js';

const display = document.getElementById('display');

function buttonClick(clickEvent) {
    const button = clickEvent.target;
    if (button.textContent == '=') {
        display.textContent = operateDisplayText(display.textContent);
    } else if (button.textContent == 'CLR') {
        display.textContent = '';
    } else {
        display.textContent += button.textContent;
    }
}

const buttons = document.querySelectorAll('.button');
buttons.forEach(button => {
    button.addEventListener('click', buttonClick);
});