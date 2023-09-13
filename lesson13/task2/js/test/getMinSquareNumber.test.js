import {
    getMinSquareNumber
} from '../getMinSquareNumber';

it('should return null when passed an empty array', () => {
    const result = getMinSquareNumber([]);
    expect(result).toEqual(null)
})


it('should return null when passed an empty string', () => {
    const result = getMinSquareNumber('');
    expect(result).toBeNull();
})

it('should return the square of the minimum absolute value in the array', () => {
    const resultFirst = getMinSquareNumber([-777, 3, -2, 6, 45, -20]);
    expect(resultFirst).toEqual(4);

    const resultSecond = getMinSquareNumber([1, 3, 5, 2]);
    expect(resultSecond).toEqual(1);
});