const welcome = (user) => {
    console.log(`Hello ${user}! Welcome to IT Academy`);
};

/**
 * Waits for 2 seconds and then calls the provided callback function with the given name.
 *
 * @param {string} name - The name to be passed to the callback function.
 * @param {Function} callback - The callback function to execute after the delay. It should accept a single parameter (name).
 */
const waitAndGreet = (name, callback) => {
    setTimeout(() => {
        callback(name);
    }, 2000);
};
