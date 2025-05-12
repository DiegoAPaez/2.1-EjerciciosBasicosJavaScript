/**
 * Prints a number to the console.
 *
 * @param {number} num - The number to be printed.
 * @returns {void}
 */
const printNumber = (num) => {
    console.log(num);
};

/**
 * Processes a number using a callback function.
 *
 * @param {number} num - The number to be processed.
 * @param {function} callback - The callback function to process the number.
 */
const process = (num, callback) => {
    callback(num);
};
