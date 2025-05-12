const checkInput = (input) => {
    return new Promise((resolve, reject) => {
        if (input === "Hello") {    
            setTimeout(() => {
                resolve("Input was correct!");
            }, 2000);
        } else {
            reject('Error: Input wasn\'t "Hello"');
        }
    });
};