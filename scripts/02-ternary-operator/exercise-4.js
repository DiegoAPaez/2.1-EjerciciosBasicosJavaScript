const evenOrOdd = (numbers) => {
    for (let i = 0; i < numbers.length; i++) {
        numbers[i] % 2 === 0
            ? console.log(`${i} is even`)
            : console.log(`${i} is odd`);
    }
};