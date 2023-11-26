export const mult = a => b => a * b;
console.log(mult(4)(5));

export const twice = mult(7);

const result = twice(2);
console.log(result);

export const triple = mult(9);
console.log(triple(3));