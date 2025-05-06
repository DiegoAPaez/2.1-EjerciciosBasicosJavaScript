const arr = [1, 3, 7, 10, 15, 17, 11, 5, 8, 12, 9];

const result = arr
    .filter((n) => n >= 10)
    .map((n) => n * 2)
    .reduce((acc, n) => acc + n, 0);
