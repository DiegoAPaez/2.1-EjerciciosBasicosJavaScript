const multiply = (a, b, c) => {
    console.log(`Multiplication of ${a} * ${b} * ${c} = ${a * b * c}`);
};

const exampleArr = [3, 5, 7];

multiply(...exampleArr);
