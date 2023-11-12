export const dayOfWeek = (date, days) => {
    const week = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'St', 'Su'];
    const day = new Date(date).getDate();
    const dateInFuture = new Date(date).setDate(day + days);

    const result = week[new Date(dateInFuture).getDay()];
    console.log(result);
    return result;
}

dayOfWeek(new Date(2023, 10, 12), 3);
































