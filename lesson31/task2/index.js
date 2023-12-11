export const asyncCalculator = (numbr) => new Promise((resolve) => {
    setTimeout(() => {
        console.log(`Initial value: ${numbr}`);
        resolve(numbr);
    }, 500);
})
    .then(value => Promise.all([
        new Promise((resolve) => {
            setTimeout(() => {
                const result = value * value;
                console.log(`Squared value: ${result}`);
                resolve(result);
            }, 500);
        }),
        new Promise((resolve) => {
            setTimeout(() => {
                const result = value * value * 2;
                console.log(`Double squared value: ${result}`);
                resolve(result);
            }, 0);
        })
    ]))
    
asyncCalculator(4)
    .then(value => console.log(value))

