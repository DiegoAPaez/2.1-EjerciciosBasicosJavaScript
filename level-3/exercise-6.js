const first = new Promise((resolve) => {
    setTimeout(() => {
        resolve("First learn JavaScript.");
    }, 2000);
});

const second = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Then learn TypeScript.");
    }, 3000);
});

Promise.all([first, second]).then((result) =>
    result.forEach((msg) => console.log(msg))
);
