import getSum, {
    getSquaredArray,
    getOddNumbers
} from "./calculator";

it('should get squered arr', () => {
    const result = getSquaredArray([1, 2, 3])
    expect(result).toEqual([1, 4, 9]);
})


it('should keep odd', () => {
    const result = getOddNumbers([1, 2, 3, 4, 5])
    expect(result).toEqual([1, 3, 5]);
})

it('should get sum of num', () => {
    const result = getSum(8, 4)
    expect(result).toEqual(12);
})