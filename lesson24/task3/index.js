const getDiff = (startDate, endDate) => {
    let timeDiff = Math.abs(endDate - startDate);

    let days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    let hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    let result = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    return result;
}

const result = getDiff(new Date(2022, 0, 1, 12, 0, 0), new Date());
console.log(result);