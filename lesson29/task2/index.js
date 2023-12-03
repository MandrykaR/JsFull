export const pinger = (count, period) => {
    let i = count;
    const interv = setInterval(() => {
        if (i > 0) {
            console.log('Ping');
            i--;
        } else {
            clearInterval(interv);
        }
    }, period);
};