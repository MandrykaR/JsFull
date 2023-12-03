export const pinger = (count, period) => {
    let i = count;
    console.log('Ping');
    const interv = setInterval(() => {
        if (--i > 0) {
            console.log('Ping');
        } else {
            clearInterval(interv);
        }
    }, period);
};