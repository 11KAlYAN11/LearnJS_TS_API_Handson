// Function to greet a user
function greet1(name: string): string {
    return "Hello, " + name;
}

// Correct usage: Passing a string as an argument
console.log(greet1("Kalyan")); 

// Uncommenting the following line will cause an error because the argument is not a string
// console.log(greet1(42)); // Error: Argument of type 'number' is not assignable to parameter of type 'string'.

// Example demonstrating type enforcement in TypeScript
let age: number = 25; // `age` must be a number
// Uncommenting the following line will cause an error because `age` is assigned a string instead of a number
// age = "twenty-five"; // TypeScript error: Type 'string' is not assignable to type 'number'.

// Function to add two numbers
function add1(a: number, b: number): number {
    return a + b;
}

// Correct usage: Passing numbers as arguments
console.log(add1(10, 20)); 

// Uncommenting the following line will cause an error because one argument is a string
// console.log(add1(5, "10")); // Error: Argument of type 'string' is not assignable to parameter of type 'number'.
