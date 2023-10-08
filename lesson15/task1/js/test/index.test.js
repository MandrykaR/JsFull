import {
    makeCounter
} from "../index";

it('should return 0 for the first call of counter1', () => {
    const counter1 = makeCounter();
    expect(counter1()).toBe(0);
});

it('should return 1 for the second call of counter1', () => {
    const counter1 = makeCounter();
    counter1();
    expect(counter1()).toBe(1);
});

 it('should return 0 for the first call of counter2', () => {
     const counter2 = makeCounter();
     expect(counter2()).toBe(0);
 });