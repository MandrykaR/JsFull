const getValueWithDelay = (value, delay) => new Promise(resolve => {
    setTimeout(() => {
        console.log(value);
        resolve(value);
    }, delay)
});

const asyncNum1 = getValueWithDelay(56, 1000)
const asyncNum2 = getValueWithDelay(undefined, 2000)
const asyncNum3 = getValueWithDelay(3, 3000)
const asyncNum4 = getValueWithDelay(23, 5000)

const getSum = numbers =>
    numbers
        .filter(value => !isNaN(value))
        .reduce((acc, num) => acc + Number(num), 0)

const asyncSum = (...asyncNumbers) => {
    return Promise.all(asyncNumbers)
        .then(numbers => getSum(numbers))
        .catch(() => Promise.reject(new Error('Can\'t calculator')))
}

asyncSum(asyncNum1, Promise.reject(new Error('err')), asyncNum3, asyncNum4)
    .then(result => console.log(result));