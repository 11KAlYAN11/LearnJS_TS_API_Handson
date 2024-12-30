// String Manipulation Utilities

function reverseString(str: string): string {
    if (typeof str !== 'string') {
        throw new Error('Invalid input: Argument must be a string.');
    }
    return str.split('').reverse().join('');
}

function capitalizeFirstLetter(str: string): string {
    if (typeof str !== 'string') {
        throw new Error('Invalid input: Argument must be a string.');
    }
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function countWords(str: string): number {
    if (typeof str !== 'string') {
        throw new Error('Invalid input: Argument must be a string.');
    }
    return str.trim().split(/\s+/).length;
}

// Exporting functions for testing
export { reverseString, capitalizeFirstLetter, countWords };
