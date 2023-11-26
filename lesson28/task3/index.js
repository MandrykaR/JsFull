const mult = a => b => a * b;
console.log(mult(4)(5));

const twice = mult(7);

const result = twice(2);
console.log(result);

const triple = mult(9);
console.log(triple(3));