const hello = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Hello, World");
    }, 2000);
});

hello.then((res) => console.log(res));
