const evenOrOdd = (numbers) => {
    numbers.forEach((number) => {
        number % 2 === 0
            ? console.log(`${number} is even`)
            : console.log(`${number} is odd`);
    });
};
