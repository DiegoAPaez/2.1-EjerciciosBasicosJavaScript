const checkInput = (input) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (input === "Hello") {
                resolve("Input was correct!");
            } else {
                reject('Error: Input wasn\'t "Hello"');
            }
        }, 2000);
    });
};
