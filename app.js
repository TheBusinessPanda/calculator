let operand1;
let operand2;
let operator;

function add(val1, val2) {
    return val1 + val2;
}
function subtract(val1, val2) {
    return val1 - val2;
}
function product(val1, val2) {
    return val1 * val2;
}
function divide(val1, val2) {
    return val1 / val2;
}
function exponent(val1, val2) {
    return val1 ^ val2;
}

function operate(val1, operator, val2) {
    switch (operator) {
        case '+':
            return add(val1, val2)
            break;
        case '-':
            return subtract(val1, val2)
            break;
        case '*':
            return product(val1, val2)
            break;
        case '/':
            return divide(val1, val2)
            break;
        case '^':
            return exponent(val1, val2)
            break;
    }
}

let buttons = document.querySelectorAll('button');
let display = document.querySelector('.display');

buttons.forEach((button) => {
    if (!operand1) {
        button.addEventListener('click', () => {
            display.innerText = button.innerText;
            operand1 = button.innerText;
        });
    } if (!operator) {
        button.addEventListener('click', () => {
            display.innerText = button.innerText;
            operator = button.innerText;
        });
    } if (!operand2) {
        button.addEventListener('click', () => {
            display.innerText = button.innerText;
            operand2 = button.innerText;
        });
    }
});


;
// Make eventlisteners for all buttons
// make a variable for operand1, operator, and operand2
// update operand1 when a number is pressed
// switch to updating operator when a operator button is pressed
// switch to updating operand2 after operator button has been pressed already
// keep updating operand2 until = is entered or another operator is entered
// if = pressed then evaluate and display result on display and push to operand1
// if another operator is pressed then evaluate number 
//      and push it to operand1 and display the operator and switch to updating operand2
// repeat cycle
