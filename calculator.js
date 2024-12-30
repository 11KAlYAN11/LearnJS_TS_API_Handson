// Basic Calculator Operations

function add(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('Invalid input: Both arguments must be numbers.');
    }
    return a + b;
}

function subtract(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('Invalid input: Both arguments must be numbers.');
    }
    return a - b;
}

function multiply(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('Invalid input: Both arguments must be numbers.');
    }
    return a * b;
}

function divide(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('Invalid input: Both arguments must be numbers.');
    }
    if (b === 0) {
        throw new Error('Division by zero is not allowed.');
    }
    return a / b;
}

// Exporting functions for testing
module.exports = { add, subtract, multiply, divide };
