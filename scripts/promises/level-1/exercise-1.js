const hello = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Hello, World");
    }, 2000);
});
