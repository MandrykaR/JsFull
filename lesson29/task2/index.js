export const pinger = (count, period) => {
    let i = count;
    console.log('Ping');
    const interv = setInterval(() => {
        i-- > 0 ? console.log('Ping') : clearInterval(interv);
    }, period)
};

pinger(5, 100); // makes 5 writes with 100 ms interval
pinger(7, 150); // makes 7 writes with 1500 ms interval