import {
    createCalculator
} from './index';

const calculator = createCalculator();
const calculatorNext = createCalculator();

console.log(calculator.getMemo()); // 0
calculator.add(3);
calculator.getMemo(); // 3
calculator.decrease(5);
calculator.getMemo(); // -2

calculatorNext.add(5);
calculatorNext.getMemo(); // 5

calculator.getMemo(); // -2
calculator.reset();
calculator.getMemo(); // 0

calculatorNext.getMemo(); // 5