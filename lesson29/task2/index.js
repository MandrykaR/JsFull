export const pinger = (count, period) => {
    let i = count;
    console.log('Ping');
    const interv = setInterval(() => {
        i-- > 0 ? console.log('Ping') : clearInterval(interv);
    }, period)
};

