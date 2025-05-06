const hello = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Hello, World");
    }, 2000);
});

(async () => {
    const result = await hello;
    console.log(result);
})();
