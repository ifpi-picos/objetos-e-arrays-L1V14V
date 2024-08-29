
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
    if (b === 0) {
        throw new Error('Divisão por zero não é permitida');
    }
    return a / b;
}


function power(base, exponent) {
    return Math.pow(base, exponent);
}


module.exports = {
    add,
    subtract,
    multiply,
    divide,
    power
};const a = 10;
const b = 5;
console.log(`Soma: ${mathUtils.add(a, b)}`);
console.log(`Subtração: ${mathUtils.subtract(a, b)}`);
console.log(`Multiplicação: ${mathUtils.multiply(a, b)}`);
console.log(`Divisão: ${mathUtils.divide(a, b)}`);
console.log(`Exponenciação: ${mathUtils.power(a, b)}`);

