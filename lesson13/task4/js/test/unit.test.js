import {
    reverseArray,
    withdraw,
    getAdults
} from '../unit';

// Test task1
it('should return arr', () => {
    const result = reverseArray([]);
    expect(result).toEqual([]);
})


it('should return sum', () => {
    const result = reverseArray('123');
    expect(result).toEqual(null);
})

it('should return sum', () => {
    const result = reverseArray(false);
    expect(result).toEqual(null);
})


// Test task2

const clients = ['Ann', 'John', 'User'];
const balances = [1400, 87, -6];


it('should return the updated balance', () => {
    expect(withdraw(clients, balances, 'John', 20)).toEqual(67);
});

it('should return -1 if the balance is insufficient', () => {
    expect(withdraw(clients, balances, 'User', 10)).toEqual(-1);
});

it('should return NaN if the client does not exist', () => {
    expect(withdraw(clients, balances, 'Lojghd', 10)).toBe(NaN);
});


// Test task3

it('should return an empty object', () => {
    const result = getAdults({});
    expect(result).toEqual({});
})

it('should return an empty object if there are no adults', () => {
    const result = getAdults({
        Ann: 15,
        Andrey: 17,
    });
    expect(result).toEqual({});
});

it('should return an object with adults only', () => {
    expect(getAdults({
        'John Doe': 19,
        Tom: 17,
        Bob: 18,
    })).toEqual({
        'John Doe': 19,
        Bob: 18
    });
});