import { reverseString, capitalizeFirstLetter, countWords } from './stringUtils';

describe('String Manipulation Utilities', () => {
    test('reverses a string', () => {
        expect(reverseString('hello')).toBe('olleh');
    });

    test('capitalizes the first letter of a string', () => {
        expect(capitalizeFirstLetter('hello')).toBe('Hello');
    });

    test('counts words in a string', () => {
        expect(countWords('Hello world')).toBe(2);
    });

    test('throws error on invalid input for reverseString', () => {
        expect(() => reverseString(123 as any)).toThrow('Invalid input: Argument must be a string.');
    });

    test('throws error on invalid input for capitalizeFirstLetter', () => {
        expect(() => capitalizeFirstLetter(123 as any)).toThrow('Invalid input: Argument must be a string.');
    });

    test('throws error on invalid input for countWords', () => {
        expect(() => countWords(123 as any)).toThrow('Invalid input: Argument must be a string.');
    });
});
