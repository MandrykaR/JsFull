export const getMinSquareNumber = arr => {
    if (!Array.isArray(arr) || arr.length === 0) {
        return null;
    }

    const minValue = Math.min(...arr.map(num => Math.abs(num)));
    return minValue * minValue;
}

console.log(getMinSquareNumber([-777, 3, -2, 6, 45, -20]));