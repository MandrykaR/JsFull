function sumOfSquares() {
    return [...arguments].reduce((acc, elem) => {
        return acc + elem;
    }, 0)
}

console.log(sumOfSquares(1, 2, 3, 4));