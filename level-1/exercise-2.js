/**
 * Calculates the sum of all the numbers provided as arguments.
 *
 * @param {...number} nums - A list of numbers to be summed.
 * @returns {number} The total sum of the provided numbers.
 */
const sum = (...nums) => nums.reduce((sum, num) => sum + num, 0);
