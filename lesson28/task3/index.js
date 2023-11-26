export const mult = a => b => a * b;

export const twice = mult(7);

const result = twice(2);
console.log(result);

export const triple = mult(9);
console.log(triple(3));