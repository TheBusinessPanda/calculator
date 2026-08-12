console.log("Working");

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
