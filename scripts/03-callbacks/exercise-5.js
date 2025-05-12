/**
 * Adds spaces between each character in a string and logs the result to the console
 * @param {string} string - The string to process
 * @returns {void}
 */
const spaceChars = (string) => {
    string = string.split("").join(" ");
    console.log(string);
};

/**
 * Processes a string by converting it to uppercase and then applies a callback function to it
 * @param {string} string - The string to process
 * @param {Function} callback - The callback function to apply to the processed string
 * @returns {void}
 */
const processString = (string, callback) => {
    string = string.toUpperCase();
    callback(string);
};
