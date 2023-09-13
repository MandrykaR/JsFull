// reverseArray
export function reverseArray(arr) {
    if (!Array.isArray(arr)) {
        return null;
    }

    const revArr = [...arr];
    console.log(arr);
    return revArr.reverse();
}


reverseArray([101, 13, 45]);

// withdraw
export const withdraw = (clients, balances, client, amount) => {
    const clientIndex = clients.indexOf(client);

    if (balances[clientIndex] < amount) {
        return -1;
    }

    return balances[clientIndex] - amount;
};

withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 50);
withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'User', 10);

// getAdults
export const getAdults = obj => {
    const newObj = {};

    for (const key in obj) {
        if (obj[key] >= 18) {
            newObj[key] = obj[key];
        }
    }

    return newObj;
};

console.log(
    getAdults({
        'John Doe': 19,
        Tom: 17,
        Bob: 18,
    }),
); // ==> { 'John Doe': 19, Bob: 18 }
console.log(
    getAdults({
        Ann: 56,
        Andrey: 7,
    }),
); // ==> { Ann: 56 }