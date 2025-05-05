/**
 * Adds two numbers and logs the result to the console.
 *
 * @param {number} num1 - The first number to add.
 * @param {number} num2 - The second number to add.
 * @returns {void}
 */
const add = (num1, num2) => {
    console.log(`Result for ${num1} + ${num2} = ${num1 + num2}`);
};

/**
 * Performs a calculation using two numbers and a callback function.
 *
 * @param {number} a - The first number to be used in the calculation.
 * @param {number} b - The second number to be used in the calculation.
 * @param {Function} callback - A function that takes two arguments (a, b) and performs a calculation or operation.
 */
const calculator = (a, b, callback) => {
    callback(a, b);
};
