const printElement = (element) => {
    console.log(element);
};

/**
 * Processes each element of an array using a provided callback function.
 *
 * @param {Array} arr - The array of elements to process.
 * @param {Function} callback - The function to execute on each element of the array.
 *                              It receives the current element as an argument.
 */
const processElements = (arr, callback) => {
    arr.forEach((e) => {
        callback(e);
    });
};
