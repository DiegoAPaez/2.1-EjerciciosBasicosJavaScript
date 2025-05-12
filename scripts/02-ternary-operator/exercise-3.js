// Write an expression that uses chained ternary operators to determine if a number is positive, negative, or zero.
const findSign = (num) => {
    return num == 0 ? "zero" : num > 0 ? "positive" : "negative";
};

const findMaximum = (num1, num2, num3) => {
    return num1 > num2 && num1 > num3 ? num1 : num2 > num3 ? num2 : num3;
};
