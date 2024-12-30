const { add, subtract, multiply, divide } = require('./calculator');

describe('Calculator Operations', () => {
    test('adds two numbers', () => {
        expect(add(1, 2)).toBe(3);
    });

    test('subtracts two numbers', () => {
        expect(subtract(5, 2)).toBe(3);
    });

    test('multiplies two numbers', () => {
        expect(multiply(2, 3)).toBe(6);
    });

    test('divides two numbers', () => {
        expect(divide(6, 2)).toBe(3);
    });

    test('throws error on invalid input for add', () => {
        expect(() => add(1, '2')).toThrow('Invalid input: Both arguments must be numbers.');
    });

    test('throws error on division by zero', () => {
        expect(() => divide(1, 0)).toThrow('Division by zero is not allowed.');
    });
});
