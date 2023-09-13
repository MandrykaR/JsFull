import {
    calc
} from '../calc';

it('should return sum', () => {
    expect(calc('2 + 3')).toBe('2 + 3 = 5')
})

it('should num', () => {
    expect(calc('5 - 3')).toBe('5 - 3 = 2');
});


it('should return multiply num', () => {
    expect(calc('2 * 1')).toBe('2 * 1 = 2');
});


it('should return divide num', () => {
    expect(calc('8 / 2')).toBe('8 / 2 = 4');
});

it('should return null for non-string'), () => {
    expect(calc(123)).toBe(null);
}