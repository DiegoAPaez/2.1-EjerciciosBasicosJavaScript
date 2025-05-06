const hello = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Hello, World");
    }, 2000);
});

(async () => {
    try {
        const result = await hello;
        console.log(result);
    } catch (error) {
        console.log(error);
    }
})();
